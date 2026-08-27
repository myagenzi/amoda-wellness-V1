# Section 5 rebuild — "Free Live Class This Week"

Replace the current two-column free-class band on the homepage with a full-bleed,
image-backed schedule section that uses the same layering technique as the hero:
fluid type, frosted glass panels, and a floating parchment column that overhangs
the header row of the schedule.

Images only for now (no video). The markup keeps a video-ready slot so the real
clip can be dropped in later without a rewrite.

## What the section looks like

```text
┌──────────────────────────────────────────────────────────────┐
│  [full-bleed image + warm-green overlay gradients]           │
│                                                              │
│  FREE THIS WEEK                                              │
│  Try Amoda for free — no card,                               │
│  no commitment.                          ┌───────────┐       │
│  Every week, we open one live class…     │ THIS WEEK │ ← floats
│                                          │ (parchment│   above
│  Class & Practitioner        │ This Week │  overhang)│  header
│  ─────────────────────────────────────────────────────────── │
│  ✿ Health Coaching — Meera    │  FREE    │  $95      │       │
│    Life Coaching — Joanne     │   —      │  $110     │       │
│    … 5 rows total                                            │
│  ─────────────────────────────────────────────────────────── │
│  Total price: $0 this week          Regular booking from $85  │
│  "New free class every week — no card required."             │
│                                                              │
│  [ Reserve Your Free Spot ]   [ See Full Schedule ]          │
└──────────────────────────────────────────────────────────────┘
```

## Content

- Eyebrow: FREE THIS WEEK
- Headline: Try Amoda for free — no card, no commitment.
- Sub: Every week, we open one live class to everyone — free.
- Five rows, one per launch category, practitioner names pulled from existing
  content (Health Coaching — Meera Raghavan, Life Coaching — Joanne Mercier,
  and the matching practitioner for Nutrition, Yoga, Diabetic Solutions).
- Health Coaching is this week's free class (static for now, single flag in
  content so it can rotate later).
- Lotus mark (petals + gold centre, no ring) marks the included row, at 1.1em.
- Footer row: "Total price: $0 this week" plus the Fraunces-italic footnote
  "New free class every week — no card required, no commitment."
- CTAs: primary parchment/ink "Reserve Your Free Spot" (scrolls to the existing
  email capture), secondary glass "See Full Schedule" → /classes.

Regular booking prices are placeholders ($95 / $110 / $85 / $30 / $120) — tell me
the real numbers and I'll swap them in.

## Technical notes

- New `src/components/site/FreeClassBand.tsx`, rendered from `src/routes/index.tsx`
  in place of the current Section 5 block. The `id="free-live-class"` anchor moves
  onto the new section so existing hero/nav links keep working.
- Background: two generated stills (desktop 16:9, mobile 9:16 portrait crop) in
  `src/assets/`, swapped at the single 820px breakpoint; a `<video>` slot is left
  commented/absent for now, with the cross-fade-on-`canplay` pattern documented
  so the asset can be added later. `prefers-reduced-motion` already resolves to
  the still.
- Overlay: the exact three-gradient stack from the brief, added as a
  `bg-freeclass-scrim` `@utility` in `src/styles.css` alongside the existing
  `bg-scrim`.
- Type scale: fluid `cqw`-based clamps inside a `container-type: inline-size`
  wrapper, matching the hero's `type-hero` ramp; Fraunces for the headline and
  footnote italic, Work Sans everywhere else — both already loaded.
- Schedule uses a CSS grid (`1fr 16.5% 16.5%`, → `1fr 22% 22%` under 820px) with
  the three-layer structure: frosted panels behind (`rgba(255,255,255,.14)` base,
  `backdrop-filter: blur() saturate()`, inset hairline), the floating parchment
  column (`top:-1.5em`, soft shadow) as layer 2, and the content grid on top with
  cells over the parchment column switching to `--ink` and dropping text-shadow.
- Colors only from the existing parchment/leaf/ink/sage/gold tokens in
  `src/styles.css` — no new colors, no hardcoded hex in components.
- Motion: no reveal/scroll animation on this section; only `.18s ease` hover and
  press on the CTA pills.
- No routing, data, or backend changes; the email capture form component is
  reused unchanged for the reserve action.
