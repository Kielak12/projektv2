export async function onRequest(context) {
  if (context.request.method === "POST") {
    const data = await context.request.json();
    await context.env.DB.prepare("INSERT INTO reviews (author, content) VALUES (?1, ?2)").bind(data.author, data.content).run();
    return new Response("OK");
  }
  if (context.request.method === "GET") {
    const { results } = await context.env.DB.prepare("SELECT * FROM reviews ORDER BY id DESC").all();
    return Response.json(results);
  }
}