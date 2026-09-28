import type { APIRoute } from 'astro';
import { SITE } from '../i18n/copy';

// Every page with its language alternates, so Google indexes the PT-BR and English versions separately.
const LASTMOD = '2026-09-27';
const pages = [
  { loc: SITE, alternates: { 'pt-BR': SITE, en: `${SITE}en/`, 'x-default': SITE } },
  { loc: `${SITE}en/`, alternates: { 'pt-BR': SITE, en: `${SITE}en/`, 'x-default': SITE } },
  { loc: `${SITE}privacy/` },
];

export const GET: APIRoute = () => {
  const urls = pages
    .map((p) => {
      const alts = p.alternates
        ? Object.entries(p.alternates).map(([lang, href]) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`).join('')
        : '';
      return `  <url>\n    <loc>${p.loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>${alts}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
