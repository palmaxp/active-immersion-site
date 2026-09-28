import { BLOG_LANGS, HTML_LANG, prefix, type BlogLang } from './i18n';
import type { Post, PostCopy } from './types';
import { SITE } from '../i18n/copy';
import { pt as dubPt } from './posts/youtube-auto-dubbing/pt';
import { en as dubEn } from './posts/youtube-auto-dubbing/en';
import { es as dubEs } from './posts/youtube-auto-dubbing/es';
import { fr as dubFr } from './posts/youtube-auto-dubbing/fr';
import { de as dubDe } from './posts/youtube-auto-dubbing/de';
import { it as dubIt } from './posts/youtube-auto-dubbing/it';
import { pl as dubPl } from './posts/youtube-auto-dubbing/pl';
import { pt as thinkPt } from './posts/think-in-english/pt';
import { es as thinkEs } from './posts/think-in-english/es';
import { en as thinkEn } from './posts/think-in-english/en';
import { pt as extPt } from './posts/extensions/pt';
import { es as extEs } from './posts/extensions/es';
import { en as extEn } from './posts/extensions/en';
import { pt as alonePt } from './posts/learn-alone/pt';
import { es as aloneEs } from './posts/learn-alone/es';
import { en as aloneEn } from './posts/learn-alone/en';

/*
 * Each post answers one question people search for (Google autocomplete research, September 2026),
 * in the languages where that search shows up.
 */
export const POSTS: Post[] = [
  {
    id: 'youtube-auto-dubbing',
    published: '2026-09-27',
    modified: '2026-09-27',
    about: 'YouTube automatic dubbing',
    t: { pt: dubPt, en: dubEn, es: dubEs, fr: dubFr, de: dubDe, it: dubIt, pl: dubPl },
  },
  {
    id: 'think-in-english',
    published: '2026-09-28',
    modified: '2026-09-28',
    about: 'Thinking in a second language (inner speech)',
    t: { pt: thinkPt, es: thinkEs, en: thinkEn },
  },
  {
    id: 'extensions',
    published: '2026-09-28',
    modified: '2026-09-28',
    about: 'Browser extensions for learning English',
    t: { pt: extPt, es: extEs, en: extEn },
  },
  {
    id: 'learn-alone',
    published: '2026-09-28',
    modified: '2026-09-28',
    about: 'Self-study of English as a second language',
    t: { pt: alonePt, es: aloneEs, en: aloneEn },
  },
];

export const postPath = (lang: BlogLang, c: PostCopy) => `${prefix(lang)}blog/${c.slug}/`;
export const blogPath = (lang: BlogLang) => `${prefix(lang)}blog/`;

/** Languages the blog has at least one post in. */
export const blogLangs = () => BLOG_LANGS.filter((l) => POSTS.some((p) => p.t[l]));

/** hreflang links between the translations of one post; x-default is English when it exists. */
export function postAlternates(post: Post) {
  const langs = BLOG_LANGS.filter((l) => post.t[l]);
  const alts = langs.map((l) => ({ hreflang: HTML_LANG[l], href: `${SITE}${postPath(l, post.t[l]!)}` }));
  const def = post.t.en ? 'en' : langs[0];
  return [...alts, { hreflang: 'x-default', href: `${SITE}${postPath(def, post.t[def]!)}` }];
}

export function blogAlternates() {
  const langs = blogLangs();
  return [
    ...langs.map((l) => ({ hreflang: HTML_LANG[l], href: `${SITE}${blogPath(l)}` })),
    { hreflang: 'x-default', href: `${SITE}${blogPath(langs.includes('en') ? 'en' : langs[0])}` },
  ];
}

/** Plain text of a post, for reading time and word count. */
export function plainText(c: PostCopy) {
  const html = [
    c.dek,
    c.answer,
    ...c.sections.flatMap((s) => [s.h2, ...s.body, ...(s.steps ?? []), ...(s.table?.rows.flat() ?? []), ...(s.after ?? [])]),
    ...c.faq.flatMap((f) => [f.q, f.a]),
  ].join(' ');
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
