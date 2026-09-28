import type { PostCopy } from '../../types';

const help = 'https://support.google.com/youtube/answer/15569972?hl=fr';
const prefs = 'https://support.google.com/youtube/answer/13339776?hl=fr';
const tc = 'https://techcrunch.com/2024/12/10/youtubes-new-auto-dubbing-feature-is-now-available-for-knowledge-focused-content/';

export const fr: PostCopy = {
  slug: 'desactiver-doublage-automatique-youtube',
  title: 'Comment désactiver le doublage automatique sur YouTube',
  metaTitle: 'Désactiver le doublage automatique sur YouTube (2026)',
  description: 'Le doublage automatique de YouTube remplace la voix originale par une voix d’IA. Comment retrouver l’audio original sur ordinateur, mobile et TV, et l’éviter.',
  dek: 'YouTube double désormais des vidéos avec l’intelligence artificielle. Si vous apprenez l’anglais, cela retire justement ce qui vous fait progresser : la voix originale.',
  answer:
    'En septembre 2026, YouTube n’a pas de bouton pour désactiver le doublage automatique une fois pour toutes. Sur chaque vidéo, vous pouvez revenir à l’audio original dans <b class="ui">Paramètres</b> → <b class="ui">Piste audio</b> → la piste marquée <b class="ui">original</b>. Pour les vidéos suivantes, ajoutez l’anglais à vos <b class="ui">langues préférées</b> : d’après l’aide YouTube, les vidéos enregistrées dans une langue préférée ne sont pas doublées.',
  howTo: {
    name: 'Comment remettre l’audio original d’une vidéo doublée sur YouTube',
    steps: [
      'Ouvrez la vidéo et cliquez sur la roue dentée Paramètres du lecteur.',
      'Cliquez sur Piste audio.',
      'Choisissez la piste avec « original » dans son nom, par exemple « Anglais (original) ».',
    ],
  },
  sections: [
    {
      id: 'definition',
      h2: 'Qu’est-ce que le doublage automatique de YouTube ?',
      body: [
        'Le doublage automatique est une fonctionnalité de YouTube qui crée, avec l’intelligence artificielle, une version de l’audio d’une vidéo dans d’autres langues. YouTube détecte la langue dans laquelle la vidéo a été enregistrée et génère lui-même les pistes doublées, et les vidéos concernées affichent la mention <b class="ui">Doublé automatiquement</b>.',
        'La fonctionnalité a été ouverte en décembre 2024 aux chaînes de contenu informatif, comme les vidéos qui apprennent à cuisiner ou à coudre, et repose sur Gemini, l’IA de Google, selon <a href="' + tc + '">TechCrunch</a>. YouTube disait alors vouloir l’étendre à d’autres types de contenu.',
        'Le doublage ne vient pas seul : d’après l’<a href="' + prefs + '">aide YouTube</a>, la préférence de langue s’applique à l’audio, au titre et à la description. C’est pourquoi une vidéo enregistrée en anglais peut arriver sur votre page d’accueil avec un titre en français et une voix d’IA qui parle français.',
      ],
      figure: 'badge',
    },
    {
      id: 'pourquoi',
      h2: 'Pourquoi le doublage automatique gêne-t-il l’apprentissage de l’anglais ?',
      body: [
        'Parce qu’il remplace exactement ce que vous avez besoin d’entendre. Une vidéo en anglais, c’est de la compréhension orale gratuite : de vrais accents, un vrai rythme et les expressions que les gens utilisent vraiment. Avec le doublage, vous entendez une voix de synthèse en français et vous perdez tout cela, souvent sans vous en rendre compte, car le titre arrive traduit lui aussi.',
        'Et la traduction peut se tromper. L’<a href="' + help + '">aide YouTube</a> prévient que les doublages peuvent contenir des erreurs dues à la prononciation, aux accents, aux dialectes ou au bruit de fond. Au lancement, YouTube a lui-même reconnu que la traduction n’est parfois pas tout à fait juste, ou que la voix ne représente pas bien la personne qui parle.',
      ],
    },
    {
      id: 'ordinateur',
      h2: 'Comment retrouver l’audio original d’une vidéo sur ordinateur ?',
      body: ['Trois clics suffisent, directement dans le lecteur :'],
      steps: [
        'Ouvrez la vidéo et cliquez sur la roue dentée <b class="ui">Paramètres</b>, dans le coin du lecteur.',
        'Cliquez sur <b class="ui">Piste audio</b>.',
        'Choisissez la piste avec <b class="ui">original</b> dans son nom, par exemple <b class="ui">Anglais (original)</b>.',
      ],
      figure: 'menu',
      after: ['Cela ne vaut que pour cette vidéo. Si la suivante est doublée aussi, il faut recommencer, et c’est pour cela que le réglage des langues préférées, plus bas, change tout.'],
    },
    {
      id: 'mobile-et-tv',
      h2: 'Comment désactiver le doublage automatique sur mobile et sur TV ?',
      body: [
        'Dans l’application YouTube pour Android et iPhone, le chemin est le même que sur ordinateur : touchez la vidéo, touchez la roue dentée <b class="ui">Paramètres</b> et choisissez <b class="ui">Piste audio</b>. Sur les Shorts, l’option se trouve dans le menu à trois points.',
        'Sur une TV, affichez les commandes du lecteur avec la télécommande, allez sur la roue dentée et cherchez <b class="ui">Piste audio</b> ou <b class="ui">Audio</b>. Le nom varie un peu entre Android TV, Google TV, Samsung, LG et Roku, mais le chemin est similaire.',
      ],
    },
    {
      id: 'definitivement',
      h2: 'Peut-on désactiver le doublage automatique de YouTube définitivement ?',
      body: [
        'Il n’existe pas de bouton pour cela, mais un réglage règle l’essentiel : les langues préférées. L’<a href="' + prefs + '">aide YouTube</a> indique que les contenus dont l’audio original est dans l’une de vos langues préférées ne sont pas traduits et sont lus avec l’audio original. Ajoutez l’anglais, et les vidéos enregistrées en anglais n’arrivent plus doublées.',
        'Sur ordinateur :',
      ],
      steps: [
        'Cliquez sur votre photo de profil, puis sur <b class="ui">Paramètres</b>.',
        'Ouvrez <b class="ui">Lecture et performances</b>.',
        'Sous <b class="ui">Langue</b>, cliquez sur <b class="ui">Ajouter ou modifier des langues</b>.',
        'Cochez l’anglais (et les autres langues que vous comprenez) et cliquez sur <b class="ui">Confirmer</b>.',
      ],
      figure: 'prefs',
      after: [
        'Sur mobile : photo de profil → <b class="ui">Paramètres</b> → <b class="ui">Langues</b> → <b class="ui">Langues préférées</b>.',
        'Une limite importante : selon YouTube, ce réglage est distinct de la langue de l’application et de votre pays, et il ne modifie ni la recherche ni les recommandations. Votre page d’accueil reste pleine de vidéos en français.',
      ],
    },
    {
      id: 'page-accueil',
      h2: 'Comment retirer les vidéos doublées de la page d’accueil de YouTube ?',
      body: [
        'Les réglages de YouTube ne le permettent pas. C’est là qu’intervient <strong>Active Immersion</strong>, une extension pour Chrome et Firefox conçue pour apprendre l’anglais avec l’internet que vous utilisez déjà.',
        'Quand l’immersion est activée, Active Immersion retire de la liste les vidéos portant la mention de doublage automatique : sur la page d’accueil, dans <b class="ui">À suivre</b>, dans la recherche et dans la rangée des Shorts. Il reste les vidéos avec leur voix originale.',
      ],
      figure: 'feed',
      after: [
        'L’extension s’occupe aussi du reste de l’écran : titres, résultats et publications en français sont floutés, traduits en anglais ou retirés, selon le niveau choisi (Partiel ou Total). Et les messages que vous écrivez en anglais sur ChatGPT, Gmail ou WhatsApp Web sont corrigés, avec des explications.',
        'Ce qu’elle ne fait pas : Active Immersion fonctionne dans le navigateur de l’ordinateur (Chrome, Edge, Brave et Firefox 140 ou plus récent), pas dans l’application mobile ni sur TV, et elle ne change pas l’audio d’une vidéo ouverte directement depuis un lien. Dans ces cas, suivez les étapes ci-dessus.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Pourquoi le titre de la vidéo est-il en français alors que la vidéo est en anglais ?',
      a: 'Parce que la traduction automatique de YouTube s’applique à l’audio, au titre et à la description. Quand l’anglais fait partie de vos langues préférées, les vidéos enregistrées en anglais gardent leur titre et leur audio d’origine.',
    },
    {
      q: 'La personne qui a publié la vidéo peut-elle désactiver le doublage automatique ?',
      a: 'Oui. Dans YouTube Studio, sous Paramètres → Chaîne → Paramètres avancés, le créateur peut décocher l’option qui autorise le doublage automatique. Les nouvelles vidéos de la chaîne ne sont alors plus doublées.',
    },
    {
      q: 'Dans quelles langues le doublage automatique existe-t-il ?',
      a: 'À son lancement, en décembre 2024, il couvrait l’anglais, l’espagnol, le français, l’allemand, l’hindi, l’indonésien, l’italien, le japonais et le portugais, et la liste s’est allongée depuis. La liste actuelle se trouve dans l’article d’aide YouTube sur le doublage automatique.',
    },
    {
      q: 'Active Immersion est-il gratuit ?',
      a: 'Active Immersion propose 7 jours gratuits, tout inclus et sans carte. Ensuite, il coûte 4,99 $ US par mois et peut être résilié à tout moment.',
    },
  ],
  sources: [
    { label: 'Aide YouTube : Utiliser le doublage automatique', url: help },
    { label: 'Aide YouTube : Regarder des vidéos dans votre langue préférée', url: prefs },
    { label: 'TechCrunch, 10 déc. 2024 : YouTube’s new auto-dubbing feature is now available for knowledge-focused content', url: tc },
  ],
  fig: {
    badge: {
      cards: [
        { title: '10 habitudes simples qui vont changer votre quotidien', channel: 'Chaîne anglophone', badge: 'Doublé automatiquement' },
        { title: 'How I learned English by watching series', channel: 'Chaîne anglophone' },
      ],
      pointer: 'titre traduit, audio doublé',
      caption: 'Les vidéos doublées portent la mention « Doublé automatiquement » et, souvent, un titre traduit.',
    },
    menu: {
      settings: 'Paramètres',
      rows: [['Sous-titres', 'Désactivés'], ['Vitesse de lecture', 'Normale'], ['Qualité', 'Automatique']],
      audio: 'Piste audio',
      dubbed: 'Français (doublé automatiquement)',
      original: 'Anglais (original)',
      other: 'Espagnol (doublé automatiquement)',
      caption: 'Dans le lecteur : Paramètres → Piste audio → la piste marquée original.',
    },
    prefs: {
      path: 'Paramètres › Lecture et performances',
      heading: 'Langues préférées',
      have: 'Français',
      add: 'Anglais',
      confirm: 'Confirmer',
      caption: 'Avec l’anglais parmi vos langues préférées, les vidéos enregistrées en anglais sont lues avec l’audio original.',
    },
    feed: {
      label: 'youtube.com, avec Active Immersion',
      removed: 'doublée · retirée',
      rows: [
        { title: '10 habitudes simples qui vont changer votre quotidien', dubbed: true },
        { title: 'How I learned English by watching series' },
        { title: 'Pourquoi vous ne parlez toujours pas anglais', dubbed: true },
        { title: 'A day in my life in London' },
      ],
      caption: 'Les vidéos doublées quittent la liste, et celles avec leur voix originale restent.',
    },
  },
};
