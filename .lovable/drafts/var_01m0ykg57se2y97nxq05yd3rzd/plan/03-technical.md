## Technical notes

- The video is uploaded to CDN storage via the asset pipeline and referenced by pointer, so the 6 MB binary never lands in the repo. A poster JPEG is extracted from frame ~1s with ffmpeg and stored as a normal asset.
- `src/routes/index.tsx`: hero section rewritten as a `relative` stage with an absolutely positioned `<video autoplay muted loop playsinline>` at `object-cover`, a gradient scrim layer, and the existing copy on top. `useReducedMotion` gate falls back to the poster image.
- New `src/components/site/HeroVideo.tsx` owns the video/poster/scrim so the route stays declarative.
- `src/components/site/Header.tsx`: adds a `transparent` mode driven by route (`/` only) plus a scroll listener (threshold 80px, passive) toggling to the existing solid style; menu label classes move to a shared `type-nav` utility in `src/styles.css` (size, tracking, hover underline).
- New `src/components/site/HeaderSearch.tsx`: controlled open state, focus-on-open, Escape/outside-click close, placeholder `Classes, coaches & more...` via native `placeholder` (vanishes on input by default), and a memoized index built from `src/content/categories.ts`, `practitioners.ts`, and `shoppe.ts`. Results grouped by type, each linking to its existing route. No backend.
- Cart icon: `ShoppingBag` from lucide, wrapped in a link to `/shoppe` with `aria-label="Shoppe"`; `nav` in `src/content/site.ts` keeps Shoppe for the mobile list, and the desktop row filters it out.
- All new colors go through existing tokens (parchment/sage/ink/leaf/gold); an `--scrim` gradient token is added to `src/styles.css`.
