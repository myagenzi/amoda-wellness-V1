# Section 7 — Manifesto as a living lotus field

Rebuild the manifesto moment (the "We believe wellness is not a destination… This
is Amoda." block) as a full-bleed dark-green stage with an oversized hairline
lotus drawn from the Amoda mark, breathing slowly behind the words.

## The idea

Right now this section sits on a pale sage field with a small lotus above the
copy. In the new version the lotus becomes the field: one enormous, single-weight
line drawing — larger than the text block, bleeding past the edges — laid on deep
ink-green, with the manifesto set in Fraunces italic parchment on top. Same
geometry as our mark (six petals, hairline ring), just abstracted to line only:
no fills, no gold disc, so it reads as brand energy rather than a stamped logo.

```text
┌──────────────────────────────────────────────┐
│        ╭───────────────────────────╮         │  deep ink-green ground
│     ╭──┼── overlapping petal ──────┼──╮      │  hairline sage lines, ~8-12% alpha
│     │  │   OUR MANIFESTO           │  │      │  petals bleed past the section edges
│     │  │  We believe wellness is   │  │      │
│     │  │  not a destination…       │  │      │  copy centered, Fraunces italic
│     │  │                           │  │      │
│     │  │      This is Amoda.       │  │      │  closing line in gold-toned sage
│     ╰──┼───────────────────────────┼──╯      │
│        ╰───────────────────────────╯         │
└──────────────────────────────────────────────┘
```

## Motion — slow enough to feel like breathing

Three layers, all extremely slow, none of them competing with reading:

1. Draw-in: on first scroll into view the petal outlines trace themselves once
   (stroke dash, ~2.4s, settling ease). One time only.
2. Rotation: the petal group turns continuously, one full turn in about 240
   seconds — perceptible only if you stay on the section.
3. Breath: the outer ring and petals drift between ~0.985 and 1.015 scale with a
   matching opacity sway on a ~14s cycle, offset per petal so the shape never
   pulses in lockstep.

Reduced motion: the finished, fully drawn shape shows immediately, no rotation,
no breath.

## Legibility

A soft radial ink vignette sits between the lotus and the copy, dark at the
centre where the text lives and clearing towards the edges, so the linework stays
visible in the corners while every line of type keeps full contrast. Copy keeps
its existing wording, line breaks, and reveal timing; "This is Amoda." stays the
closing accent, tracked and set apart.

## Technical notes

- New `src/components/brand/LotusField.tsx`: one inline SVG (viewBox 0 0 600 600,
  `preserveAspectRatio="xMidYMid slice"`), positioned absolutely at
  `min(140%, 1400px)` wide and centred, `aria-hidden`. Geometry is the mark's own
  construction — six long ellipses at 60° intervals plus an outer circle and the
  inner hairline ring — drawn with `fill="none"`, `stroke="var(--color-sage)"`,
  `stroke-width` ~0.9 and `opacity` 0.10–0.16 per layer. No gold centre.
- New `src/components/site/ManifestoBand.tsx` replaces the Section 7 block in
  `src/routes/index.tsx`: `relative isolate overflow-hidden bg-ink`, the field at
  `-z-10`, the vignette above it, copy in the existing `Reveal` wrapper.
- Animation lives in `src/styles.css` as three keyframe sets plus utilities
  (`lotus-draw`, `lotus-turn`, `lotus-breathe`), added beside the existing
  `petal-unfold`; the draw-in is triggered by an IntersectionObserver-driven class
  the same way `Reveal` already works, so nothing animates off-screen. The global
  `prefers-reduced-motion` rule already neutralises durations; the field also
  checks the query so the dash offset resolves to fully drawn.
- Colours stay on existing tokens (ink, sage, parchment, gold, hairline) — no new
  colour values. `PetalDivider` and the old small ring mark are dropped from this
  section since the field now carries the motif; both stay in use elsewhere.
- Copy in `src/content/home.ts` is untouched.
