const datosClima = {
  "Puerto Montt": {
    temp: "15°C",
    estado: "⛅ Nublado",
    humedad: "70%",
    viento: "20 km/h",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ver-detalle");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      window.location.href = "detalle.html";
    });
  });

  const data = datosClima["Puerto Montt"];

  const ciudadEl = document.getElementById("ciudad");

  if (ciudadEl && data) {
    ciudadEl.textContent = "Puerto Montt";
    document.getElementById("temp").textContent = data.temp;
    document.getElementById("estado").textContent = data.estado;
    document.getElementById("humedad").textContent =
      "💧 Humedad: " + data.humedad;
    document.getElementById("viento").textContent = "🌬️ Viento: " + data.viento;

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const lista = document.getElementById("lista");

    if (lista) {
      lista.innerHTML = "";
      dias.forEach((dia) => {
        const li = document.createElement("li");
        li.className =
          "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
          <span>${dia}</span>
          <span class="badge bg-primary rounded-pill">
            ${Math.floor(Math.random() * 10 + 10)}°C
          </span>
        `;

        lista.appendChild(li);
      });
    }
  }
});
