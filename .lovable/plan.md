# Two homepage fixes: Free Live Class legibility + merging Trust & Manifesto

## 1. Free Live Class This Week — legibility, form clarity, alignment

Problem: the photo background is too bright and busy, so the parchment headline, body copy and the email field all fight the image. The frosted card reads as a washed-out haze rather than a deliberate element, and the "See Full Schedule" link sits out of alignment with the copy column.

Changes (presentation only, copy untouched):

- **Deepen the scrim.** Rewrite `bg-freeclass-scrim` so the image sits under a much heavier ink veil: a top-to-bottom ink gradient in the 55–75% range plus a diagonal leaf/ink wash, and a soft ink pool behind the left copy column specifically. Target headline contrast comfortably above 4.5:1 without the section going flat black — the photograph should still read as foliage and light.
- **Also blur/desaturate the plate slightly** (small blur + reduced saturation on the image itself) so no bright highlight lands behind text.
- **Redo the frosted card.** Instead of the near-invisible white glass, make it a defined panel: darker ink-tinted glass, a sage hairline border, a subtle inner top highlight and real corner radius/padding. It should read as a solid, intentional card floating on the image — not a smudge.
- **Fix the email input.** Inside that card the field gets an opaque ink surface, a sage border, parchment text, clearly readable placeholder, and a visible focus ring. The submit button stays the on-ink variant with proper contrast.
- **Fix alignment.** The eyebrow, headline, body and the "See Full Schedule" link all share one left baseline in the copy column; the link gets consistent top spacing and no stray horizontal padding so it lines up under the paragraph. Card and copy column align on a shared vertical grid at desktop and stack cleanly under 820px.

## 2. Trust + Manifesto — merged into one abstract, brand-led band

Both sections currently sit on the same ink-green field back to back, so the page reads as one long green stretch with an arbitrary seam. They become a single tall band with a generated abstract visual as the stage.

- **New image, generated in the reference's language:** an overhead, natural-light frame of a person seated on a mat on grass, long soft leaf shadows falling across the frame — unposed, muted deep green and parchment grade, slight natural grain, negative space at the top and bottom for type. No studio polish, no smiling-at-camera. Desktop landscape plus a 9:16 mobile crop.
- **Composition, three stacked zones over the full-bleed image:**
  - Top zone — the Trust content: eyebrow, "Why Amoda, not just another wellness app?", the body paragraph and the sage close line, set in the existing brand type.
  - Middle zone — the four trust markers (Certification Verified, Experience Checked, References Reviewed, Ethical Standards Upheld) layered across the image as a thin hairline row, sitting *in* the picture rather than on a card.
  - Bottom zone — the manifesto, unchanged wording and line breaks, in Fraunces italic parchment, closing on "This is Amoda." in gold.
- **Brand connection kept minimal:** the oversized lotus stays, but as a very faint single mark bleeding off one edge behind the manifesto zone with the same slow turn/breathe motion — so the merged band still has the living-lotus signature without the busy watermark.
- **Legibility:** graded ink scrim — heavier at top and bottom where the type lives, near-clear through the middle so the photograph reads.
- The section that follows (Social Proof, parchment) provides the contrast break, so the long-green problem disappears.

## Technical notes

- Edits: `src/components/site/FreeClassBand.tsx`, `src/styles.css` (scrim, frost, input-on-dark utilities), a new `src/components/site/TrustManifestoBand.tsx` replacing the Trust `Section` block and `ManifestoBand` in `src/routes/index.tsx`, `src/components/brand/LotusField.tsx` reduced to the single faint edge mark.
- `ManifestoBand.tsx` is removed once its content lives in the merged band.
- Two new generated assets in `src/assets/` (desktop + mobile crop), lazy-loaded via `<picture>` exactly like the free-class band.
- Content modules (`src/content/home.ts`) are not edited — all copy stays as-is.
- All colour values stay on existing tokens (parchment, leaf, ink, sage, gold). Motion stays within the site's restraint and respects `prefers-reduced-motion`.
- Verified after build with desktop and mobile screenshots plus a console check.
