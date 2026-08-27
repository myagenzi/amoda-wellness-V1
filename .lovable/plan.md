# Three fixes: moving CTA trail, Manifesto ground, softer footer veil

## 1. CTA border trail — make the light actually travel

Checked the live button: the ring paints, the keyframes are attached, but the conic gradient resolves at a fixed angle — the animated custom property (`--trail-angle`) is not driving the gradient, so the glow sits still.

Fix by animating geometry instead of a custom property:
- The ring pseudo-element keeps the proven 1px mask (`content-box` + `mask-composite: exclude`), so only the border stroke paints and the button face stays untouched.
- Inside it, an oversized square layer carries the gold-into-leaf conic gradient and rotates a full turn with `transform: rotate()` over 9s linear — transform animation is reliable everywhere, so the light visibly crawls around the perimeter.
- The soft ambient halo follows the same rotation at a slightly larger inset with a small blur, still masked to the ring.
- Reduced motion keeps the ring static.

Verified in the browser after the change that the bright segment sits in a different place across two screenshots.

## 2. Our Manifesto — correct video, and no seam between Mission and Manifesto

- The new CloudFront clip is downloaded, uploaded through the asset pipeline as a pointer, and a poster still is extracted from an early frame the same way (no binaries in the repo). It replaces the placeholder Live Classes footage currently used behind the Manifesto.
- Mission and Manifesto become one continuous dark passage instead of two stacked blocks: both sections sit inside a single ink-toned wrapper, and each video ground gets a vertical fade (transparent at the shared edge) so the Mission footage dissolves downward while the Manifesto footage rises into view. An overlapping ink gradient band spans the join, so there is no visible horizontal line at any width.
- Section content, copy, glass cards, and the word-by-word reveal stay exactly as they are.

## 3. Footer veil — down to a light brand tint

The footer ground currently sits under a 22% ink veil. It drops to a ~5% leaf/ink brand tint so the footage reads clearly, with legibility carried by the existing frosted glass panel plus a soft ink text-shadow on the parchment type where it sits directly over bright frames. Checked on both mobile and desktop widths.

## Technical notes

- `src/styles.css`: rebuild `glow-trail` on a rotating gradient layer; add the edge-fade utilities for the Mission/Manifesto join.
- `src/components/site/FadingVideo.tsx`: accept an optional fade direction so the ground can taper at the shared edge.
- `src/routes/about.tsx`: wrap the two sections in the shared ink passage, swap the Manifesto video pointer.
- `src/components/site/Footer.tsx`: veil to ~5% brand tint.
- New: `src/assets/manifesto.mp4.asset.json` and `src/assets/manifesto-poster.jpg.asset.json`.
