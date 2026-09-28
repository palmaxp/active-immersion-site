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

const pt = {
  meta: {
    title: 'Active Immersion · Aprenda inglês com a internet que você já usa',
    description:
      'Extensão para Chrome e Firefox que esconde o português enquanto você navega, corrige o que você escreve em inglês e transforma palavras novas em revisões de 10 minutos. 7 dias grátis, sem cartão.',
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
      'O Active Immersion esconde o português enquanto você navega, corrige o que você escreve em inglês e transforma palavras novas em revisões rápidas. Uns 10 minutos por dia, sem abrir mais nenhum app.',
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
    h: 'Um dia normal, revisado',
    p: 'Você não muda a rotina. Ela é que muda de idioma. Veja um dia de exemplo:',
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
    h: 'Três mudanças que acontecem sozinhas',
    blocks: [
      {
        h: 'O português sai de cena',
        p: 'Páginas, vídeos, buscas e redes em português ficam borrados, traduzidos ou somem, conforme o nível que você escolher. Precisa do português num site? Um clique libera.',
        levels: ['Nenhum', 'Parcial', 'Total'],
        levelHelp: [
          'Nada é escondido. Só correção, consulta de palavras e revisões.',
          'O português fica borrado ou traduzido, e você clica quando precisa mesmo.',
          'Vídeos, resultados e posts em português somem da tela.',
        ],
        hidden: 'português escondido',
      },
      {
        h: 'Cada mensagem vira uma aula',
        p: 'Escreva em inglês onde você já escreve: ChatGPT, Gmail, WhatsApp Web, Slack. O Writing Coach dá uma nota, mostra o que corrigir e explica o porquê, em português se você quiser. Nunca lê senhas, formulários, bancos ou sites do governo.',
        typed: 'Can you send me the report until friday?',
        fixed: 'Can you send me the report by Friday?',
        why: '“Until” fala de duração; para prazo, use “by”.',
      },
      {
        h: 'Palavras que finalmente ficam',
        p: 'Clique duas vezes em qualquer palavra em inglês: significado, pronúncia e um cartão salvo com a frase onde você a encontrou. A revisão traz cada palavra de volta pouco antes de você esquecer.',
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
    h: 'O que muda em relação ao jeito de sempre',
    rows: [
      { del: 'Estudar em horário marcado, quando der', ins: 'Praticar o dia inteiro, no que você já faz' },
      { del: 'Frases de livro que você nunca vai usar', ins: 'O seu YouTube, os seus e-mails, as suas conversas' },
      { del: 'Correção só quando o professor olhar', ins: 'Correção em cada mensagem que você envia' },
      { del: 'Decorar lista de vocabulário', ins: 'Revisar a palavra no dia certo, com a frase onde você a viu' },
      { del: 'Mais um app para lembrar de abrir', ins: 'Nada para abrir: acontece no navegador' },
    ],
  },
  control: {
    h: 'Você decide quanto inglês aguenta hoje',
    p: 'Cansou? Dá para dar uma pausa, mas a extensão faz você respirar antes e pergunta por quanto tempo. A pausa acaba sozinha. Se quiser se comprometer, o modo compromisso trava o nível por alguns dias.',
    points: ['Liberar o português num site: um clique', 'Pausa com tempo marcado, que volta sozinha', 'Atalho Alt+Shift+I para pausar em qualquer página'],
    alt: 'A tela de pausa da extensão pedindo para respirar antes',
  },
  proof: {
    h: 'Feito por quem está aprendendo do mesmo jeito',
    stars: '5,0 na Chrome Web Store',
    who: 'João · criador do Active Immersion',
    note: 'Eu criei o Active Immersion porque estou aprendendo inglês e queria praticar no que eu já faço todo dia, não só em aula. Uso todos os dias, e o meu professor de inglês achou incrível.',
  },
  price: {
    h: 'Um preço, tudo incluído',
    p: 'Teste tudo por 7 dias, sem cartão. Se fizer sentido, continue.',
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
    h: 'O que é seu continua seu',
    points: [
      'Sem anúncios, sem rastreamento, sem venda de dados.',
      'O texto só vai para a IA quando precisa ser corrigido ou traduzido.',
      'Senhas, formulários, bancos e sites do governo nunca são lidos.',
    ],
    link: 'Ler a política de privacidade',
  },
  faq: {
    h: 'Perguntas antes de instalar',
    items: [
      { q: 'Preciso já saber inglês?', a: 'Ajuda se você entende um pouco (do básico em diante). Você escolhe o seu nível, e as explicações podem vir em português.' },
      { q: 'Funciona no celular?', a: 'Não. É uma extensão para o computador: Chrome, Edge, Brave, Opera e Firefox.' },
      { q: 'O que acontece depois dos 7 dias?', a: 'Para continuar, você assina por R$ 19,90 por mês (US$ 4.99 fora do Brasil). Se não assinar, a extensão para, e as suas palavras e o seu progresso ficam guardados.' },
      { q: 'Preciso de cartão para testar?', a: 'Não. Você cria a conta com o seu e-mail e já usa tudo por 7 dias.' },
      { q: 'Como eu cancelo?', a: 'Na extensão, em Conta → Gerenciar assinatura, quando quiser.' },
      { q: 'E se eu precisar do português em algum site?', a: 'Clique no ícone da extensão e libere o site. Leva um segundo.' },
      { q: 'Minha língua não é o português. Funciona?', a: 'Sim. A extensão funciona com mais de 18 línguas nativas e tem a interface em 19 idiomas.' },
    ],
  },
  final: {
    del: 'Amanhã eu começo.',
    ins: 'Hoje o meu navegador começa por mim.',
    p: '7 dias grátis · sem cartão · cancele quando quiser',
  },
  footer: { privacy: 'Privacidade', contact: 'Contato', rights: 'Active Immersion' },
  mobileBar: 'Funciona no computador',
};

const en: typeof pt = {
  meta: {
    title: 'Active Immersion · Learn English from the internet you already use',
    description:
      'A Chrome and Firefox extension that hides your native language while you browse, corrects the English you write and turns new words into 10-minute reviews. 7 days free, no card.',
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
      'Active Immersion hides your native language while you browse, corrects the English you write and turns new words into quick reviews. About 10 minutes a day, with no extra app to open.',
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
    h: 'An ordinary day, revised',
    p: 'You keep your routine. It just changes language. Here is an example day:',
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
    h: 'Three changes that happen on their own',
    blocks: [
      {
        h: 'Your language gets out of the way',
        p: 'Pages, videos, searches and feeds in your language get blurred, translated or removed, depending on the level you pick. Need your language on a site? One click allows it.',
        levels: ['None', 'Partial', 'Total'],
        levelHelp: [
          'Nothing is hidden. Just corrections, word lookup and reviews.',
          'Your language is blurred or translated, and you click when you really need it.',
          'Videos, results and posts in your language disappear.',
        ],
        hidden: 'your language hidden',
      },
      {
        h: 'Every message becomes a lesson',
        p: 'Write in English where you already write: ChatGPT, Gmail, WhatsApp Web, Slack. The Writing Coach gives a score, shows what to fix and explains why, in your language if you like. It never reads passwords, forms, banks or government sites.',
        typed: 'Can you send me the report until friday?',
        fixed: 'Can you send me the report by Friday?',
        why: '“Until” is about duration; for a deadline, use “by”.',
      },
      {
        h: 'Words that finally stick',
        p: 'Double-click any English word: meaning, pronunciation and a card saved with the sentence you found it in. Reviews bring each word back right before you would forget it.',
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
    h: 'What changes compared with the usual way',
    rows: [
      { del: 'Studying at set times, when you can', ins: 'Practicing all day, in what you already do' },
      { del: 'Textbook sentences you will never use', ins: 'Your YouTube, your email, your conversations' },
      { del: 'Corrections only when a teacher looks', ins: 'Corrections on every message you send' },
      { del: 'Memorizing vocabulary lists', ins: 'Reviewing each word on the right day, with the sentence you saw it in' },
      { del: 'One more app to remember to open', ins: 'Nothing to open: it happens in your browser' },
    ],
  },
  control: {
    h: 'You decide how much English you can take today',
    p: 'Tired? You can take a break, but the extension makes you breathe first and asks for how long. The break ends on its own. Want to commit? Commitment mode locks your level for a few days.',
    points: ['Allow your language on a site: one click', 'Timed breaks that end on their own', 'Alt+Shift+I pauses on any page'],
    alt: 'The extension’s break screen asking you to breathe first',
  },
  proof: {
    h: 'Made by someone learning the same way',
    stars: '5.0 on the Chrome Web Store',
    who: 'João · creator of Active Immersion',
    note: 'I built Active Immersion because I’m learning English and wanted to practice in what I already do every day, not only in class. I use it every day, and my English teacher thought it was amazing.',
  },
  price: {
    h: 'One price, everything included',
    p: 'Try everything for 7 days, no card. If it works for you, keep going.',
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
    h: 'What is yours stays yours',
    points: [
      'No ads, no tracking, no selling data.',
      'Text goes to AI only when it needs correcting or translating.',
      'Passwords, forms, banks and government sites are never read.',
    ],
    link: 'Read the privacy policy',
  },
  faq: {
    h: 'Questions before you install',
    items: [
      { q: 'Do I need to know English already?', a: 'It helps if you understand a little (basic and up). You pick your level, and explanations can come in your language.' },
      { q: 'Does it work on my phone?', a: 'No. It is an extension for your computer: Chrome, Edge, Brave, Opera and Firefox.' },
      { q: 'What happens after the 7 days?', a: 'To keep going, you subscribe for US$ 4.99 a month (R$ 19,90 in Brazil). If you don’t, the extension stops, and your words and progress stay saved.' },
      { q: 'Do I need a card to try it?', a: 'No. Create your account with your email and use everything for 7 days.' },
      { q: 'How do I cancel?', a: 'In the extension, under Account → Manage subscription, whenever you want.' },
      { q: 'What if I need my language on a site?', a: 'Click the extension icon and allow the site. It takes a second.' },
      { q: 'My native language is not Portuguese. Does it work?', a: 'Yes. It works with 18+ native languages and its interface comes in 19 languages.' },
    ],
  },
  final: {
    del: 'I’ll start tomorrow.',
    ins: 'Today my browser starts for me.',
    p: '7 days free · no card · cancel anytime',
  },
  footer: { privacy: 'Privacy', contact: 'Contact', rights: 'Active Immersion' },
  mobileBar: 'Works on your computer',
};

export const COPY: Record<Lang, typeof pt> = { pt, en };
