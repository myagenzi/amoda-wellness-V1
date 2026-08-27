# Practitioners Hero — Video Background

Turn the plain parchment hero at the top of the Practitioners page into a full-bleed video band, matching the treatment already used on the Live Classes hero and the About "Our Mission" section.

## What changes

- The uploaded clip (1920x1080, 4s, silent-muted loop) becomes the hero's background, cropped to fill the band on every breakpoint.
- A brand-green veil sits over the video — deep ink at the top and bottom where type lands, easing to a leaf/sage wash in the middle. No black overlays.
- Hero copy is re-set light-on-dark: eyebrow in Sage, headline and paragraph in Parchment with a soft ink text-shadow, so nothing mixes into the footage.
- The trust strip ("✓ Verified credentials…") moves onto a hairline row inside the band, sage-toned, sitting under the copy rather than on parchment below it.
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
