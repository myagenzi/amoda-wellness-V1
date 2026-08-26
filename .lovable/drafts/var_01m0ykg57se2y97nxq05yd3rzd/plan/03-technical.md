## Technical notes

- New component `src/components/site/EcosystemScroller.tsx` replaces the tile
  grid block in `src/routes/index.tsx` (Section 3). Section 3's outer wrapper
  becomes a plain `<section>` (not `Section`) so it can go full-bleed with the
  fixed background layer at `-z-10` and padding
  `px-5 md:px-10 lg:px-16`, `py-20 md:py-40 lg:py-48`.
- Background: the supplied remote image URL, applied to an absolutely
  positioned layer with `bg-cover bg-center bg-fixed`, plus the existing
  `bg-scrim` treatment for even text legibility.
- Grid: `lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] lg:gap-24 xl:gap-48`;
  left column `lg:sticky lg:top-[calc(var(--header-h)+2rem)]`. Below `lg` it
  stacks: header block, then the six cards, nav pills hidden.
- Cards: `bg-ink/25 backdrop-blur-sm rounded-3xl p-6 md:p-10`, image
  `aspect-video rounded-2xl overflow-hidden object-cover`, `loading="lazy"`.
- Two IntersectionObservers per card ref: `threshold: 0.6` sets the active nav
  index; `threshold: 0.15` triggers the reveal (`translate-x-16 → translate-x-0`,
  `opacity-0 → 100`, `duration-700 ease-out`) and unobserves so it stays visible.
  Reduced-motion users get the revealed state immediately.
- Nav pills call `scrollIntoView({ behavior: "smooth", block: "center" })` on
  the matching card ref.
- Copy: `src/content/home.ts` — `whatAmodaIs` gets the eyebrow "THE ECOSYSTEM"
  and the updated subheadline; the `ecosystem` array keeps its six entries and
  gains an `image` field. Retreats keeps its "(waitlist)" note.
- Images: six generated JPEGs in `src/assets/ecosystem-*.jpg`, imported and
  mapped alongside the ecosystem entries (same pattern as `src/content/images.ts`).
- No routing, data, or backend changes; the `EcosystemIcon` component stays in
  place for the hero takeaway strip.
