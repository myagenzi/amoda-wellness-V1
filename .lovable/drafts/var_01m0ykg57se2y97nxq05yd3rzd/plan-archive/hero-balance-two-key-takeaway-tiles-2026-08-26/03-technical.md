## Technical notes

- `src/routes/index.tsx` hero section: keep the `-mt-[var(--header-h)]` bleed, raise min-height, and change the flex alignment so the copy column sits in the upper-middle band with extra bottom padding reserved for the strip. Internal margins on eyebrow/headline/subline/CTA row retuned.
- New `src/components/site/HeroTakeaways.tsx`: absolutely positioned bottom row inside the hero stage, `grid sm:grid-cols-2` with a sage/20 divider, each cell a `Link` (`/membership`, `/practitioners/apply`) rendering an icon plus label and one-line body in parchment/sage tokens.
- Icons: reuse `EcosystemIcon` with the existing `corporate` glyph and add one petal-linework glyph for the practitioner item in the same file, matching the 1.5px organic stroke rules.
- Scrim: extend the `--scrim` gradient in `src/styles.css` with a deeper bottom stop so the strip band has contrast without a visible hard line.
- All colors via existing tokens (parchment/sage/ink/gold); no new copy files, no content changes.
