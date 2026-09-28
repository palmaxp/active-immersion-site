/*
 * Blog chrome in every language the blog is written in.
 * Portuguese lives at the root (the main audience); every other language under /<lang>/.
 */

export const BLOG_LANGS = ['pt', 'en', 'es', 'fr', 'de', 'it', 'pl'] as const;
export type BlogLang = (typeof BLOG_LANGS)[number];

export const HTML_LANG: Record<BlogLang, string> = { pt: 'pt-BR', en: 'en', es: 'es', fr: 'fr', de: 'de', it: 'it', pl: 'pl' };
export const OG_LOCALE: Record<BlogLang, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_LA', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', pl: 'pl_PL' };
export const LANG_NAME: Record<BlogLang, string> = { pt: 'Português', en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch', it: 'Italiano', pl: 'Polski' };

/** Path prefix of a language, relative to the site base: '' for Portuguese, 'es/' for Spanish. */
export const prefix = (l: BlogLang) => (l === 'pt' ? '' : `${l}/`);
/** The landing page a reader of this language is sent to: Portuguese or English. */
export const landingPrefix = (l: BlogLang) => (l === 'pt' ? '' : 'en/');

type Ui = {
  blog: string;
  indexTitle: string;
  indexDescription: string;
  indexH1: string;
  indexDek: string;
  answer: string;
  toc: string;
  faq: string;
  sources: string;
  readIn: string;
  minutes: (n: number) => string;
  by: string;
  published: string;
  updated: string;
  figNote: string;
  install: string;
  home: string;
  allPosts: string;
  read: string;
  privacy: string;
  contact: string;
  cta: { title: string; p: string; button: string; small: string; firefoxQ: string; firefox: string; checks: string[] };
};

const price = { pt: 'R$ 19,90 por mês', other: 'US$ 4.99' };

export const UI: Record<BlogLang, Ui> = {
  pt: {
    blog: 'Blog',
    indexTitle: 'Blog do Active Immersion · Guias para aprender inglês na internet',
    indexDescription: 'Guias práticos, com fontes, sobre aprender inglês com a internet que você já usa: YouTube, redes, escrita e vocabulário.',
    indexH1: 'Blog',
    indexDek: 'Guias práticos, com fontes, para aprender inglês com a internet que você já usa.',
    answer: 'Resposta curta',
    toc: 'Neste artigo',
    faq: 'Perguntas frequentes',
    sources: 'Fontes',
    readIn: 'Leia em',
    minutes: (n) => `${n} min de leitura`,
    by: 'Por João Palma, criador do Active Immersion',
    published: 'Publicado em',
    updated: 'Atualizado em',
    figNote: 'Ilustração. Os nomes exatos podem mudar um pouco conforme o aparelho e a versão do YouTube.',
    install: 'Instalar',
    home: 'Início',
    allPosts: 'Todos os artigos',
    read: 'Ler artigo',
    privacy: 'Privacidade',
    contact: 'Contato',
    cta: {
      title: 'Experimente o Active Immersion por 7 dias',
      p: `Extensão para Chrome, Edge, Brave e Firefox. Depois dos 7 dias grátis, ${price.pt} (${price.other} fora do Brasil).`,
      button: 'Adicionar ao Chrome',
      small: '7 dias grátis',
      firefoxQ: 'Usa Firefox?',
      firefox: 'Adicionar ao Firefox',
      checks: ['Sem cartão para começar', 'Cancele quando quiser'],
    },
  },
  en: {
    blog: 'Blog',
    indexTitle: 'Active Immersion Blog · Guides to learning English online',
    indexDescription: 'Practical, sourced guides to learning English from the internet you already use: YouTube, social media, writing and vocabulary.',
    indexH1: 'Blog',
    indexDek: 'Practical, sourced guides to learning English from the internet you already use.',
    answer: 'Short answer',
    toc: 'In this article',
    faq: 'Frequently asked questions',
    sources: 'Sources',
    readIn: 'Read in',
    minutes: (n) => `${n} min read`,
    by: 'By João Palma, creator of Active Immersion',
    published: 'Published',
    updated: 'Updated',
    figNote: 'Illustration. Exact labels can differ slightly by device and YouTube version.',
    install: 'Install',
    home: 'Home',
    allPosts: 'All articles',
    read: 'Read article',
    privacy: 'Privacy',
    contact: 'Contact',
    cta: {
      title: 'Try Active Immersion free for 7 days',
      p: `An extension for Chrome, Edge, Brave and Firefox. After the 7-day free trial, ${price.other} a month.`,
      button: 'Add to Chrome',
      small: '7 days free',
      firefoxQ: 'On Firefox?',
      firefox: 'Add to Firefox',
      checks: ['No card to start', 'Cancel anytime'],
    },
  },
  es: {
    blog: 'Blog',
    indexTitle: 'Blog de Active Immersion · Guías para aprender inglés en internet',
    indexDescription: 'Guías prácticas y con fuentes para aprender inglés con el internet que ya usas: YouTube, redes, escritura y vocabulario.',
    indexH1: 'Blog',
    indexDek: 'Guías prácticas y con fuentes para aprender inglés con el internet que ya usas.',
    answer: 'Respuesta corta',
    toc: 'En este artículo',
    faq: 'Preguntas frecuentes',
    sources: 'Fuentes',
    readIn: 'Leer en',
    minutes: (n) => `${n} min de lectura`,
    by: 'Por João Palma, creador de Active Immersion',
    published: 'Publicado el',
    updated: 'Actualizado el',
    figNote: 'Ilustración. Los nombres exactos pueden cambiar un poco según el dispositivo y la versión de YouTube.',
    install: 'Instalar',
    home: 'Inicio',
    allPosts: 'Todos los artículos',
    read: 'Leer artículo',
    privacy: 'Privacidad',
    contact: 'Contacto',
    cta: {
      title: 'Prueba Active Immersion 7 días gratis',
      p: `Extensión para Chrome, Edge, Brave y Firefox. Después de los 7 días gratis, ${price.other} al mes.`,
      button: 'Añadir a Chrome',
      small: '7 días gratis',
      firefoxQ: '¿Usas Firefox?',
      firefox: 'Añadir a Firefox',
      checks: ['Sin tarjeta para empezar', 'Cancela cuando quieras'],
    },
  },
  fr: {
    blog: 'Blog',
    indexTitle: 'Blog Active Immersion · Guides pour apprendre l’anglais sur internet',
    indexDescription: 'Des guides pratiques et sourcés pour apprendre l’anglais avec l’internet que vous utilisez déjà : YouTube, réseaux, écriture et vocabulaire.',
    indexH1: 'Blog',
    indexDek: 'Des guides pratiques et sourcés pour apprendre l’anglais avec l’internet que vous utilisez déjà.',
    answer: 'Réponse courte',
    toc: 'Dans cet article',
    faq: 'Questions fréquentes',
    sources: 'Sources',
    readIn: 'Lire en',
    minutes: (n) => `${n} min de lecture`,
    by: 'Par João Palma, créateur d’Active Immersion',
    published: 'Publié le',
    updated: 'Mis à jour le',
    figNote: 'Illustration. Les libellés exacts peuvent varier selon l’appareil et la version de YouTube.',
    install: 'Installer',
    home: 'Accueil',
    allPosts: 'Tous les articles',
    read: 'Lire l’article',
    privacy: 'Confidentialité',
    contact: 'Contact',
    cta: {
      title: 'Essayez Active Immersion gratuitement pendant 7 jours',
      p: `Extension pour Chrome, Edge, Brave et Firefox. Après les 7 jours gratuits, ${price.other} par mois.`,
      button: 'Ajouter à Chrome',
      small: '7 jours gratuits',
      firefoxQ: 'Sur Firefox ?',
      firefox: 'Ajouter à Firefox',
      checks: ['Sans carte pour commencer', 'Résiliable à tout moment'],
    },
  },
  de: {
    blog: 'Blog',
    indexTitle: 'Active Immersion Blog · Ratgeber zum Englischlernen im Internet',
    indexDescription: 'Praktische Ratgeber mit Quellen zum Englischlernen mit dem Internet, das du ohnehin nutzt: YouTube, soziale Medien, Schreiben und Wortschatz.',
    indexH1: 'Blog',
    indexDek: 'Praktische Ratgeber mit Quellen zum Englischlernen mit dem Internet, das du ohnehin nutzt.',
    answer: 'Kurze Antwort',
    toc: 'In diesem Artikel',
    faq: 'Häufige Fragen',
    sources: 'Quellen',
    readIn: 'Lesen auf',
    minutes: (n) => `${n} Min. Lesezeit`,
    by: 'Von João Palma, Entwickler von Active Immersion',
    published: 'Veröffentlicht am',
    updated: 'Aktualisiert am',
    figNote: 'Illustration. Die genauen Bezeichnungen können je nach Gerät und YouTube-Version leicht abweichen.',
    install: 'Installieren',
    home: 'Start',
    allPosts: 'Alle Artikel',
    read: 'Artikel lesen',
    privacy: 'Datenschutz',
    contact: 'Kontakt',
    cta: {
      title: 'Active Immersion 7 Tage kostenlos testen',
      p: `Erweiterung für Chrome, Edge, Brave und Firefox. Nach den 7 kostenlosen Tagen ${price.other} pro Monat.`,
      button: 'Zu Chrome hinzufügen',
      small: '7 Tage kostenlos',
      firefoxQ: 'Du nutzt Firefox?',
      firefox: 'Zu Firefox hinzufügen',
      checks: ['Keine Karte zum Start', 'Jederzeit kündbar'],
    },
  },
  it: {
    blog: 'Blog',
    indexTitle: 'Blog di Active Immersion · Guide per imparare l’inglese su internet',
    indexDescription: 'Guide pratiche e con fonti per imparare l’inglese con l’internet che usi già: YouTube, social, scrittura e vocabolario.',
    indexH1: 'Blog',
    indexDek: 'Guide pratiche e con fonti per imparare l’inglese con l’internet che usi già.',
    answer: 'Risposta breve',
    toc: 'In questo articolo',
    faq: 'Domande frequenti',
    sources: 'Fonti',
    readIn: 'Leggi in',
    minutes: (n) => `${n} min di lettura`,
    by: 'Di João Palma, creatore di Active Immersion',
    published: 'Pubblicato il',
    updated: 'Aggiornato il',
    figNote: 'Illustrazione. I nomi esatti possono cambiare leggermente a seconda del dispositivo e della versione di YouTube.',
    install: 'Installa',
    home: 'Home',
    allPosts: 'Tutti gli articoli',
    read: 'Leggi l’articolo',
    privacy: 'Privacy',
    contact: 'Contatti',
    cta: {
      title: 'Prova Active Immersion gratis per 7 giorni',
      p: `Estensione per Chrome, Edge, Brave e Firefox. Dopo i 7 giorni gratuiti, ${price.other} al mese.`,
      button: 'Aggiungi a Chrome',
      small: '7 giorni gratis',
      firefoxQ: 'Usi Firefox?',
      firefox: 'Aggiungi a Firefox',
      checks: ['Nessuna carta per iniziare', 'Disdici quando vuoi'],
    },
  },
  pl: {
    blog: 'Blog',
    indexTitle: 'Blog Active Immersion · Poradniki do nauki angielskiego w internecie',
    indexDescription: 'Praktyczne poradniki ze źródłami o nauce angielskiego z internetem, z którego już korzystasz: YouTube, media społecznościowe, pisanie i słownictwo.',
    indexH1: 'Blog',
    indexDek: 'Praktyczne poradniki ze źródłami o nauce angielskiego z internetem, z którego już korzystasz.',
    answer: 'Krótka odpowiedź',
    toc: 'W tym artykule',
    faq: 'Najczęstsze pytania',
    sources: 'Źródła',
    readIn: 'Czytaj po',
    minutes: (n) => `${n} min czytania`,
    by: 'João Palma, twórca Active Immersion',
    published: 'Opublikowano',
    updated: 'Zaktualizowano',
    figNote: 'Ilustracja. Dokładne nazwy mogą się nieco różnić w zależności od urządzenia i wersji YouTube.',
    install: 'Zainstaluj',
    home: 'Start',
    allPosts: 'Wszystkie artykuły',
    read: 'Czytaj artykuł',
    privacy: 'Prywatność',
    contact: 'Kontakt',
    cta: {
      title: 'Wypróbuj Active Immersion przez 7 dni za darmo',
      p: `Rozszerzenie do Chrome, Edge, Brave i Firefox. Po 7 darmowych dniach ${price.other} miesięcznie.`,
      button: 'Dodaj do Chrome',
      small: '7 dni za darmo',
      firefoxQ: 'Używasz Firefoksa?',
      firefox: 'Dodaj do Firefoksa',
      checks: ['Bez karty na start', 'Anulujesz, kiedy chcesz'],
    },
  },
};
