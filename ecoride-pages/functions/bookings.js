export async function onRequest(context) {
  if (context.request.method === "POST") {
    const data = await context.request.json();
    await context.env.DB.prepare("INSERT INTO bookings (name, email, phone, vehicle, date, message) VALUES (?1, ?2, ?3, ?4, ?5, ?6)")
      .bind(data.name, data.email, data.phone, data.vehicle, data.date, data.message).run();
    return new Response("OK");
  }
  if (context.request.method === "GET") {
    const { results } = await context.env.DB.prepare("SELECT * FROM bookings ORDER BY id DESC").all();
    return Response.json(results);
  }
}