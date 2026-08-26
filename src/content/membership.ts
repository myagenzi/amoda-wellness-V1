/** Membership page copy — verbatim from the approved content document (v2). */

export const seo = {
  title: "Join Amoda Wellness Membership | Global Wellness Community",
  description:
    "Become an Amoda member for community, live classes, coaching discounts, and corporate wellness partnerships.",
} as const;

export const intro = {
  headline: "This is more than membership. It's a wellness home.",
  body: "When you join Amoda, you're not signing up for another app you'll forget about. You're joining a community that shows up — for live classes, coaching, accountability, and connection.",
  cta: "Join the Waitlist",
} as const;

export const included = [
  "Private community space (belonging + accountability)",
  "Live classes & coaching discounts",
  "Access to member-only events, including the weekly free live class",
  "Early access to new categories, retreats, and Shoppe drops",
  "Direct line to practitioner recommendations",
];

export const tiers = [
  {
    name: "Community (Free)",
    bestFor: "Getting started",
    includes: "Community access, newsletter, weekly free live class",
    featured: false,
  },
  {
    name: "Amoda Member",
    bestFor: "Ongoing support",
    includes: "Full community + coaching/class discounts",
    featured: true,
  },
  {
    name: "Founding Member",
    bestFor: "Early adopters",
    includes: "Everything above + lifetime early access + founding pricing",
    featured: false,
  },
];

export const corporate = {
  headline: "Wellness isn't a perk. It's a performance strategy.",
  body: "Burned-out teams don't build sustainable companies. Amoda partners with organizations to bring real, practitioner-led health coaching, life coaching, nutrition, yoga, and diabetic wellness support to the people doing the work.",
  offerTitle: "What we offer:",
  offer: [
    "Live group coaching and classes for teams",
    "Nutrition and diabetic-wellness workshops",
    "Stress reduction & resilience sessions",
    "Custom program design for your organization's needs",
  ],
  cta: "Book a Corporate Consultation",
};

export const retreats = {
  headline: "Wellness worth traveling for.",
  cta: "Join the Waitlist for Upcoming Retreats",
  items: [
    {
      name: "Local Retreats",
      body: "Weekend and multi-day retreats close to home.",
    },
    {
      name: "Global & India Wellness Journeys",
      body: "Immersive journeys into Ayurveda, yoga, and traditional wellness at the source.",
    },
    {
      name: "Virtual International Experiences",
      body: "Global wellness wisdom from wherever you are.",
    },
  ],
};
