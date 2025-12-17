# Template2025 - Plantilla RWD Frontend

Una plantilla moderna y eficiente para el desarrollo frontend responsive, diseñada para iniciar proyectos web de forma rápida y estructurada.

## 🌟 Características

- **Responsive Web Design (RWD)** con tres breakpoints principales:
  - 📱 Smartphone
  - 📟 Tablet
  - 🖥️ Desktop

- **Sistema de Menú Adaptativo**:
  - Menú hamburguesa para dispositivos móviles
  - Transición automática para diferentes dispositivos
  - Implementación mediante JavaScript para el control de eventos
  - Diseño accesible y semántico

## 🏗️ Estructura del Proyecto

```tree
├── index.html
├── 404/
│   ├── 404.html
│   └── css/
│       ├── normalize.css
│       ├── reset.css
│       └── style.css
├── assets/
├── css/
│   ├── normalize.css
│   ├── reset.css
│   └── style.css
├── img/
│   └── svg/
│       └── menu.svg
└── js/
    └── main.js
```

## 🔧 Tecnologías y Metodologías

- **HTML5 Semántico**: Prioriza el uso de elementos semánticos sobre `<div>` para mejor SEO
- **CSS**:
  - Metodología BEM para nomenclatura de clases
  - Variables CSS personalizadas para theming
  - Sistema de anidamiento moderno
  - Normalización y reset incluidos
- **JavaScript**: Vanilla JS para la funcionalidad del menú

## 💻 Compatibilidad

Compatible con todos los navegadores modernos que sigan los estándares W3C.

## 🚀 Inicio Rápido

1. Clona este repositorio:

   ```bash
   git clone https://github.com/ClaseToniArandiga/Template2025.git
   ```

2. ¡Listo para usar! No requiere instalación de dependencias.

## 📐 Guía de Estilo

### Metodología BEM

```css
.bloque {}
.bloque__elemento {}
.bloque--modificador {}
```

### HTML Semántico

Prioriza el uso de elementos semánticos como:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`

Solo usa `<div>` para elementos puramente decorativos o geométricos.

## 📱 Breakpoints

```css
/* Smartphone (por defecto) */
/* Estilos base aquí */

/* Tablet */
@media screen and (min-width: [tablet-breakpoint]) {
  /* Estilos para tablet */
}

/* Desktop */
@media screen and (min-width: [desktop-breakpoint]) {
  /* Estilos para desktop */
}
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un PR.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---
Desarrollado con ❤️ por [ClaseToniArandiga]
