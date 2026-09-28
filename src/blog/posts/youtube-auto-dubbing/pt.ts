import type { PostCopy } from '../../types';

const help = 'https://support.google.com/youtube/answer/15569972?hl=pt-BR';
const prefs = 'https://support.google.com/youtube/answer/13339776?hl=pt-BR';
const tc = 'https://techcrunch.com/2024/12/10/youtubes-new-auto-dubbing-feature-is-now-available-for-knowledge-focused-content/';

export const pt: PostCopy = {
  slug: 'como-desativar-dublagem-automatica-youtube',
  title: 'Como desativar a dublagem automática do YouTube',
  metaTitle: 'Como desativar a dublagem automática do YouTube (2026)',
  description: 'A dublagem automática do YouTube troca a voz original por uma voz de IA. Veja como voltar ao áudio original no PC, no celular e na TV, e como evitar de vez.',
  dek: 'O YouTube passou a dublar vídeos com inteligência artificial. Para quem está aprendendo inglês, isso tira justamente a parte que ensina: a voz original.',
  answer:
    'Em setembro de 2026, o YouTube não tem um botão para desligar a dublagem automática de uma vez. Em cada vídeo, dá para voltar ao áudio original em <b class="ui">Configurações</b> → <b class="ui">Faixa de áudio</b> → a faixa marcada como <b class="ui">original</b>. Para os próximos vídeos, adicione o inglês aos seus <b class="ui">idiomas preferidos</b>: segundo a ajuda do YouTube, vídeos gravados em um idioma preferido não são dublados.',
  howTo: {
    name: 'Como voltar ao áudio original de um vídeo dublado no YouTube',
    steps: [
      'Abra o vídeo e clique no ícone de engrenagem (Configurações) no player.',
      'Clique em Faixa de áudio.',
      'Escolha a faixa com “original” no nome, por exemplo “Inglês (original)”.',
    ],
  },
  sections: [
    {
      id: 'o-que-e',
      h2: 'O que é a dublagem automática do YouTube?',
      body: [
        'A dublagem automática é um recurso do YouTube que cria, com inteligência artificial, uma versão do áudio do vídeo em outros idiomas. O YouTube detecta o idioma em que o vídeo foi gravado e gera as faixas dubladas sozinho, e os vídeos com esse áudio aparecem com o aviso <b class="ui">Dublado automaticamente</b>.',
        'O recurso foi liberado em dezembro de 2024 para canais de conteúdo informativo, como vídeos que ensinam a cozinhar ou a costurar, e usa o Gemini, a IA do Google, segundo o <a href="' + tc + '">TechCrunch</a>. Na época, o YouTube disse que pretendia levar a dublagem a outros tipos de conteúdo.',
        'A dublagem não vem sozinha: pela <a href="' + prefs + '">ajuda do YouTube</a>, a preferência de idioma vale para o áudio, o título e a descrição. Por isso um vídeo gravado em inglês pode chegar à sua página inicial com título em português e uma voz de IA falando português.',
      ],
      figure: 'badge',
    },
    {
      id: 'por-que-atrapalha',
      h2: 'Por que a dublagem automática atrapalha quem está aprendendo inglês?',
      body: [
        'Porque ela troca exatamente o que você precisa ouvir. Um vídeo em inglês é prática de listening de graça: sotaque real, ritmo real e as expressões que as pessoas usam de verdade. Com a dublagem, você ouve uma voz sintética em português e perde tudo isso, muitas vezes sem perceber, porque o título também chega traduzido.',
        'E a tradução pode errar. A <a href="' + help + '">ajuda do YouTube</a> avisa que as dublagens podem ter erros por causa de pronúncia, sotaque, dialeto ou ruído de fundo. No lançamento, o próprio YouTube reconheceu que às vezes a tradução não fica certa ou a voz não representa bem quem está falando.',
      ],
    },
    {
      id: 'no-computador',
      h2: 'Como voltar para o áudio original de um vídeo no computador?',
      body: ['Leva três cliques, direto no player do vídeo:'],
      steps: [
        'Abra o vídeo e clique na engrenagem de <b class="ui">Configurações</b>, no canto do player.',
        'Clique em <b class="ui">Faixa de áudio</b>.',
        'Escolha a faixa com <b class="ui">original</b> no nome, por exemplo <b class="ui">Inglês (original)</b>.',
      ],
      figure: 'menu',
      after: ['Isso vale só para aquele vídeo. Se o próximo também estiver dublado, é preciso trocar de novo, e é por isso que o ajuste dos idiomas preferidos, mais abaixo, faz diferença.'],
    },
    {
      id: 'celular-e-tv',
      h2: 'Como tirar a dublagem automática no celular e na TV?',
      body: [
        'No app do YouTube para Android e iPhone, o caminho é o mesmo do computador: toque no vídeo, toque na engrenagem de <b class="ui">Configurações</b> e escolha <b class="ui">Faixa de áudio</b>. Nos Shorts, a opção fica no menu de três pontos.',
        'Na TV, mostre os controles do player com o controle remoto, vá até a engrenagem e procure <b class="ui">Faixa de áudio</b> ou <b class="ui">Áudio</b>. O nome muda um pouco entre Android TV, Google TV, Samsung, LG e Roku, mas o caminho é parecido.',
      ],
    },
    {
      id: 'de-vez',
      h2: 'Tem como desativar a dublagem automática do YouTube de vez?',
      body: [
        'Não existe um botão para isso, mas um ajuste resolve boa parte: os idiomas preferidos. A <a href="' + prefs + '">ajuda do YouTube</a> diz que conteúdo com áudio original em um dos seus idiomas preferidos não é traduzido e toca com o áudio original. Se você adicionar o inglês, vídeos gravados em inglês param de chegar dublados.',
        'No computador:',
      ],
      steps: [
        'Clique na sua foto de perfil e depois em <b class="ui">Configurações</b>.',
        'Abra <b class="ui">Reprodução e desempenho</b>.',
        'Em <b class="ui">Idioma</b>, clique em <b class="ui">Adicionar ou editar idiomas</b>.',
        'Marque o inglês (e outros idiomas que você entende) e clique em <b class="ui">Confirmar</b>.',
      ],
      figure: 'prefs',
      after: [
        'No celular: foto de perfil → <b class="ui">Configurações</b> → <b class="ui">Idiomas</b> → <b class="ui">Idiomas preferidos</b>.',
        'Um limite importante: segundo o YouTube, esse ajuste é separado do idioma do app e da sua região, e não muda a busca nem as recomendações. A página inicial continua cheia de vídeos em português.',
      ],
    },
    {
      id: 'pagina-inicial',
      h2: 'Como tirar os vídeos dublados da página inicial do YouTube?',
      body: [
        'Pelas configurações do YouTube, não dá. É aqui que entra o <strong>Active Immersion</strong>, uma extensão para Chrome e Firefox feita para aprender inglês com a internet que você já usa.',
        'Com a imersão ligada, o Active Immersion tira da lista os vídeos com o selo de dublagem automática: na página inicial, no <b class="ui">A seguir</b>, na busca e na prateleira de Shorts. Sobram os vídeos com a voz original.',
      ],
      figure: 'feed',
      after: [
        'A extensão cuida também do resto da tela: títulos, resultados e posts em português ficam borrados, traduzidos para o inglês ou somem, conforme o nível escolhido (Parcial ou Total). E as mensagens que você escreve em inglês no ChatGPT, no Gmail ou no WhatsApp Web ganham correção com explicação.',
        'O que ela não faz: o Active Immersion funciona no navegador do computador (Chrome, Edge, Brave e Firefox 140 ou mais novo), não no app do celular nem da TV, e não troca o áudio de um vídeo que você abre direto por um link. Para esses casos, use os passos acima.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Por que o título do vídeo aparece em português se o vídeo é em inglês?',
      a: 'Porque a tradução automática do YouTube vale para o áudio, o título e a descrição. Quando o inglês está nos seus idiomas preferidos, vídeos gravados em inglês mantêm o título e o áudio originais.',
    },
    {
      q: 'Quem publicou o vídeo pode desligar a dublagem automática?',
      a: 'Sim. No YouTube Studio, em Configurações → Canal → Configurações avançadas, o criador pode desmarcar a opção que permite a dublagem automática. Aí os novos vídeos do canal deixam de ser dublados.',
    },
    {
      q: 'A dublagem automática existe em quais idiomas?',
      a: 'Quando foi lançada, em dezembro de 2024, cobria inglês, espanhol, francês, alemão, hindi, indonésio, italiano, japonês e português, e a lista cresceu depois. A lista atual fica na ajuda do YouTube sobre dublagem automática.',
    },
    {
      q: 'O Active Immersion é grátis?',
      a: 'O Active Immersion tem 7 dias grátis com tudo liberado e sem cartão. Depois, custa R$ 19,90 por mês no Brasil (US$ 4.99 nos outros países) e pode ser cancelado quando você quiser.',
    },
  ],
  sources: [
    { label: 'Ajuda do YouTube: Usar a dublagem automática', url: help },
    { label: 'Ajuda do YouTube: Assistir a vídeos no seu idioma preferido', url: prefs },
    { label: 'TechCrunch, 10 dez. 2024: YouTube’s new auto-dubbing feature is now available for knowledge-focused content', url: tc },
  ],
  fig: {
    badge: {
      cards: [
        { title: '10 hábitos simples que vão mudar a sua rotina', channel: 'Canal em inglês', badge: 'Dublado automaticamente' },
        { title: 'How I learned English by watching series', channel: 'Canal em inglês' },
      ],
      pointer: 'o título chega traduzido e o áudio, dublado',
      caption: 'Vídeos dublados aparecem com o selo “Dublado automaticamente” e, muitas vezes, com o título traduzido.',
    },
    menu: {
      settings: 'Configurações',
      rows: [['Legendas', 'Desativadas'], ['Velocidade', 'Normal'], ['Qualidade', 'Automática']],
      audio: 'Faixa de áudio',
      dubbed: 'Português (dublado automaticamente)',
      original: 'Inglês (original)',
      other: 'Español (dublado automaticamente)',
      caption: 'No player: Configurações → Faixa de áudio → a faixa marcada como original.',
    },
    prefs: {
      path: 'Configurações › Reprodução e desempenho',
      heading: 'Idiomas preferidos',
      have: 'Português',
      add: 'Inglês',
      confirm: 'Confirmar',
      caption: 'Com o inglês nos idiomas preferidos, vídeos gravados em inglês tocam com o áudio original.',
    },
    feed: {
      label: 'youtube.com, com o Active Immersion',
      removed: 'dublado · removido',
      rows: [
        { title: '10 hábitos simples que vão mudar a sua rotina', dubbed: true },
        { title: 'How I learned English by watching series' },
        { title: 'Por que você ainda não fala inglês', dubbed: true },
        { title: 'A day in my life in London' },
      ],
      caption: 'Os vídeos com o selo de dublagem saem da lista e ficam os vídeos com a voz original.',
    },
  },
};
