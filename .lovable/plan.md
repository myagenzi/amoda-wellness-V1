# Quiet refinements: hero CTA trail, About hero, About mission/manifesto

All six changes stay within the existing brand system — Parchment/Leaf/Ink/Sage with Gold as accent only, Fraunces + Work Sans, unhurried settle motion. No new copy anywhere.

## 1. Hero CTA border trail — corrected

The current `glow-trail` utility paints a conic gradient on two full-bleed pseudo-elements sitting behind the button, so the light spills across the button's interior as a diagonal smear.

Rebuild it as a true border-only trail:
- One pseudo-element inset over the button, `padding: 1px`, with `mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)` + `mask-composite: exclude` — the same ring technique already proven in `.liquid-glass`. Only the 1px ring paints.
- Fill it with a single cohesive conic gradient: gold falling off into transparent (one warm tone, soft tail), rotating via the existing `--trail-angle` property over 9s linear.
- A second, softer ring at a slightly larger inset with a small blur for the ambient halo — also masked to the ring, so no interior glow.
- Remove the `bg-ink/90` override on the CTA so the button face returns to the original transparent `onInk` variant; hover (parchment fill, ink text) keeps working because the trail lives on a pseudo-element and does not touch background or text.

Verified against the actual hero video frame in the browser before finishing.

## 2–4. About page hero

- Grow the lotus so it reads as a co-equal anchor: the right column becomes the wider half of the grid on desktop, the flower sized to roughly fill it, vertically centred near mid-viewport where a cursor naturally travels while reading and scrolling. No scripted hover demo, no scroll-triggered animation — discovery comes from size and placement only. The existing touch-device ambient trail stays as-is.
- Rebalance the hero: taller minimum height, wider gutters, more generous vertical rhythm in the left column (eyebrow → headline → Sanskrit note → paragraphs) so the two halves read as one composed breath. Copy unchanged.
- "joy" gets a Devanagari-flavoured Latin display face (Yatra One, loaded via the existing Google Fonts `<link>` in the root route) as a new `type-joy` utility — applied to that one word only, optically size-matched to the Fraunces headline, in leaf/gold-accented ink. Everything else in the headline stays Fraunces.

## 5. Live Classes hero veil

`bg-classes-scrim` drops to a ~4% ink/leaf tint so the footage reads clearly. Legibility is then carried by type treatment rather than a heavy veil: a narrow localized wash behind the copy column plus the existing text-shadow, checked on both mobile and desktop.

## 6. About mission + manifesto as two cinematic sections

Two full-viewport (`min-h-screen`) blocks, each with a fading video ground:
- A small `FadingVideo` component: fades in on `loadeddata` over 500ms, fades out near loop end, `autoPlay muted playsInline`, `absolute inset-0 object-cover`, content at `z-10`, poster still for reduced motion. Built on the existing brand video assets (`mission.mp4` for Mission; the established ambient footage already on the site for Manifesto) — no external URLs.
- Section 1 (Our Mission): existing eyebrows, both paragraphs, and the two buttons — the button pair grouped in a `liquid-glass` card.
- Section 2 (Our Manifesto): centred lotus mark, eyebrow, the four manifesto lines, "This is Amoda.", italic tagline — the block itself in `liquid-glass`.
- Manifesto lines animate with a staggered word-by-word blur-in (`blur(10px)`/opacity 0 → clear, slight rise) via IntersectionObserver, pacing slowed well past a typical default so it feels like breathing, not a reveal effect. Reduced motion shows text immediately.
- Text in Parchment/Sage only; Fraunges/Work Sans unchanged.
- The homepage `ConnectorMarquee` is reused verbatim between the Manifesto block and the footer to dissolve the hard seam.

## Technical notes

- Edited: `src/styles.css` (trail ring, `type-joy`, classes scrim), `src/routes/index.tsx` (CTA class), `src/routes/about.tsx` (hero grid, two cinematic sections, marquee), `src/routes/__root.tsx` (font link), plus new `src/components/site/FadingVideo.tsx` and `src/components/site/BlurWords.tsx`.
- `LotusMorphReveal` internals are untouched; only its container sizing changes.
- Browser-verified: CTA trail over the hero video, About hero at mobile and desktop widths, classes hero legibility at 4% veil.
