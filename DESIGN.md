---
name: Active Immersion
description: The site as a code review of the visitor's own internet, where Portuguese is struck out and English is inserted.
colors:
  paper: "#ffffff"
  gutter: "#f6f8fa"
  line: "#d1d9e0"
  line-soft: "#e6ebf0"
  ink: "#1f2328"
  ink-soft: "#3d444d"
  muted: "#59636e"
  del: "#b91c28"
  del-bg: "#ffebe9"
  del-hi: "#ffcecb"
  ins: "#116329"
  ins-bg: "#dafbe1"
  ins-hi: "#aceebb"
  go: "#1f883d"
  go-hover: "#1a7f37"
  amber: "#f59e0b"
  amber-ink: "#8a5a00"
  amber-bg: "#fff8e1"
typography:
  display:
    fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5.6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  display-close:
    fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  amount:
    fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  diff-row:
    fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Spline Sans Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0"
    fontFeature: "\"tnum\""
  counter:
    fontFamily: "'Spline Sans Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "\"tnum\""
rounded:
  xs: "7px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  panel: "14px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "26px"
  xl: "44px"
  file: "64px"
  section: "110px"
  container: "1180px"
  page-gutter: "20px"
components:
  button-primary:
    backgroundColor: "{colors.go}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "11px 16px"
  button-primary-hover:
    backgroundColor: "{colors.go-hover}"
    textColor: "{colors.paper}"
  button-primary-large:
    backgroundColor: "{colors.go}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
    width: "100%"
  button-primary-small:
    backgroundColor: "{colors.go}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  button-primary-disabled:
    backgroundColor: "{colors.ins-bg}"
    textColor: "{colors.ins}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  button-ghost-hover:
    backgroundColor: "{colors.gutter}"
  diff-line-del:
    backgroundColor: "{colors.del-bg}"
    textColor: "{colors.del}"
    typography: "{typography.diff-row}"
  diff-line-ins:
    backgroundColor: "{colors.ins-bg}"
    textColor: "{colors.ins}"
    typography: "{typography.diff-row}"
  diff-line-ctx:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.diff-row}"
  poster-line-del:
    backgroundColor: "{colors.del-bg}"
    textColor: "{colors.del}"
    typography: "{typography.display}"
  poster-line-ins:
    backgroundColor: "{colors.ins-bg}"
    textColor: "{colors.ins}"
    typography: "{typography.display}"
  review-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
  review-panel-bar:
    backgroundColor: "{colors.gutter}"
    textColor: "{colors.ink}"
    padding: "12px 16px"
  review-comment:
    backgroundColor: "{colors.amber-bg}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  approval-box:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "18px"
  approval-box-large:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "26px"
  status-check-tag:
    backgroundColor: "{colors.ins-bg}"
    textColor: "{colors.ins}"
    rounded: "{rounded.pill}"
    padding: "3px 8px"
  score:
    backgroundColor: "{colors.ins-bg}"
    textColor: "{colors.ins}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  flag:
    backgroundColor: "{colors.del-hi}"
    textColor: "{colors.del}"
    rounded: "{rounded.pill}"
    padding: "4px 7px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "4px 7px"
  log-entry:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
  thread:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
  segmented-control:
    backgroundColor: "{colors.gutter}"
    rounded: "{rounded.md}"
    padding: "4px"
  segmented-option-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "8px 16px"
---

# Design System: Active Immersion

## Overview

**Creative North Star: "The Revised Internet"**

The site is a code review of the visitor's own browsing. Every claim is shown as a revision: the Portuguese way is a deleted line, struck in red on rose, and the English way is the inserted line beneath it, in green on mint. The page borrows the working materials of a diff viewer (numbered gray gutters, hairline rules, file headers, tabs, review comments, status checks, a change history) and uses them as its only components. Nothing on the page is a generic marketing card. If a new block can't be a diff, a review comment, a check or a history entry, it probably doesn't belong.

The surface is white paper with a cool gray gutter tone. Three inks each have one job: deletion red, insertion green, and amber for suggestions and the brand. Density is that of a well-kept pull request. The one display gesture is a poster-scale diff whose tinted bands run off both edges of the viewport while its text stays on the 1180px column. Everything else is calm, readable, 17px Spline Sans at 1.6.

Motion follows the same rule. There is one narrative motion, the strike and then the insert. Portuguese crosses itself out, then English wipes in from the left. Every other movement is small feedback to what the visitor did.

The world covers the home route (`/` in PT-BR, `/en/` in English, both rendered by `src/components/Landing.astro`). The older dark world in `src/layouts/Layout.astro` and `src/styles/global.css` (Playfair Display + Outfit on near-black) still serves only the privacy page. It is legacy, not part of this system, and should be migrated into this world rather than extended.

**Key Characteristics:**
- White review surface, gray numbered gutters, 1px hairline rules (`line` / `line-soft`).
- Three functional inks: red = removed, green = added or approved, amber = suggestion or brand.
- Spline Sans for words. Spline Sans Mono only for gutters, line numbers, hosts and paths, timestamps, counters and data tags.
- A poster-scale diff opens and closes the page. Diff rows, hunks and a change log carry the middle.
- One narrative motion (strike, then insert). Reduced motion shows every line in its final state.

## Colors

A one-bit review palette: neutral paper and gutter grays, with red, green and amber each tied to a meaning.

### Primary
- **Insertion Green** (`ins`, with `ins-bg` Mint Band and `ins-hi` Mint Highlight): the English line. Inserted diff rows, the green poster band, scores, "passou" tags, the selected flashcard rating, the answer word and text selection (`ins-hi`).
- **Approve Green** (`go`, hover `go-hover`): approval only. The filled install button, the check badge on approval boxes, check icons in status lists, completed commit dots and the privacy shield. It's a slightly brighter sibling of Insertion Green, kept for the act of approving.

### Secondary
- **Deletion Red** (`del`, with `del-bg` Rose Band and `del-hi` Rose Highlight): the Portuguese line and nothing else. Deleted diff rows, the rose poster band, the strike itself and the "dublado automaticamente" flag.

### Tertiary
- **Brand Amber** (`amber`): the binding brand color from PRODUCT.md. Used for the focus ring, the active tab underline, rating stars, the founder avatar and the target-word underline.
- **Suggestion Amber** (`amber-bg`, text on it in `ink-soft`): the background of every review comment, FAQ reply and commit note. This is where the product speaks.
- **Amber Ink** (`amber-ink`): amber as a readable foreground on white (the control-list icons).

### Neutral
- **Paper** (`paper`): page and panel background.
- **Gutter Gray** (`gutter`): panel title bars, status bars, alternating section bands (day log, versus, price), hover fills and the open FAQ summary.
- **Hairline** (`line`): borders of every panel, box and list. **Soft Hairline** (`line-soft`): internal dividers and section edges.
- **Ink** (`ink`): headings and primary text. **Ink Soft** (`ink-soft`): lead paragraphs, file-section copy, context rows and comment text. It's a reused value that is hard-coded in the CSS rather than declared as a custom property. **Muted** (`muted`): sub-lines, gutters, hosts, timestamps and footer.

### Named Rules
**The Three Inks Rule.** Red, green and amber are the only hues with a job, and each keeps its job. Red means removed, green means added or approved, amber means suggestion or brand. Never use red for errors-as-decoration, green for "nice", or amber as a generic highlight.

**The Approval Green Rule.** Filled `go` appears only where something is approved or completed: the install button, the approval check badge, done commit dots. There is one filled button style, and it is this one.

**The Honest Label Rule.** Illustrative data (the "Sites alterados" panel, the sample day) carries a small mono `tag` pill ("exemplo", "dia de exemplo"). Demo content is never passed off as real metrics.

## Typography

**Display Font:** Spline Sans (fallback ui-sans-serif, system-ui, sans-serif), weights 400–700
**Body Font:** Spline Sans
**Label/Mono Font:** Spline Sans Mono (fallback ui-monospace, SF Mono, Menlo, monospace), weights 400–600, always with tabular numerals

**Character:** One grotesque family carries every word. It's set tight and heavy at poster size (-0.04em) and relaxed and open in running text. Its mono sibling looks like the diff viewer's own chrome, so data and words stay visibly separate.

### Hierarchy
- **Display** (700, clamp(2.3rem, 5.6vw, 5.25rem), 1.02): only the hero poster diff. The closing diff uses **Display Close** (clamp(2rem, 5vw, 4.5rem)).
- **Amount** (700, clamp(3rem, 5vw, 4.25rem), 1, -0.05em): the price in the approval box.
- **Headline** (700, clamp(2rem, 4.2vw, 3.5rem), 1.04, -0.035em): section h2s, balanced wrap. Privacy steps down to clamp(1.8rem, 3vw, 2.6rem).
- **Title** (700, clamp(1.5rem, 2.4vw, 2.1rem), 1.1): file-section h3s.
- **Lead** (400, clamp(1.1rem, 1.35vw, 1.3rem), `ink-soft`, max 46ch): the hero paragraph. Section sub-lines run 1.1rem in `muted`, max 62ch.
- **Body** (400, 17px / 1.6; 16px at ≤900px): file copy at 1.08rem, max 52ch. FAQ answers max 70ch.
- **Diff Row** (400, 15.5px / 1.5): hunk and correction rows. The versus rows grow to clamp(1.1rem, 1.9vw, 1.5rem) and the log rows to 16.5px.
- **Label** (mono 500–600, 11–13px, letter-spacing 0): gutters, line numbers, hosts, tabs, timestamps, tags, flags.
- **Counter** (mono 600, 22px, -0.02em): status-bar numbers, with their units and labels in mono 12–13px.

### Named Rules
**The Mono Is Data Rule.** Spline Sans Mono is only for things a diff viewer would print: line numbers, the −/+ markers, hosts and file-like names, timestamps, counts, scores, pronunciation, intervals and status tags. Sentences, buttons, headings and comments are always Spline Sans.

**The No Kicker Rule.** Headings stand alone. There are no eyebrows, kickers or small uppercase labels above an h2 or h3. The heading says the thing, and a sub-line or the component below proves it.

## Layout

A single 1180px column (`width: min(1180px, 100% - 40px)`, so 20px page gutters) holds all text and panels. The poster diff is the one exception to the column. Its tinted bands span the full viewport, and a gutter column exactly as wide as the side margin (`max(20px, (100vw - 1180px) / 2)`) holds the mono line number and −/+ right-aligned. The display text therefore starts on the same left edge as everything below it, and on wide screens the colored lines run off the right edge.

Sections stack vertically at a 110px rhythm (privacy 100px, closing diff 130px bottom). They alternate between paper and gutter-gray bands (day log, versus, price), with each band edged top and bottom by a `line-soft` hairline. Inside the "how" section, each capability is a **file section**. It's a two-column grid (copy 0.85fr, demo 1.15fr, gap clamp(28px, 5vw, 72px)) separated from the next by a hairline and 64px above and below. Every other file flips so the demo leads. Real product screenshots follow a file at 48px as full-width figures.

Other two-column splits: hero (copy and approval box 0.92fr, review panel 1.08fr), control (copy, then the popup screenshot at auto width), price (history 1fr, approval box 320–440px) and privacy (heading 1fr, checks 1.3fr). Panel internals keep to 12–18px padding, with gaps of 8–14px between list items.

**Responsive (one breakpoint, 900px):** every grid collapses to one column and flipped files return to copy-first order. Body drops to 16px. The poster gutter narrows to 34px and hides line numbers, keeping only −/+. Diff rows move to a 34px / 22px / 1fr grid, and log and history timelines tighten their time column. The top-bar install button hides. The coach screenshot is desktop-only, and the lookup screenshot swaps to a mobile crop. The dock becomes full-width minus 32px without its sub-label. Phones (detected by user agent or coarse pointer under 900px) get "send the link to my computer" in place of store buttons. That swap happens in the script, not in CSS.

## Elevation & Depth

Depth works like paper on a desk. Section bands are flat and tonal (paper vs gutter). Review objects (the review panel, approval boxes, browser mock, coach, versus table, lookup card, screenshots, popup) float above them on soft, ink-tinted shadows with negative spread. Each shadow is a short 1–2px contact shadow plus a long diffuse drop, so the object reads as a lifted sheet, never a card with a hard edge. Inner structure (title bars, dividers, hunks) is always drawn with hairlines and tone, never with shadow.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 2px rgba(31,35,40,0.06), 0 18px 40px -26px rgba(31,35,40,0.35)`): the approval box.
- **Sheet High** (`box-shadow: 0 1px 2px rgba(31,35,40,0.06), 0 30px 60px -34px rgba(31,35,40,0.45)`): the hero review panel. Browser, coach and versus use the single-layer `0 30px 60px -38px…-44px rgba(31,35,40,0.45)` variant.
- **Figure** (`box-shadow: 0 30px 60px -40px rgba(31,35,40,0.5)`; the popup uses `0 40px 70px -40px rgba(31,35,40,0.6)`): product screenshots.
- **Approve Glow** (`box-shadow: 0 1px 0 rgba(31,35,40,0.1), 0 6px 16px -8px rgba(26,127,55,0.6)`, deepening on hover to `0 10px 22px -10px rgba(26,127,55,0.7)`): the filled green button only.
- **Dock** (`box-shadow: 0 16px 40px -12px rgba(31,35,40,0.5)`): the floating install dock.

### Named Rules
**The Lifted Sheet Rule.** Shadows are ink-tinted, diffuse and negatively spread, and they belong only to objects that sit on top of the page. There are no hard offset shadows, no colored glows (except the approve button's green) and no shadows inside a panel.

## Shapes

The corners are gently rounded and follow a clear scale. Panels, threads and screenshots are 14px (`panel`). Log entries, lookup and the large button are 12px. The standard button, comments, status-check lists and the segmented control are 10px. Small buttons, ghost buttons, scores and toast are 8px. Segmented options, thumbnails and the logo image are 7px. Pills (`tag`, `flag`, status-check tags, the count badge) are fully round, and avatars, the check badge and commit dots are circles. Every container is drawn with a 1px hairline. Panels clip their contents (`overflow: hidden`), so tinted diff rows run edge to edge inside them. The poster lines are the only bands with no radius and no border, because they are the page itself being revised.

## Components

### Buttons
Confident and green, like an approve button.
- **Shape:** gently rounded (10px; large 12px; small 8px) with a faint dark hairline (`rgba(31,35,40,0.15)`).
- **Primary (Approve):** `go` fill, white Spline Sans 600 15px, 11px 16px padding, with the Approve Glow shadow. The large variant is full-width, 18px text and 16px 20px padding. It carries a sub-label ("7 dias grátis") at 13px after a translucent white divider, and a trailing arrow pushed to the far edge.
- **Hover / Active / Disabled:** hover moves to `go-hover`, lifts 1px and deepens the glow (0.2s, `--ease`). Active returns to rest. Disabled turns into a quiet mint chip (`ins-bg` fill, `ins` text, no shadow).
- **Ghost:** transparent with a hairline border, 8px radius, 500 14px ink text, and a `gutter` fill on hover. Used for secondary actions inside demos ("Mostrar resposta").
- **Focus (all interactive elements):** 2px `amber` outline, 3px offset, 4px radius.

### Poster Diff (signature)
The hero headline and the closing line are each a real two-line diff. The `del` line sits on a full-bleed `del-bg` band in `del` ink, with the text wrapped in `<s>` and struck by a 0.07em bar at 55% height. The `ins` line sits on an `ins-bg` band in `ins` ink. The gutter holds a muted mono line number (hero only, desktop only) and a bold −/+. The h1 carries the inserted sentence as its accessible name, and the gutters are `aria-hidden`.

### Diff Rows and Hunks
Compact rows on a three-column grid: line number (48px, mono 12px), marker (26px, bold mono) and text. Deleted rows are rose with a 1.5px strike (2px in versus). Inserted rows are mint. Context rows are paper with `ink-soft` text. A deleted row can carry a `flag` pill (`del-hi` fill, mono 11px) that names what was removed. Corrections in the coach demo reuse the rows without line numbers.

### Review Panel
The hero's "Sites alterados" window, a hairlined 14px sheet with four layers:
- **Title bar:** `gutter` fill, mono 13px 600 title, a count badge and the "exemplo" `tag` pushed right.
- **Tabs:** mono 13px hosts (youtube.com, mail.google.com, chatgpt.com). The selected tab gets ink text, weight 600 and a 2px `amber` underline. Tabs auto-cycle every 4.2s until the visitor clicks one, then stay put.
- **Hunk:** diff rows followed by a **review comment**, an `amber-bg` box with a hairline and 10px radius. It shows the logo tile at 20px, the explanation in `ink-soft` and an optional mono **score** chip (`ins-bg`, `ins` text, `ins-hi` border).
- **Status bar:** `gutter` fill and top hairline. Mono counters at 22px/600, each with a unit and a muted 12px label. The first counter ticks up every 6s.

### Approval Box
The conversion component, styled as a pull request whose checks have passed. It's a paper sheet (14px radius, Sheet shadow, 18px padding; `big` variant 26px). A header row pairs a 30px `go` circle holding a white check with a bold status line ("Pronto para instalar", "Todas as verificações passaram"). Below it comes a list of green-checked conditions, then the full-width Approve button, then a muted alternate-store link and the star rating in `amber`.
- **Status checks list:** a hairlined 10px box with `line-soft` dividers. Each row is a `go` check icon, the condition in Spline Sans 15px and a trailing mono "passou" pill (`ins-bg`/`ins`). The privacy section reuses it standalone (`boxed`).
- **Amount:** the price in Amount type with a muted "/mês", followed by the daily equivalent and the foreign price in 14px `muted`.

### Change History (Log)
A vertical timeline. A 2px `line` rail runs behind 14px circular dots, and mono timestamps are right-aligned to its left. In the full log, each entry is a 12px hairlined sheet with a mono host header (`line-soft` divider), a − row in rose, a + row in mint and an optional `amber-bg` note. Dots start hollow and fill `go` once the entry has played. The **compact** log (the price trial history) has no sheet, just the timestamp, a filled dot and one line of `ink-soft` text.

### Review Threads (FAQ and founder note)
- **FAQ:** a single hairlined 14px sheet of `<details>` items separated by `line` hairlines. Each summary is a 30px gray circular question avatar, the question in 600 1.08rem and a chevron that rotates 180° on open. Hover or open fills the summary with `gutter`. The reply is an `amber-bg` comment box with the logo tile, indented under the avatar (62px left; 20px on mobile).
- **Founder note:** a thread sheet with a `gutter` header (an `amber` circular avatar with a mono initial, and the name in bold), the quote at clamp(1.15rem, 1.8vw, 1.4rem) and the star rating.

### File Sections and Demos
Each capability is a file section (see Layout) whose demo is a small, working product mock inside a hairlined sheet. The **browser mock** has a `gutter` chrome bar with three gray dots and a mono URL field. The **coach** mock types a sentence, then reveals the correction hunk. The **word sentence** box has an amber-underlined target word that opens a lookup card, and a flashcard with a four-way rating grid whose selected cell turns mint. The **segmented control** is a `gutter` track with 7px options, and the selected option becomes a paper chip with a 1px shadow.

### Navigation
A sticky slim top bar sits on 92% white with a 10px backdrop blur. On the left is the logo tile (28px, 7px radius) and the bold name. On the right are a muted globe-and-language switch (it darkens to ink on hover) and a small Approve button, which is hidden at ≤900px. The bar gains a `line-soft` bottom hairline once the hero's approval box scrolls out. The footer is a hairline-topped row of muted 14px links that underline on hover.

### Dock and Toast
- **Dock:** a fixed, centered install button 16px from the bottom. It slides up (0.5s `--ease`) once the approval box has left the viewport and hides again when it returns. At ≤900px it's full-width minus 32px without the sub-label.
- **Toast:** an `ink` pill above the dock that confirms the link was copied. It fades and rises in 0.3s.

### Motion
- **Signature (strike, then insert):** the strike is drawn as a `currentColor` background bar that grows from 0% to 100% width. On the poster that takes 0.9s after a 0.25s delay, and on rows 0.6–0.7s. The inserted text is then revealed left to right with `clip-path: inset(0 100% 0 0)` → `inset(0)`. On the poster that takes 1.1s after a 0.9s delay, and on rows 0.7–0.8s after about 0.5s. All of it uses `--ease: cubic-bezier(0.16, 1, 0.3, 1)`. It triggers once, at 35% visibility, and replays on every hunk tab change.
- **Feedback only:** button lift, chevron rotation, dock slide, toast fade, commit-dot fill, the coach correction expanding (grid rows 0fr → 1fr), feed rows collapsing at the Total level, the caret blink, a 2px shake on a wrong double-click and a 6px pop-in for the lookup card.
- **Reduced motion:** the motion styles apply only when scripts run and `prefers-reduced-motion` is not set (the `js-motion` class on `<html>`). Otherwise every line renders already struck and inserted, the tabs don't auto-cycle, the counters don't tick, the coach sentence appears complete with its correction, and a global rule removes every transition and animation. Without JavaScript the page is equally complete.

## Do's and Don'ts

### Do:
- **Do** express every claim or comparison as a revision: a − line struck in `del` on `del-bg`, then a + line in `ins` on `ins-bg`, with bold mono −/+ markers in a gutter.
- **Do** keep the three inks to their jobs: red removes, green adds or approves, amber suggests or brands. Product explanations always sit on `amber-bg`.
- **Do** build new blocks from the existing family (diff rows, review panel, review comment, approval box with status checks, change-history log, review thread) before inventing anything.
- **Do** use Spline Sans Mono, with tabular numerals, only for gutters, line numbers, hosts and paths, timestamps, counters, scores and status tags.
- **Do** mark illustrative data with a mono `tag` pill ("exemplo") so demo numbers are never mistaken for real metrics.
- **Do** start the poster diff on the 1180px column edge while its bands bleed to the viewport edges, and keep line numbers out of the gutter at ≤900px.
- **Do** draw structure with 1px `line` / `line-soft` hairlines and gutter-gray tone. Reserve shadows for sheets that float.
- **Do** let every animated line resolve to its final struck/inserted state under reduced motion or without JavaScript.

### Don't:
- **Don't** add a fourth functional hue, gradients or tinted decorative backgrounds. The only colors outside the three inks are neutrals and depicted content, meaning real product screenshots and the placeholder video thumbnails inside the browser mock.
- **Don't** use filled `go` green for anything that isn't an approval: no green section backgrounds, badges-as-decoration or second filled button style.
- **Don't** put eyebrows, kickers or small uppercase labels above headings.
- **Don't** set sentences, headings, buttons or comments in mono.
- **Don't** add a second narrative motion (parallax, scroll-scrubbed reveals, fade-up-on-scroll for ordinary blocks). The strike and the insert are the page's only story motion.
- **Don't** build generic feature cards, icon grids or testimonial carousels. PRODUCT.md forbids invented proof, and the only proof components are the rating and the founder's review thread.
- **Don't** use hard offset shadows, glows other than the approve button's, or shadows inside panels.
- **Don't** extend the legacy dark Playfair/Outfit styles (`src/layouts/Layout.astro`, `src/styles/global.css`) to new pages. They are the privacy page's leftover and not this system.
