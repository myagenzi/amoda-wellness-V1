# Practitioners Hero — Video Background

Turn the plain parchment hero at the top of the Practitioners page into a full-bleed video band, matching the treatment already used on the Live Classes hero and the About "Our Mission" section.

## What changes

- The uploaded clip (1920x1080, 4s, silent-muted loop) becomes the hero's background, cropped to fill the band on every breakpoint.
- The veil stays very light — roughly 10% brand-green tint over the footage, never a dark wash. The video reads clearly; the overlay only unifies its colour with the site palette.
- Because the veil is that light, legibility comes from the type itself rather than a heavy scrim: hero copy sits on a soft localised gradient behind the text column plus a gentle ink text-shadow, so the headline and paragraph stay crisp while the rest of the frame stays bright.
- The trust strip ("✓ Verified credentials…") moves onto a hairline row inside the band, under the copy rather than on parchment below it.
- The copy column stays left-aligned and capped at ~54ch so the right side of the frame stays open for the footage.
- Everything below the hero (filter/browse band, practitioner cards) is untouched.

## Behaviour

- Autoplays muted, loops, `playsInline` — no controls, no sound.
- Reduced-motion visitors get a still poster frame extracted from the video instead of playback.
- Mobile keeps the same band with tighter padding and a crop anchored so the subject stays in frame.

## Technical notes

- Upload the clip and an extracted poster frame to the CDN via `lovable-assets`, producing `src/assets/practitioners.mp4.asset.json` and `src/assets/practitioners-poster.jpg.asset.json`; the binary itself is not committed.
- Reuse the existing `VideoBackdrop` component; add a `bg-practitioners-scrim` utility in `src/styles.css` built from the same `color-mix` ink/leaf/sage gradients as `bg-classes-scrim`.
- In `src/routes/practitioners.index.tsx`, replace the first `<Section>` with a `relative isolate overflow-hidden` band containing `VideoBackdrop` plus the existing `Reveal` copy; text tokens switch to `text-parchment` / `text-sage`.
- Verify at desktop, laptop and mobile widths with screenshots that the headline, paragraph and trust row all read clearly over the footage before calling it done.
