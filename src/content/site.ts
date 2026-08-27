export const site = {
  name: "Amoda Wellness",
  tagline: "Global Wellness. Community. Transformation.",
  promise: "Amoda connects you to YOURSELF through trusted practitioners.",
  email: "hello@amodawellness.com",
  base: "Ottawa, Canada · serving globally",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Live Classes & Coaching", to: "/classes" },
  { label: "Practitioners", to: "/practitioners" },
  { label: "Shoppe", to: "/shoppe" },
  { label: "Membership", to: "/membership" },
] as const;

export const interestOptions = [
  "Health Coaching",
  "Life Coaching",
  "Nutrition",
  "Yoga Classes",
  "Diabetic Solutions",
  "Shoppe",
  "Membership",
  "Corporate Wellness",
  "Becoming a Practitioner",
  "Other",
] as const;

/** Section 5 — Free Live Class Banner (verbatim). */
export const freeClass = {
  eyebrow: "Free live class this week",
  title: "Try Amoda for free — no card, no commitment.",
  body: "Every week, we open one live class to everyone — free. This week: Yoga Classes with Hannah Osei.",
  cta: "Reserve Your Free Spot",
} as const;

/** Footer newsletter capture (verbatim). */
export const newsletter = {
  headline: "Join our community of wellness seekers.",
  body: "Get early access to new categories, retreats, and Shoppe drops — plus real wellness guidance, straight to your inbox.",
} as const;

/** Top-of-site announcement strip. */
export const announcement = {
  text: "Founding members get early access to new categories, retreats, Shoppe drops and more…",
  to: "/membership",
} as const;

/**
 * Connector band between the free-class frame and the Trust + Manifesto frame —
 * what Amoda means, in synonyms, and what people actually leave with.
 */
export const connectorWords = [
  "Belonging",
  "Clarity",
  "Steadiness",
  "Real practitioners",
  "Rooted in tradition",
  "Coming home to yourself",
  "Calm that lasts",
  "Strength without strain",
  "Guidance, not gimmicks",
  "Community",
  "Presence",
  "Energy that returns",
  "Sleep that holds",
  "Trust",
] as const;
