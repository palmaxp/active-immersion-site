/*
 * A blog post is one research question answered in several languages.
 * Paragraph strings are trusted HTML written here (inline tags only: strong, em, a, b.ui for on-screen labels).
 */
import type { BlogLang } from './i18n';

export type FigureKind = 'badge' | 'menu' | 'prefs' | 'feed';

/** Everything an illustration shows, in the reader's language. */
export type FigureCopy = {
  badge: { cards: { title: string; channel: string; badge?: string }[]; pointer: string; caption: string };
  menu: { settings: string; rows: [string, string][]; audio: string; dubbed: string; original: string; other: string; caption: string };
  prefs: { path: string; heading: string; have: string; add: string; confirm: string; caption: string };
  feed: { label: string; removed: string; rows: { title: string; dubbed?: boolean }[]; caption: string };
};

export type Section = {
  id: string;
  /** A question, answered by the first paragraph. */
  h2: string;
  body: string[];
  steps?: string[];
  figure?: FigureKind;
  after?: string[];
  /** Closes the section with the install box. */
  cta?: boolean;
};

export type PostCopy = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  dek: string;
  answer: string;
  /** Steps for the HowTo structured data (plain text). */
  howTo: { name: string; steps: string[] };
  sections: Section[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  fig: FigureCopy;
};

export type Post = {
  id: string;
  published: string;
  modified: string;
  /** Topic entity, for structured data. */
  about: string;
  t: Partial<Record<BlogLang, PostCopy>>;
};
