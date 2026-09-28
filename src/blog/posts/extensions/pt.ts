import type { PostCopy } from '../../types';
import { SITE } from '../../../i18n/copy';

export const SRC = {
  reactorStore: 'https://chromewebstore.google.com/detail/language-reactor/hoombieeljmmljlkjmnheibnpciblicm',
  reactorFaq: 'https://www.languagereactor.com/help/faq',
  toucan: 'https://support.babbel.com/hc/en-us/articles/18269893246738-Toucan-browser-extension',
  cepeda: 'https://doi.org/10.1037/0033-2909.132.3.354',
};

export const pt: PostCopy = {
  slug: 'extensao-chrome-para-aprender-ingles',
  title: 'Extensão do Chrome para aprender inglês: qual escolher',
  metaTitle: 'Extensão do Chrome para aprender inglês: 5 tipos comparados',
  description: 'Legendas duplas, troca de palavras, corretor, tradutor ou imersão: o que cada tipo de extensão para aprender inglês faz, para quem serve e os limites.',
  dek: 'Existem extensões para séries, para vocabulário, para escrita e para tirar o português da tela. Cada tipo resolve uma parte diferente do problema.',
  answer:
    'Não existe uma extensão que faça tudo: escolha pelo que você mais faz no navegador. Para séries e vídeos, extensões de legendas duplas, como o Language Reactor. Para um primeiro contato com vocabulário, as que trocam algumas palavras da página, como o Toucan, da Babbel. Para escrever melhor, corretores como Grammarly e LanguageTool. Tradutores ajudam a entender, mas não ensinam. E extensões de imersão, como o Active Immersion, tiram o português da tela e juntam correção e revisão de palavras.',
  sections: [
    {
      id: 'tipos',
      h2: 'Que tipos de extensão existem para aprender inglês?',
      body: ['São cinco tipos principais. A tabela resume o que cada um faz, onde funciona melhor e o limite de cada um.'],
      table: {
        head: ['Tipo', 'O que faz', 'Exemplo', 'Melhor para', 'Limite'],
        rows: [
          ['Legendas duplas', 'Mostra a legenda em inglês e na sua língua ao mesmo tempo, com dicionário ao clicar', 'Language Reactor', 'Séries na Netflix e vídeos no YouTube', 'Só vale dentro do player; com a legenda em português sempre ligada, você lê mais do que escuta'],
          ['Troca de palavras', 'Substitui algumas palavras da página pelo idioma que você estuda', 'Toucan (Babbel)', 'Primeiro contato com vocabulário', 'Poucas palavras por página; o resto continua na sua língua'],
          ['Corretor de escrita', 'Aponta erros de gramática e estilo no que você escreve', 'Grammarly, LanguageTool', 'Quem já escreve em inglês no trabalho', 'Corrige, mas o erro não vira revisão e a explicação nem sempre vem na sua língua'],
          ['Tradutor', 'Traduz a página ou o trecho selecionado', 'Google Tradutor', 'Entender um texto com pressa', 'Resolve na hora, mas não ensina e reforça o hábito de traduzir'],
          ['Imersão', 'Tira a sua língua da tela, corrige o que você escreve e revisa palavras salvas', 'Active Immersion', 'Quem quer passar o dia em inglês', 'Só no computador; pago depois de 7 dias grátis'],
        ],
      },
    },
    {
      id: 'series-e-videos',
      h2: 'Extensão para aprender inglês com Netflix e YouTube vale a pena?',
      body: [
        'Vale, se você já assiste muita coisa. O <a href="' + SRC.reactorStore + '">Language Reactor</a> mostra a legenda em dois idiomas, deixa clicar numa palavra para ver o significado e voltar a frase com uma tecla, na Netflix e no YouTube. Ele tem um plano gratuito e um plano Pro pago, descritos nas <a href="' + SRC.reactorFaq + '">perguntas frequentes do próprio Language Reactor</a>.',
        'Um cuidado: com a legenda em português sempre visível, os olhos leem o português e o ouvido descansa. Use a legenda dupla para entender e, quando der, passe para legenda só em inglês.',
        'Outro detalhe do YouTube: a dublagem automática pode trocar o áudio original em inglês por uma voz de IA em português. Explicamos como desligar em <a href="' + SITE + 'blog/como-desativar-dublagem-automatica-youtube/">como desativar a dublagem automática do YouTube</a>.',
      ],
    },
    {
      id: 'escrita',
      h2: 'Qual extensão corrige o inglês que eu escrevo?',
      body: [
        'Corretores como Grammarly e LanguageTool apontam erros de gramática e estilo enquanto você escreve, e são ótimos para acertar um e-mail de trabalho. O ponto fraco para quem está aprendendo é que a correção passa: você aceita a sugestão e o erro não volta para você treinar.',
        'O Writing Coach do Active Immersion faz outro trabalho: corrige a mensagem que você enviou em inglês, explica o porquê (na sua língua, se você quiser), e cada correção pode virar um cartão de revisão. Revisões espaçadas no tempo ajudam a memória, segundo uma <a href="' + SRC.cepeda + '">meta-análise de Cepeda e colegas (2006)</a>.',
      ],
    },
    {
      id: 'por-nivel',
      h2: 'Como escolher a extensão certa para o seu nível de inglês?',
      body: ['Pelo tanto de ajuda que você ainda precisa para entender. Uma regra prática:'],
      steps: [
        '<strong>Básico (A1–A2):</strong> legendas duplas e dicionário ao clicar. Na imersão, prefira traduzir o português para o inglês em vez de escondê-lo.',
        '<strong>Intermediário (B1–B2):</strong> legenda só em inglês, português borrado nas páginas (um clique para ver) e uma mensagem em inglês por dia.',
        '<strong>Avançado (C1–C2):</strong> imersão total, sem português na tela, e um corretor para refinar a escrita.',
      ],
      after: ['No Active Immersion, escolher o nível na instalação já aplica essa configuração, e dá para mudar depois.'],
    },
    {
      id: 'juntas',
      h2: 'Dá para usar mais de uma extensão ao mesmo tempo?',
      body: [
        'Dá, e costuma ser a melhor combinação: uma extensão para séries e outra para o resto do navegador. Se alguma página ficar estranha com as duas ligadas, desative uma delas só naquele site.',
        'O <strong>Active Immersion</strong> cobre o resto do navegador: tira o português de páginas, YouTube e buscas, mostra a tradução quando você dá dois cliques numa palavra em inglês e salva a palavra com a frase para revisar no dia certo.',
      ],
      figure: 'lookup',
      after: ['Ele funciona no Chrome, no Edge, no Brave e no Firefox 140 ou mais novo, no computador.'],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Existe extensão gratuita para aprender inglês?',
      a: 'Existe. O Language Reactor tem um plano gratuito, e tradutores e dicionários de navegador também são grátis. O Active Immersion tem 7 dias grátis sem cartão e depois custa R$ 19,90 por mês no Brasil.',
    },
    {
      q: 'Extensão do Chrome funciona no celular?',
      a: 'Em geral, não. Extensões rodam no navegador do computador (Chrome, Edge, Brave, Firefox), e os apps da Netflix e do YouTube no celular não aceitam extensões.',
    },
    {
      q: 'Uma extensão substitui um curso de inglês?',
      a: 'Não substitui conversar com pessoas. O que ela faz bem é colocar inglês no que você já faz todo dia, que é onde a maioria dos cursos não chega.',
    },
    {
      q: 'Qual extensão é melhor para quem já entende um pouco de inglês?',
      a: 'Para quem já entende frases simples (A2 a B2), a imersão costuma render mais: você passa o dia lendo e escrevendo em inglês, com ajuda só quando precisa.',
    },
  ],
  sources: [
    { label: 'Language Reactor na Chrome Web Store', url: SRC.reactorStore },
    { label: 'Language Reactor: perguntas frequentes', url: SRC.reactorFaq },
    { label: 'Central de ajuda da Babbel: extensão Toucan', url: SRC.toucan },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
  ],
  fig: {
    lookup: { before: 'The meeting was ', word: 'postponed', after: ' until next Friday.', phonetic: '/pəʊstˈpəʊnd/', lang: 'Português', translation: 'adiada', save: 'Salvar com esta frase', caption: 'Dois cliques numa palavra em inglês: a tradução aparece e a palavra é salva com a frase para revisar depois.' },
  },
};
