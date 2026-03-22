// src/data/index.ts
import { getImgPath } from "@/utils/image";
import type { HeaderItem } from "@/types/menu";
import type { Blog } from "@/types/blog";

export const headerData: HeaderItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#services" },
  { label: "Blog", href: "/#blog" },
  { label: "Contacto", href: "/#contact" },
];

export const Servicebox = [
  {
    icon: getImgPath("/images/services/ux-design-product_1.svg"),
    title: "Valoración oncológica inicial",
    description:
      "Revisión de tu caso, orientación sobre los estudios necesarios y una explicación clara de los siguientes pasos.",
  },
  {
    icon: getImgPath("/images/services/perfomance-optimization.svg"),
    title: "Segunda opinión médica",
    description:
      "Si ya tienes un diagnóstico o plan de tratamiento, te ayudamos a revisarlo con calma para tomar decisiones informadas.",
  },
  {
    icon: getImgPath("/images/services/ux-design-product_2.svg"),
    title: "Seguimiento y acompañamiento",
    description:
      "Acompañamiento durante el tratamiento para resolver dudas, revisar evolución y mantener una comunicación cercana.",
  },
];

export const blogPosts: Blog[] = [
  {
    title: "Detección temprana del cáncer: por qué puede marcar la diferencia",
    excerpt: "Conoce por qué la detección temprana es clave para actuar a tiempo, qué señales conviene observar y cuándo buscar una valoración médica.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_1.png",
    slug: "deteccion-temprana-del-cancer",
    category: "Prevención",
  },
  {
    title: "Opciones de tratamiento oncológico: cómo se define el mejor plan",
    excerpt: "Un repaso claro sobre cómo se evalúan las alternativas de tratamiento, qué factores influyen en la decisión y cómo acompañar al paciente en ese proceso.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_2.jpg",
    slug: "opciones-de-tratamiento-oncologico",
    category: "Tratamiento",
  },
  {
    title: "Acompañamiento al paciente con cáncer: una parte esencial del tratamiento",
    excerpt: "Explora por qué el apoyo emocional, la comunicación clara y el acompañamiento a la familia son fundamentales durante el proceso oncológico.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_3.png",
    slug: "acompanamiento-al-paciente-con-cancer",
    category: "Acompañamiento",
  },
];
