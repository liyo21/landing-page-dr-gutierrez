import { createI18n } from 'vue-i18n'

const messages = {
    es: {
        hero: {
            title: 'Atención oncológica quirúrgica Especializada, Segura y Compasiva.',
            subtitle: 'El Dr. Jose A. Gutierrez ofrece un enfoque médico integral, brindando diagnósticos precisos y tratamientos quirúrgicos de vanguardia para patologías tanto benignas como malignas. Cada paciente recibe una evaluación personalizada para determinar el abordaje quirúrgico más seguro y efectivo, acompañándolo desde el inicio tanto al paciente como familiares.',
            buttonPrimary: 'Agendar consulta',
            buttonSecondary: 'Conocer atención',
            badge: 'Oncología con acompañamiento humano',
            image: {
                src: '/images/hero/hero-profile-1.png',
                alt: 'Oncología con acompañamiento humano',
                badgeTitle: 'ACOMPAÑAMIENTO',
                badgeDescription: 'Información clara para que pacientes y familias se sientan acompañados en cada paso.'
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
        services: {
            title: 'Tu salud oncológica en manos expertas: honestidad, empatía y una estrategia clara de principio a fin.',
            description: 'Soy el Dr. José A. Gutierrez, especialista en cirugía general, oncológica y laparoscópica con experiencia en el diagnóstico, tratamiento quirúrgico y prevención del cáncer. Mi práctica se basa en la medicina basada en evidencia, la actualización constante y un enfoque integral centrado en el paciente.',
            subdescription: 'Mi objetivo es escucharte, revisar tu caso y ofrecer tratamientos seguros, personalizados y con los más altos estándares de calidad médica, acompañando al paciente y sus familiares desde el inicio.',
            badge: 'Reseña',
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
                submitButton: 'Enviar consulta',
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