import type { PostCopy } from '../../types';
import { SITE } from '../../../i18n/copy';

export const SRC = {
  britishCouncil: 'https://www.britishcouncil.org.br/sites/default/files/demandas_de_aprendizagempesquisacompleta.pdf',
  efBrazil: 'https://www.ef.edu/epi/regions/latin-america/brazil/',
  efReport: 'https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/reports/2025/ef-epi-2025-english.pdf',
  krashen: 'https://sdkrashen.com/content/books/principles_and_practice.pdf',
  lally: 'https://doi.org/10.1002/ejsp.674',
  cepeda: 'https://doi.org/10.1037/0033-2909.132.3.354',
  resnik: 'https://doi.org/10.1080/13670050.2018.1445195',
};

export const pt: PostCopy = {
  slug: 'como-aprender-ingles-sozinho',
  title: 'Como aprender inglês sozinho em casa',
  metaTitle: 'Como aprender inglês sozinho em casa: plano de 7 dias (2026)',
  description: 'Dá para aprender inglês sozinho quando o inglês entra no seu dia. Um plano de 7 dias baseado em pesquisa, os erros mais comuns e ferramentas, com fontes.',
  dek: 'Aprender inglês sozinho funciona quando o inglês deixa de ser uma aula e vira parte do seu dia. Este é um plano simples para começar pequeno e crescer.',
  answer:
    'Dá para aprender inglês sozinho se ele fizer parte do seu dia, e não só de uma aula. Um plano que funciona tem quatro partes: contato diário com inglês que você entende quase tudo, escrever um pouco todo dia, revisar palavras no tempo certo e começar pequeno para criar o hábito. No Brasil, só 5,1% das pessoas com 16 anos ou mais disseram ter algum conhecimento de inglês (British Council, 2014), e o país está na faixa de baixa proficiência do EF EPI 2025, com 482 pontos.',
  sections: [
    {
      id: 'da-para',
      h2: 'Dá para aprender inglês sozinho?',
      body: [
        'Dá, e muita gente que fala bem aprendeu assim, com séries, jogos, trabalho e internet. O que a pesquisa aponta é que o contato fora da sala de aula pesa: num estudo com 167 multilíngues, usar a língua com frequência e ter <a href="' + SRC.resnik + '">contato natural com ela</a> aumentaram o quanto ela aparece até no pensamento (Resnik, 2021).',
        'O ponto de partida no Brasil é baixo, o que torna o esforço individual ainda mais importante. Uma pesquisa do <a href="' + SRC.britishCouncil + '">British Council feita pelo Data Popular (2014)</a> encontrou que 5,1% dos brasileiros com 16 anos ou mais dizem ter algum conhecimento de inglês, e o <a href="' + SRC.efBrazil + '">EF English Proficiency Index 2025</a> coloca o Brasil na faixa de baixa proficiência, com 482 pontos.',
      ],
    },
    {
      id: 'o-que-funciona',
      h2: 'O que funciona para quem estuda inglês sozinho?',
      body: ['Quatro coisas, cada uma com base em pesquisa:'],
      steps: [
        '<strong>Inglês que você entende quase tudo.</strong> A hipótese do input, de Stephen Krashen (1982), propõe que a língua é adquirida com <a href="' + SRC.krashen + '">input compreensível</a>, um pouco acima do seu nível. É uma ideia influente e também debatida, mas o conselho prático é sólido: prefira conteúdo em que você entende a maior parte.',
        '<strong>Escrever um pouco todo dia.</strong> Uma mensagem, um comentário, uma pergunta ao ChatGPT. Escrever mostra o que você ainda não sabe dizer, e uma correção explicada vira aprendizado.',
        '<strong>Revisar no tempo certo.</strong> Uma meta-análise de Cepeda e colegas (2006) mostrou que <a href="' + SRC.cepeda + '">revisões espaçadas</a> fixam melhor do que revisar tudo de uma vez.',
        '<strong>Começar pequeno.</strong> No estudo de Phillippa Lally e colegas (2010), um novo hábito levou em média 66 dias para ficar automático, variando de 18 a 254 dias entre as pessoas (<a href="' + SRC.lally + '">European Journal of Social Psychology</a>). Metas pequenas no começo ajudam você a chegar lá.',
      ],
    },
    {
      id: 'plano-7-dias',
      h2: 'Como montar um plano de 7 dias para aprender inglês sozinho?',
      body: ['Comece com quase nada e aumente um pouco a cada dia. O objetivo da primeira semana é criar o hábito, não esgotar a vontade.'],
      figure: 'week',
      after: [
        'Depois do sétimo dia, mantenha o ritmo que ficou confortável e troque o que estiver fácil demais: legenda em inglês no lugar da legenda em português, mais palavras novas por dia, mais tempo lendo.',
      ],
    },
    {
      id: 'erros',
      h2: 'Quais erros atrasam quem aprende inglês sozinho?',
      body: ['Os cinco mais comuns, e o que fazer no lugar:'],
      table: {
        head: ['Erro', 'Por que atrapalha', 'O que fazer'],
        rows: [
          ['Estudar só gramática', 'Você sabe a regra, mas não reconhece a frase quando ela aparece de verdade', 'Ler e ouvir inglês todo dia, com a gramática como apoio'],
          ['Legenda em português em tudo', 'Os olhos leem português e o ouvido descansa', 'Legenda em inglês, ou dupla por pouco tempo'],
          ['Listas de palavras soltas', 'A palavra fica sem contexto e some rápido', 'Guardar cada palavra com a frase em que você a encontrou'],
          ['Metas grandes no começo', 'Hábitos levam semanas para ficar automáticos (Lally e colegas, 2010)', 'Começar com poucos minutos e subir aos poucos'],
          ['Nunca escrever', 'Você entende, mas trava na hora de produzir', 'Escrever uma mensagem curta em inglês por dia'],
        ],
      },
    },
    {
      id: 'navegador',
      h2: 'Como transformar o navegador numa aula de inglês?',
      body: [
        'Você já passa horas no navegador; o <strong>Active Immersion</strong> faz essas horas contarem. A extensão tira o português da tela (borrado, traduzido para o inglês ou removido, conforme o nível), mostra a tradução quando você dá dois cliques numa palavra em inglês e salva a palavra com a frase para revisar.',
        'Ela segue o plano acima: no primeiro dia pede uma revisão só, e as metas crescem durante a primeira semana. Ao escolher o seu nível (de A1 a C2), a extensão já configura a imersão, as explicações e as metas diárias, e dá para mudar tudo depois.',
      ],
      figure: 'lookup',
      after: [
        'Os limites: funciona no navegador do computador (Chrome, Edge, Brave e Firefox 140 ou mais novo), não no celular. Para ir além, leia também <a href="' + SITE + 'blog/como-pensar-em-ingles-sem-traduzir/">como pensar em inglês sem traduzir</a>.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Quanto tempo por dia preciso para aprender inglês sozinho?',
      a: 'Constância pesa mais que volume. Comece com 5 a 10 minutos de revisão e algum contato com inglês ao longo do dia, e aumente aos poucos. Mais importante que o número é fazer todos os dias.',
    },
    {
      q: 'Dá para aprender inglês sozinho de graça?',
      a: 'Dá. Há muito conteúdo gratuito em inglês: a Wikipédia em inglês simples, vídeos, podcasts e notícias. Ferramentas pagas economizam tempo e organizam a prática, mas não são obrigatórias.',
    },
    {
      q: 'Por onde começar se eu não sei nada de inglês?',
      a: 'Pelas palavras e frases mais comuns, com conteúdo feito para iniciantes e tradução quando precisar. No nível A1, traduzir ajuda a entender; o objetivo é depender menos disso com o tempo.',
    },
    {
      q: 'Quanto tempo leva para aprender inglês sozinho?',
      a: 'Depende do seu ponto de partida, do tempo diário e do tipo de prática, então qualquer prazo fixo é chute. O que dá para medir é o hábito: segundo Lally e colegas (2010), rotinas novas levaram em média 66 dias para ficar automáticas.',
    },
  ],
  sources: [
    { label: 'British Council e Data Popular (2014). Demandas de Aprendizagem de Inglês no Brasil', url: SRC.britishCouncil },
    { label: 'EF English Proficiency Index 2025: Brasil', url: SRC.efBrazil },
    { label: 'Krashen, S. D. (1982). Principles and Practice in Second Language Acquisition. Pergamon', url: SRC.krashen },
    { label: 'Lally, P. et al. (2010). How are habits formed. European Journal of Social Psychology, 40(6), 998–1009', url: SRC.lally },
    { label: 'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132(3), 354–380', url: SRC.cepeda },
    { label: 'Resnik, P. (2021). Multilinguals’ use of L1 and L2 inner speech. International Journal of Bilingual Education and Bilingualism, 24(1)', url: SRC.resnik },
  ],
  fig: {
    week: {
      label: 'primeira semana',
      days: [
        { day: 'Dia 1', plan: 'Salvar 1 palavra e revisar · 5 min lendo em inglês · 1 mensagem' },
        { day: 'Dia 2', plan: '5 revisões · 5 min lendo · 1 mensagem' },
        { day: 'Dia 3', plan: '10 revisões · 8 min lendo · 2 mensagens' },
        { day: 'Dia 4', plan: '15 revisões · 12 min lendo · 3 mensagens' },
        { day: 'Dia 5', plan: '15 revisões · 12 min lendo · 3 mensagens' },
        { day: 'Dia 6', plan: '15 revisões · 12 min lendo · 3 mensagens' },
        { day: 'Dia 7', plan: '20 revisões · 15 min lendo · 3 mensagens' },
      ],
      caption: 'A primeira semana no Active Immersion, com as metas do nível B1: começa quase sem esforço e cresce a cada dia.',
    },
    lookup: { before: 'The instructions were ', word: 'confusing', after: ', so I asked for help.', phonetic: '/kənˈfjuːzɪŋ/', lang: 'Português', translation: 'confusas', save: 'Salvar com esta frase', caption: 'Dois cliques numa palavra em inglês: a tradução aparece e a palavra é salva com a frase.' },
  },
};
