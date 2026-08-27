# Three additions: connector marquee, Amoda Guide chat, announcement bar

## 1. Free Live Class band shrinks; a marquee fills the seam

The band's vertical padding drops ~15% (py-24/md:py-32 → py-20/md:py-26), pulling the section up and opening a gap before the Trust + Manifesto frame. That gap becomes a deliberate connector instead of a hard line between two photographs.

- New `ConnectorMarquee` section sits between the two bands, on the ink field with a soft gradient fade at both edges so the free-class image dissolves upward into it and the overhead frame emerges below it.
- Content: a single continuous row of brand words — what Amoda means and what people get — separated by a small gold lotus dot. Draft set (editable): Belonging · Clarity · Steadiness · Real practitioners · Rooted in tradition · Coming home to yourself · Calm that lasts · Strength without strain · Guidance, not gimmicks · Community · Presence · Trust.
- Motion: slow continuous horizontal scroll (~45s loop), duplicated track for a seamless wrap, paused under `prefers-reduced-motion` (falls back to a static centered row). Hover does not pause — keeps the restraint of the rest of the site.
- Type: Work Sans small-caps tracked labels in sage, gold dots — no cards, no borders.

## 2. The Amoda Guide — chat

A quiet chat launcher in the bottom-right (lotus mark, no bubble icon, no popup nag) opening a parchment panel with an ink header. Streams replies token by token so it reads as speech, not a page load.

- Opens with one specific question rather than "How can I help?" — rotating openers such as "What brought you here today?" / "Is there something you've been meaning to take care of?"
- Answers in 2-4 sentences, curates one or two paths, and links directly into the site: Practitioners, Live Classes & Coaching, the free class this week, Shoppe, Membership.
- Knows the real ecosystem: the five launch categories, the practitioners and their focus, the free weekly class, membership shape and Shoppe items are injected into its context from the existing content modules, so it never invents a practitioner or a price.
- Guardrails built into the system prompt exactly as written: no diagnosis or dosing, no urgency or selling, no mystical abstraction, no fictional persona; hands off to a real practitioner or the Amoda team when something is clinical or complex. A crisis path overrides everything else — direct warmth, emergency/crisis-line encouragement, and the offer of a real person, with no content curation.
- Handoff is a real link to Contact, prefilled where possible, so "want me to connect you?" resolves to something.
- Conversation lives for the session only; no accounts, no stored transcripts.

This is the one piece that needs a backend, so Lovable Cloud gets enabled for the AI calls (no login, no database tables for it).

## 3. Announcement bar above the header

A slim ink strip pinned above the nav, full width, on every page:

FOUNDING MEMBERS GET EARLY ACCESS TO NEW CATEGORIES, RETREATS, SHOPPE DROPS AND MORE...

- Work Sans uppercase tracked, parchment on ink with a single gold dot; the whole strip links to Membership.
- Small dismiss × on the right; dismissal remembered for the session so it isn't nagging.
- On mobile the line is long, so it gently scrolls as a marquee at that width instead of wrapping to two lines.
- The homepage hero currently sits under a transparent header — the strip is accounted for in the sticky offset so nothing overlaps or jumps on scroll.

## Technical notes

- `src/components/site/ConnectorMarquee.tsx` + a `marquee` keyframe/utility in `src/styles.css`; word list in `src/content/site.ts`. Padding change in `FreeClassBand.tsx`; edge fades on both neighbouring bands.
- `src/components/site/AnnouncementBar.tsx` rendered in `src/routes/__root.tsx` above `<Header />`; `--header-h` offset math adjusted for the strip's height.
- Chat: `src/components/site/AmodaGuide.tsx` (launcher + panel + streaming reader), `src/lib/guide.functions.ts` with a `createServerFn` streaming handler calling the Lovable AI Gateway (`google/gemini-2.5-flash`), system prompt and ecosystem context in `src/lib/guide.prompt.ts` built from the existing `src/content/*` modules. No tables, no auth. Requires enabling Lovable Cloud.
- All colour on existing tokens (parchment, leaf, ink, sage, gold); motion respects `prefers-reduced-motion`. Verified with desktop and mobile screenshots plus a console check.
