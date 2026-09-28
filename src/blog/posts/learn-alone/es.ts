import type { PostCopy } from '../../types';
import { SITE } from '../../../i18n/copy';
import { SRC } from './pt';

export const es: PostCopy = {
  slug: 'como-aprender-ingles-solo',
  title: 'Cómo aprender inglés solo en casa',
  metaTitle: 'Cómo aprender inglés solo en casa: plan de 7 días (2026)',
  description: 'Se puede aprender inglés solo cuando el inglés entra en tu día. Un plan de 7 días basado en investigación, los errores más comunes y herramientas, con fuentes.',
  dek: 'Aprender inglés solo funciona cuando el inglés deja de ser una clase y se vuelve parte de tu día. Este es un plan simple para empezar pequeño y crecer.',
  answer:
    'Se puede aprender inglés solo si forma parte de tu día, y no solo de una clase. Un plan que funciona tiene cuatro partes: contacto diario con inglés que entiendes casi por completo, escribir un poco cada día, repasar palabras en el momento justo y empezar pequeño para crear el hábito. En el EF EPI 2025, México quedó en la franja de dominio muy bajo (440 puntos) y Colombia en la baja (480), mientras que Argentina llegó a la alta (575).',
  sections: [
    {
      id: 'se-puede',
      h2: '¿Se puede aprender inglés solo?',
      body: [
        'Sí, y mucha gente que habla bien aprendió así, con series, juegos, trabajo e internet. La investigación señala que el contacto fuera del aula pesa: en un estudio con 167 multilingües, usar la lengua con frecuencia y tener <a href="' + SRC.resnik + '">contacto natural con ella</a> aumentó cuánto aparece incluso en el pensamiento (Resnik, 2021).',
        'El punto de partida varía mucho entre países de habla hispana. El <a href="' + SRC.efReport + '">EF English Proficiency Index 2025</a> puso a México en la franja de dominio muy bajo, con 440 puntos, a Colombia en la baja, con 480, y a Argentina en la alta, con 575.',
      ],
    },
    {
      id: 'que-funciona',
      h2: '¿Qué funciona para quien estudia inglés solo?',
      body: ['Cuatro cosas, cada una con base en investigación:'],
      steps: [
        '<strong>Inglés que entiendes casi por completo.</strong> La hipótesis del input de Stephen Krashen (1982) propone que la lengua se adquiere con <a href="' + SRC.krashen + '">input comprensible</a>, un poco por encima de tu nivel. Es una idea influyente y también debatida, pero el consejo práctico es sólido: elige contenido del que entiendas la mayor parte.',
        '<strong>Escribir un poco cada día.</strong> Un mensaje, un comentario, una pregunta a ChatGPT. Escribir muestra lo que todavía no sabes decir, y una corrección explicada se vuelve aprendizaje.',
        '<strong>Repasar en el momento justo.</strong> Un metaanálisis de Cepeda y colegas (2006) mostró que los <a href="' + SRC.cepeda + '">repasos espaciados</a> fijan mejor que repasar todo de una vez.',
        '<strong>Empezar pequeño.</strong> En el estudio de Phillippa Lally y colegas (2010), un hábito nuevo tardó en promedio 66 días en volverse automático, con variaciones de 18 a 254 días entre personas (<a href="' + SRC.lally + '">European Journal of Social Psychology</a>). Metas pequeñas al principio te ayudan a llegar.',
      ],
    },
    {
      id: 'plan-7-dias',
      h2: '¿Cómo armar un plan de 7 días para aprender inglés solo?',
      body: ['Empieza con casi nada y sube un poco cada día. El objetivo de la primera semana es crear el hábito, no agotar las ganas.'],
      figure: 'week',
      after: [
        'Después del séptimo día, mantén el ritmo que te resultó cómodo y cambia lo que esté demasiado fácil: subtítulos en inglés en lugar de en español, más palabras nuevas por día, más tiempo leyendo.',
      ],
    },
    {
      id: 'errores',
      h2: '¿Qué errores frenan a quien aprende inglés solo?',
      body: ['Los cinco más comunes, y qué hacer en su lugar:'],
      table: {
        head: ['Error', 'Por qué frena', 'Qué hacer'],
        rows: [
          ['Estudiar solo gramática', 'Conoces la regla, pero no reconoces la frase cuando aparece de verdad', 'Leer y escuchar inglés cada día, con la gramática como apoyo'],
          ['Subtítulos en español en todo', 'Los ojos leen español y el oído descansa', 'Subtítulos en inglés, o dobles por poco tiempo'],
          ['Listas de palabras sueltas', 'La palabra queda sin contexto y se olvida rápido', 'Guardar cada palabra con la frase donde la encontraste'],
          ['Metas grandes al principio', 'Los hábitos tardan semanas en volverse automáticos (Lally y colegas, 2010)', 'Empezar con pocos minutos y subir poco a poco'],
          ['No escribir nunca', 'Entiendes, pero te trabas al producir', 'Escribir un mensaje corto en inglés al día'],
        ],
      },
    },
    {
      id: 'navegador',
      h2: '¿Cómo convertir el navegador en una clase de inglés?',
      body: [
        'Ya pasas horas en el navegador; <strong>Active Immersion</strong> hace que esas horas cuenten. La extensión saca el español de la pantalla (difuminado, traducido al inglés o eliminado, según el nivel), muestra la traducción cuando haces doble clic en una palabra en inglés y guarda la palabra con su frase para repasarla.',
        'Sigue el plan de arriba: el primer día pide un solo repaso, y las metas crecen durante la primera semana. Al elegir tu nivel (de A1 a C2), la extensión configura la inmersión, las explicaciones y las metas diarias, y puedes cambiarlo todo después.',
      ],
      figure: 'lookup',
      after: [
        'Los límites: funciona en el navegador de la computadora (Chrome, Edge, Brave y Firefox 140 o más reciente), no en el celular. Para ir más allá, lee también <a href="' + SITE + 'es/blog/como-pensar-en-ingles-sin-traducir/">cómo pensar en inglés sin traducir</a>.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: '¿Cuánto tiempo al día necesito para aprender inglés solo?',
      a: 'La constancia pesa más que el volumen. Empieza con 5 a 10 minutos de repaso y algo de contacto con inglés a lo largo del día, y sube poco a poco. Más importante que el número es hacerlo todos los días.',
    },
    {
      q: '¿Se puede aprender inglés solo y gratis?',
      a: 'Sí. Hay mucho contenido gratuito en inglés: la Wikipedia en inglés simple, videos, podcasts y noticias. Las herramientas de pago ahorran tiempo y ordenan la práctica, pero no son obligatorias.',
    },
    {
      q: '¿Por dónde empiezo si no sé nada de inglés?',
      a: 'Por las palabras y frases más comunes, con contenido hecho para principiantes y traducción cuando la necesites. En el nivel A1, traducir ayuda a entender; el objetivo es depender menos de eso con el tiempo.',
    },
    {
      q: '¿Cuánto tiempo se tarda en aprender inglés solo?',
      a: 'Depende de tu punto de partida, del tiempo diario y del tipo de práctica, así que cualquier plazo fijo es una suposición. Lo que sí se puede medir es el hábito: según Lally y colegas (2010), las rutinas nuevas tardaron en promedio 66 días en volverse automáticas.',
    },
  ],
  sources: [
    { label: 'EF English Proficiency Index 2025 (informe completo)', url: SRC.efReport },
    { label: 'Krashen, S. D. (1982). Principles and Practice in Second Language Acquisition. Pergamon', url: SRC.krashen },
    { label: 'Lally, P. et al. (2010). How are habits formed. European Journal of Social Psychology, 40(6), 998–1009', url: SRC.lally },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
    { label: 'Resnik, P. (2021). Multilinguals’ use of L1 and L2 inner speech. International Journal of Bilingual Education and Bilingualism, 24(1)', url: SRC.resnik },
  ],
  fig: {
    week: {
      label: 'primera semana',
      days: [
        { day: 'Día 1', plan: 'Guardar 1 palabra y repasarla · 5 min leyendo en inglés · 1 mensaje' },
        { day: 'Día 2', plan: '5 repasos · 5 min leyendo · 1 mensaje' },
        { day: 'Día 3', plan: '10 repasos · 8 min leyendo · 2 mensajes' },
        { day: 'Día 4', plan: '15 repasos · 12 min leyendo · 3 mensajes' },
        { day: 'Día 5', plan: '15 repasos · 12 min leyendo · 3 mensajes' },
        { day: 'Día 6', plan: '15 repasos · 12 min leyendo · 3 mensajes' },
        { day: 'Día 7', plan: '20 repasos · 15 min leyendo · 3 mensajes' },
      ],
      caption: 'La primera semana en Active Immersion, con las metas del nivel B1: empieza casi sin esfuerzo y crece cada día.',
    },
    lookup: { before: 'The instructions were ', word: 'confusing', after: ', so I asked for help.', phonetic: '/kənˈfjuːzɪŋ/', lang: 'Español', translation: 'confusas', save: 'Guardar con esta frase', caption: 'Doble clic en una palabra en inglés: aparece la traducción y la palabra se guarda con su frase.' },
  },
};
