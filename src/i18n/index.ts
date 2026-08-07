import { createI18n } from 'vue-i18n'

const messages = {
    es: {
        hero: {
            title: 'Atención oncológica quirúrgica especializada, segura y compasiva.',
            subtitle: 'El Dr. Jose A. Gutierrez ofrece un enfoque médico integral, brindando diagnósticos precisos y tratamientos quirúrgicos de vanguardia para patologías tanto benignas como malignas. Cada paciente recibe una evaluación personalizada para determinar el abordaje quirúrgico más seguro y efectivo, acompañándolo desde el inicio tanto al paciente como familiares.',
            buttonPrimary: 'Agendar consulta',
            buttonSecondary: 'Conocer atención',
            badge: 'Oncología con acompañamiento humano',
            image: {
                src: '/images/hero/hero-profile-1.png',
                alt: 'Oncología con acompañamiento humano',
                badgeTitle: 'ACOMPAÑAMIENTO',
                badgeDescription: 'Cuidando de ti antes, durante, y después del quirófano'
            },
            features: [
                {
                    title: 'Medicina Basada en Evidencia',
                    description: 'Utilización de las guías más actuales para asegurar tratamientos con el mayor beneficio y menores complicaciones.',
                },
                {
                    title: 'Diagnóstico de Alta Calidad',
                    description: 'Fundamental para identificar lesiones precancerosas y estadios tempranos, lo que aumenta las tasas de éxito en el tratamiento quirúrgico.',
                },
                {
                    title: 'Tratamiento personalizado',
                    description: 'La oncología de precisión, que utiliza pruebas moleculares e inmunohistoquímicas (como la medición de PD-L1), permite adaptar el tratamiento al perfil genético del paciente y del tumor.', 
                },
                {
                    title: 'Enfoque Multidisciplinario',
                    description: 'El tratamiento del cáncer requiere la colaboración de cirujanos, oncólogos médicos y radioterapeutas, garantizando una evaluación completa, especialmente en casos complejos de cáncer de mama.',
                },
                {
                    title: 'Actualización Constante',
                    description: 'Incorporación de nuevas tecnologías y enfoques para mejorar los resultados.' 
                }
            ]
        },
        about: {
            title: 'Tu salud oncológica en manos expertas: honestidad, empatía y una estrategia clara de principio a fin.',
            description: [
                {
                    text: 'Soy el Dr. José A. Gutiérrez , médico especialista en Cirugía General, Cirugía Oncológica y Laparoscopia. Egresé como Cirujano General y Laparoscopista de la Universidad del Zulia (LUZ), y posteriormente realicé mi subespecialidad en Cirugía Oncológica en la Universidad Central de Venezuela (UCV), con sede en el Servicio Oncológico Hospitalario del IVSS, antiguo hospital oncológico Padre Machado.',
                },
                {
                    text: 'Actualmente, me desempeño como Médico Adjunto en el Servicio de Vías Digestivas de dicha institución, lo que me mantiene en constante práctica y manejo de casos complejos.',
                },
                {
                    text: 'Mi práctica médica se fundamenta en la medicina basada en evidencia, la actualización científica constante y un enfoque profundamente humano. Mi objetivo principal es escucharte, evaluar tu caso con detenimiento y ofrecerte alternativas quirúrgicas seguras, personalizadas y bajo los más altos estándares de calidad médica.',
                }
            ],
            badge: 'Reseña',
        },
        procedures: {
            badge: 'Servicios y Procedimientos Quirúrgicos',
            image: {
                src: '/images/portfolio/medica-procedures.PNG',
                alt: 'Servicios y Procedimientos Quirúrgicos',
            },
            items: [
                {
                    text: 'Colocación de catéter para quimioterapia (Catéter Port / Port-a-cath)'
                },
                {
                    text: 'Biopsias abiertas y ecoguiadas (Trucut, incisionales y escisionales).'
                },
                {
                    text: 'Cirugías Electivas (Mínimamente Invasiva - Laparoscópico y Abierto).'
                },
                {
                    text: 'Cirugías de Emergencia.'
                }
            ],
            areas: [
                {
                    title: 'Patologías de Vías Digestivas y Abdomen',
                    items: [
                        {
                            text: 'Cáncer Gastrointestinal (Esófago, Estómago e Intestino Delgado).'
                        },
                        {
                            text: 'Cáncer Colorrectal (Colon y Recto).'
                        },
                        {
                            text: 'Tumores Hepatobiliares y Pancreáticos (Hígado, Vesícula Biliar, Vías Biliares y Páncreas).'
                        },
                        {
                            text: 'Patologías benignas del sistema digestivo (Apendicitis, Colecistitis / Patología Vesicular, Obstrucción Intestinal).'
                        },
                        {
                            text: 'Hernias y defectos de la pared abdominal (Inguinales, Umbilicales y Eventraciones).'
                        },
                    ]
                },
                {
                    title: 'Patologías de la Mama',
                    items: [
                        {
                            text: 'Cáncer de Mama.'
                        },
                        {
                            text: 'Tumores benignos (Fibroadenomas, quistes y condición fibroquística).'
                        },
                    ]
                },
                {
                    title: 'Patologías de Cabeza y Cuello',
                    items: [
                        {
                            text: 'Tumores de Tiroides y Paratiroides.'
                        },
                        {
                            text: 'Tumores de Glándulas Salivales (Parótida y submandibulares).'
                        },
                        {
                            text: 'Tumores de la Cavidad Oral y Laringe.'
                        }
                    ]
                },
                {
                    title: 'Tumores de Piel y Tejidos Blandos',
                    items: [
                        {
                            text: 'Cáncer de piel no melanoma: Carcinoma Basocelular (CBC) y Carcinoma Espinocelular (CEC).'
                        },
                        {
                            text: 'Cáncer de piel: Melanoma.'
                        },
                        {
                            text: 'Sarcomas de Tejidos Blandos y Tumores Retroperitoneales.'
                        }
                    ]
                }
            ]
        },
        blog: {
            title: 'Artículos claros para entender mejor el cáncer, su tratamiento y los siguientes pasos.',
            description: 'Encuentra contenido útil sobre prevención, detección temprana, tratamientos y acompañamiento emocional, explicado de forma simple y confiable.',
            badge: 'Información para pacientes y familias',
            features: [
                {
                    title: 'Prevención',
                    description: '',
                },
                {
                    title: 'Diagnóstico',
                    description: '',
                },
                {
                    title: 'Tratamiento',
                    description: '',
                },
                {
                    title: 'Acompañamiento',
                    description: '',
                },
            ]
        },
        contact: {
            title: 'Si tú o un familiar necesitan orientación oncológica, puedes escribirnos aquí.',
            description: 'Cuéntanos brevemente tu caso y el Dr. José Gutiérrez o su equipo te indicarán el siguiente paso con claridad, respeto y confidencialidad.',
            features: [
                {
                    title: 'Orientación',
                    description: 'Valoración clara y personalizada.'
                },
                {
                    title: 'Confidencialidad',
                    description: 'Tu información se maneja con cuidado.'
                },
                {
                    title: 'Acompañamiento',
                    description: 'Para pacientes y familias que necesitan entender el siguiente paso.'
                },

            ],
            form: {
                title: 'Solicita orientación',
                nameLabel: 'Nombre',
                lastNameLabel: 'Apellido',
                emailLabel: 'Correo electrónico',
                messageLabel: 'Cuéntanos brevemente tu caso',
                submitButton: 'Escribe tu consulta',
            }
        }
    },
    en: {

    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'es',
    messages
})

export default i18n;