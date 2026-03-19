# GitHub Copilot Instructions

## Descripción del Proyecto

Landing page profesional para el **Dr. José Alfredo Gutiérrez**, desarrollada con Vue 3, TypeScript y Tailwind CSS v4.

## Stack Tecnológico

- **Framework**: Vue 3 con `<script setup>` (Composition API)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 con tema personalizado
- **Bundler**: Vite
- **Fuentes**: Inter (sans-serif) y Merriweather (serif) de Google Fonts

## Convenciones de Código

### Vue / TypeScript

- Usar `<script setup lang="ts">` en todos los componentes
- Tipar correctamente todas las props, emits y variables
- Preferir `ref` y `computed` sobre `data` y `methods` (Composition API)
- Nombres de componentes en PascalCase (ej. `HeroSection.vue`)
- Nombres de archivos de vistas en PascalCase

### Estilos (Tailwind CSS v4)

- Usar las clases de utilidad de Tailwind directamente en el template
- Respetar los colores del tema personalizado definidos en `src/style.css`:
  - `primary-*`: Azul del logo (identidad de marca)
  - `accent-*`: Plata/Gris (elementos secundarios)
  - `navy-*`: Azul oscuro profesional (textos y encabezados)
  - `dark-*`: Superficies para modo oscuro
- Soporte para modo oscuro con clases `.dark`
- Animación `fadeInUp` disponible como `animate-fade-in-up`

### Estructura de Componentes

```
src/
  components/
    sections/   # Secciones de la landing page
    ui/         # Componentes reutilizables (botones, tarjetas, etc.)
  views/        # Páginas completas
  assets/       # Imágenes, íconos, etc.
```

## Guía de Estilo Visual

- **Tipografía**: Merriweather para títulos, Inter para cuerpo de texto
- **Paleta principal**: Azul primario (#1a8cdb) sobre fondos blancos/claros
- **Diseño**: Profesional, limpio, orientado a servicios médicos
- **Responsive**: Mobile-first con Tailwind

## Notas para el Desarrollo

- El idioma del proyecto es **español**
- Mantener un diseño que transmita confianza y profesionalismo médico
- Los componentes deben ser accesibles (a11y)
- Optimizar para SEO con meta tags adecuados
