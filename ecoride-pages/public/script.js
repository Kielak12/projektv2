document.getElementById("review-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  await fetch("/api/reviews", { method: "POST", body: JSON.stringify(data) });
  alert("Opinia dodana!");
  e.target.reset();
});

document.getElementById("booking-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  await fetch("/api/bookings", { method: "POST", body: JSON.stringify(data) });
  alert("Rezerwacja wysłana!");
  e.target.reset();
});

document.getElementById("login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = e.target.username.value;
  const pass = e.target.password.value;
  if (user === "123" && pass === "123") {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    alert("Błędne dane logowania!");
  }
});
