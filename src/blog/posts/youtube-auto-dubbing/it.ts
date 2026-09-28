import type { PostCopy } from '../../types';

const help = 'https://support.google.com/youtube/answer/15569972?hl=it';
const prefs = 'https://support.google.com/youtube/answer/13339776?hl=it';
const tc = 'https://techcrunch.com/2024/12/10/youtubes-new-auto-dubbing-feature-is-now-available-for-knowledge-focused-content/';

export const it: PostCopy = {
  slug: 'come-disattivare-doppiaggio-automatico-youtube',
  title: 'Come disattivare il doppiaggio automatico di YouTube',
  metaTitle: 'Come disattivare il doppiaggio automatico di YouTube (2026)',
  description: 'Il doppiaggio automatico di YouTube sostituisce la voce originale con una voce IA. Come tornare all’audio originale su computer, telefono e TV, e come evitarlo.',
  dek: 'YouTube ora doppia i video con l’intelligenza artificiale. Se stai imparando l’inglese, ti toglie proprio la parte che insegna: la voce originale.',
  answer:
    'A settembre 2026, YouTube non ha un pulsante per disattivare il doppiaggio automatico una volta per tutte. In ogni video puoi tornare all’audio originale da <b class="ui">Impostazioni</b> → <b class="ui">Traccia audio</b> → la traccia indicata come <b class="ui">originale</b>. Per i video successivi, aggiungi l’inglese alle tue <b class="ui">lingue preferite</b>: secondo la guida di YouTube, i video registrati in una lingua preferita non vengono doppiati.',
  howTo: {
    name: 'Come tornare all’audio originale di un video doppiato su YouTube',
    steps: [
      'Apri il video e fai clic sull’ingranaggio Impostazioni del player.',
      'Fai clic su Traccia audio.',
      'Scegli la traccia con “originale” nel nome, ad esempio “Inglese (originale)”.',
    ],
  },
  sections: [
    {
      id: 'cos-e',
      h2: 'Che cos’è il doppiaggio automatico di YouTube?',
      body: [
        'Il doppiaggio automatico è una funzione di YouTube che crea, con l’intelligenza artificiale, una versione dell’audio del video in altre lingue. YouTube rileva la lingua in cui il video è stato registrato e genera da solo le tracce doppiate, e i video con quell’audio mostrano la dicitura <b class="ui">Doppiato automaticamente</b>.',
        'La funzione è stata aperta a dicembre 2024 ai canali di contenuti informativi, come i video che insegnano a cucinare o a cucire, e usa Gemini, l’IA di Google, secondo <a href="' + tc + '">TechCrunch</a>. All’epoca YouTube disse di voler estendere il doppiaggio ad altri tipi di contenuti.',
        'Il doppiaggio non arriva da solo: secondo la <a href="' + prefs + '">guida di YouTube</a>, la preferenza di lingua vale per audio, titolo e descrizione. Per questo un video registrato in inglese può arrivare nella tua home con il titolo in italiano e una voce IA che parla italiano.',
      ],
      figure: 'badge',
    },
    {
      id: 'perche-ostacola',
      h2: 'Perché il doppiaggio automatico ostacola chi impara l’inglese?',
      body: [
        'Perché sostituisce proprio ciò che devi ascoltare. Un video in inglese è pratica di ascolto gratuita: accenti veri, ritmo vero e le espressioni che le persone usano davvero. Con il doppiaggio senti una voce sintetica in italiano e perdi tutto questo, spesso senza accorgertene, perché anche il titolo arriva tradotto.',
        'E la traduzione può sbagliare. La <a href="' + help + '">guida di YouTube</a> avverte che i doppiaggi possono contenere errori dovuti a pronuncia, accenti, dialetti o rumori di fondo. Al lancio, YouTube stesso ha riconosciuto che a volte la traduzione non è del tutto corretta o la voce non rappresenta bene chi parla.',
      ],
    },
    {
      id: 'sul-computer',
      h2: 'Come torno all’audio originale di un video sul computer?',
      body: ['Bastano tre clic, direttamente nel player:'],
      steps: [
        'Apri il video e fai clic sull’ingranaggio <b class="ui">Impostazioni</b>, nell’angolo del player.',
        'Fai clic su <b class="ui">Traccia audio</b>.',
        'Scegli la traccia con <b class="ui">originale</b> nel nome, ad esempio <b class="ui">Inglese (originale)</b>.',
      ],
      figure: 'menu',
      after: ['Vale solo per quel video. Se anche il successivo è doppiato, devi cambiare di nuovo, ed è per questo che l’impostazione delle lingue preferite, più sotto, fa la differenza.'],
    },
    {
      id: 'telefono-e-tv',
      h2: 'Come disattivo il doppiaggio automatico su telefono e TV?',
      body: [
        'Nell’app YouTube per Android e iPhone il percorso è lo stesso del computer: tocca il video, tocca l’ingranaggio <b class="ui">Impostazioni</b> e scegli <b class="ui">Traccia audio</b>. Negli Shorts l’opzione è nel menu con i tre puntini.',
        'Sulla TV, mostra i controlli del player con il telecomando, vai sull’ingranaggio e cerca <b class="ui">Traccia audio</b> o <b class="ui">Audio</b>. Il nome cambia un po’ tra Android TV, Google TV, Samsung, LG e Roku, ma il percorso è simile.',
      ],
    },
    {
      id: 'per-sempre',
      h2: 'Si può disattivare il doppiaggio automatico di YouTube per sempre?',
      body: [
        'Non esiste un pulsante per farlo, ma un’impostazione risolve buona parte del problema: le lingue preferite. La <a href="' + prefs + '">guida di YouTube</a> dice che i contenuti con audio originale in una delle tue lingue preferite non vengono tradotti e sono riprodotti con l’audio originale. Se aggiungi l’inglese, i video registrati in inglese smettono di arrivare doppiati.',
        'Sul computer:',
      ],
      steps: [
        'Fai clic sulla tua foto del profilo e poi su <b class="ui">Impostazioni</b>.',
        'Apri <b class="ui">Riproduzione e prestazioni</b>.',
        'In <b class="ui">Lingua</b>, fai clic su <b class="ui">Aggiungi o modifica lingue</b>.',
        'Seleziona l’inglese (e le altre lingue che capisci) e fai clic su <b class="ui">Conferma</b>.',
      ],
      figure: 'prefs',
      after: [
        'Sul telefono: foto del profilo → <b class="ui">Impostazioni</b> → <b class="ui">Lingue</b> → <b class="ui">Lingue preferite</b>.',
        'Un limite importante: secondo YouTube, questa impostazione è separata dalla lingua dell’app e dalla tua posizione, e non cambia né la ricerca né i consigli. La tua home resta piena di video in italiano.',
      ],
    },
    {
      id: 'home',
      h2: 'Come tolgo i video doppiati dalla home di YouTube?',
      body: [
        'Con le impostazioni di YouTube non si può. Qui entra in gioco <strong>Active Immersion</strong>, un’estensione per Chrome e Firefox pensata per imparare l’inglese con l’internet che usi già.',
        'Con l’immersione attiva, Active Immersion toglie dall’elenco i video con la dicitura di doppiaggio automatico: nella home, nei suggerimenti accanto al video, nella ricerca e nella fila degli Shorts. Restano i video con la loro voce originale.',
      ],
      figure: 'feed',
      after: [
        'L’estensione si occupa anche del resto dello schermo: titoli, risultati e post in italiano vengono sfocati, tradotti in inglese o rimossi, in base al livello scelto (Parziale o Totale). E i messaggi che scrivi in inglese su ChatGPT, Gmail o WhatsApp Web vengono corretti, con una spiegazione.',
        'Cosa non fa: Active Immersion funziona nel browser del computer (Chrome, Edge, Brave e Firefox 140 o successivo), non nell’app per telefono o TV, e non cambia l’audio di un video aperto direttamente da un link. In questi casi, usa i passaggi qui sopra.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Perché il titolo del video è in italiano se il video è in inglese?',
      a: 'Perché la traduzione automatica di YouTube vale per audio, titolo e descrizione. Quando l’inglese è tra le tue lingue preferite, i video registrati in inglese mantengono titolo e audio originali.',
    },
    {
      q: 'Chi ha pubblicato il video può disattivare il doppiaggio automatico?',
      a: 'Sì. In YouTube Studio, in Impostazioni → Canale → Impostazioni avanzate, il creator può deselezionare l’opzione che consente il doppiaggio automatico. I nuovi video del canale non vengono più doppiati.',
    },
    {
      q: 'In quali lingue esiste il doppiaggio automatico?',
      a: 'Al lancio, a dicembre 2024, copriva inglese, spagnolo, francese, tedesco, hindi, indonesiano, italiano, giapponese e portoghese, e l’elenco è cresciuto da allora. L’elenco aggiornato è nell’articolo della guida di YouTube sul doppiaggio automatico.',
    },
    {
      q: 'Active Immersion è gratuito?',
      a: 'Active Immersion offre 7 giorni gratis con tutto incluso e senza carta. Dopo costa 4,99 dollari USA al mese e puoi disdire quando vuoi.',
    },
  ],
  sources: [
    { label: 'Guida di YouTube: Usare il doppiaggio automatico', url: help },
    { label: 'Guida di YouTube: Guardare i video nella lingua preferita', url: prefs },
    { label: 'TechCrunch, 10 dic. 2024: YouTube’s new auto-dubbing feature is now available for knowledge-focused content', url: tc },
  ],
  fig: {
    badge: {
      cards: [
        { title: '10 abitudini semplici che cambieranno la tua routine', channel: 'Canale in inglese', badge: 'Doppiato automaticamente' },
        { title: 'How I learned English by watching series', channel: 'Canale in inglese' },
      ],
      pointer: 'titolo tradotto, audio doppiato',
      caption: 'I video doppiati mostrano la dicitura “Doppiato automaticamente” e spesso un titolo tradotto.',
    },
    menu: {
      settings: 'Impostazioni',
      rows: [['Sottotitoli', 'Disattivati'], ['Velocità', 'Normale'], ['Qualità', 'Automatica']],
      audio: 'Traccia audio',
      dubbed: 'Italiano (doppiato automaticamente)',
      original: 'Inglese (originale)',
      other: 'Spagnolo (doppiato automaticamente)',
      caption: 'Nel player: Impostazioni → Traccia audio → la traccia indicata come originale.',
    },
    prefs: {
      path: 'Impostazioni › Riproduzione e prestazioni',
      heading: 'Lingue preferite',
      have: 'Italiano',
      add: 'Inglese',
      confirm: 'Conferma',
      caption: 'Con l’inglese tra le lingue preferite, i video registrati in inglese partono con l’audio originale.',
    },
    feed: {
      label: 'youtube.com, con Active Immersion',
      removed: 'doppiato · rimosso',
      rows: [
        { title: '10 abitudini semplici che cambieranno la tua routine', dubbed: true },
        { title: 'How I learned English by watching series' },
        { title: 'Perché non parli ancora inglese', dubbed: true },
        { title: 'A day in my life in London' },
      ],
      caption: 'I video doppiati escono dall’elenco e restano quelli con la voce originale.',
    },
  },
};
