/**
 * Homepage copy — verbatim from Amoda Wellness Website Structure & Content (v2).
 */

export const seo = {
  title: "Amoda Wellness | Global Wellness, Community & Transformation",
  description:
    "Amoda connects you with trusted wellness practitioners through live online classes and 1:1 coaching — health coaching, life coaching, nutrition, yoga, and more. Join us.",
} as const;

export const hero = {
  headline: "Wellness isn't a destination. It's coming home to yourself.",
  subheadline: "Amoda connects you to YOURSELF through trusted practitioners.",
  primaryCta: "Book a Live Class or Coaching Session",
  secondaryCta: "Join This Week's Free Live Class",
} as const;

/** Section 2 — The Problem */
export const problem = {
  headline: "You've spent years taking care of everyone else.",
  paragraphs: [
    "Burnout. Sleepless nights. A body that feels unfamiliar. A sense that somewhere between the career, the kids, the caregiving, and the endless to-do list — you got lost in the list too.",
    "You don't need another app telling you to drink more water. You need real guidance from people who understand what you're going through, and a community that reminds you that you're not doing this alone.",
  ],
  close: "That's Amoda.",
} as const;

/** Section 3 — What Amoda Is */
export const whatAmodaIs = {
  eyebrow: "The ecosystem",
  headline: "One home for your whole wellbeing.",
  subheadline: "Amoda brings together everything wellness should be — in one place, live now.",
  intro: "Amoda brings together everything wellness should be — in one place, live now:",
  cta: { label: "Explore Live Classes & Coaching", to: "/classes" },
} as const;

type EcosystemItem = {
  name: string;
  what: string;
  to: string;
  icon: "trust" | "class" | "community" | "shoppe" | "retreat" | "corporate";
  note?: string;
};

export const ecosystem: EcosystemItem[] = [
  {
    name: "Trusted Practitioners",
    what: "Vetted health coaches, life coaches, nutritionists, yoga teachers, and diabetic-wellness specialists — live online.",
    to: "/practitioners",
    icon: "trust",
  },
  {
    name: "Live Classes & Coaching",
    what: "Health Coaching, Life Coaching, Nutrition, Yoga Classes, and Diabetic Solutions — real-time sessions and 1:1 consulting.",
    to: "/classes",
    icon: "class",
  },
  {
    name: "A Real Community",
    what: "Belonging, accountability, and shared growth — not another silent app.",
    to: "/membership",
    icon: "community",
  },
  {
    name: "The Shoppe",
    what: "Seasonal wellness boxes and the everyday tools we trust — live now.",
    to: "/shoppe",
    icon: "shoppe",
  },
  {
    name: "Retreats & Experiences",
    what: "Local gatherings and global wellness journeys.",
    to: "/membership",
    icon: "retreat",
    note: "Waitlist",
  },
  {
    name: "Corporate Wellness",
    what: "Bring Amoda's coaching and classes to your team.",
    to: "/membership",
    icon: "corporate",
  },
];

/** Section 4 — Who We Serve */
export const whoWeServe = {
  headline: "Wherever you are in your journey, there's a place for you here.",
} as const;

export const audiences = [
  {
    label: "Women 40+",
    body: "Navigating burnout, transition, or renewal?",
    quote: "You're not broken. You're transforming.",
    cta: { label: "See Health & Life Coaching", to: "/classes" },
  },
  {
    label: "Entrepreneurs & Professionals",
    body: "Building something big, at the cost of yourself?",
    quote: "Sustainable success starts with a sustainable you.",
    cta: { label: "Explore Life Coaching", to: "/classes/life-coaching" },
  },
  {
    label: "Global Wellness Seekers",
    body: "Looking for trusted guidance, wherever you are?",
    quote: "From Ottawa to India to wherever you call home.",
    cta: { label: "Browse Practitioners", to: "/practitioners" },
  },
];

/** Section 6 — Trust / Differentiation */
export const trust = {
  headline: "Why Amoda, not just another wellness app?",
  body: "Most platforms give you a class, a product, or a service. Amoda gives you an ecosystem — practitioners you can trust, a community that shows up, and a path that adapts as your life does.",
  close: "Community + Trust + Global Access — that's the difference.",
  strip: [
    "Certification Verified",
    "Experience Checked",
    "References Reviewed",
    "Ethical Standards Upheld",
  ],
} as const;

/** Section 7 — The Manifesto Moment */
export const manifesto = [
  "We believe wellness is not a destination. It is a lifelong journey of coming home to yourself.",
  "We believe every person deserves trusted guidance, meaningful connection, and practices that nourish the whole being.",
  "We believe community creates healing. We believe joy is essential to wellbeing.",
  "This is Amoda.",
];

/** Section 8 — Social Proof */
export const socialProof = {
  headline: "Real people. Real transformation.",
} as const;

export const testimonials = [
  {
    quote:
      "I had tried three apps and a subscription. What worked was a person who remembered what I said last week.",
    author: "Anita R.",
    context: "Health Coaching with Meera Raghavan",
  },
  {
    quote:
      "The free class was the whole reason I trusted it. Nobody sold me anything at the end of it.",
    author: "Renée L.",
    context: "Yoga Classes with Hannah Osei",
  },
  {
    quote:
      "My readings improved, but the real thing is that I stopped dreading them. That was the work.",
    author: "Sunil M.",
    context: "Diabetic Solutions with Arun Desai",
  },
];

/** Section 9 — Final CTA */
export const finalCta = {
  headline: "Your wellness home is waiting.",
  body: "Join a growing global community built on trust, connection, and joy.",
  primary: { label: "Join the Community — Free", to: "/membership" },
  secondary: { label: "Book a Live Class or Coaching Session", to: "/classes" },
  smallPrint:
    "Founding members get early access to new categories, retreats, and Shoppe drops.",
} as const;
