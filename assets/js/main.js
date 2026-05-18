const clienteApi = new ApiClient("./data/clima.json");

const appClima = new WeatherApp(clienteApi);

document.addEventListener("DOMContentLoaded", () => {
  const contenedorHome = document.getElementById("home-container");
  const contenedorDetalle = document.getElementById("stat-min");

  if (contenedorHome) {
    appClima.cargarLugares();
  } else if (contenedorDetalle) {
    const parametrosUrl = new URLSearchParams(window.location.search);
    const lugarId = parseInt(parametrosUrl.get("id"));

    if (lugarId) {
      appClima.cargarDetalleLugar(lugarId);
    } else {
      appClima.mostrarError(
        "No se especificó ninguna ciudad válida para mostrar el detalle.",
      );
    }
  }
});
