# Two homepage section fixes

## 1. Free This Week — restore the previous content in the new design

The schedule table (Class & Practitioner / This Week / Regular Booking columns, prices, totals row, floating parchment highlight column) is what looks imbalanced. It goes away entirely.

**Keep from the current design:**
- Full-bleed background stills (desktop + mobile), warm-green scrim, fluid cqw type, frosted-glass treatment.
- Section shell, spacing, and the overall layered atmosphere.

**Bring back the previous content** (from `src/content/site.ts` `freeClass`):
- Eyebrow: "Free live class this week"
- Headline: "Try Amoda for free — no card, no commitment."
- Body: "Every week, we open one live class to everyone — free. This week: Yoga Classes with Hannah Osei."
- The email capture form ("Reserve Your Free Spot") with its success state and the "Email only…" reassurance line.

**Restyle that content into the new look:**
- Two-column layout on desktop (copy left, form right), stacking on mobile.
- Copy in parchment on the scrim — same type scale as now.
- The form sits in a **frosted-glass card** (existing `frost` treatment, parchment text, gold/leaf accents) instead of the old cream emboss card, so nothing reads as a stark white slab.
- CTAs: the form's parchment button stays; add the quiet "See Full Schedule" glass link next to it.
- Clean up: remove the schedule data, `schedule-grid`/`free-col` CSS if unused elsewhere, and unused imports.

## 2. Manifesto — replace abstract linework with the real Amoda logo

- Remove the hand-drawn ring/petal linework and its trace-in animation from `LotusField`.
- Render the actual Amoda mark (`LotusMark`, dark-ground variant, gold centre intact), oversized so it bleeds off the edges, centered behind the manifesto copy.
- Blend: low opacity, slight blur, and a radial mask fading the centre so text stays fully legible.
- Motion: keep the slow continuous rotation (~240s) and breathing sway; static under `prefers-reduced-motion`.
- Manifesto text, layout, and vignette unchanged.

## Verification
- Desktop + mobile screenshots of both sections: no white imbalance in Free This Week, logo blended behind manifesto text without hurting legibility, zero console errors.
