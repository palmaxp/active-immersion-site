import type { PostCopy } from '../../types';
import { SRC } from './pt';

export const es: PostCopy = {
  slug: 'como-pensar-en-ingles-sin-traducir',
  title: 'Cómo pensar en inglés sin traducir',
  metaTitle: 'Cómo pensar en inglés sin traducir: lo que dice la ciencia',
  description: 'Traducir en la cabeza es normal al principio. Qué dice la investigación sobre pensar en inglés y 6 hábitos para que el inglés salga directo, con fuentes.',
  dek: 'Casi todos empiezan traduciendo cada frase en la cabeza. La investigación explica por qué pasa y qué hace que el inglés empiece a salir directo.',
  answer:
    'Pensar en inglés sin traducir viene del uso frecuente, no de la fuerza de voluntad. Al principio, el cerebro llega al significado de una palabra en inglés pasando por la palabra en español; con práctica, va directo (Kroll y Stewart, 1994). En un estudio con 167 multilingües, usar la segunda lengua con frecuencia, tener contacto natural con ella y tener más dominio aumentaron su uso en el pensamiento (Resnik, 2021). En la práctica: aprende palabras dentro de frases, narra tu día en inglés y deja que el inglés ocupe tu pantalla.',
  sections: [
    {
      id: 'por-que-traduce',
      h2: '¿Por qué el cerebro traduce al español al principio?',
      body: [
        'Porque es el camino que ya conoce. El modelo jerárquico revisado, propuesto por Judith Kroll y Erika Stewart en 1994, describe dos caminos entre una palabra de la segunda lengua y su significado: uno que pasa por la palabra equivalente en la primera lengua y otro que va directo al concepto.',
        'Según el <a href="' + SRC.kroll + '">modelo</a>, quien está empezando depende más del camino por la traducción. A medida que crece el dominio, las conexiones directas entre las palabras en inglés y los conceptos se fortalecen, y la traducción deja de ser necesaria. Traducir al principio no es un defecto tuyo: es una etapa.',
      ],
      figure: 'route',
    },
    {
      id: 'se-puede',
      h2: '¿Se puede pensar en inglés de verdad?',
      body: [
        'Sí, y la investigación sobre el habla interior muestra de qué depende. En el libro <a href="' + SRC.guerrero + '"><em>Inner Speech – L2</em></a> (2005), María de Guerrero sostiene que los estudiantes pueden llegar a tener habla interior en la segunda lengua, dadas ciertas condiciones de aprendizaje.',
        'Pia Resnik estudió esas condiciones con 24 entrevistas y un cuestionario respondido por 167 multilingües. La primera lengua siguió siendo la más usada al pensar, pero <a href="' + SRC.resnik + '">entre los factores que aumentaron el uso de la segunda</a> están usarla con frecuencia, tener contacto natural con ella (fuera del aula) y sentirse con más dominio.',
        'Y hay un límite normal: en un estudio con 1454 adultos multilingües, Jean-Marc Dewaele encontró que las lenguas aprendidas más tarde se usan <a href="' + SRC.dewaele + '">significativamente menos en el habla interior emocional</a> que en el habla interior en general. Pensar en español cuando estás enojado o emocionado no significa que no estés avanzando.',
      ],
    },
    {
      id: 'como-entrenar',
      h2: '¿Cómo entrenar el cerebro para pensar en inglés?',
      body: ['Seis hábitos que siguen lo que señala la investigación: más frecuencia, más contacto natural y palabras ligadas a situaciones, no a traducciones.'],
      steps: [
        '<strong>Aprende palabras dentro de frases.</strong> Guarda “She <em>grabbed</em> her keys and ran” en lugar de “grab = agarrar”. La frase liga la palabra a una escena, que es el camino directo al significado.',
        '<strong>Narra tu día en inglés.</strong> En voz baja o en la cabeza: “I’m making coffee. I forgot my phone.” De Guerrero describe ese hablarse a uno mismo como parte de cómo la segunda lengua se vuelve pensamiento.',
        '<strong>Describe antes de traducir.</strong> Cuando te falte una palabra, explícala con las que tienes: “the thing you use to open a can”. Eso entrena pensar en inglés en lugar de buscar la traducción.',
        '<strong>Cambia el idioma de tus pantallas.</strong> El celular, el navegador, las redes y YouTube en inglés aumentan la frecuencia y el contacto natural, los dos factores del estudio de Resnik.',
        '<strong>Escribe un poco cada día.</strong> Un mensaje, un comentario, una pregunta a ChatGPT. Escribir te muestra al instante lo que aún no sabes decir.',
        '<strong>Repasa las palabras en el momento justo.</strong> Un metaanálisis de Cepeda y colegas (2006) mostró que <a href="' + SRC.cepeda + '">espaciar los repasos</a> mejora la memoria frente a repasar todo de una vez.',
      ],
    },
    {
      id: 'cuanto-tiempo',
      h2: '¿Cuánto tiempo tarda uno en empezar a pensar en inglés?',
      body: [
        'No hay un número de días. En los estudios anteriores, lo que cambia el uso del inglés al pensar es el dominio y la frecuencia de uso, no un plazo. Desconfía de promesas como “piensa en inglés en 30 días”.',
        'Lo que sí se puede notar es la señal: primero aparecen frases cortas en inglés en tu cabeza en situaciones que vives mucho en inglés (un juego, un trabajo, una serie). Cuantas más partes de tu día pasan en inglés, más situaciones ganan ese atajo.',
      ],
    },
    {
      id: 'en-el-navegador',
      h2: '¿Cómo puede el navegador ayudarte a pensar en inglés?',
      body: [
        'Buena parte de tu contacto con cualquier idioma hoy pasa por la pantalla. <strong>Active Immersion</strong> es una extensión para Chrome y Firefox que usa eso a favor del inglés: el español de la página se difumina, se traduce al inglés o desaparece, según el nivel que elijas.',
        'Al hacer doble clic en una palabra en inglés, ves la traducción y guardas la palabra con la frase donde apareció. En el repaso, la extensión te pide pensar el significado antes de ver la respuesta, que es justo el entrenamiento de ir directo al sentido.',
      ],
      figure: 'lookup',
      after: [
        'Lo que escribes en inglés en ChatGPT, Gmail o WhatsApp Web se corrige con explicación. Los límites: la extensión funciona en el navegador de la computadora (Chrome, Edge, Brave y Firefox 140 o más reciente), no en el celular.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: '¿Está mal traducir cuando aprendo inglés?',
      a: 'No. Al principio, la traducción es el camino que usa el cerebro para llegar al significado, y ayuda a entender. El objetivo es depender cada vez menos de ella, y eso llega con práctica frecuente, no prohibiendo la traducción.',
    },
    {
      q: '¿Necesito vivir en el extranjero para pensar en inglés?',
      a: 'No necesariamente. En el estudio de Resnik (2021), lo que aumentó el uso de la segunda lengua al pensar fue la frecuencia de uso, el contacto natural y el dominio. Vivir fuera lo da gratis, pero puedes crear buena parte de ese contacto en casa, con lo que lees, ves y escribes.',
    },
    {
      q: '¿Por qué sigo pensando en español cuando estoy nervioso?',
      a: 'Porque es común. Dewaele (2015) encontró, con 1454 adultos multilingües, que las lenguas aprendidas más tarde se usan significativamente menos en el habla interior emocional que en el habla interior en general.',
    },
    {
      q: '¿Qué nivel de inglés necesito para empezar a pensar en inglés?',
      a: 'No hay un nivel mínimo para empezar a entrenar. Frases cortas y narrar lo que haces ya funcionan en el nivel básico. Lo que cambia con el nivel es cuánto puedes pensar en inglés sin trabarte.',
    },
  ],
  sources: [
    { label: 'Kroll, J. F. y Stewart, E. (1994). Journal of Memory and Language, 33(2), 149–174', url: SRC.kroll },
    { label: 'Resnik, P. (2021). Multilinguals’ use of L1 and L2 inner speech. International Journal of Bilingual Education and Bilingualism, 24(1)', url: SRC.resnik },
    { label: 'Dewaele, J.-M. (2015). From obscure echo to language of the heart. Journal of Pragmatics, 87, 1–17', url: SRC.dewaele },
    { label: 'de Guerrero, M. C. M. (2005). Inner Speech – L2: Thinking Words in a Second Language. Springer', url: SRC.guerrero },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
  ],
  fig: {
    route: { word: 'grab', via: 'agarrar', meaning: 'la acción', slow: 'traduciendo: más lento', fast: 'directo: llega con la práctica', caption: 'Dos caminos al significado: pasando por el español, común al principio, o directo, que se fortalece con el uso.' },
    lookup: { before: 'She ', word: 'grabbed', after: ' her keys and ran to catch the bus.', phonetic: '/ɡræbd/', lang: 'Español', translation: 'agarró (rápido)', save: 'Guardar con esta frase', caption: 'Doble clic en una palabra en inglés: aparece la traducción y la palabra se guarda con su frase.' },
  },
};
