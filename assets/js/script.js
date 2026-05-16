const lugares = [
  // --- ZONA NORTE ---
  {
    id: "Arica",
    nombre: "Arica",
    tempActual: 20,
    estadoActual: "☀️ Soleado",
    humedad: 70,
    viento: 10,
    pronosticoSemanal: [
      { dia: "Lunes", min: 16, max: 21, estado: "Soleado" },
      { dia: "Martes", min: 17, max: 22, estado: "Soleado" },
      { dia: "Miércoles", min: 16, max: 20, estado: "Nublado" },
      { dia: "Jueves", min: 17, max: 21, estado: "Soleado" },
      { dia: "Viernes", min: 18, max: 22, estado: "Soleado" },
    ],
  },
  {
    id: "Iquique",
    nombre: "Iquique",
    tempActual: 19,
    estadoActual: "☁️ Despejado",
    humedad: 72,
    viento: 12,
    pronosticoSemanal: [
      { dia: "Lunes", min: 15, max: 20, estado: "Soleado" },
      { dia: "Martes", min: 16, max: 21, estado: "Soleado" },
      { dia: "Miércoles", min: 15, max: 20, estado: "Soleado" },
      { dia: "Jueves", min: 16, max: 21, estado: "Nublado" },
      { dia: "Viernes", min: 15, max: 20, estado: "Soleado" },
    ],
  },
  {
    id: "Antofagasta",
    nombre: "Antofagasta",
    tempActual: 24,
    estadoActual: "☀️ Soleado",
    humedad: 55,
    viento: 18,
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 24, estado: "Soleado" },
      { dia: "Martes", min: 19, max: 25, estado: "Soleado" },
      { dia: "Miércoles", min: 18, max: 24, estado: "Soleado" },
      { dia: "Jueves", min: 20, max: 26, estado: "Soleado" },
      { dia: "Viernes", min: 19, max: 25, estado: "Soleado" },
    ],
  },
  {
    id: "La Serena",
    nombre: "La Serena",
    tempActual: 18,
    estadoActual: "☁️ Nubosidad parcial",
    humedad: 75,
    viento: 15,
    pronosticoSemanal: [
      { dia: "Lunes", min: 12, max: 19, estado: "Soleado" },
      { dia: "Martes", min: 13, max: 20, estado: "Soleado" },
      { dia: "Miércoles", min: 12, max: 18, estado: "Nublado" },
      { dia: "Jueves", min: 13, max: 19, estado: "Soleado" },
      { dia: "Viernes", min: 14, max: 20, estado: "Soleado" },
    ],
  },
  // --- ZONA CENTRO ---
  {
    id: "Santiago",
    nombre: "Santiago",
    tempActual: 25,
    estadoActual: "☀️ Soleado",
    humedad: 30,
    viento: 10,
    pronosticoSemanal: [
      { dia: "Lunes", min: 15, max: 28, estado: "Soleado" },
      { dia: "Martes", min: 16, max: 30, estado: "Soleado" },
      { dia: "Miércoles", min: 14, max: 26, estado: "Soleado" },
      { dia: "Jueves", min: 15, max: 29, estado: "Nublado" },
      { dia: "Viernes", min: 17, max: 31, estado: "Soleado" },
    ],
  },
  // --- ZONA SUR ---
  {
    id: "Concepción",
    nombre: "Concepción",
    tempActual: 14,
    estadoActual: "🌧️ Lluvia débil",
    humedad: 82,
    viento: 20,
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 15, estado: "Lluvioso" },
      { dia: "Martes", min: 9, max: 14, estado: "Lluvioso" },
      { dia: "Miércoles", min: 11, max: 16, estado: "Nublado" },
      { dia: "Jueves", min: 10, max: 15, estado: "Lluvioso" },
      { dia: "Viernes", min: 8, max: 14, estado: "Lluvioso" },
    ],
  },
  {
    id: "Temuco",
    nombre: "Temuco",
    tempActual: 13,
    estadoActual: "🌧️ Lluvioso",
    humedad: 80,
    viento: 18,
    pronosticoSemanal: [
      { dia: "Lunes", min: 9, max: 14, estado: "Lluvioso" },
      { dia: "Martes", min: 8, max: 13, estado: "Nublado" },
      { dia: "Miércoles", min: 10, max: 15, estado: "Lluvioso" },
      { dia: "Jueves", min: 9, max: 14, estado: "Lluvioso" },
      { dia: "Viernes", min: 7, max: 12, estado: "Lluvioso" },
    ],
  },
  {
    id: "Valdivia",
    nombre: "Valdivia",
    tempActual: 12,
    estadoActual: "🌧️ Lluvioso",
    humedad: 85,
    viento: 15,
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 14, estado: "Lluvioso" },
      { dia: "Martes", min: 9, max: 13, estado: "Lluvioso" },
      { dia: "Miércoles", min: 11, max: 15, estado: "Nublado" },
      { dia: "Jueves", min: 10, max: 14, estado: "Lluvioso" },
      { dia: "Viernes", min: 8, max: 12, estado: "Lluvioso" },
    ],
  },
  {
    id: "Puerto Montt",
    nombre: "Puerto Montt",
    tempActual: 11,
    estadoActual: "🌧️ Lluvia",
    humedad: 90,
    viento: 25,
    pronosticoSemanal: [
      { dia: "Lunes", min: 7, max: 12, estado: "Lluvioso" },
      { dia: "Martes", min: 6, max: 11, estado: "Lluvioso" },
      { dia: "Miércoles", min: 8, max: 13, estado: "Lluvioso" },
      { dia: "Jueves", min: 7, max: 12, estado: "Lluvioso" },
      { dia: "Viernes", min: 5, max: 11, estado: "Nublado" },
    ],
  },
  {
    id: "Punta Arenas",
    nombre: "Punta Arenas",
    tempActual: 8,
    estadoActual: "🌬️ Ventoso",
    humedad: 60,
    viento: 45,
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 9, estado: "Nublado" },
      { dia: "Martes", min: 3, max: 8, estado: "Lluvioso" },
      { dia: "Miércoles", min: 5, max: 10, estado: "Ventoso" },
      { dia: "Jueves", min: 2, max: 7, estado: "Lluvioso" },
      { dia: "Viernes", min: 4, max: 9, estado: "Nublado" },
    ],
  },
];

const calcularEstadisticas = (pronostico) => {
  let sumaTotal = 0;
  let minSemanal = pronostico[0].min;
  let maxSemanal = pronostico[0].max;
  let diasSoleados = 0;

  pronostico.forEach((dia) => {
    sumaTotal += (dia.min + dia.max) / 2;
    if (dia.min < minSemanal) minSemanal = dia.min;
    if (dia.max > maxSemanal) maxSemanal = dia.max;
    if (dia.estado === "Soleado") diasSoleados++;
  });

  const promedio = (sumaTotal / pronostico.length).toFixed(1);

  let resumen =
    diasSoleados >= 3
      ? "Semana mayormente soleada."
      : "Semana con nubosidad o lluvias.";

  return { minSemanal, maxSemanal, promedio, resumen };
};

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ver-detalle");
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const ciudadSeleccionada = e.target.getAttribute("data-ciudad");
      localStorage.setItem("ciudadDestino", ciudadSeleccionada);
      window.location.href = "detalle.html";
    });
  });

  const ciudadAmostrar = localStorage.getItem("ciudadDestino");
  const ciudadEl = document.getElementById("ciudad");

  if (ciudadEl && ciudadAmostrar) {
    const data = lugares.find((l) => l.id === ciudadAmostrar);

    if (data) {
      ciudadEl.textContent = data.nombre;
      const referenciaEl = document.getElementById("referencia");
      if (referenciaEl) {
        referenciaEl.textContent = data.nombre;
      }
      document.getElementById("temp").textContent = `${data.tempActual}°C`;
      document.getElementById("estado").textContent = data.estadoActual;
      document.getElementById("humedad").textContent =
        `💧 Humedad: ${data.humedad}%`;
      document.getElementById("viento").textContent =
        `🌬️ Viento: ${data.viento} km/h`;

      const stats = calcularEstadisticas(data.pronosticoSemanal);

      const lista = document.getElementById("lista");
      lista.innerHTML = "";

      data.pronosticoSemanal.forEach((item) => {
        const li = document.createElement("li");
        li.className =
          "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `<span>${item.dia} (${item.estado})</span> <span class="badge bg-primary rounded-pill">${item.min}° / ${item.max}°</span>`;
        lista.appendChild(li);
      });

      const divStats = document.createElement("div");
      divStats.className = "mt-4 p-3 bg-light rounded-4 shadow-sm border";
      divStats.innerHTML = `
                <h5 class="text-dark">Estadísticas Semanales</h5>
                <p class="mb-1"><strong>Mínima:</strong> ${stats.minSemanal}°C | <strong>Máxima:</strong> ${stats.maxSemanal}°C</p>
                <p class="mb-1"><strong>Promedio:</strong> ${stats.promedio}°C</p>
                <hr>
                <p class="text-primary mb-0"><strong>Análisis:</strong> ${stats.resumen}</p>
            `;
      lista.appendChild(divStats);
    }
  }
});
