/*
 * Every word on the landing page, in Portuguese (the main audience) and English.
 * Demonstration content (sites, sentences, counters) is illustrative and labeled as such on the page.
 */

export type Lang = 'pt' | 'en';

export const STORE = {
  chrome: 'https://chromewebstore.google.com/detail/active-immersion-learn-en/edgnngnpnkdgcblhegfmedigdnfahegf?utm_source=site',
  firefox: 'https://addons.mozilla.org/firefox/addon/active-immersion/?utm_source=site',
};

export const CONTACT = 'palmaxp.jp@gmail.com';
export const SITE = 'https://palmaxp.github.io/active-immersion-site/';
export const EF_EPI_BRAZIL = 'https://www.ef.edu/epi/regions/latin-america/brazil/';
export const AUTHOR = { name: 'João Palma', github: 'https://github.com/palmaxp' };
/** Cloudflare Turnstile site key (public) for the extension's sign-in check; empty = check off. */
export const TURNSTILE_SITE_KEY = '';

const pt = {
  meta: {
    title: 'Active Immersion · Aprenda inglês com a internet que você já usa',
    description:
      'Extensão para Chrome e Firefox que esconde o português enquanto você navega, corrige o seu inglês e revisa palavras novas. 7 dias grátis, sem cartão.',
    og: 'og-pt.png',
  },
  nav: { install: 'Instalar', switchTo: 'English', switchLabel: 'Read this page in English' },
  cta: {
    chrome: 'Adicionar ao Chrome',
    firefox: 'Adicionar ao Firefox',
    edge: 'Adicionar ao Edge',
    opera: 'Adicionar ao Opera',
    sub: '7 dias grátis',
    otherChrome: 'Usa Chrome, Edge ou Brave?',
    otherFirefox: 'Usa Firefox?',
    mobile: 'Mandar o link para o meu computador',
    mobileNote: 'A extensão funciona no computador (Chrome, Edge, Brave e Firefox).',
    copied: 'Link copiado. Abra no computador.',
  },
  hero: {
    del: 'Aprenda inglês estudando.',
    ins: 'Aprenda inglês com a internet que você já usa.',
    lead:
      'O Active Immersion é uma extensão para Chrome e Firefox que esconde o português enquanto você navega, corrige o que você escreve em inglês e transforma palavras novas em revisões rápidas. Uns 10 minutos por dia, sem abrir mais nenhum app.',
    ready: 'Pronto para instalar',
    checks: ['7 dias grátis, com tudo liberado', 'Sem cartão para começar', 'Cancele quando quiser'],
    rating: '5,0 na Chrome Web Store',
    panelTitle: 'Sites alterados',
    example: 'exemplo',
    counters: ['inglês hoje', 'palavras', 'sequência'],
    counterUnits: ['min', '', 'dias'],
  },
  sites: [
    {
      host: 'youtube.com',
      lines: [
        { t: 'del', text: '10 hábitos simples que vão mudar a sua rotina' , tag: 'dublado automaticamente' },
        { t: 'ctx', text: 'How I learned English by watching series' },
        { t: 'ins', text: '10 simple habits that will change your routine' },
      ],
      note: 'Vídeos em português e dublados automaticamente saem da sua lista.',
    },
    {
      host: 'mail.google.com',
      lines: [
        { t: 'del', text: 'I have went to the meeting yesterday.' },
        { t: 'ins', text: 'I went to the meeting yesterday.' },
      ],
      note: 'Com “yesterday”, use o passado simples: “went”.',
      score: 86,
    },
    {
      host: 'chatgpt.com',
      lines: [
        { t: 'del', text: 'Me explica como funciona isso?' },
        { t: 'ins', text: 'Can you explain how this works?' },
      ],
      note: 'Escreveu em português? Ele sugere dizer em inglês, e você digita.',
    },
  ],
  day: {
    h: 'Como é um dia usando o Active Immersion?',
    p: 'Com o Active Immersion, a rotina continua a mesma e só o idioma muda: o YouTube, o Gmail, a Wikipedia e o ChatGPT que você já usa viram prática de inglês. Veja um dia de exemplo:',
    label: 'dia de exemplo',
    items: [
      { time: '08:10', place: 'YouTube', del: 'Recomendações em português', ins: 'Só vídeos em inglês, sem os dublados automaticamente' },
      { time: '09:40', place: 'Gmail', del: 'I am agree with your proposal.', ins: 'I agree with your proposal.', note: '“Agree” já é verbo.' },
      { time: '12:30', place: 'Wikipedia', del: 'Parar para procurar a palavra no tradutor', ins: 'Clique duplo em “struggle”: significado, pronúncia e cartão salvo' },
      { time: '15:15', place: 'ChatGPT', del: 'Pergunta em português', ins: 'Pergunta em inglês, com uma dica quando você trava' },
      { time: '21:30', place: 'Revisão', del: 'Esquecer tudo até o fim da semana', ins: '10 minutos de revisão, e a sequência sobe para 25 dias' },
    ],
  },
  how: {
    h: 'Como o Active Immersion funciona?',
    a: 'O Active Immersion é uma extensão de navegador que faz três coisas automaticamente em qualquer site: esconde o português em três níveis (Nenhum, Parcial e Total), corrige o inglês que você escreve com o Writing Coach e salva palavras novas para revisar com repetição espaçada (algoritmo FSRS).',
    blocks: [
      {
        h: 'Como o Active Immersion esconde o português?',
        p: 'O Active Immersion detecta o português no próprio navegador e, conforme o nível escolhido, deixa o texto borrado, traduzido ou remove vídeos, resultados e posts, inclusive os vídeos dublados automaticamente no YouTube. Para usar o português num site, um clique no ícone da extensão libera o site.',
        levels: ['Nenhum', 'Parcial', 'Total'],
        levelHelp: [
          'Nada é escondido. Só correção, consulta de palavras e revisões.',
          'O português fica borrado ou traduzido, e você clica quando precisa mesmo.',
          'Vídeos, resultados e posts em português somem da tela.',
        ],
        hidden: 'português escondido',
      },
      {
        h: 'Como o Writing Coach corrige o meu inglês?',
        p: 'O Writing Coach do Active Immersion lê as mensagens em inglês que você envia no ChatGPT, Gmail, WhatsApp Web, Slack e outros sites, dá uma nota de 0 a 100, mostra cada correção e explica o porquê, em português se você quiser. O Writing Coach nunca lê senhas, formulários, bancos ou sites do governo.',
        typed: 'Can you send me the report until friday?',
        fixed: 'Can you send me the report by Friday?',
        why: '“Until” fala de duração; para prazo, use “by”.',
      },
      {
        h: 'Como o Active Immersion ajuda a lembrar as palavras?',
        p: 'No Active Immersion, um clique duplo em qualquer palavra em inglês mostra significado, pronúncia e um exemplo, e salva um cartão com a frase onde você encontrou a palavra. A revisão usa repetição espaçada (FSRS) para trazer cada palavra de volta pouco antes de você esquecer.',
        sentence: 'Most adults struggle with a new language because they only meet it in class.',
        word: 'struggle',
        meaning: 'ter dificuldade, lutar',
        def: 'to try hard to do something that is difficult',
        show: 'Mostrar resposta',
        ratings: ['De novo', 'Difícil', 'Bom', 'Fácil'],
        back: ['volta em minutos', 'volta amanhã', 'volta em dias', 'volta em semanas'],
        save: 'Salvar com esta frase',
        saved: 'Salvo para revisar hoje',
        hint: 'Clique duas vezes numa palavra',
      },
    ],
    shots: { alt: ['A extensão mostrando o significado de uma palavra numa página', 'O Writing Coach corrigindo uma mensagem', 'Uma revisão de palavra'] },
  },
  versus: {
    h: 'Qual é a diferença entre o Active Immersion e um curso ou app de inglês?',
    a: 'A diferença está em onde a prática acontece: cursos e apps de lição criam um horário separado para estudar, e o Active Immersion transforma o que você já faz no navegador em prática de inglês. Isso pesa no Brasil, que está na faixa de baixa proficiência do EF English Proficiency Index 2025, com 482 pontos.',
    source: 'Fonte: EF EPI 2025, Brasil',
    cols: ['Jeito de sempre', 'Com o Active Immersion'],
    rows: [
      { del: 'Estudar em horário marcado, quando der', ins: 'Praticar o dia inteiro, no que você já faz' },
      { del: 'Frases de livro que você nunca vai usar', ins: 'O seu YouTube, os seus e-mails, as suas conversas' },
      { del: 'Correção só quando o professor olhar', ins: 'Correção em cada mensagem que você envia' },
      { del: 'Decorar lista de vocabulário', ins: 'Revisar a palavra no dia certo, com a frase onde você a viu' },
      { del: 'Mais um app para lembrar de abrir', ins: 'Nada para abrir: acontece no navegador' },
    ],
  },
  control: {
    h: 'Dá para pausar o Active Immersion?',
    p: 'Sim. O Active Immersion permite pausas de 5, 10 ou 15 minutos (ou mais), mas pede alguns segundos de respiração antes e encerra a pausa sozinho. O modo compromisso trava o nível por alguns dias, e liberar o português num site continua sendo um clique.',
    points: ['Liberar o português num site: um clique', 'Pausa com tempo marcado, que volta sozinha', 'Atalho Alt+Shift+I para pausar em qualquer página'],
    alt: 'A tela de pausa da extensão pedindo para respirar antes',
  },
  proof: {
    h: 'Quem criou o Active Immersion?',
    a: 'O Active Immersion foi criado por João Palma, que está aprendendo inglês com a própria extensão.',
    stars: '5,0 na Chrome Web Store',
    who: 'João · criador do Active Immersion',
    note: 'Eu criei o Active Immersion porque estou aprendendo inglês e queria praticar no que eu já faço todo dia, não só em aula. Uso todos os dias, e o meu professor de inglês achou incrível.',
  },
  price: {
    h: 'Quanto custa o Active Immersion?',
    p: 'O Active Immersion custa R$ 19,90 por mês no Brasil e US$ 4.99 por mês nos outros países, depois de 7 dias grátis com tudo liberado e sem cartão. A assinatura é cobrada pelo Stripe e pode ser cancelada quando você quiser.',
    amount: 'R$ 19,90',
    per: '/mês',
    daily: 'menos de R$ 0,67 por dia',
    abroad: 'Fora do Brasil: US$ 4.99/mês',
    checks: ['7 dias grátis, com tudo liberado', 'Sem cartão para começar', 'Correções e traduções com IA todo dia', 'Revisões, missões diárias e Insights', 'Cancele quando quiser'],
    button: 'Começar os 7 dias grátis',
    passed: 'Todas as verificações passaram',
    tag: 'passou',
    history: [
      ['Dia 1', 'Você cria a conta com o seu e-mail e os 7 dias grátis começam. Sem cartão.'],
      ['Dias 1–7', 'Tudo liberado: imersão, correções, revisões e Insights.'],
      ['Dia 7', 'Você decide: assina por R$ 19,90/mês ou deixa a extensão parar.'],
      ['Sempre', 'Cancela em Conta → Gerenciar assinatura.'],
    ],
  },
  privacy: {
    h: 'O Active Immersion é seguro para os meus dados?',
    a: 'Sim. O Active Immersion não mostra anúncios, não usa rastreamento e não vende dados; o texto só vai para a IA quando precisa ser corrigido ou traduzido.',
    points: [
      'Sem anúncios, sem rastreamento, sem venda de dados.',
      'O texto só vai para a IA quando precisa ser corrigido ou traduzido.',
      'Senhas, formulários, bancos e sites do governo nunca são lidos.',
    ],
    link: 'Ler a política de privacidade',
  },
  faq: {
    h: 'Perguntas frequentes sobre o Active Immersion',
    items: [
      { q: 'Preciso já saber inglês para usar o Active Immersion?', a: 'O Active Immersion funciona melhor para quem já entende um pouco de inglês, do nível A2 ao C1. Você escolhe o seu nível na extensão, e as explicações do Writing Coach podem vir em português.' },
      { q: 'O Active Immersion funciona no celular?', a: 'Não. O Active Immersion é uma extensão para computador: funciona no Chrome, no Edge e no Brave pela Chrome Web Store, e no Firefox a partir da versão 140.' },
      { q: 'O que acontece depois dos 7 dias grátis?', a: 'Depois dos 7 dias, o Active Immersion pede uma assinatura de R$ 19,90 por mês (US$ 4.99 fora do Brasil). Sem assinatura, a extensão para de funcionar, e as suas palavras e o seu progresso ficam guardados na sua conta.' },
      { q: 'Preciso de cartão para testar o Active Immersion?', a: 'Não. O teste de 7 dias do Active Immersion começa quando você cria a conta com o seu e-mail, sem cartão.' },
      { q: 'Quantas correções de IA o Active Immersion faz por dia?', a: 'Durante o teste, o Active Immersion faz até 50 correções e traduções com IA por dia; no plano Pro, até 300 por dia.' },
      { q: 'Como cancelo a assinatura do Active Immersion?', a: 'Na extensão, em Conta → Gerenciar assinatura, você abre o portal do Stripe e cancela quando quiser.' },
      { q: 'E se eu precisar do português em algum site?', a: 'Clique no ícone do Active Immersion e permita o português naquele site. O site fica liberado até você mudar de ideia.' },
      { q: 'O Active Immersion funciona se a minha língua não for o português?', a: 'Sim. O Active Immersion funciona com mais de 18 línguas nativas e tem a interface em 19 idiomas.' },
    ],
  },
  final: {
    del: 'Amanhã eu começo.',
    ins: 'Hoje o meu navegador começa por mim.',
    p: '7 dias grátis · sem cartão · cancele quando quiser',
  },
  footer: { privacy: 'Privacidade', contact: 'Contato', rights: 'Active Immersion' },
  byline: {
    by: 'Por João Palma, criador do Active Immersion',
    updated: 'Atualizado em 27 de setembro de 2026 · extensão na versão 2.0.12',
  },
  mobileBar: 'Funciona no computador',
};

const en: typeof pt = {
  meta: {
    title: 'Active Immersion · Learn English from the internet you already use',
    description:
      'Chrome and Firefox extension that hides your native language as you browse, corrects your English and reviews new words. 7 days free, no card.',
    og: 'og-en.png',
  },
  nav: { install: 'Install', switchTo: 'Português', switchLabel: 'Ler esta página em português' },
  cta: {
    chrome: 'Add to Chrome',
    firefox: 'Add to Firefox',
    edge: 'Add to Edge',
    opera: 'Add to Opera',
    sub: '7 days free',
    otherChrome: 'On Chrome, Edge or Brave?',
    otherFirefox: 'On Firefox?',
    mobile: 'Send the link to my computer',
    mobileNote: 'The extension runs on your computer (Chrome, Edge, Brave and Firefox).',
    copied: 'Link copied. Open it on your computer.',
  },
  hero: {
    del: 'Learn English by studying.',
    ins: 'Learn English from the internet you already use.',
    lead:
      'Active Immersion is a Chrome and Firefox extension that hides your native language while you browse, corrects the English you write and turns new words into quick reviews. About 10 minutes a day, with no extra app to open.',
    ready: 'Ready to install',
    checks: ['7 days free, everything included', 'No card to start', 'Cancel anytime'],
    rating: '5.0 on the Chrome Web Store',
    panelTitle: 'Sites changed',
    example: 'example',
    counters: ['English today', 'words', 'streak'],
    counterUnits: ['min', '', 'days'],
  },
  sites: [
    {
      host: 'youtube.com',
      lines: [
        { t: 'del', text: '10 hábitos simples que vão mudar a sua rotina', tag: 'auto-dubbed' },
        { t: 'ctx', text: 'How I learned English by watching series' },
        { t: 'ins', text: '10 simple habits that will change your routine' },
      ],
      note: 'Videos in your language, and auto-dubbed ones, leave your feed.',
    },
    {
      host: 'mail.google.com',
      lines: [
        { t: 'del', text: 'I have went to the meeting yesterday.' },
        { t: 'ins', text: 'I went to the meeting yesterday.' },
      ],
      note: 'With “yesterday”, use the simple past: “went”.',
      score: 86,
    },
    {
      host: 'chatgpt.com',
      lines: [
        { t: 'del', text: 'Me explica como funciona isso?' },
        { t: 'ins', text: 'Can you explain how this works?' },
      ],
      note: 'Typed in your language? It suggests the English, and you retype it.',
    },
  ],
  day: {
    h: 'What is a day with Active Immersion like?',
    p: 'With Active Immersion, your routine stays the same and only the language changes: the YouTube, Gmail, Wikipedia and ChatGPT you already use become English practice. Here is an example day:',
    label: 'example day',
    items: [
      { time: '08:10', place: 'YouTube', del: 'Recommendations in your language', ins: 'Only English videos, without the auto-dubbed ones' },
      { time: '09:40', place: 'Gmail', del: 'I am agree with your proposal.', ins: 'I agree with your proposal.', note: '“Agree” is already a verb.' },
      { time: '12:30', place: 'Wikipedia', del: 'Stopping to look a word up in a translator', ins: 'Double-click “struggle”: meaning, pronunciation and a saved card' },
      { time: '15:15', place: 'ChatGPT', del: 'Asking in your language', ins: 'Asking in English, with a hint when you get stuck' },
      { time: '21:30', place: 'Review', del: 'Forgetting it all by the weekend', ins: '10 minutes of review, and the streak climbs to 25 days' },
    ],
  },
  how: {
    h: 'How does Active Immersion work?',
    a: 'Active Immersion is a browser extension that does three things automatically on any site: it hides your native language at three levels (None, Partial and Total), corrects the English you write with the Writing Coach, and saves new words for spaced-repetition review (the FSRS algorithm).',
    blocks: [
      {
        h: 'How does Active Immersion hide my native language?',
        p: 'Active Immersion detects your native language inside the browser and, depending on the level you pick, blurs it, translates it or removes videos, results and posts, including YouTube’s auto-dubbed videos. To use your language on a site, one click on the extension icon allows that site.',
        levels: ['None', 'Partial', 'Total'],
        levelHelp: [
          'Nothing is hidden. Just corrections, word lookup and reviews.',
          'Your language is blurred or translated, and you click when you really need it.',
          'Videos, results and posts in your language disappear.',
        ],
        hidden: 'your language hidden',
      },
      {
        h: 'How does the Writing Coach correct my English?',
        p: 'The Active Immersion Writing Coach reads the English messages you send on ChatGPT, Gmail, WhatsApp Web, Slack and other sites, gives a score from 0 to 100, shows each fix and explains why, in your language if you like. The Writing Coach never reads passwords, forms, banks or government sites.',
        typed: 'Can you send me the report until friday?',
        fixed: 'Can you send me the report by Friday?',
        why: '“Until” is about duration; for a deadline, use “by”.',
      },
      {
        h: 'How does Active Immersion help me remember words?',
        p: 'In Active Immersion, double-clicking any English word shows its meaning, pronunciation and an example, and saves a card with the sentence you found it in. Reviews use spaced repetition (FSRS) to bring each word back right before you would forget it.',
        sentence: 'Most adults struggle with a new language because they only meet it in class.',
        word: 'struggle',
        meaning: 'to have a hard time with something',
        def: 'to try hard to do something that is difficult',
        show: 'Show answer',
        ratings: ['Again', 'Hard', 'Good', 'Easy'],
        back: ['back in minutes', 'back tomorrow', 'back in days', 'back in weeks'],
        save: 'Save with this sentence',
        saved: 'Saved for today’s review',
        hint: 'Double-click a word',
      },
    ],
    shots: { alt: ['The extension showing the meaning of a word on a page', 'The Writing Coach correcting a message', 'A word review'] },
  },
  versus: {
    h: 'How is Active Immersion different from an English course or app?',
    a: 'The difference is where practice happens: courses and lesson apps create a separate time to study, while Active Immersion turns what you already do in your browser into English practice. For context, Brazil sits in the low-proficiency band of the EF English Proficiency Index 2025, with a score of 482.',
    source: 'Source: EF EPI 2025, Brazil',
    cols: ['The usual way', 'With Active Immersion'],
    rows: [
      { del: 'Studying at set times, when you can', ins: 'Practicing all day, in what you already do' },
      { del: 'Textbook sentences you will never use', ins: 'Your YouTube, your email, your conversations' },
      { del: 'Corrections only when a teacher looks', ins: 'Corrections on every message you send' },
      { del: 'Memorizing vocabulary lists', ins: 'Reviewing each word on the right day, with the sentence you saw it in' },
      { del: 'One more app to remember to open', ins: 'Nothing to open: it happens in your browser' },
    ],
  },
  control: {
    h: 'Can I pause Active Immersion?',
    p: 'Yes. Active Immersion allows breaks of 5, 10 or 15 minutes (or longer), asks for a few seconds of breathing first and ends the break on its own. Commitment mode locks your level for a few days, and allowing your language on a site is still one click.',
    points: ['Allow your language on a site: one click', 'Timed breaks that end on their own', 'Alt+Shift+I pauses on any page'],
    alt: 'The extension’s break screen asking you to breathe first',
  },
  proof: {
    h: 'Who made Active Immersion?',
    a: 'Active Immersion was created by João Palma, who is learning English with Active Immersion.',
    stars: '5.0 on the Chrome Web Store',
    who: 'João · creator of Active Immersion',
    note: 'I built Active Immersion because I’m learning English and wanted to practice in what I already do every day, not only in class. I use it every day, and my English teacher thought it was amazing.',
  },
  price: {
    h: 'How much does Active Immersion cost?',
    p: 'Active Immersion costs US$ 4.99 a month (R$ 19,90 in Brazil) after a 7-day free trial with everything included and no card. The subscription is billed through Stripe and can be cancelled anytime.',
    amount: 'US$ 4.99',
    per: '/month',
    daily: 'about 17 cents a day',
    abroad: 'In Brazil: R$ 19,90/month',
    checks: ['7 days free, everything included', 'No card to start', 'AI corrections and translations every day', 'Reviews, daily missions and Insights', 'Cancel anytime'],
    button: 'Start the 7 free days',
    passed: 'All checks passed',
    tag: 'passed',
    history: [
      ['Day 1', 'You create your account with your email and the 7 free days start. No card.'],
      ['Days 1–7', 'Everything included: immersion, corrections, reviews and Insights.'],
      ['Day 7', 'You decide: subscribe for US$ 4.99/month or let the extension stop.'],
      ['Anytime', 'Cancel under Account → Manage subscription.'],
    ],
  },
  privacy: {
    h: 'Is Active Immersion safe for my data?',
    a: 'Yes. Active Immersion shows no ads, uses no tracking and sells no data; text goes to AI only when it needs to be corrected or translated.',
    points: [
      'No ads, no tracking, no selling data.',
      'Text goes to AI only when it needs correcting or translating.',
      'Passwords, forms, banks and government sites are never read.',
    ],
    link: 'Read the privacy policy',
  },
  faq: {
    h: 'Frequently asked questions about Active Immersion',
    items: [
      { q: 'Do I need to know some English to use Active Immersion?', a: 'Active Immersion works best if you already understand some English, from level A2 to C1. You pick your level in the extension, and Writing Coach explanations can come in your native language.' },
      { q: 'Does Active Immersion work on my phone?', a: 'No. Active Immersion is a desktop browser extension: it works on Chrome, Edge and Brave through the Chrome Web Store, and on Firefox 140 or newer.' },
      { q: 'What happens after the 7-day free trial?', a: 'After 7 days, Active Immersion asks for a subscription of US$ 4.99 a month (R$ 19,90 in Brazil). Without one, the extension stops working, and your words and progress stay saved in your account.' },
      { q: 'Do I need a card to try Active Immersion?', a: 'No. The Active Immersion 7-day trial starts when you create your account with your email, with no card.' },
      { q: 'How many AI corrections does Active Immersion make per day?', a: 'During the trial, Active Immersion makes up to 50 AI corrections and translations a day; on the Pro plan, up to 300 a day.' },
      { q: 'How do I cancel my Active Immersion subscription?', a: 'In the extension, under Account → Manage subscription, you open the Stripe portal and cancel whenever you want.' },
      { q: 'What if I need my native language on a site?', a: 'Click the Active Immersion icon and allow your language on that site. The site stays allowed until you change your mind.' },
      { q: 'Does Active Immersion work if my native language is not Portuguese?', a: 'Yes. Active Immersion works with 18+ native languages and its interface comes in 19 languages.' },
    ],
  },
  final: {
    del: 'I’ll start tomorrow.',
    ins: 'Today my browser starts for me.',
    p: '7 days free · no card · cancel anytime',
  },
  footer: { privacy: 'Privacy', contact: 'Contact', rights: 'Active Immersion' },
  byline: {
    by: 'By João Palma, creator of Active Immersion',
    updated: 'Updated September 27, 2026 · extension version 2.0.12',
  },
  mobileBar: 'Works on your computer',
};

export const COPY: Record<Lang, typeof pt> = { pt, en };
