# Redesign “Our Story & Founder” as an immersive founder story

Replace only the current “Our Story & Founder” block on the About page. Keep the About hero, Mission, Manifesto, navigation, footer, fonts, and all other content unchanged.

## What I understood

- Use the new outdoor portrait of Arti supplied in `Arti_photo_-_founder_image_1.pdf`, replacing the current indoor founder image.
- Use the full supplied founder copy verbatim from `Meet_Arti_-_Founder_Connector_Community_Builder_longer_copy_for_About_Arti_Founder_page.pdf`.
- Follow the supplied HTML prototype’s storytelling structure and behavior rather than merely restyling the current two-column block.
- Preserve Amoda’s quiet, restrained brand language: Parchment, Leaf, Ink, Sage, sparing Gold, Fraunces and Work Sans, gentle motion, and generous breathing room.
- Improve the prototype where needed for readability, responsive behavior, and visual continuity with the existing site.

## Proposed composition

### 1. Founder introduction

A calm parchment opening introduces:

- “Our Story & Founder”
- “Meet Arti.”
- “Founder, Connector & Community Builder”
- Her psychology, coaching, and holistic-wellness background
- The short statement about wellness feeling accessible, connected, and human

The hierarchy will echo the prototype but use the site’s established type scale and visual tokens.

### 2. Scroll-led founder story

On desktop, create a full-height dark Ink passage with:

- Arti’s portrait held prominently on the left
- A softly frosted story panel on the right
- Four chapters that transition as the visitor scrolls:
  1. Why I Created Amoda
  2. The Problem
  3. What Amoda Brings
  4. Connector, Curator, Community Builder
- Quiet progress markers and slow cross-fades/slight vertical settling between chapters
- A subtle image scale shift for depth, without showy parallax or distracting movement

The portrait remains steady while the words progress, matching the prototype’s behavior and composition.

### 3. Vision closing

Return to parchment for “My Vision for Amoda,” followed by the remaining supplied copy and the closing statement:

“And above all, I believe wellness was never meant to be a journey taken alone. That is the heart of Amoda.”

Finish with the restrained Arti signature line from the prototype.

## Mobile and accessibility

- On smaller screens, avoid an excessively long pinned scene: show the portrait first, then stack the four story chapters in a natural reading flow.
- Crop the portrait around Arti’s face and upper body while retaining enough garden context.
- Preserve comfortable text sizes and contrast throughout.
- Respect reduced-motion settings by showing all content without transitions or image movement.
- Keep every word accessible in the page structure, not hidden in canvas or imagery.

## Technical details

- Extract the original portrait image from the supplied PDF and add it through the project’s managed asset flow.
- Build the story as a focused About-page component with scroll progress driving chapter visibility on larger screens.
- Use existing semantic brand tokens and the established Reveal/frosted-glass patterns; add only the small set of founder-story styles needed.
- Keep the exact supplied copy in a structured content model so it remains easy to review and maintain.
- Verify the complete About page at desktop and mobile sizes, including the handoff into the existing Mission section, portrait crop, chapter timing, reduced motion, and absence of overlap or clipped text.
