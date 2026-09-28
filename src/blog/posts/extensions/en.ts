import type { PostCopy } from '../../types';
import { SITE } from '../../../i18n/copy';
import { SRC } from './pt';

export const en: PostCopy = {
  slug: 'chrome-extensions-to-learn-english',
  title: 'Chrome extensions to learn English: which one to choose',
  metaTitle: 'Chrome Extensions to Learn English: 5 Types Compared',
  description: 'Dual subtitles, word swaps, grammar checkers, translators or immersion: what each type of English-learning extension does, who it suits and its limits.',
  dek: 'There are extensions for series, for vocabulary, for writing and for taking your own language off the screen. Each type solves a different part of the problem.',
  answer:
    'No single extension does everything: pick by what you do most in your browser. For series and videos, dual-subtitle extensions such as Language Reactor. For a first contact with vocabulary, extensions that swap some words on the page, such as Toucan by Babbel. For better writing, checkers such as Grammarly and LanguageTool. Translators help you understand but do not teach. Immersion extensions such as Active Immersion take your own language off the screen and combine writing corrections with word reviews.',
  sections: [
    {
      id: 'types',
      h2: 'What types of extensions are there for learning English?',
      body: ['There are five main types. The table sums up what each does, where it works best and its limit.'],
      table: {
        head: ['Type', 'What it does', 'Example', 'Best for', 'Limit'],
        rows: [
          ['Dual subtitles', 'Shows subtitles in English and your language at once, with a click-a-word dictionary', 'Language Reactor', 'Series on Netflix and videos on YouTube', 'Only inside the video player; with your language always on screen, you read more than you listen'],
          ['Word swaps', 'Replaces some words on the page with the language you are learning', 'Toucan (Babbel)', 'A first contact with vocabulary', 'Few words per page; the rest stays in your language'],
          ['Grammar checker', 'Flags grammar and style mistakes in what you write', 'Grammarly, LanguageTool', 'People who already write in English at work', 'Fixes the text, but the mistake does not come back for practice'],
          ['Translator', 'Translates the page or the selected text', 'Google Translate', 'Understanding a text in a hurry', 'Solves it instantly, but does not teach and reinforces translating'],
          ['Immersion', 'Takes your language off the screen, corrects what you write and reviews saved words', 'Active Immersion', 'People who want to spend the day in English', 'Computer only; paid after a 7-day free trial'],
        ],
      },
    },
    {
      id: 'series-and-videos',
      h2: 'Is an extension for learning English with Netflix and YouTube worth it?',
      body: [
        'Yes, if you already watch a lot. <a href="' + SRC.reactorStore + '">Language Reactor</a> shows subtitles in two languages, lets you click a word for its meaning and replay a line with one key, on Netflix and YouTube. It has a free plan and a paid Pro plan, described in <a href="' + SRC.reactorFaq + '">Language Reactor’s own FAQ</a>.',
        'One caveat: with subtitles in your own language always on screen, your eyes read and your ears rest. Use dual subtitles to understand, then move to English-only subtitles when you can.',
        'One more YouTube detail: auto-dubbing can replace a video’s original English audio with an AI voice in your language. See <a href="' + SITE + 'en/blog/turn-off-youtube-auto-dubbing/">how to turn off YouTube auto-dubbing</a>.',
      ],
    },
    {
      id: 'writing',
      h2: 'Which extension corrects the English I write?',
      body: [
        'Checkers such as Grammarly and LanguageTool flag grammar and style mistakes as you type, and they are great for getting a work email right. Their weak point for learners is that the correction passes by: you accept the suggestion and the mistake never comes back for practice.',
        'Active Immersion’s Writing Coach does a different job: it corrects the message you sent in English, explains why (in your language if you want), and each correction can become a review card. Spacing reviews over time helps memory, according to a <a href="' + SRC.cepeda + '">meta-analysis by Cepeda and colleagues (2006)</a>.',
      ],
    },
    {
      id: 'by-level',
      h2: 'How do you choose the right extension for your English level?',
      body: ['By how much help you still need to understand. A rule of thumb:'],
      steps: [
        '<strong>Beginner (A1–A2):</strong> dual subtitles and a click-a-word dictionary. In immersion, translate your language into English rather than hiding it.',
        '<strong>Intermediate (B1–B2):</strong> English-only subtitles, your language blurred on pages (one click to see it) and one message in English a day.',
        '<strong>Advanced (C1–C2):</strong> total immersion, none of your language on screen, and a checker to polish your writing.',
      ],
      after: ['In Active Immersion, picking your level at install applies this setup, and you can change it later.'],
    },
    {
      id: 'together',
      h2: 'Can you use more than one extension at the same time?',
      body: [
        'Yes, and it is often the best combination: one extension for series and another for the rest of the browser. If a page looks odd with both on, turn one of them off on that site only.',
        '<strong>Active Immersion</strong> covers the rest of the browser: it takes your language off pages, YouTube and searches, shows the translation when you double-click an English word, and saves the word with its sentence to review on the right day.',
      ],
      figure: 'lookup',
      after: ['It works in Chrome, Edge, Brave and Firefox 140 or newer, on a computer.'],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Is there a free extension to learn English?',
      a: 'Yes. Language Reactor has a free plan, and browser translators and dictionaries are free too. Active Immersion has a 7-day free trial with no card, then costs US$ 4.99 a month.',
    },
    {
      q: 'Do Chrome extensions work on phones?',
      a: 'Generally not. Extensions run in the computer browser (Chrome, Edge, Brave, Firefox), and the Netflix and YouTube phone apps do not accept extensions.',
    },
    {
      q: 'Can an extension replace an English course?',
      a: 'It does not replace talking with people. What it does well is put English into what you already do every day, which is where most courses do not reach.',
    },
    {
      q: 'Which extension is best if I already understand some English?',
      a: 'If you already understand simple sentences (A2 to B2), immersion tends to pay off most: you spend the day reading and writing in English, with help only when you need it.',
    },
  ],
  sources: [
    { label: 'Language Reactor on the Chrome Web Store', url: SRC.reactorStore },
    { label: 'Language Reactor: FAQ', url: SRC.reactorFaq },
    { label: 'Babbel Help Center: Toucan browser extension', url: SRC.toucan },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
  ],
  fig: {
    lookup: { before: 'The meeting was ', word: 'postponed', after: ' until next Friday.', phonetic: '/pəʊstˈpəʊnd/', lang: 'Español', translation: 'aplazada', save: 'Save with this sentence', caption: 'Double-click an English word: the translation appears and the word is saved with its sentence to review later. Here, for a Spanish speaker.' },
  },
};
