# Manifesto background: the actual Amoda logo, oversized and moving

Right now the manifesto section's background is an abstracted hairline construction (big outer ring, inner ring, traced petal linework). That gets removed and replaced with the real Amoda lotus mark — the same shape used in the header — scaled enormous behind the words, blended into the ink-green field, and slowly moving.

Text content and layout stay exactly as they are.

## What changes

- Remove the abstract linework field entirely (rings + traced petals + the stroke trace-in animation).
- In its place: one oversized instance of the real Amoda mark (`LotusMark`, dark-ground variant so petals read as sage on ink, gold centre intact), centered behind the copy, wider than the section so the outer edges bleed off both sides.
- Blend it in rather than stamp it on: very low opacity, a soft blur so it reads as atmosphere, and a radial mask so the centre fades out where the type sits — the words stay fully legible with nothing crossing them at readable contrast.
- Keep the motion restrained and continuous: one very slow rotation (~240s per turn) plus the existing slow breathing sway. No trace-in, no entrance animation.
- Respect `prefers-reduced-motion`: the mark still shows, static.

## Technical notes

- `src/components/brand/LotusField.tsx` is rewritten to render `<LotusMark variant="ring" ground="dark" />` inside a positioned, masked wrapper instead of hand-drawn SVG paths. It no longer needs the IntersectionObserver or draw state.
- Blend handled by the wrapper: `opacity` ~0.10–0.14, `filter: blur(1px)`, and `mask-image: radial-gradient(...)` punching a soft hole through the middle third.
- `src/styles.css`: drop the now-unused `lotus-undrawn` / `lotus-draw` utilities and the `lotus-trace` keyframes; keep `lotus-turn` and `lotus-breathe`, and add a reduced-motion guard that disables both.
- `src/components/site/ManifestoBand.tsx` keeps its current structure, vignette and text mapping unchanged.
- Verify at desktop and mobile widths that no petal edge sits behind a line of text at high enough contrast to distract.
