# Video backgrounds: Classes hero + About mission

Yes — both videos can be blended into the brand palette. The site already has an ink/leaf gradient scrim technique used on the homepage hero and the Free Live Class band, so the same approach carries over with no black overlays: a leaf-to-ink wash tinted with our greens, plus a light parchment-side fade where copy sits.

## 1. Live Classes & Coaching hero

- The uploaded `live_classes.mp4` becomes a full-bleed looping background behind the hero copy on the Live Classes & Coaching page (uploaded to CDN storage, so the binary never lands in the repo; a poster still is extracted from an early frame for first paint).
- Copy stays exactly as it is ("Real support, live and online — wherever you are." plus the intro paragraph and eyebrow), re-coloured to parchment/sage for the dark stage and centred in a comfortable measure with generous top/bottom breathing room.
- Legibility: a green-tinted gradient veil (deeper at the top behind the eyebrow and along the bottom edge), a soft blur/desaturation on the footage itself, and a subtle ink shadow on the headline so no letter ever sits directly on a bright moving frame.
- Reduced-motion visitors and slow first loads see the poster still instead of the video.

## 2. About page — Our Mission section

- The CloudFront video (verified reachable, ~5.7 MB MP4) sits behind the Our Mission / Where We're Headed block.
- Blend: a leaf-green to deep-ink diagonal wash with a warm parchment glow on the text side — no black. The video reads as texture under the words, not as a picture competing with them.
- The mission statement, the "Where We're Headed" copy, and the two links switch to the on-dark treatment already used elsewhere (parchment headings, sage eyebrows, outline/quiet buttons on dark), so the section stays consistent with the manifesto band below it.
- Section keeps its two-column rhythm; only the ground changes.

## Technical notes

- Both videos uploaded via the asset pipeline as `.asset.json` pointers; posters extracted with ffmpeg and uploaded the same way.
- A shared `VideoBackdrop` component (extracted from the existing `HeroVideo` pattern) takes a video pointer, poster, and scrim variant, handles `autoplay muted loop playsinline`, and falls back to the poster on `prefers-reduced-motion`.
- Two new scrim tokens in `src/styles.css` (`bg-classes-scrim`, `bg-mission-scrim`) built from existing leaf/ink/sage tokens — no hardcoded colours.
- `src/routes/classes.index.tsx`: hero `Section` becomes a relative stage with the backdrop and on-dark type.
- `src/routes/about.tsx`: the Our Mission section gets `tone="ink"` plus the backdrop; heading/prose/link variants switched to their dark counterparts.
- Verified after the edits by loading both routes and screenshotting to confirm contrast.
