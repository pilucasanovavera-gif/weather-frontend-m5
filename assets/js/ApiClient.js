class ApiClient {
  constructor(url) {
    this.url = url;
  }

  // Método asíncrono
  async obtenerDatosClima() {
    try {
      const respuesta = await fetch(this.url);

      if (!respuesta.ok) {
        throw new Error(
          "No se pudo conectar con el servicio de datos de clima.",
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error("Error en ApiClient:", error);
      throw error;
    }
  }
}
