import type { PostCopy } from '../../types';
import { SITE } from '../../../i18n/copy';
import { SRC } from './pt';

export const en: PostCopy = {
  slug: 'how-to-learn-english-on-your-own',
  title: 'How to learn English on your own at home',
  metaTitle: 'How to Learn English on Your Own at Home: 7-Day Plan',
  description: 'You can learn English on your own when English becomes part of your day. A research-based 7-day plan, the most common mistakes and tools, with sources.',
  dek: 'Learning English on your own works when English stops being a class and becomes part of your day. Here is a simple plan to start small and grow.',
  answer:
    'You can learn English on your own if English is part of your day, not just a lesson. A plan that works has four parts: daily contact with English you understand almost completely, writing a little every day, reviewing words at the right time and starting small to build the habit. Habits take time: in one study, new daily routines took a median of 66 days to become automatic (Lally and colleagues, 2010).',
  sections: [
    {
      id: 'is-it-possible',
      h2: 'Can you learn English on your own?',
      body: [
        'Yes, and many fluent speakers learned that way, through series, games, work and the internet. Research suggests that contact outside the classroom matters: in a study of 167 multilinguals, using the language often and <a href="' + SRC.resnik + '">natural exposure to it</a> increased how much it shows up even in thought (Resnik, 2021).',
        'Starting points vary a lot. The <a href="' + SRC.efReport + '">EF English Proficiency Index 2025</a> ranks countries from very high to very low proficiency, and many learners start from the low bands, which makes daily practice outside class even more important.',
      ],
    },
    {
      id: 'what-works',
      h2: 'What works when you study English on your own?',
      body: ['Four things, each backed by research:'],
      steps: [
        '<strong>English you understand almost completely.</strong> Stephen Krashen’s input hypothesis (1982) proposes that language is acquired through <a href="' + SRC.krashen + '">comprehensible input</a>, slightly above your level. The idea is influential and also debated, but the practical advice holds: choose content you mostly understand.',
        '<strong>Writing a little every day.</strong> A message, a comment, a question to ChatGPT. Writing shows what you cannot say yet, and an explained correction turns into learning.',
        '<strong>Reviewing at the right time.</strong> A meta-analysis by Cepeda and colleagues (2006) showed that <a href="' + SRC.cepeda + '">spaced reviews</a> stick better than reviewing everything at once.',
        '<strong>Starting small.</strong> In Phillippa Lally and colleagues’ study (2010), a new habit took a median of 66 days to become automatic, ranging from 18 to 254 days between people (<a href="' + SRC.lally + '">European Journal of Social Psychology</a>). Small goals at first help you get there.',
      ],
    },
    {
      id: 'seven-day-plan',
      h2: 'How do you build a 7-day plan to learn English on your own?',
      body: ['Start with almost nothing and add a little each day. The goal of the first week is building the habit, not burning out.'],
      figure: 'week',
      after: [
        'After day seven, keep the pace that felt comfortable and change whatever is too easy: English subtitles instead of subtitles in your language, more new words a day, more time reading.',
      ],
    },
    {
      id: 'mistakes',
      h2: 'Which mistakes slow down self-taught English learners?',
      body: ['The five most common, and what to do instead:'],
      table: {
        head: ['Mistake', 'Why it slows you down', 'What to do'],
        rows: [
          ['Studying only grammar', 'You know the rule but do not recognize the sentence when it shows up for real', 'Read and listen to English daily, with grammar as support'],
          ['Subtitles in your language for everything', 'Your eyes read your language and your ears rest', 'English subtitles, or dual subtitles for a short while'],
          ['Lists of loose words', 'The word has no context and fades fast', 'Save each word with the sentence where you found it'],
          ['Big goals at the start', 'Habits take weeks to become automatic (Lally and colleagues, 2010)', 'Start with a few minutes and build up'],
          ['Never writing', 'You understand, but freeze when you have to produce', 'Write one short message in English a day'],
        ],
      },
    },
    {
      id: 'browser',
      h2: 'How do you turn your browser into an English class?',
      body: [
        'You already spend hours in your browser; <strong>Active Immersion</strong> makes those hours count. The extension takes your native language off the screen (blurred, translated into English or removed, depending on the level), shows the translation when you double-click an English word and saves the word with its sentence for review.',
        'It follows the plan above: on day one it asks for a single review, and the goals grow over the first week. When you pick your level (A1 to C2), the extension sets up immersion, explanations and daily goals, and you can change all of it later.',
      ],
      figure: 'lookup',
      after: [
        'The limits: it works in the computer browser (Chrome, Edge, Brave and Firefox 140 or newer), not on phones. To go further, read <a href="' + SITE + 'en/blog/how-to-think-in-english-without-translating/">how to think in English without translating</a>.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'How much time a day do I need to learn English on my own?',
      a: 'Consistency matters more than volume. Start with 5 to 10 minutes of review plus some English throughout the day, and build up. Doing it every day matters more than the number.',
    },
    {
      q: 'Can I learn English on my own for free?',
      a: 'Yes. There is plenty of free content in English: Simple English Wikipedia, videos, podcasts and news. Paid tools save time and organize practice, but they are not required.',
    },
    {
      q: 'Where do I start if I know no English at all?',
      a: 'With the most common words and phrases, using content made for beginners and translation when you need it. At A1, translating helps you understand; the goal is to rely on it less over time.',
    },
    {
      q: 'How long does it take to learn English on your own?',
      a: 'It depends on your starting point, daily time and type of practice, so any fixed deadline is a guess. What you can measure is the habit: according to Lally and colleagues (2010), new routines took a median of 66 days to become automatic.',
    },
  ],
  sources: [
    { label: 'EF English Proficiency Index 2025 (full report)', url: SRC.efReport },
    { label: 'Krashen, S. D. (1982). Principles and Practice in Second Language Acquisition. Pergamon', url: SRC.krashen },
    { label: 'Lally, P. et al. (2010). How are habits formed. European Journal of Social Psychology, 40(6), 998–1009', url: SRC.lally },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
    { label: 'Resnik, P. (2021). Multilinguals’ use of L1 and L2 inner speech. International Journal of Bilingual Education and Bilingualism, 24(1)', url: SRC.resnik },
  ],
  fig: {
    week: {
      label: 'first week',
      days: [
        { day: 'Day 1', plan: 'Save 1 word and review it · 5 min reading English · 1 message' },
        { day: 'Day 2', plan: '5 reviews · 5 min reading · 1 message' },
        { day: 'Day 3', plan: '10 reviews · 8 min reading · 2 messages' },
        { day: 'Day 4', plan: '15 reviews · 12 min reading · 3 messages' },
        { day: 'Day 5', plan: '15 reviews · 12 min reading · 3 messages' },
        { day: 'Day 6', plan: '15 reviews · 12 min reading · 3 messages' },
        { day: 'Day 7', plan: '20 reviews · 15 min reading · 3 messages' },
      ],
      caption: 'The first week in Active Immersion with the B1 goals: it starts almost effortless and grows every day.',
    },
    lookup: { before: 'The instructions were ', word: 'confusing', after: ', so I asked for help.', phonetic: '/kənˈfjuːzɪŋ/', lang: 'Español', translation: 'confusas', save: 'Save with this sentence', caption: 'Double-click an English word: the translation appears and the word is saved with its sentence. Here, for a Spanish speaker.' },
  },
};
