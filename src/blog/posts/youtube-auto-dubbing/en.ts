import type { PostCopy } from '../../types';

const help = 'https://support.google.com/youtube/answer/15569972?hl=en';
const prefs = 'https://support.google.com/youtube/answer/13339776?hl=en';
const tc = 'https://techcrunch.com/2024/12/10/youtubes-new-auto-dubbing-feature-is-now-available-for-knowledge-focused-content/';

export const en: PostCopy = {
  slug: 'turn-off-youtube-auto-dubbing',
  title: 'How to turn off YouTube auto-dubbing',
  metaTitle: 'How to Turn Off YouTube Auto-Dubbing (2026 Guide)',
  description: 'YouTube auto-dubbing swaps the original voice for an AI voice. How to get the original audio back on computer, phone and TV, and how to stop it for good.',
  dek: 'YouTube now dubs videos with artificial intelligence. If you are learning English, that removes the very part that teaches you: the original voice.',
  answer:
    'As of September 2026, YouTube has no switch that turns auto-dubbing off for good. On each video, you can go back to the original audio under <b class="ui">Settings</b> → <b class="ui">Audio track</b> → the track marked <b class="ui">original</b>. For future videos, add English to your <b class="ui">preferred languages</b>: according to YouTube Help, videos recorded in a preferred language are not dubbed.',
  howTo: {
    name: 'How to switch a dubbed YouTube video back to its original audio',
    steps: [
      'Open the video and click the Settings gear in the player.',
      'Click Audio track.',
      'Choose the track with “original” in its name, for example “English (original)”.',
    ],
  },
  sections: [
    {
      id: 'what-is-it',
      h2: 'What is YouTube auto-dubbing?',
      body: [
        'Auto-dubbing is a YouTube feature that uses artificial intelligence to create a version of a video’s audio in other languages. YouTube detects the language the video was recorded in and generates the dubbed tracks on its own, and videos with that audio show an <b class="ui">Auto-dubbed</b> label.',
        'The feature opened in December 2024 to channels focused on informational content, such as videos that teach cooking or sewing, and it runs on Gemini, Google’s AI, according to <a href="' + tc + '">TechCrunch</a>. At the time, YouTube said it planned to bring dubbing to other kinds of content.',
        'The dub does not come alone: per <a href="' + prefs + '">YouTube Help</a>, the language preference applies to audio, titles and descriptions. That is why a video recorded in English can reach your home page with a title in your language and an AI voice speaking it.',
      ],
      figure: 'badge',
    },
    {
      id: 'why-it-hurts',
      h2: 'Why does auto-dubbing get in the way of learning English?',
      body: [
        'Because it replaces exactly what you need to hear. A video in English is free listening practice: real accents, real rhythm and the expressions people actually use. With the dub, you hear a synthetic voice in your own language and lose all of that, often without noticing, because the title arrives translated too.',
        'And the translation can be wrong. <a href="' + help + '">YouTube Help</a> warns that dubs may contain errors because of pronunciation, accents, dialects or background noise. At launch, YouTube itself acknowledged that the translation is sometimes not quite right, or the dubbed voice does not represent the speaker well.',
      ],
    },
    {
      id: 'on-computer',
      h2: 'How do I get the original audio back on a computer?',
      body: ['It takes three clicks, right in the video player:'],
      steps: [
        'Open the video and click the <b class="ui">Settings</b> gear in the corner of the player.',
        'Click <b class="ui">Audio track</b>.',
        'Choose the track with <b class="ui">original</b> in its name, for example <b class="ui">English (original)</b>.',
      ],
      figure: 'menu',
      after: ['This only applies to that video. If the next one is dubbed too, you have to switch again, which is why the preferred-languages setting below matters.'],
    },
    {
      id: 'phone-and-tv',
      h2: 'How do I turn off auto-dubbing on my phone and TV?',
      body: [
        'In the YouTube app for Android and iPhone, the path is the same as on a computer: tap the video, tap the <b class="ui">Settings</b> gear and choose <b class="ui">Audio track</b>. On Shorts, the option sits in the three-dot menu.',
        'On a TV, bring up the player controls with the remote, go to the gear and look for <b class="ui">Audio track</b> or <b class="ui">Audio</b>. The name varies a little between Android TV, Google TV, Samsung, LG and Roku, but the path is similar.',
      ],
    },
    {
      id: 'for-good',
      h2: 'Can I turn off YouTube auto-dubbing for good?',
      body: [
        'There is no switch for it, but one setting solves most of it: preferred languages. <a href="' + prefs + '">YouTube Help</a> says that content whose original audio is in one of your preferred languages is not translated and plays in its original audio. Add English, and videos recorded in English stop arriving dubbed.',
        'On a computer:',
      ],
      steps: [
        'Click your profile picture, then <b class="ui">Settings</b>.',
        'Open <b class="ui">Playback &amp; performance</b>.',
        'Under <b class="ui">Language</b>, click <b class="ui">Add or edit languages</b>.',
        'Select English (and any other language you understand) and click <b class="ui">Confirm</b>.',
      ],
      figure: 'prefs',
      after: [
        'On a phone: profile picture → <b class="ui">Settings</b> → <b class="ui">Languages</b> → <b class="ui">Preferred languages</b>.',
        'One important limit: according to YouTube, this setting is separate from the app language and your location, and it does not change search results or recommendations. Your home page stays full of videos in your own language.',
      ],
    },
    {
      id: 'home-page',
      h2: 'How do I remove dubbed videos from the YouTube home page?',
      body: [
        'YouTube’s settings cannot do it. This is where <strong>Active Immersion</strong> comes in: an extension for Chrome and Firefox made for learning English from the internet you already use.',
        'With immersion on, Active Immersion removes videos with the auto-dubbed label from the list: on the home page, in <b class="ui">Up next</b>, in search and on the Shorts shelf. What remains are videos with their original voice.',
      ],
      figure: 'feed',
      after: [
        'The extension also handles the rest of the screen: titles, results and posts in your native language are blurred, translated into English or removed, depending on the level you choose (Partial or Total). And the messages you write in English on ChatGPT, Gmail or WhatsApp Web get corrected, with explanations.',
        'What it does not do: Active Immersion works in the computer browser (Chrome, Edge, Brave and Firefox 140 or newer), not in the phone or TV app, and it does not switch the audio of a video you open directly from a link. For those cases, use the steps above.',
      ],
      cta: true,
    },
  ],
  faq: [
    {
      q: 'Why is the video title in my language when the video is in English?',
      a: 'Because YouTube’s automatic translation applies to audio, titles and descriptions. When English is among your preferred languages, videos recorded in English keep their original title and audio.',
    },
    {
      q: 'Can the person who uploaded the video turn auto-dubbing off?',
      a: 'Yes. In YouTube Studio, under Settings → Channel → Advanced settings, creators can uncheck the option that allows automatic dubbing. The channel’s new videos then stop being dubbed.',
    },
    {
      q: 'Which languages does auto-dubbing cover?',
      a: 'At launch in December 2024 it covered English, French, German, Hindi, Indonesian, Italian, Japanese, Portuguese and Spanish, and the list has grown since. The current list is in YouTube Help’s automatic dubbing article.',
    },
    {
      q: 'Is Active Immersion free?',
      a: 'Active Immersion has a 7-day free trial with everything included and no card. After that it costs US$ 4.99 a month and can be cancelled anytime.',
    },
  ],
  sources: [
    { label: 'YouTube Help: Use automatic dubbing', url: help },
    { label: 'YouTube Help: Watch videos in your preferred language', url: prefs },
    { label: 'TechCrunch, Dec 10, 2024: YouTube’s new auto-dubbing feature is now available for knowledge-focused content', url: tc },
  ],
  fig: {
    badge: {
      cards: [
        { title: '10 hábitos simples que cambiarán tu rutina', channel: 'English-language channel', badge: 'Auto-dubbed' },
        { title: 'How I learned English by watching series', channel: 'English-language channel' },
      ],
      pointer: 'translated title, dubbed audio',
      caption: 'Dubbed videos carry an “Auto-dubbed” label and often a translated title. Here, for a viewer whose language is Spanish.',
    },
    menu: {
      settings: 'Settings',
      rows: [['Subtitles/CC', 'Off'], ['Playback speed', 'Normal'], ['Quality', 'Auto']],
      audio: 'Audio track',
      dubbed: 'Spanish (auto-dubbed)',
      original: 'English (original)',
      other: 'French (auto-dubbed)',
      caption: 'In the player: Settings → Audio track → the track marked original.',
    },
    prefs: {
      path: 'Settings › Playback & performance',
      heading: 'Preferred languages',
      have: 'Spanish',
      add: 'English',
      confirm: 'Confirm',
      caption: 'With English among your preferred languages, videos recorded in English play in their original audio.',
    },
    feed: {
      label: 'youtube.com, with Active Immersion',
      removed: 'dubbed · removed',
      rows: [
        { title: '10 hábitos simples que cambiarán tu rutina', dubbed: true },
        { title: 'How I learned English by watching series' },
        { title: 'Por qué todavía no hablas inglés', dubbed: true },
        { title: 'A day in my life in London' },
      ],
      caption: 'Videos with the auto-dubbed label leave the list, and videos with their original voice stay.',
    },
  },
};
