export type CategorySlug =
  | "health-coaching"
  | "life-coaching"
  | "nutrition"
  | "yoga"
  | "diabetic-solutions";

export type Category = {
  slug: CategorySlug;
  name: string;
  short: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  forWhom: string;
  included: string[];
  outcome: string;
  format: string;
};

export const categories: Category[] = [
  {
    slug: "health-coaching",
    name: "Health Coaching",
    short: "Live 1:1 and small-group coaching for energy, sleep, and steady habits.",
    seoTitle: "Health Coaching — Live 1:1 & Small Group | Amoda Wellness",
    metaDescription:
      "Live health coaching with vetted practitioners — energy, sleep, stress and habits, session to session. Book a live class or 1:1 session with Amoda.",
    headline: "Energy that holds up through the week — not just on Sunday.",
    subheadline:
      "Live coaching with certified practitioners who work with your actual routine, not an idealised version of it.",
    forWhom:
      "Anyone carrying more than they can sustain — poor sleep, flat energy, a body that feels unfamiliar — who wants a practitioner who remembers the last conversation.",
    included: [
      "Live 1:1 sessions, or small-group classes if you prefer company",
      "A practical starting plan built around your week, not a template",
      "Honest guidance about what a practice delivers, and when",
      "Direct access to book follow-up sessions with the same practitioner",
    ],
    outcome:
      "A short list of things that actually work for your body, and someone who knows your history well enough to adjust them.",
    format: "Live online · 1:1 or small group · 45–60 minutes",
  },
  {
    slug: "life-coaching",
    name: "Life Coaching",
    short: "Space to think clearly about work, transition, and what comes next.",
    seoTitle: "Life Coaching — Live Sessions with Vetted Coaches | Amoda Wellness",
    metaDescription:
      "Live 1:1 life coaching for transition, burnout and clarity — with vetted, credentialed practitioners. Book a session with Amoda Wellness.",
    headline: "Somewhere between the career and the caregiving, you got lost in the list.",
    subheadline:
      "Live 1:1 coaching for people in transition — with practitioners who ask better questions than an app ever will.",
    forWhom:
      "Women 40+ rebuilding on their own terms, founders running on output, anyone at the edge of a decision they keep deferring.",
    included: [
      "Live 1:1 sessions with a certified coach matched to your situation",
      "A clear focus for each session, agreed before you start",
      "Optional community accountability group between sessions",
      "No scripts, no manifestation language, no homework you won't do",
    ],
    outcome:
      "Language for what you actually want, and a next step small enough to take this week.",
    format: "Live online · 1:1 · 50 minutes",
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    short: "Food guidance built on your real kitchen, culture, and schedule.",
    seoTitle: "Nutrition Coaching — Live, Practitioner-Led | Amoda Wellness",
    metaDescription:
      "Live nutrition coaching from credentialed practitioners — practical, cultural, judgment-free guidance built around your real routine. Book with Amoda.",
    headline: "Food guidance that survives a Tuesday.",
    subheadline:
      "Live nutrition sessions with practitioners who plan around your kitchen, your culture, and the time you actually have.",
    forWhom:
      "Anyone tired of elimination lists and macro apps who wants specific, workable guidance from a credentialed practitioner.",
    included: [
      "Live 1:1 nutrition consults with a certified practitioner",
      "Guidance that works with the food you already cook and eat",
      "Practical adjustments reviewed session to session",
      "Group nutrition classes for foundations, if you'd rather start there",
    ],
    outcome:
      "A way of eating you can keep, described plainly, with no moralising about food.",
    format: "Live online · 1:1 or group class · 45 minutes",
  },
  {
    slug: "yoga",
    name: "Yoga Classes",
    short: "Live, small-format classes for every body and every level.",
    seoTitle: "Live Yoga Classes — Small Format, All Levels | Amoda Wellness",
    metaDescription:
      "Live online yoga classes with vetted teachers — restorative, gentle and strength-building, planned for every body and every level. Join a class with Amoda.",
    headline: "A room where nobody is watching your form but the teacher.",
    subheadline:
      "Live small-format classes with teachers who plan for every body from the start — not as an accommodation afterwards.",
    forWhom:
      "Beginners, returners after injury or a long pause, and long-time practitioners who want real instruction instead of a video.",
    included: [
      "Live small-group classes — restorative, gentle, and strength-building",
      "Teachers who cue for your body, with options offered before you need them",
      "A weekly free class if you'd like to sample a teacher first",
      "1:1 sessions available where you'd rather work privately",
    ],
    outcome:
      "A practice you return to because it fits — not because you feel guilty when you skip it.",
    format: "Live online · small group or 1:1 · 45–60 minutes",
  },
  {
    slug: "diabetic-solutions",
    name: "Diabetic Solutions",
    short: "Practitioner-led diabetic wellness coaching and nutrition support.",
    seoTitle: "Diabetic Solutions — Live Coaching & Nutrition | Amoda Wellness",
    metaDescription:
      "Live, practitioner-led diabetic wellness coaching and nutrition support — practical, judgment-free, and built for real life. Book a session with Amoda.",
    headline: "Living well with diabetes, with real support — not just a meal plan.",
    subheadline:
      "Live coaching and nutrition guidance from practitioners who understand the day-to-day of managing diabetes.",
    forWhom:
      "Anyone managing type 1 or type 2 diabetes, prediabetes, or supporting a family member — who wants practical, judgment-free guidance instead of generic advice.",
    included: [
      "Live 1:1 or small-group sessions with certified diabetic-wellness practitioners",
      "Practical nutrition and lifestyle guidance built around real routines",
      "Optional community accountability group",
      "Direct access to book follow-up sessions",
    ],
    outcome:
      "A clearer, calmer relationship with managing your health — and a practitioner who actually knows your situation, session to session.",
    format: "Live online · 1:1 or small group · 45–60 minutes",
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);
