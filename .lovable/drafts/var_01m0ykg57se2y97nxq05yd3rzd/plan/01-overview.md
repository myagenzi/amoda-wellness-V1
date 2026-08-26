# Cinematic hero video + refined navigation

## What changes

**1. Hero becomes a full-bleed video stage (homepage only)**

The uploaded macro montage (1920x1080, 8s) replaces the hero portrait image and fills the whole hero section edge to edge, autoplaying muted, looping, inline, with `playsinline` and `preload="metadata"`. A poster frame is extracted from the video so nothing flashes before playback, and on reduced-motion or mobile-data the poster shows instead of the loop.

Over it, a deep ink scrim (vertical gradient, darker at the top and bottom) keeps text contrast in the brand palette: parchment headline, sage-tinted subline, gold-accent italic on "coming home to yourself." No copy changes — same headline, subline, and both CTAs. Buttons switch to the existing on-ink variants so they read on the dark video.

The current hero image moves out of the hero; the ecosystem/problem sections below stay untouched.

**2. Navigation bar: transparent over the video, sticky-solid on scroll**

At the top of the homepage the header sits over the video with no background and no border — parchment wordmark and parchment menu labels, exactly like the reference. After ~80px of scroll it transitions (400ms, brand settle easing) into the current parchment/backdrop-blur sticky bar with ink text and its hairline border. Every other page keeps the solid bar from the first pixel.

**3. Menu typography and spacing**

Menu labels get composed spacing — slightly larger than today, wider letter-spacing, more even gaps, and a subtle underline that grows on hover — so the row reads as a considered line rather than cramped text.

**4. Shoppe becomes a cart icon**

"Shoppe" is removed from the desktop text menu. A cart icon button (linking to /shoppe, labelled for screen readers) sits just before the "Join Amoda" button. Shoppe stays as a named item in the mobile menu.

**5. Search**

A search icon next to the cart. Clicking it expands an inline search bar in the header (smooth width/height reveal). The placeholder cycles/reads `Classes, coaches & more...` at low opacity, and disappears the moment the user types. Submitting or pressing Enter filters across classes, practitioners, and Shoppe items from the existing hardcoded content and shows grouped results in a dropdown; Escape or clicking outside closes it.
