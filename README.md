# Clima360 - Panel de Monitoreo Meteorológico

¡Bienvenido a **Clima360**! Esta aplicación es una plataforma interactiva diseñada para el monitoreo del clima actual, el pronóstico semanal y el análisis estadístico de diversas ciudades de Chile. El proyecto ha sido reestructurado por completo para cumplir con los estándares modernos de desarrollo de software.

---

## 🛠️ Tecnologías y Conceptos Aplicados

- **JavaScript Moderno (ES6+):** Uso estricto de declaraciones de variables con `let` y `const`, funciones de flecha (`=>`), desestructuración y plantillas literales (_template literals_) para la manipulación limpia del DOM.
- **Programación Orientada a Objetos (POO):** Modularización del código a través de clases con responsabilidades únicas y bien definidas.
- **Programación Asíncrona:** Implementación del método `fetch` integrado con estructuras `async/await` y bloques `try...catch...finally` para asegurar una gestión robusta de peticiones HTTP y control de excepciones.
- **Diseño e Interfaz:** Maquetación responsiva utilizando componentes de **Bootstrap** y preprocesamiento de estilos estructurado mediante la arquitectura 7-1 de **Sass** (`@use`).

---

## 📂 Arquitectura de Clases

La lógica de negocio se dividió de manera modular en las siguientes entidades:

1. **`ApiClient`**: Clase especializada y encargada de la comunicación externa. Ejecuta la petición asíncrona hacia el origen de datos utilizando promesas nativas y maneja los códigos de estado de la respuesta.
2. **`WeatherApp`**: Clase maestra y cerebro de la aplicación. Se encarga de capturar el estado global de los lugares, procesar la información del pronóstico, ejecutar las fórmulas estadísticas, evaluar las reglas de negocio para alertas de clima y renderizar dinámicamente las vistas del DOM.
3. **`main.js`**: Orquestador principal que evalúa de forma dinámica el contexto de navegación en el que se encuentra el usuario (`index.html` o `detalle.html`) para inicializar las instancias de las clases correspondientes.

---

## 📊 Lógica de Negocio y Estadísticas

Los datos meteorológicos ya no se encuentran fijos en el frontend; se consumen de manera asíncrona desde un archivo de datos estruturado en formato **JSON** (`/data/clima.json`), simulando un comportamiento de API REST real.

Al acceder a la vista detallada de un lugar, el sistema procesa el arreglo del pronóstico utilizando iteradores avanzados para calcular en tiempo real:

- **Temperatura Mínima Absoluta:** Identificación de la menor temperatura registrada en el período.
- **Temperatura Máxima Absoluta:** Identificación del máximo de calor de la semana.
- **Promedio Semanal:** Cálculo matemático de la media aritmética ponderada de las temperaturas ($\text{Promedio} = \frac{\sum (\text{Min} + \text{Max}) / 2}{N}$).
- **Conteo de Condiciones:** Contadores específicos de días soleados o con precipitaciones.

### Reglas de Alertas Automatizadas

- **Alerta de Calor:** Se gatilla si el promedio de la semana supera los $22^\circ\text{C}$.
- **Semana Lluviosa:** Se activa automáticamente si el pronóstico cuenta con $3$ o más días con condiciones de lluvia o chubascos.

---

## Enlace al Repositorio

Aquí puedes ver el portafolio módulo 4
👉git clone [https://github.com/tu-usuario/weather-frontend-m5.git](https://github.com/tu-usuario/weather-frontend-m5.git)

## 👩‍💻 Autor

Desarrollado por Pilar Casanova Vera
