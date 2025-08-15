# Mi porfolio v2.0

> "Mi portfolio, una demostración de mis habilidades en el desarrollo de aplicaciones web full-stack, con un enfoque en la accesibilidad, el rendimiento y una arquitectura limpia."
> 
## 1. Resumen de la arquitectura y stack

* **Vite + React** (SPA rápida).
* **Tailwind CSS** (estilos utilitarios, `darkMode: 'class'`).
* **React Router v6** (rutas: Home, About, Projects, Blog, Contact).
* **i18n**: `react-i18next` + `i18next-browser-languagedetector` (multilengua).
* **Dark mode**: controlado por clase `dark` en `html`/`body`, persistido en `localStorage`.
* **Animaciones**: `framer-motion` (transiciones sutiles).
* **Formularios**: `react-hook-form` + `zod` (validación).
* **Contacto**: Formspree / Getform (o tu API).
* **Blog**: posts en Markdown (usar `import.meta.glob` / plugin MDX si quieres MDX).
* **Testing**: Vitest (unit), Playwright (e2e) opcional.
* **CI/CD**: GitHub Actions → deploy en Vercel/Netlify.

## 2. Estructura de carpetas

```textplain
api
├── contact.js
src/
├── assets/
│   ├── icons/
│   └── projects/
├── components/
│   ├── forms/
│   │   └── ContactForm.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   └── Footer.jsx
│   ├── projects/
│   │   └── ProjectCard.jsx
│   └── ui/
│       ├── Modal.css
│       ├── Modal.jsx
│       ├── ThemeToggle.jsx
│       └── TypingText.jsx
├── contexts/
│   ├── LanguageContext.jsx
│   └── ThemeContext.jsx
├── data/
│   ├── posts.js
│   └── projects.js
├── hooks/
├── i18n/
│   ├── index.js
│   └── locales/
│       ├── en.json
│       └── es.json
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Contact.jsx
│   └── styles/
│       ├── Home.css
│       ├── About.css
│       ├── Projects.css
│       ├── Blog.css
│       ├── BlogPost.css
│       └── Contact.css
├── post/
│   ├── bigdata-2025-en.md
│   ├── bigdata-2025-es.md
│   ├── computer-vision-2024-en.md
│   └── computer-vision-2024-es.md
├── App.jsx
└── main.jsx
```

## 3. Flujo de trabajo (milestones — concretos)

1. **Inicializar proyecto** (Vite + Tailwind + deps).
2. **Layout global**: Navbar, Footer, ThemeProvider, LanguageProvider, rutas.
3. **Páginas básicas**: Home, About, Projects, Contact, Blog stub.
4. **Proyectos**: ProjectCard responsive; filtros; modal detalle.
5. **Blog**: integrar Markdown y listado.
6. **Contacto**: formulario con validación → Formspree.
7. **Accesibilidad y optimización**: ARIA, contrastes, images responsive.
8. **Testing y CI**: Vitest + GitHub Actions.
9. **Deploy**: Vercel + configuración de dominio, OG images, sitemap.

## 4. Buenas prácticas UI / UX (lógica y decisiones)

* **Contenido primero**: jerarquía clara (H1 > H2 > H3), frases cortas, bullets para scannability.
* **CTA visibles y repetidos**: “Ver proyecto”, “Ver demo”, “Contactar” en lugares estratégicos.
* **Microinteracciones**: hover suave en tarjetas, foco visible (outline), transición en modo oscuro.
* **Progressive disclosure**: mostrar descripción corta y “Ver más” en modal para detalles técnicos.
* **Filtrado y tags**: chips para filtrar (Web, App, IA, Big Data) con estado URL (query params) para compartir links.
* **Imágenes**: thumbnails optimizados, `srcset`, `loading="lazy"`.
* **Perf y accesibilidad**: skip-link, keyboard nav, `alt` en imágenes, `aria-*` en elementos interactivos.
* **Animaciones**: preferir `prefers-reduced-motion` y no usar animaciones intrusivas.

## 5. Implementaciones clave (snippets listos)

## 5.1 Inicializar proyecto (comandos)

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# Dependencias
npm install react-router-dom react-i18next i18next i18next-browser-languagedetector framer-motion react-hook-form zod @hookform/resolvers react-icons axios
# Dev/test
npm install -D vitest jsdom @testing-library/react
```

## 6. Multilenguaje (UX + implementación)

* Guardar `localStorage` para la elección de idioma.
* Cargar contenido de blog por idioma (`content/en/..`, `content/es/..`).
* Añadir switch de idioma en el navbar (iconos + texto corto).
* Para SEO, usar rutas /en/... y /es/... (o query `?lng=es`) — recomiendo rutas si luego quieres ser indexado por buscadores en ambos idiomas.

## 7. Accesibilidad y soporte para usuarios

* `role="navigation"` y `aria-label` en nav.
* Skip link: `<a href="#main" className="sr-only-focusable">Saltar al contenido</a>`.
* Foco visible (no borrarlo).
* `prefers-reduced-motion` query para desactivar animaciones.
* Colores con suficiente contraste (ratio mínimo 4.5:1 para texto normal).

## 8. Optimización y SEO

* **Meta tags dinámicos** con `react-helmet-async` (title, description, og\:image).
* **Sitemap** generado desde rutas + posts (script node).
* **OG images**: genera una imagen por proyecto (puedes usar servicios como OG Image or playwright snapshot).
* **Asset optimization**: webp/avif, `srcset`, CDN para imágenes.
* **Lighthouse**: apúntalo a >90 en Performance/Accessibility/Best Practices/SEO.

## 9. Testing & CI/CD

* **Vitest** para unit tests (componentes UI).
* **Playwright** para flow: contact form, project filters, language switch.
* **GitHub Actions** pipeline: install → test → build → deploy to Vercel (o publicar artefacto).
  Minimal CI snippet:

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run build
```

## 10. Futuras Actualizaciones

* Dashboard demo de Big Data: mini-visualizaciones con Recharts or recharts + small dataset (CSV) cargado localmente.
* Badges de certificaciones con enlaces (showcase).
* Sección “En progreso” con notebooks (colab) o demos desplegadas.
* Exporta proyectos en PDF (botón) para recruiters.
