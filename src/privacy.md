---
effective: "September 27, 2026 (extension version 2.0.12)"
---

<!-- Copied from PRIVACY.md in the extension repo (palmaxp/active-immersion). Edit it there first. -->

Active Immersion helps you learn English while you browse: it hides or translates Portuguese on web pages, gives feedback on what you write in English (the Writing Coach) and turns words into review cards. This policy explains what the extension reads, what it stores, what leaves your device and why.

## What is the short version of the Active Immersion privacy policy?

- Your settings, writings, cards and progress live in your browser and sync to **your account**, so you can use them on other devices.
- An **account is required**: it starts your 7-day free trial (no card). After the trial, the extension needs a subscription, paid through **Stripe**.
- Text is sent for **AI feedback or translation** only for the features that need it, listed below.
- We **don't sell data, show ads, use analytics or track you** across websites.

## What does Active Immersion keep on my device?

Active Immersion keeps these in your browser's extension storage and IndexedDB:

- Settings (blocking level, sites, goals, theme, reminders).
- Writing Coach entries: English messages you sent, with their corrections.
- Review cards, review history and daily activity (minutes read in English and in your own language, minutes of breaks from immersion, reviews, messages written), used for streaks, XP, the progress chart and Insights. Only counts are stored: never which pages you visited.

## What does Active Immersion read on web pages?

Active Immersion runs on the pages you visit and reads only what each feature needs:

- **Portuguese detection.** Page text is checked **on your device** (with your browser's built-in language detector) to find Portuguese and hide, blur or translate it. That text is not stored or sent anywhere unless you ask for a translation (section 3).
- **Writing Coach.** When you **send** a message in English (press Enter or click a send button), the extension saves it. It ignores drafts you don't send, password and other sensitive fields, search boxes, mostly pasted text, code, links on their own, and text that isn't English. By default it listens on all sites except banking, government and sign-in pages. You can limit it to chosen sites or turn it off in Settings.
- **Searches.** If you search in Portuguese on a search engine or YouTube, the query is checked on your device and you're offered an English search instead.
- **Typing hints.** While you type, the text is checked on your device to spot Portuguese or other non-English languages.

## What data leaves my device, and when?

Active Immersion sends data off your device only for the features below, and only to the services named:

| Feature | What is sent | Sent to |
|---|---|---|
| Account and sync | Email, password (hashed by Supabase Auth), settings, Writing Coach entries (text, site, page address, corrections), cards, review history, daily activity | Our database on **Supabase** |
| Writing Coach feedback | The text of the message being checked, your chosen English level | Our server function, which forwards it to **OpenAI** |
| Translate a Portuguese block, typing hint "How do I say it?", English search suggestion | That text or query | Your browser's **on-device translator** when available; otherwise our server function → **OpenAI** (requires an account) |
| Card details (definition, translation, example) | The word and the sentence it came from | Our server function → **OpenAI** |
| Word lookup (double-click) | The word only | **dictionaryapi.dev** (free dictionary API) |
| Subscription billing (after the 7-day free trial) | Account email and Supabase user ID when starting checkout; Stripe customer/subscription IDs, status and paid-through date for plan access | **Stripe** hosts Checkout and the customer portal; our database on **Supabase** stores billing IDs and access status |

AI requests through our server use our OpenAI account and count against your daily plan limit. Under OpenAI's API data policy, API data is not used to train their models and may be retained for up to 30 days for abuse monitoring.

Payment details are entered on Stripe-hosted pages. The extension does not read or store card numbers or security codes; it receives only a Checkout or portal link.

## What does Active Immersion never do with my data?

- No selling or renting of data, no advertising, no analytics or tracking scripts.
- No reading of password fields, payment fields or sign-in forms.
- No capturing of text you don't send.
- No sharing of your data with anyone except the processors above (Supabase for storage and authentication, OpenAI for AI features, dictionaryapi.dev for word lookups, and Stripe for subscription billing), only for the purposes above.

## Where is Active Immersion data stored, and how is it protected?

- Cloud data is stored in **Supabase** (PostgreSQL). Row Level Security ensures each account can only read and change its own rows.
- Your plan and AI usage are managed server-side and can't be changed from the extension. Stripe subscription events are signature-verified before they change plan access.
- Connections use HTTPS.

## How do I delete my Active Immersion data?

- **Delete account:** Account → Delete account cancels an active Stripe subscription and permanently removes your account and data from our database (writings, cards, reviews, activity, settings, usage and billing IDs). Stripe may retain payment records under its own retention policies.
- **Deactivate account:** Account → Deactivate account schedules cancellation of an active Stripe subscription at the end of its current billing period, signs you out everywhere and blocks access, but keeps your data so support can restore the account if you ask. To erase it instead, use Delete account (or ask support to delete a deactivated account).
- **Cancel or manage billing:** Account → Manage subscription opens Stripe's customer portal. Signing out alone does not cancel a subscription.
- **Sign out:** removes the synced data from that browser.
- **Remove a writing or card:** it disappears everywhere right away. In our database it is kept only as a deletion marker (so your other devices remove it too) and is erased for good when you delete your account.
- **Uninstalling the extension** deletes the copy in that browser; your account keeps the synced copy until you delete the account.

## Why does Active Immersion need each browser permission?

- **Access to websites:** to detect Portuguese, run the Writing Coach and word lookup on the pages you visit (see section 2).
- **Storage:** to keep your data on your device.
- **Alarms:** for background sync and reminders.
- **Context menus:** "Save word" and "Check my English" on selected text.
- **Side panel** (Chrome): the extension's panel.
- **Notifications** (optional): only if you turn on streak reminders, and only asked for then.

## How will I know if this privacy policy changes?

If this policy changes, we'll update the date above and describe the changes in the extension's release notes.

## How do I contact Active Immersion about privacy?

For privacy questions or data requests, email [palmaxp.jp@gmail.com](mailto:palmaxp.jp@gmail.com) (or use Help & feedback inside the extension).
