import type { PostCopy } from '../../types';
import { SITE } from '../../../i18n/copy';
import { SRC } from './pt';

export const es: PostCopy = {
  slug: 'extension-chrome-para-aprender-ingles',
  title: 'Extensión de Chrome para aprender inglés: cuál elegir',
  metaTitle: 'Extensión de Chrome para aprender inglés: 5 tipos comparados',
  description: 'Subtítulos dobles, cambio de palabras, corrector, traductor o inmersión: qué hace cada tipo de extensión para aprender inglés, para quién sirve y sus límites.',
  dek: 'Hay extensiones para series, para vocabulario, para escribir y para sacar el español de la pantalla. Cada tipo resuelve una parte distinta del problema.',
  answer:
    'No existe una extensión que lo haga todo: elige según lo que más haces en el navegador. Para series y videos, extensiones de subtítulos dobles, como Language Reactor. Para un primer contacto con vocabulario, las que cambian algunas palabras de la página, como Toucan, de Babbel. Para escribir mejor, correctores como Grammarly y LanguageTool. Los traductores ayudan a entender, pero no enseñan. Y las extensiones de inmersión, como Active Immersion, sacan el español de la pantalla y juntan corrección y repaso de palabras.',
  sections: [
    {
      id: 'tipos',
      h2: '¿Qué tipos de extensión existen para aprender inglés?',
      body: ['Son cinco tipos principales. La tabla resume qué hace cada uno, dónde funciona mejor y su límite.'],
      table: {
        head: ['Tipo', 'Qué hace', 'Ejemplo', 'Mejor para', 'Límite'],
        rows: [
          ['Subtítulos dobles', 'Muestra el subtítulo en inglés y en tu idioma a la vez, con diccionario al hacer clic', 'Language Reactor', 'Series en Netflix y videos en YouTube', 'Solo sirve dentro del reproductor; con el subtítulo en español siempre activo, lees más de lo que escuchas'],
          ['Cambio de palabras', 'Reemplaza algunas palabras de la página por el idioma que estudias', 'Toucan (Babbel)', 'Primer contacto con vocabulario', 'Pocas palabras por página; el resto sigue en tu idioma'],
          ['Corrector de escritura', 'Señala errores de gramática y estilo en lo que escribes', 'Grammarly, LanguageTool', 'Quien ya escribe en inglés en el trabajo', 'Corrige, pero el error no vuelve para repasarlo y la explicación no siempre llega en tu idioma'],
          ['Traductor', 'Traduce la página o el fragmento seleccionado', 'Google Traductor', 'Entender un texto con prisa', 'Resuelve al instante, pero no enseña y refuerza el hábito de traducir'],
          ['Inmersión', 'Saca tu idioma de la pantalla, corrige lo que escribes y repasa palabras guardadas', 'Active Immersion', 'Quien quiere pasar el día en inglés', 'Solo en computadora; de pago después de 7 días gratis'],
        ],
      },
    },
    {
      id: 'series-y-videos',
      h2: '¿Vale la pena una extensión para aprender inglés con Netflix y YouTube?',
      body: [
        'Sí, si ya ves mucho contenido. <a href="' + SRC.reactorStore + '">Language Reactor</a> muestra el subtítulo en dos idiomas, permite hacer clic en una palabra para ver su significado y repetir la frase con una tecla, en Netflix y YouTube. Tiene un plan gratuito y un plan Pro de pago, descritos en las <a href="' + SRC.reactorFaq + '">preguntas frecuentes de Language Reactor</a>.',
        'Un cuidado: con el subtítulo en español siempre visible, los ojos leen el español y el oído descansa. Usa el subtítulo doble para entender y, cuando puedas, pasa a subtítulos solo en inglés.',
        'Otro detalle de YouTube: el doblaje automático puede cambiar el audio original en inglés por una voz de IA en español. Explicamos cómo quitarlo en <a href="' + SITE + 'es/blog/como-quitar-doblaje-automatico-youtube/">cómo quitar el doblaje automático de YouTube</a>.',
      ],
    },
    {
      id: 'escritura',
      h2: '¿Qué extensión corrige el inglés que escribo?',
      body: [
        'Correctores como Grammarly y LanguageTool señalan errores de gramática y estilo mientras escribes, y son muy buenos para acertar un correo de trabajo. Su punto débil para quien aprende es que la corrección pasa: aceptas la sugerencia y el error no vuelve para que lo practiques.',
        'El Writing Coach de Active Immersion hace otro trabajo: corrige el mensaje que enviaste en inglés, explica el porqué (en tu idioma, si quieres), y cada corrección puede convertirse en una tarjeta de repaso. Los repasos espaciados en el tiempo ayudan a la memoria, según un <a href="' + SRC.cepeda + '">metaanálisis de Cepeda y colegas (2006)</a>.',
      ],
    },
    {
      id: 'por-nivel',
      h2: '¿Cómo elegir la extensión adecuada para tu nivel de inglés?',
      body: ['Según cuánta ayuda necesitas todavía para entender. Una regla práctica:'],
      steps: [
        '<strong>Básico (A1–A2):</strong> subtítulos dobles y diccionario al hacer clic. En la inmersión, prefiere traducir el español al inglés en lugar de esconderlo.',
        '<strong>Intermedio (B1–B2):</strong> subtítulos solo en inglés, español difuminado en las páginas (un clic para verlo) y un mensaje en inglés al día.',
        '<strong>Avanzado (C1–C2):</strong> inmersión total, sin español en la pantalla, y un corrector para pulir la escritura.',
      ],
      after: ['En Active Immersion, elegir el nivel al instalar ya aplica esa configuración, y se puede cambiar después.'],
    },
    {
      id: 'juntas',
      h2: '¿Se puede usar más de una extensión a la vez?',
      body: [
        'Sí, y suele ser la mejor combinación: una extensión para series y otra para el resto del navegador. Si alguna página se ve rara con las dos activas, desactiva una de ellas solo en ese sitio.',
        '<strong>Active Immersion</strong> cubre el resto del navegador: saca el español de páginas, YouTube y búsquedas, muestra la traducción cuando haces doble clic en una palabra en inglés y guarda la palabra con su frase para repasarla el día indicado.',
      ],
      figure: 'lookup',
      after: ['Funciona en Chrome, Edge, Brave y Firefox 140 o más reciente, en la computadora.'],
      cta: true,
    },
  ],
  faq: [
    {
      q: '¿Existe una extensión gratuita para aprender inglés?',
      a: 'Sí. Language Reactor tiene un plan gratuito, y los traductores y diccionarios de navegador también son gratis. Active Immersion tiene 7 días gratis sin tarjeta y después cuesta US$ 4.99 al mes.',
    },
    {
      q: '¿Las extensiones de Chrome funcionan en el celular?',
      a: 'En general, no. Las extensiones funcionan en el navegador de la computadora (Chrome, Edge, Brave, Firefox), y las apps de Netflix y YouTube en el celular no aceptan extensiones.',
    },
    {
      q: '¿Una extensión reemplaza un curso de inglés?',
      a: 'No reemplaza hablar con personas. Lo que hace bien es poner inglés en lo que ya haces cada día, que es donde la mayoría de los cursos no llega.',
    },
    {
      q: '¿Qué extensión es mejor si ya entiendo algo de inglés?',
      a: 'Si ya entiendes frases simples (A2 a B2), la inmersión suele rendir más: pasas el día leyendo y escribiendo en inglés, con ayuda solo cuando la necesitas.',
    },
  ],
  sources: [
    { label: 'Language Reactor en la Chrome Web Store', url: SRC.reactorStore },
    { label: 'Language Reactor: preguntas frecuentes', url: SRC.reactorFaq },
    { label: 'Centro de ayuda de Babbel: extensión Toucan', url: SRC.toucan },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
  ],
  fig: {
    lookup: { before: 'The meeting was ', word: 'postponed', after: ' until next Friday.', phonetic: '/pəʊstˈpəʊnd/', lang: 'Español', translation: 'aplazada', save: 'Guardar con esta frase', caption: 'Doble clic en una palabra en inglés: aparece la traducción y la palabra se guarda con su frase para repasarla después.' },
  },
};
