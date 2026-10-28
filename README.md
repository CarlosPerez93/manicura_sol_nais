# Soles Nails — Portafolio & Landing Page SPA ✨

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![SASS](https://img.shields.io/badge/SASS-Dart_Sass-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

SPA (Single Page Application) moderna, accesible y de alto rendimiento diseñada y desarrollada para **Soles Nails** (@soles.nailshigueralareal), estudio profesional de manicura, esmaltado semipermanente y nail art exclusivo ubicado en **Higuera la Real (Badajoz, España)**.

---

## 🌟 Características Principales

- 💅 **Diseño Editorial & Identidad Visual Única**: Estética cálida y sofisticada inspirada en la belleza y el cuidado de manos (paleta Nude Rosé, Terracota, Dorado Champagne y detalles en cristal satinado).
- ✨ **Micro-interacciones y Animaciones Temáticas**: Efectos de refracción de luz sobre esmalte (*lacquer gloss sheen*), trazo orgánico de pincelada (*brush stroke*), brillos y transiciones fluidas.
- 🎨 **Simulador Interactivo de Estilo & Manicura**: Selector dinámico donde la clienta puede previsualizar formas de uña (Almendra, Cuadrada, Ovalada, Coffin), longitudes y acabados (Ultra Gloss, Velvet Mate, Glazed Donut, Glitter), calculando el tiempo estimado y pre-redactando el mensaje de cita para WhatsApp.
- 🖼️ **Galería de Trabajos con Vista Modal**: Catálogo filtrable por categorías (Nail Art, Semipermanente, Minimalista, Especial Eventos) con detalle de paleta de colores y especificaciones técnicas.
- 💬 **Integración Fluida con WhatsApp**: Enlace directo al número oficial (`690 618 009` / `+34 690 618 009`) con mensajes pre-estructurados según el servicio o diseño elegido.
- 📋 **Formulario Accesible con Validación**: Validación en tiempo real con feedback visual, accesible vía teclado y lectores de pantalla (ARIA).
- 📍 **Sección de Ubicación & Horarios**: Información clara de atención en Higuera la Real con mapa vectorial estilizado y botón directo a Google Maps.
- ⭐ **Historias de Clientas**: Testimonios y valoraciones reales inspirados en los destacados oficiales de Instagram.

---

## 🏛️ Arquitectura de Software & Principios SOLID

El proyecto sigue una estructura limpia y desacoplada organizada por tipos de ficheros y responsabilidades:

```
src/
├── assets/
│   └── styles/
│       ├── _variables.scss      # Tokens de diseño (colores, sombras, tipografías, breakpoints)
│       ├── _mixins.scss         # Helpers responsivos, flexbox, glassmorphism, lacquer-shine
│       ├── _animations.scss     # Keyframes específicos (sparkles, float, glow, brush-draw)
│       ├── _typography.scss     # Reglas tipográficas jerárquicas
│       └── main.scss            # Punto de entrada y reset global
├── components/
│   ├── common/                  # Componentes atómicos reutilizables (Button, Modal, Badge, SectionHeading, Toast)
│   ├── layout/                  # Estructura visual global (Navbar, Footer, FloatingActions)
│   └── sections/                # Módulos de sección independientes (Hero, About, Services, InteractiveQuote, Portfolio, ClientStories, Location, Contact)
├── constants/                   # Datos desacoplados (siteInfo, servicesData, portfolioData, reviewsData, faqData)
├── context/                     # Manejo de estado transversal (ToastContext)
├── hooks/                       # Custom hooks reutilizables (useScrollSpy, useContactForm, useModal, useInteractiveQuote)
├── services/                    # Capa de servicios (whatsappService, contactService)
└── utils/                       # Funciones puras de validación y formateo (validators, formatters)
```

### Aplicación de Principios SOLID

1. **Single Responsibility Principle (SRP)**: Cada componente, custom hook y servicio se encarga de una única tarea (ej. `whatsappService` gestiona exclusivamente la serialización de URLs de mensajería; `useContactForm` encapsula validación y estado del formulario).
2. **Open/Closed Principle (OCP)**: Los componentes de UI (como `Button` y `Badge`) son configurables mediante variantes tipadas y extensibles sin modificar su código interno.
3. **Liskov Substitution Principle (LSP)**: `Button` maneja de forma transparente tanto elementos `<button>` nativos como enlaces semánticos `<a>` con accesibilidad garantizada.
4. **Interface Segregation Principle (ISP)**: Los componentes reciben props específicas y predecibles con valores por defecto bien definidos.
5. **Dependency Inversion Principle (DIP)**: Los módulos de interfaz dependen de abstracciones de servicios y hooks en lugar de acoplar lógica dura en las vistas.

---

## ♿ Accesibilidad (a11y) & Responsividad

- **HTML Semántico**: Uso correcto de `<header>`, `<main>`, `<section>`, `<nav>`, `<aside>`, `<footer>`.
- **Navegación por Teclado**: Foco visible (`:focus-visible`), cierre de modales con tecla `Escape` y trampa de foco.
- **Roles y Atributos ARIA**: `aria-expanded`, `aria-label`, `aria-modal`, `aria-live` para notificaciones toast y modales.
- **Diseño Mobile-First**: Adaptación total a pantallas móviles, tablets y monitores de alta resolución.

---

## 🛠️ Instalación y Desarrollo Local

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/CarlosPerez93/manicura_sol_nais.git
   cd manicura_sol_nais
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Compilar para producción:
   ```bash
   npm run build
   ```

5. Previsualizar la compilación:
   ```bash
   npm run preview
   ```

---

## 🚀 Despliegue en Netlify

El proyecto está preparado para su despliegue continuo en Netlify.

### Configuración de Build en Netlify
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `>= 18.0.0`

---

## 📱 Información Oficial de la Marca

- **Marca**: Soles Nails
- **Eslogan**: *Uñas que hablan por ti ✨*
- **Ubicación**: Higuera la Real (Badajoz, Extremadura, España 🇪🇦)
- **Teléfono / WhatsApp**: [690 618 009](https://wa.me/34690618009)
- **Instagram**: [@soles.nailshigueralareal](https://www.instagram.com/soles.nailshigueralareal)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
