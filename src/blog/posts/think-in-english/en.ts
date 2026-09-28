import type { PostCopy } from '../../types';
import { SRC } from './pt';

export const en: PostCopy = {
  slug: 'how-to-think-in-english-without-translating',
  title: 'How to think in English without translating',
  metaTitle: 'How to Think in English Without Translating (Research)',
  description: 'Translating in your head is normal at first. What research says about thinking in English, and 6 habits that make English come directly, with sources.',
  dek: 'Almost everyone starts by translating every sentence in their head. Research explains why, and what makes English start to come directly.',
  answer:
    'Thinking in English without translating comes from frequent use, not willpower. At first, the brain reaches the meaning of an English word through the word in your own language; with practice, it goes straight there (Kroll and Stewart, 1994). In a study of 167 multilinguals, using the second language often, natural exposure to it and higher proficiency all increased its use in thought (Resnik, 2021). In practice: learn words inside sentences, narrate your day in English and let English fill your screen.',
  sections: [
    {
      id: 'why-translate',
      h2: 'Why does the brain translate at first?',
      body: [
        'Because it is the route it already knows. The Revised Hierarchical Model, proposed by Judith Kroll and Erika Stewart in 1994, describes two routes between a second-language word and its meaning: one through the equivalent word in the first language, and one straight to the concept.',
        'According to the <a href="' + SRC.kroll + '">model</a>, beginners rely more on the translation route. As proficiency grows, the direct links between English words and concepts get stronger, and translation stops being necessary. Translating at first is not a flaw: it is a stage.',
      ],
      figure: 'route',
    },
    {
      id: 'is-it-possible',
      h2: 'Is it really possible to think in English?',
      body: [
        'Yes, and research on inner speech shows what it depends on. In <a href="' + SRC.guerrero + '"><em>Inner Speech – L2</em></a> (2005), María de Guerrero argues that learners can attain inner speech in the second language, given certain learning conditions.',
        'Pia Resnik studied those conditions with 24 interviews and a questionnaire answered by 167 multilinguals. The first language remained the one most used in thought, but <a href="' + SRC.resnik + '">the factors that increased use of the second</a> include using it often, natural exposure to it (outside the classroom) and higher self-rated proficiency.',
        'There is also a normal limit: in a study of 1,454 multilingual adults, Jean-Marc Dewaele found that languages learned later in life are <a href="' + SRC.dewaele + '">used significantly less for emotional inner speech</a> than for inner speech in general. Thinking in your first language when you are angry or moved does not mean you are not progressing.',
      ],
    },
    {
      id: 'how-to-train',
      h2: 'How do you train your brain to think in English?',
      body: ['Six habits that follow what the research points to: more frequency, more natural exposure, and words tied to situations instead of translations.'],
      steps: [
        '<strong>Learn words inside sentences.</strong> Keep “She <em>grabbed</em> her keys and ran” instead of a one-word translation. The sentence ties the word to a scene, which is the direct route to meaning.',
        '<strong>Narrate your day in English.</strong> Quietly or in your head: “I’m making coffee. I forgot my phone.” De Guerrero describes this self-talk as part of how a second language becomes thought.',
        '<strong>Describe before you translate.</strong> When a word is missing, explain it with the words you have: “the thing you use to open a can”. That trains thinking in English instead of hunting for a translation.',
        '<strong>Switch your screens to English.</strong> Phone, browser, social media and YouTube in English raise frequency and natural exposure, the two factors from Resnik’s study.',
        '<strong>Write a little every day.</strong> A message, a comment, a question to ChatGPT. Writing shows you right away what you cannot say yet.',
        '<strong>Review words at the right time.</strong> A meta-analysis by Cepeda and colleagues (2006) showed that <a href="' + SRC.cepeda + '">spacing reviews out</a> improves memory compared with reviewing everything at once.',
      ],
    },
    {
      id: 'how-long',
      h2: 'How long does it take to start thinking in English?',
      body: [
        'There is no number of days. In the studies above, what changes the use of English in thought is proficiency and frequency of use, not a deadline. Be wary of promises like “think in English in 30 days”.',
        'What you can notice is the signal: short English phrases start appearing in your head in situations you live a lot in English (a game, a job, a series). The more parts of your day happen in English, the more situations get that shortcut.',
      ],
    },
    {
      id: 'in-the-browser',
      h2: 'How can your browser help you think in English?',
      body: [
        'Much of your contact with any language today happens on a screen. <strong>Active Immersion</strong> is an extension for Chrome and Firefox that turns that to English’s advantage: your native language on the page is blurred, translated into English or removed, depending on the level you choose.',
        'Double-click an English word to see its translation and save it with the sentence it came from. In reviews, the extension asks you to think of the meaning before you see the answer, which is exactly the practice of going straight to meaning.',
      ],
      figure: 'lookup',
      after: [
        'What you write in English on ChatGPT, Gmail or WhatsApp Web is corrected with explanations. The limits: the extension works in the computer browser (Chrome, Edge, Brave and Firefox 140 or newer), not on phones.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Is it wrong to translate while learning English?',
      a: 'No. At first, translation is the route the brain uses to reach meaning, and it helps you understand. The goal is to rely on it less and less, which comes from frequent practice, not from banning translation.',
    },
    {
      q: 'Do I need to live abroad to think in English?',
      a: 'Not necessarily. In Resnik’s study (2021), what increased use of the second language in thought was frequency of use, natural exposure and proficiency. Living abroad gives you that for free, but you can build much of that contact at home through what you read, watch and write.',
    },
    {
      q: 'Why do I still think in my own language when I am nervous?',
      a: 'Because it is common. Dewaele (2015) found, with 1,454 multilingual adults, that languages learned later in life are used significantly less for emotional inner speech than for inner speech in general.',
    },
    {
      q: 'What English level do I need to start thinking in English?',
      a: 'There is no minimum level to start practising. Short phrases and narrating what you do already work at a basic level. What changes with level is how much you can think in English without getting stuck.',
    },
  ],
  sources: [
    { label: 'Kroll, J. F. and Stewart, E. (1994). Journal of Memory and Language, 33(2), 149–174', url: SRC.kroll },
    { label: 'Resnik, P. (2021). Multilinguals’ use of L1 and L2 inner speech. International Journal of Bilingual Education and Bilingualism, 24(1)', url: SRC.resnik },
    { label: 'Dewaele, J.-M. (2015). From obscure echo to language of the heart. Journal of Pragmatics, 87, 1–17', url: SRC.dewaele },
    { label: 'de Guerrero, M. C. M. (2005). Inner Speech – L2: Thinking Words in a Second Language. Springer', url: SRC.guerrero },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
  ],
  fig: {
    route: { word: 'grab', via: 'your word', meaning: 'the action', slow: 'translating: slower', fast: 'direct: comes with practice', caption: 'Two routes to meaning: through your own language, common at first, or direct, which grows stronger with use.' },
    lookup: { before: 'She ', word: 'grabbed', after: ' her keys and ran to catch the bus.', phonetic: '/ɡræbd/', lang: 'Español', translation: 'agarró (rápido)', save: 'Save with this sentence', caption: 'Double-click an English word: the translation appears and the word is saved with its sentence. Here, for a Spanish speaker.' },
  },
};
