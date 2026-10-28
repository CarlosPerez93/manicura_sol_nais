# Soles Nails — Portafolio & Landing Page SPA ✨

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7_strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SASS](https://img.shields.io/badge/SASS-Dart_Sass-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

SPA (Single Page Application) moderna, accesible y de alto rendimiento, escrita en **React + TypeScript (modo estricto)** y **SASS**, diseñada y desarrollada para **Soles Nails** (@soles.nailshigueralareal), estudio profesional de manicura, esmaltado semipermanente y nail art exclusivo ubicado en **Higuera la Real (Badajoz, España)**.

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
├── constants/                   # Datos desacoplados (siteInfo, servicesData, portfolioData, reviewsData)
├── context/                     # Estado transversal (ToastContext)
├── hooks/                       # Custom hooks reutilizables (useScrollSpy, useContactForm, useModal, useInteractiveQuote)
├── services/                    # Contratos + implementación (MessagingService, ContactRepository)
├── types/                       # Contratos del dominio (domain.ts) y de la UI (ui.ts)
├── utils/                       # Funciones puras de validación y formateo (validators, formatters)
├── main.tsx                     # Punto de entrada
└── vite-env.d.ts                # Tipos de Vite
```

### Tipado

- **`strict: true`** con `noUnusedLocals`, `noUnusedParameters` y `noImplicitOverride`: el proyecto compila sin `any` implícitos ni supresiones.
- **`src/types/domain.ts`**: modelos del negocio (`Service`, `PortfolioWork`, `ClientReview`, `ContactFormData`, `QuoteSelection`…). La UI no define la forma de los datos.
- **`src/types/ui.ts`**: contratos de componentes y hooks (`ButtonProps`, `ModalProps`, `UseModalResult<T>`, `UseContactFormResult`…).
- **Uniones discriminadas** para los resultados del formulario (`ContactSubmitOutcome`), de modo que el consumidor debe comprobar `success` antes de leer `message` o `error`.
- **Genéricos** en `useModal<T>`: cada modal declara el tipo de dato que transporta (`useModal<PortfolioWork>`).
- `npm run typecheck` ejecuta `tsc --noEmit`; `npm run build` lo ejecuta antes de compilar con Vite.

### Aplicación de Principios SOLID

1. **Single Responsibility Principle (SRP)**: Cada componente, custom hook y servicio se encarga de una única tarea (ej. `whatsappService` gestiona exclusivamente la serialización de URLs de mensajería; `useContactForm` encapsula validación y estado del formulario).
2. **Open/Closed Principle (OCP)**: Los componentes de UI (como `Button` y `Badge`) son configurables mediante variantes tipadas y extensibles sin modificar su código interno.
3. **Liskov Substitution Principle (LSP)**: `Button` maneja de forma transparente tanto elementos `<button>` nativos como enlaces semánticos `<a>` con accesibilidad garantizada.
4. **Interface Segregation Principle (ISP)**: Los componentes reciben props específicas y predecibles con valores por defecto bien definidos.
5. **Dependency Inversion Principle (DIP)**: los consumidores dependen de interfaces, no de implementaciones. `useContactForm` recibe `ContactRepository` y `MessagingService` por inyección (con implementación por defecto), de modo que la UI puede testearse con dobles sin tocar los servicios reales.

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en `http://localhost:3000` |
| `npm run typecheck` | Comprobación de tipos (`tsc --noEmit`) |
| `npm run build` | Typecheck + build de producción en `dist/` |
| `npm run preview` | Previsualiza el build |

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

Sitio en producción: **https://soles-nails-higuera.netlify.app**

### Despliegue continuo con GitHub Actions

Cada push a `main` ejecuta [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci` — instalación reproducible.
2. `npm run typecheck` — bloquea el despliegue si hay errores de tipos.
3. `npm run build`.
4. `netlify deploy --prod --dir=dist`.

**Secretos requeridos** (Settings → Secrets and variables → Actions):

| Secreto | Valor |
| --- | --- |
| `NETLIFY_AUTH_TOKEN` | Token personal de Netlify con acceso al equipo |
| `NETLIFY_SITE_ID` | `e4c59c06-6aba-4cd8-a8e7-68c8549742be` |

No se versiona ningún secreto: el workflow los inyecta en tiempo de ejecución.

### Configuración de Build

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node**: 22 (fijado en el workflow)

> El proyecto de Netlify también tiene el repositorio vinculado en *Build & deploy → Repository*.
> Para usar el CI nativo en lugar de GitHub Actions, instala la GitHub App de Netlify sobre el
> repositorio y desactiva el workflow: así se evitan despliegues duplicados.

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
