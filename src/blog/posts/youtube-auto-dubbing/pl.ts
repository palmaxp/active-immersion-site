import type { PostCopy } from '../../types';

const help = 'https://support.google.com/youtube/answer/15569972?hl=pl';
const prefs = 'https://support.google.com/youtube/answer/13339776?hl=pl';
const tc = 'https://techcrunch.com/2024/12/10/youtubes-new-auto-dubbing-feature-is-now-available-for-knowledge-focused-content/';

export const pl: PostCopy = {
  slug: 'jak-wylaczyc-automatyczny-dubbing-youtube',
  title: 'Jak wyłączyć automatyczny dubbing na YouTube',
  metaTitle: 'Jak wyłączyć automatyczny dubbing na YouTube (2026)',
  description: 'Automatyczny dubbing YouTube zamienia oryginalny głos na głos AI. Jak wrócić do oryginalnego dźwięku na komputerze, telefonie i telewizorze i jak tego uniknąć.',
  dek: 'YouTube dubbinguje teraz filmy za pomocą sztucznej inteligencji. Jeśli uczysz się angielskiego, tracisz przez to właśnie to, co uczy: oryginalny głos.',
  answer:
    'We wrześniu 2026 roku YouTube nie ma przełącznika, który wyłącza automatyczny dubbing na stałe. W każdym filmie możesz wrócić do oryginalnego dźwięku w <b class="ui">Ustawienia</b> → <b class="ui">Ścieżka dźwiękowa</b> → ścieżka oznaczona jako <b class="ui">oryginalna</b>. Dla kolejnych filmów dodaj angielski do <b class="ui">preferowanych języków</b>: według pomocy YouTube filmy nagrane w preferowanym języku nie są dubbingowane.',
  howTo: {
    name: 'Jak przywrócić oryginalny dźwięk w filmie z dubbingiem na YouTube',
    steps: [
      'Otwórz film i kliknij ikonę koła zębatego (Ustawienia) w odtwarzaczu.',
      'Kliknij Ścieżka dźwiękowa.',
      'Wybierz ścieżkę z dopiskiem „oryginalna”, na przykład „angielski (oryginalna)”.',
    ],
  },
  sections: [
    {
      id: 'co-to-jest',
      h2: 'Czym jest automatyczny dubbing na YouTube?',
      body: [
        'Automatyczny dubbing to funkcja YouTube, która za pomocą sztucznej inteligencji tworzy wersję ścieżki dźwiękowej filmu w innych językach. YouTube rozpoznaje język, w którym film został nagrany, sam generuje ścieżki z dubbingiem, a takie filmy są oznaczone jako <b class="ui">dubbing automatyczny</b>.',
        'Funkcję udostępniono w grudniu 2024 roku kanałom z treściami informacyjnymi, na przykład filmami uczącymi gotowania czy szycia. Według <a href="' + tc + '">TechCrunch</a> działa na Gemini, sztucznej inteligencji Google. YouTube zapowiadał wtedy rozszerzenie dubbingu na inne rodzaje treści.',
        'Dubbing nie przychodzi sam: według <a href="' + prefs + '">pomocy YouTube</a> ustawienie języka dotyczy dźwięku, tytułu i opisu. Dlatego film nagrany po angielsku może trafić na Twoją stronę główną z polskim tytułem i głosem AI mówiącym po polsku.',
      ],
      figure: 'badge',
    },
    {
      id: 'dlaczego-przeszkadza',
      h2: 'Dlaczego automatyczny dubbing przeszkadza w nauce angielskiego?',
      body: [
        'Bo zastępuje dokładnie to, czego musisz słuchać. Film po angielsku to darmowy trening słuchania: prawdziwe akcenty, prawdziwy rytm i wyrażenia, których ludzie naprawdę używają. Z dubbingiem słyszysz syntetyczny głos po polsku i tracisz to wszystko, często nawet tego nie zauważając, bo tytuł też jest przetłumaczony.',
        'A tłumaczenie może być błędne. <a href="' + help + '">Pomoc YouTube</a> ostrzega, że dubbing może zawierać błędy wynikające z wymowy, akcentu, dialektu lub hałasu w tle. Przy premierze YouTube sam przyznał, że czasem tłumaczenie nie jest do końca trafne albo głos nie oddaje dobrze osoby mówiącej.',
      ],
    },
    {
      id: 'na-komputerze',
      h2: 'Jak wrócić do oryginalnego dźwięku filmu na komputerze?',
      body: ['Wystarczą trzy kliknięcia, bezpośrednio w odtwarzaczu:'],
      steps: [
        'Otwórz film i kliknij koło zębate <b class="ui">Ustawienia</b> w rogu odtwarzacza.',
        'Kliknij <b class="ui">Ścieżka dźwiękowa</b>.',
        'Wybierz ścieżkę z dopiskiem <b class="ui">oryginalna</b>, na przykład <b class="ui">angielski (oryginalna)</b>.',
      ],
      figure: 'menu',
      after: ['To działa tylko dla tego jednego filmu. Jeśli następny też ma dubbing, trzeba przełączyć ponownie, i dlatego ustawienie preferowanych języków, opisane niżej, robi różnicę.'],
    },
    {
      id: 'telefon-i-tv',
      h2: 'Jak wyłączyć automatyczny dubbing na telefonie i telewizorze?',
      body: [
        'W aplikacji YouTube na Androida i iPhone’a droga jest taka sama jak na komputerze: dotknij filmu, dotknij koła zębatego <b class="ui">Ustawienia</b> i wybierz <b class="ui">Ścieżka dźwiękowa</b>. W Shorts ta opcja jest w menu z trzema kropkami.',
        'Na telewizorze wyświetl sterowanie odtwarzaczem pilotem, przejdź do koła zębatego i poszukaj opcji <b class="ui">Ścieżka dźwiękowa</b> lub <b class="ui">Dźwięk</b>. Nazwa różni się nieco między Android TV, Google TV, Samsungiem, LG i Roku, ale droga jest podobna.',
      ],
    },
    {
      id: 'na-stale',
      h2: 'Czy da się wyłączyć automatyczny dubbing na YouTube na stałe?',
      body: [
        'Nie ma do tego przełącznika, ale jedno ustawienie rozwiązuje większość problemu: preferowane języki. <a href="' + prefs + '">Pomoc YouTube</a> podaje, że treści z oryginalnym dźwiękiem w jednym z Twoich preferowanych języków nie są tłumaczone i odtwarzają się z oryginalnym dźwiękiem. Jeśli dodasz angielski, filmy nagrane po angielsku przestaną przychodzić z dubbingiem.',
        'Na komputerze:',
      ],
      steps: [
        'Kliknij swoje zdjęcie profilowe, a potem <b class="ui">Ustawienia</b>.',
        'Otwórz <b class="ui">Odtwarzanie i wydajność</b>.',
        'W sekcji <b class="ui">Język</b> kliknij <b class="ui">Dodaj lub edytuj języki</b>.',
        'Zaznacz angielski (i inne języki, które rozumiesz) i kliknij <b class="ui">Potwierdź</b>.',
      ],
      figure: 'prefs',
      after: [
        'Na telefonie: zdjęcie profilowe → <b class="ui">Ustawienia</b> → <b class="ui">Języki</b> → <b class="ui">Preferowane języki</b>.',
        'Ważne ograniczenie: według YouTube to ustawienie jest niezależne od języka aplikacji i lokalizacji i nie zmienia ani wyszukiwania, ani rekomendacji. Strona główna nadal będzie pełna polskich filmów.',
      ],
    },
    {
      id: 'strona-glowna',
      h2: 'Jak usunąć filmy z dubbingiem ze strony głównej YouTube?',
      body: [
        'Ustawienia YouTube tego nie umożliwiają. Tu pojawia się <strong>Active Immersion</strong>, rozszerzenie do Chrome i Firefoksa stworzone do nauki angielskiego z internetem, z którego już korzystasz.',
        'Przy włączonej immersji Active Immersion usuwa z listy filmy oznaczone jako automatycznie dubbingowane: na stronie głównej, w propozycjach obok filmu, w wyszukiwarce i na półce Shorts. Zostają filmy z oryginalnym głosem.',
      ],
      figure: 'feed',
      after: [
        'Rozszerzenie zajmuje się też resztą ekranu: polskie tytuły, wyniki i posty są rozmywane, tłumaczone na angielski albo usuwane, zależnie od wybranego poziomu (Częściowa lub Pełna). A wiadomości, które piszesz po angielsku w ChatGPT, Gmailu czy WhatsApp Web, dostają poprawki z wyjaśnieniem.',
        'Czego nie robi: Active Immersion działa w przeglądarce na komputerze (Chrome, Edge, Brave i Firefox 140 lub nowszy), nie w aplikacji na telefon ani telewizor, i nie zmienia dźwięku filmu otwartego bezpośrednio z linku. W takich przypadkach skorzystaj z kroków opisanych wyżej.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Dlaczego tytuł filmu jest po polsku, skoro film jest po angielsku?',
      a: 'Bo automatyczne tłumaczenie YouTube dotyczy dźwięku, tytułu i opisu. Gdy angielski jest wśród Twoich preferowanych języków, filmy nagrane po angielsku zachowują oryginalny tytuł i dźwięk.',
    },
    {
      q: 'Czy osoba, która opublikowała film, może wyłączyć automatyczny dubbing?',
      a: 'Tak. W YouTube Studio, w Ustawienia → Kanał → Ustawienia zaawansowane, twórca może odznaczyć opcję zezwalającą na automatyczny dubbing. Nowe filmy kanału nie będą wtedy dubbingowane.',
    },
    {
      q: 'W jakich językach działa automatyczny dubbing?',
      a: 'Przy premierze w grudniu 2024 roku obejmował angielski, hiszpański, francuski, niemiecki, hindi, indonezyjski, włoski, japoński i portugalski, a lista od tamtej pory się wydłużyła. Aktualna lista jest w artykule pomocy YouTube o automatycznym dubbingu.',
    },
    {
      q: 'Czy Active Immersion jest darmowy?',
      a: 'Active Immersion ma 7 dni za darmo, ze wszystkimi funkcjami i bez karty. Potem kosztuje 4,99 USD miesięcznie i można go anulować w dowolnym momencie.',
    },
  ],
  sources: [
    { label: 'Pomoc YouTube: Korzystanie z automatycznego dubbingu', url: help },
    { label: 'Pomoc YouTube: Oglądanie filmów w preferowanym języku', url: prefs },
    { label: 'TechCrunch, 10 grudnia 2024: YouTube’s new auto-dubbing feature is now available for knowledge-focused content', url: tc },
  ],
  fig: {
    badge: {
      cards: [
        { title: '10 prostych nawyków, które zmienią Twoją codzienność', channel: 'Kanał anglojęzyczny', badge: 'Dubbing automatyczny' },
        { title: 'How I learned English by watching series', channel: 'Kanał anglojęzyczny' },
      ],
      pointer: 'przetłumaczony tytuł, dubbingowany dźwięk',
      caption: 'Filmy z dubbingiem mają oznaczenie automatycznego dubbingu i często przetłumaczony tytuł.',
    },
    menu: {
      settings: 'Ustawienia',
      rows: [['Napisy', 'Wyłączone'], ['Szybkość odtwarzania', 'Normalna'], ['Jakość', 'Automatyczna']],
      audio: 'Ścieżka dźwiękowa',
      dubbed: 'polski (dubbing automatyczny)',
      original: 'angielski (oryginalna)',
      other: 'hiszpański (dubbing automatyczny)',
      caption: 'W odtwarzaczu: Ustawienia → Ścieżka dźwiękowa → ścieżka oznaczona jako oryginalna.',
    },
    prefs: {
      path: 'Ustawienia › Odtwarzanie i wydajność',
      heading: 'Preferowane języki',
      have: 'polski',
      add: 'angielski',
      confirm: 'Potwierdź',
      caption: 'Gdy angielski jest wśród preferowanych języków, filmy nagrane po angielsku odtwarzają się z oryginalnym dźwiękiem.',
    },
    feed: {
      label: 'youtube.com, z Active Immersion',
      removed: 'dubbing · usunięty',
      rows: [
        { title: '10 prostych nawyków, które zmienią Twoją codzienność', dubbed: true },
        { title: 'How I learned English by watching series' },
        { title: 'Dlaczego wciąż nie mówisz po angielsku', dubbed: true },
        { title: 'A day in my life in London' },
      ],
      caption: 'Filmy z dubbingiem znikają z listy, a zostają te z oryginalnym głosem.',
    },
  },
};
