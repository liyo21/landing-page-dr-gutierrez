export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  coverImage: string
  date: string
  author: string
  authorImage: string
  category: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "Detección temprana del cáncer: por qué puede marcar la diferencia",
    slug: 'deteccion-temprana-del-cancer',
    excerpt: "Conoce por qué la detección temprana es clave para actuar a tiempo, qué señales conviene observar y cuándo buscar una valoración médica.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_1.png",
    author: 'Dr. José Gutierrez',
    authorImage: '/images/blogdetail-page/silicaman.png',
    category: "Prevención",
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">¿Qué significa detectar a tiempo?</h2>
      <p>La detección temprana no elimina por completo el cáncer, pero sí puede ayudar a identificar señales en una etapa en la que existe más claridad para estudiar el caso y definir opciones médicas con mayor oportunidad.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Señales que conviene no ignorar</h2>
      <ul>
        <li>Pérdida de peso sin causa aparente.</li>
        <li>Dolor persistente o cambios que no mejoran.</li>
        <li>Masas, sangrados o síntomas nuevos que se mantienen en el tiempo.</li>
      </ul>

      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Importante:</p>
        <p>Si algo te preocupa, no esperes a que empeore. Una valoración oportuna puede ayudarte a entender mejor el siguiente paso.</p>
      </div>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">¿Cuándo consultar?</h2>
      <p>Cuando un síntoma persiste, cuando ya tienes estudios y necesitas interpretarlos o cuando buscas una segunda opinión, consultar con un oncólogo puede darte claridad y acompañamiento.</p>
    `,
  },
  {
    title: "Opciones de tratamiento oncológico: cómo se define el mejor plan",
    slug: 'opciones-de-tratamiento-oncologico',
    excerpt: "Un repaso claro sobre cómo se evalúan las alternativas de tratamiento, qué factores influyen en la decisión y cómo acompañar al paciente en ese proceso.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_2.jpg",
    author: 'Dr. José Gutierrez',
    authorImage: '/images/blogdetail-page/silicaman.png',
    category: "Tratamiento",
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">No existe un solo tratamiento para todos los casos</h2>
      <p>El mejor plan depende del tipo de cáncer, la etapa, los estudios disponibles y la condición general de cada persona. Por eso la evaluación médica individual es clave.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Opciones que pueden considerarse</h2>
      <ul>
        <li>Cirugía.</li>
        <li>Tratamientos sistémicos como quimioterapia, inmunoterapia o terapia dirigida.</li>
        <li>Radioterapia, cuando forma parte del plan.</li>
      </ul>

      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Tip:</p>
        <p>Antes de iniciar cualquier tratamiento, pide que te expliquen el objetivo, los posibles efectos secundarios y qué esperar en cada etapa.</p>
      </div>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Preguntas que vale la pena hacer</h2>
      <ul>
        <li>¿Cuál es el objetivo de este tratamiento?</li>
        <li>¿Qué alternativas existen en mi caso?</li>
        <li>¿Cómo se hará el seguimiento?</li>
      </ul>
    `,
  },
  {
    title: "Acompañamiento al paciente con cáncer: una parte esencial del tratamiento",
    excerpt: "Explora por qué el apoyo emocional, la comunicación clara y el acompañamiento a la familia son fundamentales durante el proceso oncológico.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_3.png",
    slug: "acompanamiento-al-paciente-con-cancer",
    author: 'Dr. José Gutierrez',
    authorImage: '/images/blogdetail-page/silicaman.png',
    category: "Acompañamiento",
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">El acompañamiento también forma parte del tratamiento</h2>
      <p>Un diagnóstico oncológico impacta a la persona y a su familia. Comprender el proceso, resolver dudas y sentirse escuchado puede hacer una diferencia real durante todo el camino.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Qué suele ayudar</h2>
      <ul>
        <li>Explicar el diagnóstico con lenguaje claro.</li>
        <li>Resolver dudas paso a paso.</li>
        <li>Involucrar a la familia en las decisiones cuando el paciente lo desea.</li>
      </ul>

      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Recuerda:</p>
        <p>Pedir ayuda o una segunda opinión no significa desconfianza; muchas veces es una forma responsable de tomar decisiones con más tranquilidad.</p>
      </div>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Cuándo buscar orientación</h2>
      <p>Si sientes que necesitas entender mejor el plan, si la familia tiene dudas o si el proceso te está generando mucha incertidumbre, vale la pena solicitar orientación médica.</p>
    `,
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}