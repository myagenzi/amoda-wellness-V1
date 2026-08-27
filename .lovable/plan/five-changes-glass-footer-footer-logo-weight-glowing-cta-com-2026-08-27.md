# Five changes: glass footer, footer logo weight, glowing CTA, compact chat launcher, new hero video

## 1. Footer as a "liquid glass" card over background video

- The footer becomes a floating rounded card (`rounded-3xl`, page padding on both sides so the corners read) instead of a full-bleed dark green block.
- A looping, muted, inline background video sits behind it (the CloudFront placeholder URL you gave), cropped `object-cover`. It is scoped to the footer band — not `fixed` to the whole viewport — so it never bleeds behind the rest of the page or interferes with scrolling on mobile. Structure stays swap-ready: one pointer/URL to change when the brand video arrives.
- New `liquid-glass` treatment: near-transparent white fill, `blur(4px)` backdrop, inset top highlight, and the gradient hairline edge via a masked `::before` ring — exactly the look you specified. (Written standards-only so the frosted effect survives the production build; the browser prefix is added automatically.)
- Entry animation: fade + 40px rise, 1s ease-out with a 0.4s delay, reduced-motion respected.
- Text stays on Amoda tokens — Parchment for copy, Sage for labels/meta. No pure white.
- Readability: if the video makes copy soft, a single ~10% ink veil layer sits between video and glass. Nothing heavier.
- Content is untouched: newsletter headline/body/email + Subscribe, logo lockup, the four columns (Amoda / Explore / Business / Legal) in the same order and wording, and the bottom bar with copyright and Instagram / LinkedIn / YouTube.

## 2. Footer logo weight

- Lockup steps up from the small size to the medium mark, full-opacity Parchment wordmark, brighter Sage rule and tagline, and extra breathing room around it so it anchors the column.

## 3. Hero CTA glowing border trail

- "Book a Live Class or Coaching Session" gets an ambient conic gradient (gold to leaf) rotating slowly around the perimeter, soft-blurred behind the button edge — several seconds per loop, always on, no hover trigger, no neon. Disabled under reduced motion.

## 4. Chat launcher: icon-only, expands on hover

- Idle: small circular button showing only the Amoda lotus mark, rotating slowly and continuously.
- Hover / keyboard focus: expands over ~400ms to reveal the "ASK THE AMODA GUIDE" label beside the mark; rotation slows to near-still.
- Mouse-leave: collapses back just as smoothly. No bounce.
- Click still opens the panel with the existing unfold animation; that behaviour is unchanged.
- Touch devices get the compact icon state (no hover), still tappable to open.

## 5. Home hero video

- The newly uploaded HERO_SECTION-04.mp4 replaces the current homepage hero footage, uploaded to CDN with a fresh poster frame extracted from it. Hero layout, copy and scrim stay as they are.

## Technical notes

- Video and poster go through the asset pipeline as pointers, so no large binaries enter the repo.
- `liquid-glass`, the CTA glow, and the launcher rotation are added as utilities/keyframes in `src/styles.css` using existing tokens (`--gold`, `--leaf`, `--parchment`, `--sage`).
- The footer entry animation and launcher expansion use CSS transitions/animations rather than adding a motion library.
- Files touched: `src/styles.css`, `src/components/site/Footer.tsx`, `src/components/brand/Lockup.tsx` (usage only), `src/routes/index.tsx` (CTA class), `src/components/site/AmodaGuide.tsx`, plus new hero asset pointers.
