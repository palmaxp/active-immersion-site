import type { PostCopy } from '../../types';

const help = 'https://support.google.com/youtube/answer/15569972?hl=de';
const prefs = 'https://support.google.com/youtube/answer/13339776?hl=de';
const tc = 'https://techcrunch.com/2024/12/10/youtubes-new-auto-dubbing-feature-is-now-available-for-knowledge-focused-content/';

export const de: PostCopy = {
  slug: 'youtube-automatische-synchronisation-deaktivieren',
  title: 'YouTube: Automatische Synchronisation deaktivieren',
  metaTitle: 'YouTube: Automatische Synchronisation deaktivieren (2026)',
  description: 'Die automatische Synchronisation von YouTube ersetzt die Originalstimme durch eine KI-Stimme. So bekommst du den Originalton am PC, Handy und Fernseher zurück.',
  dek: 'YouTube synchronisiert Videos inzwischen mit künstlicher Intelligenz. Wer Englisch lernt, verliert dadurch genau das, was beim Lernen hilft: die Originalstimme.',
  answer:
    'Stand September 2026 gibt es bei YouTube keinen Schalter, der die automatische Synchronisation dauerhaft abschaltet. In jedem Video kannst du über <b class="ui">Einstellungen</b> → <b class="ui">Audiotrack</b> → die als <b class="ui">Original</b> markierte Spur zum Originalton zurückkehren. Für künftige Videos fügst du Englisch zu deinen <b class="ui">bevorzugten Sprachen</b> hinzu: Laut YouTube-Hilfe werden Videos, die in einer bevorzugten Sprache aufgenommen wurden, nicht synchronisiert.',
  howTo: {
    name: 'So stellst du bei einem synchronisierten YouTube-Video den Originalton ein',
    steps: [
      'Öffne das Video und klicke im Player auf das Zahnrad für die Einstellungen.',
      'Klicke auf Audiotrack.',
      'Wähle die Spur mit „Original“ im Namen, zum Beispiel „Englisch (Original)“.',
    ],
  },
  sections: [
    {
      id: 'was-ist-das',
      h2: 'Was ist die automatische Synchronisation von YouTube?',
      body: [
        'Die automatische Synchronisation ist eine YouTube-Funktion, die mit künstlicher Intelligenz eine Tonspur des Videos in anderen Sprachen erstellt. YouTube erkennt die Sprache, in der das Video aufgenommen wurde, erzeugt die synchronisierten Spuren selbst, und die betroffenen Videos tragen den Hinweis <b class="ui">Automatisch synchronisiert</b>.',
        'Die Funktion wurde im Dezember 2024 für Kanäle mit informativen Inhalten freigegeben, etwa Videos, die Kochen oder Nähen beibringen, und nutzt laut <a href="' + tc + '">TechCrunch</a> Gemini, die KI von Google. YouTube kündigte damals an, die Synchronisation auf weitere Inhalte auszuweiten.',
        'Die Synchronisation kommt nicht allein: Laut <a href="' + prefs + '">YouTube-Hilfe</a> gilt die Spracheinstellung für Ton, Titel und Beschreibung. Deshalb kann ein englisches Video mit deutschem Titel und einer deutschen KI-Stimme auf deiner Startseite landen.',
      ],
      figure: 'badge',
    },
    {
      id: 'warum-es-stoert',
      h2: 'Warum stört die automatische Synchronisation beim Englischlernen?',
      body: [
        'Weil sie genau das ersetzt, was du hören musst. Ein englisches Video ist kostenloses Hörverstehen: echte Akzente, echter Rhythmus und die Ausdrücke, die Menschen wirklich benutzen. Mit der Synchronisation hörst du eine synthetische Stimme auf Deutsch und verlierst all das, oft ohne es zu merken, weil auch der Titel übersetzt ankommt.',
        'Und die Übersetzung kann danebenliegen. Die <a href="' + help + '">YouTube-Hilfe</a> weist darauf hin, dass Synchronisationen Fehler durch Aussprache, Akzente, Dialekte oder Hintergrundgeräusche enthalten können. Zum Start räumte YouTube selbst ein, dass die Übersetzung manchmal nicht ganz stimmt oder die Stimme die sprechende Person nicht gut wiedergibt.',
      ],
    },
    {
      id: 'am-computer',
      h2: 'Wie bekomme ich am Computer den Originalton zurück?',
      body: ['Es sind drei Klicks, direkt im Player:'],
      steps: [
        'Öffne das Video und klicke auf das Zahnrad <b class="ui">Einstellungen</b> in der Ecke des Players.',
        'Klicke auf <b class="ui">Audiotrack</b>.',
        'Wähle die Spur mit <b class="ui">Original</b> im Namen, zum Beispiel <b class="ui">Englisch (Original)</b>.',
      ],
      figure: 'menu',
      after: ['Das gilt nur für dieses eine Video. Ist das nächste auch synchronisiert, musst du erneut umschalten. Deshalb lohnt sich die Einstellung der bevorzugten Sprachen weiter unten.'],
    },
    {
      id: 'handy-und-tv',
      h2: 'Wie deaktiviere ich die automatische Synchronisation am Handy und Fernseher?',
      body: [
        'In der YouTube-App für Android und iPhone ist der Weg derselbe wie am Computer: Tippe auf das Video, dann auf das Zahnrad <b class="ui">Einstellungen</b>, und wähle <b class="ui">Audiotrack</b>. Bei Shorts findest du die Option im Drei-Punkte-Menü.',
        'Am Fernseher blendest du mit der Fernbedienung die Player-Steuerung ein, gehst zum Zahnrad und suchst <b class="ui">Audiotrack</b> oder <b class="ui">Audio</b>. Die Bezeichnung unterscheidet sich etwas zwischen Android TV, Google TV, Samsung, LG und Roku, der Weg ist aber ähnlich.',
      ],
    },
    {
      id: 'dauerhaft',
      h2: 'Kann man die automatische Synchronisation von YouTube dauerhaft deaktivieren?',
      body: [
        'Einen Schalter dafür gibt es nicht, aber eine Einstellung löst das meiste: die bevorzugten Sprachen. Die <a href="' + prefs + '">YouTube-Hilfe</a> sagt, dass Inhalte, deren Originalton in einer deiner bevorzugten Sprachen ist, nicht übersetzt und im Originalton abgespielt werden. Fügst du Englisch hinzu, kommen englische Videos nicht mehr synchronisiert an.',
        'Am Computer:',
      ],
      steps: [
        'Klicke auf dein Profilbild und dann auf <b class="ui">Einstellungen</b>.',
        'Öffne <b class="ui">Wiedergabe und Leistung</b>.',
        'Klicke unter <b class="ui">Sprache</b> auf <b class="ui">Sprachen hinzufügen oder bearbeiten</b>.',
        'Wähle Englisch (und weitere Sprachen, die du verstehst) und klicke auf <b class="ui">Bestätigen</b>.',
      ],
      figure: 'prefs',
      after: [
        'Am Handy: Profilbild → <b class="ui">Einstellungen</b> → <b class="ui">Sprachen</b> → <b class="ui">Bevorzugte Sprachen</b>.',
        'Eine wichtige Grenze: Laut YouTube ist diese Einstellung unabhängig von der App-Sprache und deinem Standort und ändert weder die Suche noch die Empfehlungen. Deine Startseite bleibt voller deutscher Videos.',
      ],
    },
    {
      id: 'startseite',
      h2: 'Wie entferne ich synchronisierte Videos von der YouTube-Startseite?',
      body: [
        'Mit den YouTube-Einstellungen geht das nicht. Hier kommt <strong>Active Immersion</strong> ins Spiel, eine Erweiterung für Chrome und Firefox, mit der du Englisch mit dem Internet lernst, das du ohnehin nutzt.',
        'Bei eingeschalteter Immersion entfernt Active Immersion Videos mit dem Hinweis auf automatische Synchronisation aus der Liste: auf der Startseite, in den Vorschlägen neben dem Video, in der Suche und in der Shorts-Leiste. Übrig bleiben Videos mit ihrer Originalstimme.',
      ],
      figure: 'feed',
      after: [
        'Die Erweiterung kümmert sich auch um den Rest des Bildschirms: deutsche Titel, Ergebnisse und Beiträge werden je nach gewählter Stufe (Teilweise oder Total) unscharf gemacht, ins Englische übersetzt oder entfernt. Und was du auf Englisch in ChatGPT, Gmail oder WhatsApp Web schreibst, wird mit Erklärung korrigiert.',
        'Was sie nicht kann: Active Immersion läuft im Browser am Computer (Chrome, Edge, Brave und Firefox 140 oder neuer), nicht in der Handy- oder TV-App, und sie wechselt nicht den Ton eines Videos, das du direkt über einen Link öffnest. Für diese Fälle nutzt du die Schritte oben.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Warum ist der Videotitel auf Deutsch, obwohl das Video auf Englisch ist?',
      a: 'Weil die automatische Übersetzung von YouTube für Ton, Titel und Beschreibung gilt. Ist Englisch unter deinen bevorzugten Sprachen, behalten englische Videos ihren Originaltitel und Originalton.',
    },
    {
      q: 'Kann die Person, die das Video hochgeladen hat, die automatische Synchronisation abschalten?',
      a: 'Ja. In YouTube Studio unter Einstellungen → Kanal → Erweiterte Einstellungen kann der Creator die Option abwählen, die automatische Synchronisation erlaubt. Neue Videos des Kanals werden dann nicht mehr synchronisiert.',
    },
    {
      q: 'In welchen Sprachen gibt es die automatische Synchronisation?',
      a: 'Beim Start im Dezember 2024 umfasste sie Englisch, Spanisch, Französisch, Deutsch, Hindi, Indonesisch, Italienisch, Japanisch und Portugiesisch, seitdem ist die Liste gewachsen. Die aktuelle Liste steht im YouTube-Hilfeartikel zur automatischen Synchronisation.',
    },
    {
      q: 'Ist Active Immersion kostenlos?',
      a: 'Active Immersion kannst du 7 Tage kostenlos testen, mit allen Funktionen und ohne Karte. Danach kostet es 4,99 US-Dollar im Monat und ist jederzeit kündbar.',
    },
  ],
  sources: [
    { label: 'YouTube-Hilfe: Automatische Synchronisation verwenden', url: help },
    { label: 'YouTube-Hilfe: Videos in deiner bevorzugten Sprache ansehen', url: prefs },
    { label: 'TechCrunch, 10. Dez. 2024: YouTube’s new auto-dubbing feature is now available for knowledge-focused content', url: tc },
  ],
  fig: {
    badge: {
      cards: [
        { title: '10 einfache Gewohnheiten, die deinen Alltag verändern', channel: 'Englischsprachiger Kanal', badge: 'Automatisch synchronisiert' },
        { title: 'How I learned English by watching series', channel: 'Englischsprachiger Kanal' },
      ],
      pointer: 'Titel übersetzt, Ton synchronisiert',
      caption: 'Synchronisierte Videos tragen den Hinweis „Automatisch synchronisiert“ und oft einen übersetzten Titel.',
    },
    menu: {
      settings: 'Einstellungen',
      rows: [['Untertitel', 'Aus'], ['Wiedergabegeschwindigkeit', 'Standard'], ['Qualität', 'Automatisch']],
      audio: 'Audiotrack',
      dubbed: 'Deutsch (automatisch synchronisiert)',
      original: 'Englisch (Original)',
      other: 'Spanisch (automatisch synchronisiert)',
      caption: 'Im Player: Einstellungen → Audiotrack → die als Original markierte Spur.',
    },
    prefs: {
      path: 'Einstellungen › Wiedergabe und Leistung',
      heading: 'Bevorzugte Sprachen',
      have: 'Deutsch',
      add: 'Englisch',
      confirm: 'Bestätigen',
      caption: 'Mit Englisch unter den bevorzugten Sprachen laufen englische Videos im Originalton.',
    },
    feed: {
      label: 'youtube.com, mit Active Immersion',
      removed: 'synchronisiert · entfernt',
      rows: [
        { title: '10 einfache Gewohnheiten, die deinen Alltag verändern', dubbed: true },
        { title: 'How I learned English by watching series' },
        { title: 'Warum du immer noch kein Englisch sprichst', dubbed: true },
        { title: 'A day in my life in London' },
      ],
      caption: 'Synchronisierte Videos verschwinden aus der Liste, Videos mit Originalstimme bleiben.',
    },
  },
};
