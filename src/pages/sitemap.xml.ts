import type { APIRoute } from 'astro';
import { SITE } from '../i18n/copy';
import { BLOG_LANGS } from '../blog/i18n';
import { POSTS, blogAlternates, blogLangs, blogPath, postAlternates, postPath } from '../blog/posts';

// Every page with its language alternates, so Google indexes each language version separately.
const LASTMOD = '2026-09-27';
type Entry = { loc: string; lastmod: string; alternates?: { hreflang: string; href: string }[] };
const landing = [
  { hreflang: 'pt-BR', href: SITE },
  { hreflang: 'en', href: `${SITE}en/` },
  { hreflang: 'x-default', href: SITE },
];
const pages: Entry[] = [
  { loc: SITE, lastmod: LASTMOD, alternates: landing },
  { loc: `${SITE}en/`, lastmod: LASTMOD, alternates: landing },
  { loc: `${SITE}privacy/`, lastmod: LASTMOD },
  ...blogLangs().map((l) => ({ loc: `${SITE}${blogPath(l)}`, lastmod: LASTMOD, alternates: blogAlternates() })),
  ...POSTS.flatMap((post) =>
    BLOG_LANGS.filter((l) => post.t[l]).map((l) => ({ loc: `${SITE}${postPath(l, post.t[l]!)}`, lastmod: post.modified, alternates: postAlternates(post) })),
  ),
];

export const GET: APIRoute = () => {
  const urls = pages
    .map((p) => {
      const alts = (p.alternates ?? []).map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join('');
      return `  <url>\n    <loc>${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>${alts}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
