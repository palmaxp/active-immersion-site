import type { PostCopy } from '../../types';

const help = 'https://support.google.com/youtube/answer/15569972?hl=es';
const prefs = 'https://support.google.com/youtube/answer/13339776?hl=es';
const tc = 'https://techcrunch.com/2024/12/10/youtubes-new-auto-dubbing-feature-is-now-available-for-knowledge-focused-content/';

export const es: PostCopy = {
  slug: 'como-quitar-doblaje-automatico-youtube',
  title: 'Cómo quitar el doblaje automático de YouTube',
  metaTitle: 'Cómo quitar el doblaje automático de YouTube (2026)',
  description: 'El doblaje automático de YouTube cambia la voz original por una voz de IA. Cómo volver al audio original en PC, celular y TV, y cómo evitarlo de una vez.',
  dek: 'YouTube empezó a doblar videos con inteligencia artificial. Si estás aprendiendo inglés, eso te quita justo la parte que enseña: la voz original.',
  answer:
    'En septiembre de 2026, YouTube no tiene un botón para desactivar el doblaje automático de una vez. En cada video, puedes volver al audio original en <b class="ui">Configuración</b> → <b class="ui">Pista de audio</b> → la pista marcada como <b class="ui">original</b>. Para los próximos videos, agrega el inglés a tus <b class="ui">idiomas preferidos</b>: según la ayuda de YouTube, los videos grabados en un idioma preferido no se doblan.',
  howTo: {
    name: 'Cómo volver al audio original de un video doblado en YouTube',
    steps: [
      'Abre el video y haz clic en el engranaje de Configuración del reproductor.',
      'Haz clic en Pista de audio.',
      'Elige la pista con “original” en el nombre, por ejemplo “Inglés (original)”.',
    ],
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es el doblaje automático de YouTube?',
      body: [
        'El doblaje automático es una función de YouTube que crea, con inteligencia artificial, una versión del audio del video en otros idiomas. YouTube detecta el idioma en que se grabó el video y genera las pistas dobladas por su cuenta, y los videos con ese audio aparecen con la etiqueta <b class="ui">Doblado automáticamente</b>.',
        'La función se abrió en diciembre de 2024 para canales de contenido informativo, como videos que enseñan a cocinar o a coser, y usa Gemini, la IA de Google, según <a href="' + tc + '">TechCrunch</a>. En ese momento, YouTube dijo que planeaba llevar el doblaje a otros tipos de contenido.',
        'El doblaje no llega solo: según la <a href="' + prefs + '">ayuda de YouTube</a>, la preferencia de idioma se aplica al audio, al título y a la descripción. Por eso un video grabado en inglés puede llegar a tu página principal con el título en español y una voz de IA hablando español.',
      ],
      figure: 'badge',
    },
    {
      id: 'por-que-molesta',
      h2: '¿Por qué el doblaje automático perjudica a quien aprende inglés?',
      body: [
        'Porque cambia justo lo que necesitas escuchar. Un video en inglés es práctica de listening gratis: acentos reales, ritmo real y las expresiones que la gente usa de verdad. Con el doblaje, escuchas una voz sintética en español y pierdes todo eso, muchas veces sin darte cuenta, porque el título también llega traducido.',
        'Y la traducción puede fallar. La <a href="' + help + '">ayuda de YouTube</a> advierte que los doblajes pueden tener errores por pronunciación, acentos, dialectos o ruido de fondo. En el lanzamiento, el propio YouTube reconoció que a veces la traducción no queda bien o la voz no representa bien a quien habla.',
      ],
    },
    {
      id: 'en-la-computadora',
      h2: '¿Cómo vuelvo al audio original de un video en la computadora?',
      body: ['Son tres clics, directo en el reproductor:'],
      steps: [
        'Abre el video y haz clic en el engranaje de <b class="ui">Configuración</b>, en la esquina del reproductor.',
        'Haz clic en <b class="ui">Pista de audio</b>.',
        'Elige la pista con <b class="ui">original</b> en el nombre, por ejemplo <b class="ui">Inglés (original)</b>.',
      ],
      figure: 'menu',
      after: ['Esto vale solo para ese video. Si el siguiente también está doblado, hay que cambiarlo otra vez, y por eso el ajuste de idiomas preferidos, más abajo, marca la diferencia.'],
    },
    {
      id: 'celular-y-tv',
      h2: '¿Cómo quito el doblaje automático en el celular y en la TV?',
      body: [
        'En la app de YouTube para Android y iPhone, el camino es el mismo que en la computadora: toca el video, toca el engranaje de <b class="ui">Configuración</b> y elige <b class="ui">Pista de audio</b>. En los Shorts, la opción está en el menú de tres puntos.',
        'En la TV, muestra los controles del reproductor con el control remoto, ve al engranaje y busca <b class="ui">Pista de audio</b> o <b class="ui">Audio</b>. El nombre cambia un poco entre Android TV, Google TV, Samsung, LG y Roku, pero el camino es parecido.',
      ],
    },
    {
      id: 'de-una-vez',
      h2: '¿Se puede desactivar el doblaje automático de YouTube para siempre?',
      body: [
        'No hay un botón para eso, pero un ajuste resuelve buena parte: los idiomas preferidos. La <a href="' + prefs + '">ayuda de YouTube</a> dice que el contenido con audio original en uno de tus idiomas preferidos no se traduce y se reproduce con el audio original. Si agregas el inglés, los videos grabados en inglés dejan de llegar doblados.',
        'En la computadora:',
      ],
      steps: [
        'Haz clic en tu foto de perfil y luego en <b class="ui">Configuración</b>.',
        'Abre <b class="ui">Reproducción y rendimiento</b>.',
        'En <b class="ui">Idioma</b>, haz clic en <b class="ui">Agregar o editar idiomas</b>.',
        'Marca el inglés (y otros idiomas que entiendas) y haz clic en <b class="ui">Confirmar</b>.',
      ],
      figure: 'prefs',
      after: [
        'En el celular: foto de perfil → <b class="ui">Configuración</b> → <b class="ui">Idiomas</b> → <b class="ui">Idiomas preferidos</b>.',
        'Un límite importante: según YouTube, este ajuste es independiente del idioma de la app y de tu ubicación, y no cambia la búsqueda ni las recomendaciones. La página principal sigue llena de videos en español.',
      ],
    },
    {
      id: 'pagina-principal',
      h2: '¿Cómo quito los videos doblados de la página principal de YouTube?',
      body: [
        'Con los ajustes de YouTube, no se puede. Aquí entra <strong>Active Immersion</strong>, una extensión para Chrome y Firefox hecha para aprender inglés con el internet que ya usas.',
        'Con la inmersión activada, Active Immersion quita de la lista los videos con la etiqueta de doblaje automático: en la página principal, en <b class="ui">A continuación</b>, en la búsqueda y en la fila de Shorts. Quedan los videos con su voz original.',
      ],
      figure: 'feed',
      after: [
        'La extensión también se ocupa del resto de la pantalla: títulos, resultados y publicaciones en español se desenfocan, se traducen al inglés o desaparecen, según el nivel que elijas (Parcial o Total). Y los mensajes que escribes en inglés en ChatGPT, Gmail o WhatsApp Web reciben corrección con explicación.',
        'Lo que no hace: Active Immersion funciona en el navegador de la computadora (Chrome, Edge, Brave y Firefox 140 o más reciente), no en la app del celular ni de la TV, y no cambia el audio de un video que abres directo desde un enlace. Para esos casos, usa los pasos de arriba.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: '¿Por qué el título del video aparece en español si el video es en inglés?',
      a: 'Porque la traducción automática de YouTube se aplica al audio, al título y a la descripción. Cuando el inglés está en tus idiomas preferidos, los videos grabados en inglés conservan el título y el audio originales.',
    },
    {
      q: '¿Quien subió el video puede desactivar el doblaje automático?',
      a: 'Sí. En YouTube Studio, en Configuración → Canal → Configuración avanzada, el creador puede desmarcar la opción que permite el doblaje automático. Así los nuevos videos del canal dejan de doblarse.',
    },
    {
      q: '¿En qué idiomas existe el doblaje automático?',
      a: 'En su lanzamiento, en diciembre de 2024, cubría inglés, español, francés, alemán, hindi, indonesio, italiano, japonés y portugués, y la lista creció después. La lista actual está en el artículo de ayuda de YouTube sobre doblaje automático.',
    },
    {
      q: '¿Active Immersion es gratis?',
      a: 'Active Immersion tiene 7 días gratis con todo incluido y sin tarjeta. Después cuesta US$ 4.99 al mes y se puede cancelar cuando quieras.',
    },
  ],
  sources: [
    { label: 'Ayuda de YouTube: Usar el doblaje automático', url: help },
    { label: 'Ayuda de YouTube: Mirar videos en tu idioma preferido', url: prefs },
    { label: 'TechCrunch, 10 dic. 2024: YouTube’s new auto-dubbing feature is now available for knowledge-focused content', url: tc },
  ],
  fig: {
    badge: {
      cards: [
        { title: '10 hábitos simples que cambiarán tu rutina', channel: 'Canal en inglés', badge: 'Doblado automáticamente' },
        { title: 'How I learned English by watching series', channel: 'Canal en inglés' },
      ],
      pointer: 'el título llega traducido y el audio, doblado',
      caption: 'Los videos doblados aparecen con la etiqueta “Doblado automáticamente” y, muchas veces, con el título traducido.',
    },
    menu: {
      settings: 'Configuración',
      rows: [['Subtítulos', 'Desactivados'], ['Velocidad', 'Normal'], ['Calidad', 'Automática']],
      audio: 'Pista de audio',
      dubbed: 'Español (doblado automáticamente)',
      original: 'Inglés (original)',
      other: 'Portugués (doblado automáticamente)',
      caption: 'En el reproductor: Configuración → Pista de audio → la pista marcada como original.',
    },
    prefs: {
      path: 'Configuración › Reproducción y rendimiento',
      heading: 'Idiomas preferidos',
      have: 'Español',
      add: 'Inglés',
      confirm: 'Confirmar',
      caption: 'Con el inglés en tus idiomas preferidos, los videos grabados en inglés se reproducen con el audio original.',
    },
    feed: {
      label: 'youtube.com, con Active Immersion',
      removed: 'doblado · quitado',
      rows: [
        { title: '10 hábitos simples que cambiarán tu rutina', dubbed: true },
        { title: 'How I learned English by watching series' },
        { title: 'Por qué todavía no hablas inglés', dubbed: true },
        { title: 'A day in my life in London' },
      ],
      caption: 'Los videos con la etiqueta de doblaje salen de la lista y quedan los videos con la voz original.',
    },
  },
};
