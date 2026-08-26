export const site = {
  name: "Amoda Wellness",
  tagline: "ancient roots, modern results",
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

export const freeClass = {
  eyebrow: "Free live class this week",
  title: "Breath before anything else — a 30-minute reset.",
  body: "One recurring free live class, rotating through our categories. No pressure, no upsell at the end. Come as you are, and see whether a practitioner is right for you.",
  detail: "Thursdays · 8:00am ET · 30 minutes · hosted live on Zoom",
} as const;
