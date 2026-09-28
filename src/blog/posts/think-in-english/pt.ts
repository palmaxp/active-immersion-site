import type { PostCopy } from '../../types';

export const SRC = {
  kroll: 'https://doi.org/10.1006/jmla.1994.1008',
  resnik: 'https://doi.org/10.1080/13670050.2018.1445195',
  dewaele: 'https://www.sciencedirect.com/science/article/abs/pii/S0378216615002052',
  guerrero: 'https://link.springer.com/book/10.1007/b106255',
  cepeda: 'https://doi.org/10.1037/0033-2909.132.3.354',
};

export const pt: PostCopy = {
  slug: 'como-pensar-em-ingles-sem-traduzir',
  title: 'Como pensar em inglês sem traduzir',
  metaTitle: 'Como pensar em inglês sem traduzir: o que a ciência diz',
  description: 'Traduzir na cabeça é normal no começo. O que a pesquisa diz sobre pensar em inglês e 6 hábitos para o inglês começar a vir direto, com fontes.',
  dek: 'Quase todo mundo começa traduzindo cada frase na cabeça. A pesquisa explica por que isso acontece e o que faz o inglês passar a vir direto.',
  answer:
    'Pensar em inglês sem traduzir vem do uso frequente, não de força de vontade. No começo, o cérebro chega ao significado de uma palavra em inglês passando pela palavra em português; com prática, passa a ir direto (Kroll e Stewart, 1994). Num estudo com 167 multilíngues, usar a segunda língua com frequência, ter contato natural com ela e ter mais proficiência aumentaram o uso dela no pensamento (Resnik, 2021). Na prática: aprenda palavras dentro de frases, narre o seu dia em inglês e deixe o inglês ocupar a sua tela.',
  sections: [
    {
      id: 'por-que-traduz',
      h2: 'Por que o cérebro traduz para o português no começo?',
      body: [
        'Porque é o caminho que ele já conhece. O modelo hierárquico revisado, proposto por Judith Kroll e Erika Stewart em 1994, descreve dois caminhos entre uma palavra da segunda língua e o seu significado: um que passa pela palavra equivalente na primeira língua e outro que vai direto ao conceito.',
        'Segundo o <a href="' + SRC.kroll + '">modelo</a>, quem está no início depende mais do caminho pela tradução. Conforme a proficiência cresce, as ligações diretas entre as palavras em inglês e os conceitos ficam mais fortes, e a tradução deixa de ser necessária. Traduzir no começo não é defeito seu: é uma fase.',
      ],
      figure: 'route',
    },
    {
      id: 'da-para',
      h2: 'Dá para pensar em inglês de verdade?',
      body: [
        'Dá, e a pesquisa sobre fala interior mostra do que isso depende. No livro <a href="' + SRC.guerrero + '"><em>Inner Speech – L2</em></a> (2005), María de Guerrero defende que aprendizes podem chegar a ter fala interior na segunda língua, dadas certas condições de aprendizado.',
        'Pia Resnik estudou essas condições com 24 entrevistas e um questionário respondido por 167 multilíngues. A primeira língua continuou sendo a mais usada no pensamento, mas <a href="' + SRC.resnik + '">entre os fatores que aumentaram o uso da segunda</a> estão usá-la com frequência, ter contato natural com ela (fora de sala de aula) e se considerar mais proficiente.',
        'E há um limite normal: num estudo com 1.454 adultos multilíngues, Jean-Marc Dewaele encontrou que línguas aprendidas mais tarde são <a href="' + SRC.dewaele + '">significativamente menos usadas na fala interior emocional</a> do que na fala interior em geral. Pensar em português quando está com raiva ou emocionado não significa que você não está evoluindo.',
      ],
    },
    {
      id: 'como-treinar',
      h2: 'Como treinar o cérebro para pensar em inglês?',
      body: ['Seis hábitos que seguem o que a pesquisa acima aponta: mais frequência, mais contato natural e palavras ligadas a situações, não a traduções.'],
      steps: [
        '<strong>Aprenda palavras dentro de frases.</strong> Guarde “She <em>grabbed</em> her keys and ran” em vez de “grab = pegar”. A frase liga a palavra a uma cena, que é o caminho direto até o significado.',
        '<strong>Narre o seu dia em inglês.</strong> Baixinho ou na cabeça: “I’m making coffee. I forgot my phone.” De Guerrero descreve essa fala para si mesmo como parte de como a segunda língua vira pensamento.',
        '<strong>Descreva antes de traduzir.</strong> Quando faltar uma palavra, explique com as que você tem: “the thing you use to open a can”. Isso treina pensar em inglês em vez de buscar a tradução.',
        '<strong>Troque o idioma das telas.</strong> Celular, navegador, redes sociais e YouTube em inglês aumentam a frequência e o contato natural, os dois fatores do estudo de Resnik.',
        '<strong>Escreva um pouco todo dia.</strong> Uma mensagem, um comentário, uma pergunta ao ChatGPT. Escrever mostra na hora o que você ainda não sabe dizer.',
        '<strong>Revise as palavras no tempo certo.</strong> Uma meta-análise de Cepeda e colegas (2006) mostrou que <a href="' + SRC.cepeda + '">espaçar as revisões</a> melhora a memória em comparação com revisar tudo de uma vez.',
      ],
    },
    {
      id: 'quanto-tempo',
      h2: 'Quanto tempo leva para começar a pensar em inglês?',
      body: [
        'Não existe um número de dias. Nos estudos acima, o que muda o uso do inglês no pensamento é proficiência e frequência de uso, não um prazo. Desconfie de promessas como “pense em inglês em 30 dias”.',
        'O que dá para observar é o sinal: primeiro aparecem frases curtas em inglês na sua cabeça em situações que você vive muito em inglês (um jogo, um trabalho, uma série). Quanto mais partes do seu dia acontecem em inglês, mais situações ganham esse atalho.',
      ],
    },
    {
      id: 'no-navegador',
      h2: 'Como o navegador pode ajudar você a pensar em inglês?',
      body: [
        'Boa parte do seu contato com qualquer língua hoje acontece na tela. O <strong>Active Immersion</strong> é uma extensão para Chrome e Firefox que usa isso a favor do inglês: o português da página fica borrado, traduzido para o inglês ou some, conforme o nível que você escolher.',
        'Ao dar dois cliques numa palavra em inglês, você vê a tradução e salva a palavra junto com a frase em que ela apareceu. Na revisão, a extensão pede que você pense no significado antes de ver a resposta, que é justamente o treino de ir direto ao sentido.',
      ],
      figure: 'lookup',
      after: [
        'O que você escreve em inglês no ChatGPT, no Gmail ou no WhatsApp Web é corrigido com explicação. Os limites: a extensão funciona no navegador do computador (Chrome, Edge, Brave e Firefox 140 ou mais novo), não no celular.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'É errado traduzir quando estou aprendendo inglês?',
      a: 'Não. No começo, a tradução é o caminho que o cérebro usa para chegar ao significado, e ela ajuda a entender. O objetivo é depender cada vez menos dela, e isso acontece com prática frequente, não proibindo a tradução.',
    },
    {
      q: 'Preciso morar fora para pensar em inglês?',
      a: 'Não necessariamente. No estudo de Resnik (2021), o que aumentou o uso da segunda língua no pensamento foi frequência de uso, contato natural e proficiência. Morar fora dá isso de graça, mas dá para criar boa parte desse contato em casa, com o que você lê, assiste e escreve.',
    },
    {
      q: 'Por que eu ainda penso em português quando estou nervoso?',
      a: 'Porque é comum. Dewaele (2015) encontrou, com 1.454 adultos multilíngues, que línguas aprendidas mais tarde são significativamente menos usadas na fala interior emocional do que na fala interior em geral.',
    },
    {
      q: 'Qual o meu nível de inglês para começar a pensar em inglês?',
      a: 'Não há um nível mínimo para começar a treinar. Frases curtas e narrar o que você faz já funcionam no básico. O que muda com o nível é quanta coisa você consegue pensar em inglês sem travar.',
    },
  ],
  sources: [
    { label: 'Kroll, J. F. e Stewart, E. (1994). Journal of Memory and Language, 33(2), 149–174', url: SRC.kroll },
    { label: 'Resnik, P. (2021). Multilinguals’ use of L1 and L2 inner speech. International Journal of Bilingual Education and Bilingualism, 24(1)', url: SRC.resnik },
    { label: 'Dewaele, J.-M. (2015). From obscure echo to language of the heart. Journal of Pragmatics, 87, 1–17', url: SRC.dewaele },
    { label: 'de Guerrero, M. C. M. (2005). Inner Speech – L2: Thinking Words in a Second Language. Springer', url: SRC.guerrero },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
  ],
  fig: {
    route: { word: 'grab', via: 'pegar', meaning: 'a ação', slow: 'traduzindo: mais lento', fast: 'direto: vem com a prática', caption: 'Dois caminhos até o significado: passando pelo português, comum no começo, ou direto, que se fortalece com o uso.' },
    lookup: { before: 'She ', word: 'grabbed', after: ' her keys and ran to catch the bus.', phonetic: '/ɡræbd/', lang: 'Português', translation: 'pegou (rápido)', save: 'Salvar com esta frase', caption: 'Dois cliques numa palavra em inglês: a tradução aparece e a palavra é salva junto com a frase.' },
  },
};
