class WeatherApp {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.lugares = [];
  }

  // 1. Carga inicial de datos
  async cargarLugares() {
    try {
      this.mostrarCargando(true);
      const datos = await this.apiClient.obtenerDatosClima();
      this.lugares = datos.lugares;
      this.renderizarHome();
    } catch (error) {
      this.mostrarError("Error al cargar el listado de lugares.");
    } finally {
      this.mostrarCargando(false);
    }
  }

  // 2. Carga para la página de detalle
  async cargarDetalleLugar(id) {
    try {
      this.mostrarCargando(true);
      const datos = await this.apiClient.obtenerDatosClima();
      this.lugares = datos.lugares;

      const lugar = this.lugares.find((l) => l.id === id);

      if (!lugar) {
        this.mostrarError("La ciudad seleccionada no existe.");
        return;
      }

      this.renderizarDetalle(lugar);
    } catch (error) {
      this.mostrarError("Error al cargar el detalle de la ciudad.");
    } finally {
      this.mostrarCargando(false);
    }
  }

  // 3. Lógica matemática de estadísticas
  calcularEstadisticas(pronosticoSemanal) {
    let tMin = pronosticoSemanal[0].min;
    let tMax = pronosticoSemanal[0].max;
    let sumaPromedios = 0;
    let diasSoleados = 0;
    let diasLluviosos = 0;

    pronosticoSemanal.forEach((dia) => {
      if (dia.min < tMin) tMin = dia.min;
      if (dia.max > tMax) tMax = dia.max;

      sumaPromedios += (dia.min + dia.max) / 2;

      const estadoNormalizado = dia.estado.toLowerCase();
      if (
        estadoNormalizado.includes("soleado") ||
        estadoNormalizado.includes("despejado")
      ) {
        diasSoleados++;
      }
      if (
        estadoNormalizado.includes("lluvia") ||
        estadoNormalizado.includes("chubascos") ||
        estadoNormalizado.includes("lluvioso")
      ) {
        diasLluviosos++;
      }
    });

    const promedioSemanal = sumaPromedios / pronosticoSemanal.length;
    const alerta = this.generarAlerta(promedioSemanal, diasLluviosos);

    return {
      tMin,
      tMax,
      promedio: promedioSemanal.toFixed(1),
      diasSoleados,
      diasLluviosos,
      alerta,
    };
  }

  // 4. Alertas climáticas
  generarAlerta(promedio, diasLluviosos) {
    if (promedio > 22) {
      return {
        texto:
          "Alerta de calor: Altas temperaturas promedio registradas en la semana.",
        icono: "☀️",
        claseFondo:
          "bg-warning bg-opacity-25 text-warning-emphasis border border-warning",
      };
    }
    if (diasLluviosos >= 3) {
      return {
        texto:
          "Semana lluviosa: Se registran múltiples días con precipitaciones activas. ¡Lleva paraguas!",
        icono: "🌧️",
        claseFondo:
          "bg-info bg-opacity-25 text-info-emphasis border border-info",
      };
    }
    if (promedio < 10) {
      return {
        texto:
          "Alerta de frío: Temperaturas invernales bajas. Asegúrate de abrigarte bien.",
        icono: "❄️",
        claseFondo:
          "bg-primary bg-opacity-25 text-primary-emphasis border border-primary",
      };
    }
    return {
      texto:
        "Clima estable: Condiciones ideales dentro de los rangos normales.",
      icono: "✅",
      claseFondo:
        "bg-success bg-opacity-25 text-success-emphasis border border-success",
    };
  }

  // 5. Renderizar el Home
  renderizarHome() {
    const contenedor = document.getElementById("home-container");
    if (!contenedor) return;

    let htmlContenido = "";

    const obtenerIcono = (estado) => {
      const est = estado.toLowerCase();
      if (est.includes("soleado")) return "☀️";
      if (est.includes("despejado")) return "☁️";
      if (
        est.includes("nubosidad") ||
        est.includes("nublado") ||
        est.includes("parcial")
      )
        return "☁️";
      if (
        est.includes("lluvia") ||
        est.includes("lluvioso") ||
        est.includes("chubascos")
      )
        return "🌧️";
      if (est.includes("ventoso") || est.includes("viento")) return "🌬️";
      return "🌤️";
    };

    this.lugares.forEach((lugar) => {
      const icono = obtenerIcono(lugar.climaActual.estado);

      htmlContenido += `
        <article class="col-12 col-md-6 col-lg-4">
          <div class="weather-card shadow text-center">
            <div class="weather-card__body">
              <h5 class="weather-card__city">${icono} ${lugar.nombre}</h5>
              <p class="weather-card__temp">${lugar.climaActual.temperatura}°C - ${lugar.climaActual.estado}</p>
              <a href="detalle.html?id=${lugar.id}" class="btn btn-primary weather-card__btn ver-detalle">
                Ver más
              </a>
            </div>
          </div>
        </article>
      `;
    });
    contenedor.innerHTML = htmlContenido;
  }

  // 6. Renderizar Detalle
  renderizarDetalle(lugar) {
    const txtReferencia = document.getElementById("referencia");
    const txtCiudad = document.getElementById("ciudad");
    const txtTemp = document.getElementById("temp");
    const txtEstado = document.getElementById("estado");
    const txtHumedad = document.getElementById("humedad");
    const txtViento = document.getElementById("viento");
    const listaPronostico = document.getElementById("lista");

    const txtStatMin = document.getElementById("stat-min");
    const txtStatMax = document.getElementById("stat-max");
    const txtStatPromedio = document.getElementById("stat-promedio");

    const contenedorAlerta = document.getElementById("stat-alerta-container");
    const iconoAlerta = document.getElementById("stat-alerta-icono");
    const textoAlerta = document.getElementById("stat-alerta-texto");

    if (txtReferencia) txtReferencia.textContent = lugar.nombre;
    if (txtCiudad) txtCiudad.textContent = lugar.nombre;
    if (txtTemp) txtTemp.textContent = `${lugar.climaActual.temperatura}°C`;
    if (txtEstado) txtEstado.textContent = lugar.climaActual.estado;
    if (txtHumedad)
      txtHumedad.textContent = `Humedad: ${lugar.climaActual.humedad}%`;
    if (txtViento)
      txtViento.textContent = `Viento: ${lugar.climaActual.viento} km/h`;

    const stats = this.calcularEstadisticas(lugar.pronosticoSemanal);

    if (txtStatMin) txtStatMin.textContent = `${stats.tMin}°C`;
    if (txtStatMax) txtStatMax.textContent = `${stats.tMax}°C`;
    if (txtStatPromedio) txtStatPromedio.textContent = `${stats.promedio}°C`;

    if (contenedorAlerta && iconoAlerta && textoAlerta) {
      contenedorAlerta.className =
        "d-flex align-items-center gap-3 p-3 rounded-3 mt-2 " +
        stats.alerta.claseFondo;
      iconoAlerta.textContent = stats.alerta.icono;
      textoAlerta.textContent = stats.alerta.texto;
    }

    if (listaPronostico) {
      let diasHtml = "";
      lugar.pronosticoSemanal.forEach((dia) => {
        diasHtml += `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${dia.dia} (${dia.estado})</span>
            <span class="badge bg-primary rounded-pill">${dia.min}°C / ${dia.max}°C</span>
          </li>
        `;
      });
      listaPronostico.innerHTML = diasHtml;
    }
  }

  mostrarCargando(estado) {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = estado ? "block" : "none";
  }

  mostrarError(mensaje) {
    const errorBox = document.getElementById("error-message");
    if (errorBox) {
      errorBox.textContent = mensaje;
      errorBox.style.display = "block";
    }
  }
}
