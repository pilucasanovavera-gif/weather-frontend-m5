# Portafolio App de Clima Dinámica - M4 🌤️

Este proyecto es una aplicación de clima interactiva desarrollada para el **Módulo 4**

## Nuevas Funcionalidades del Módulo 
En esta iteración, la aplicación dejó de tener datos "quemados" en el HTML para pasar a un modelo de datos robusto:
- **Modelo de Datos Dinámico:** Uso de un arreglo de objetos (`lugares`) que contiene información detallada de 10 ciudades de Chile.
- **Cálculo de Estadísticas:** Implementación de funciones que recorren los pronósticos para calcular:
    - Temperaturas mínimas, máximas y promedios semanales.
    - Conteo de días según el estado del clima.
- **Resumen Textual Inteligente:** Uso de estructuras condicionales para generar un resumen automático de la semana (ej: "Semana mayormente soleada").
- **Persistencia de Selección:** Comunicación entre la vista principal y la vista de detalle mediante `localStorage`.

## 🛠️ Tecnologías Usadas

- **JavaScript (ES6+):** Manipulación avanzada del DOM, uso de ciclos (`forEach`), constantes, variables y funciones de flecha.
- **SASS (SCSS):** Arquitectura 7-1 para una organización de estilos escalable y mantenible.
- **Bootstrap 5:** Sistema de rejilla para un diseño 100% responsivo.
- **HTML5:** Estructura semántica para accesibilidad.

## 📐 Arquitectura de Estilos y Metodología BEM

Se mantiene el uso de la metodología **BEM (Block, Element, Modifier)** para garantizar la legibilidad del código CSS:
- `.weather-card` (Bloque)
- `.weather-card__city` (Elemento)
- `.weather-card__btn--active` (Modificador)
La estructura SASS sigue el patrón modular para separar responsabilidades (Abstracts, Base, Components, Layout, Vendors).

## Enlace al Repositorio

Aquí puedes ver el portafolio módulo 4
👉[https://github.com/pilucasanovavera-gif/weather-frontend-m4](https://github.com/pilucasanovavera-gif/weather-frontend-m4)

## 👩‍💻 Autor

Desarrollado por Pilar Casanova Vera
