/**
 * Category pages — the document's "Diabetic Solutions" template structure,
 * populated only with the document's own wording for each category.
 */

export type CategorySlug =
  | "health-coaching"
  | "life-coaching"
  | "nutrition"
  | "yoga"
  | "diabetic-solutions";

export type Category = {
  slug: CategorySlug;
  name: string;
  /** Overview-page card one-liner (verbatim). */
  short: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  forWhom: string;
  included: string[];
  outcome: string;
  cta: string;
};

export const categories: Category[] = [
  {
    slug: "health-coaching",
    name: "Health Coaching",
    short:
      "1:1 and small-group coaching for energy, habits, and whole-body wellbeing.",
    seoTitle: "Health Coaching | Amoda Wellness",
    metaDescription:
      "Live, practitioner-led health coaching for energy, habits, and whole-body wellbeing.",
    headline: "1:1 and small-group coaching for energy, habits, and whole-body wellbeing.",
    subheadline:
      "Live coaching and guidance from practitioners who understand the day-to-day of energy, habits, and whole-body wellbeing.",
    forWhom:
      "Anyone working on energy, habits, and whole-body wellbeing — who wants practical, judgment-free guidance instead of generic advice.",
    included: [
      "Live 1:1 or small-group sessions with certified health coaches",
      "Practical nutrition and lifestyle guidance built around real routines",
      "Optional community accountability group",
      "Direct access to book follow-up sessions",
    ],
    outcome:
      "A clearer, calmer relationship with managing your health — and a practitioner who actually knows your situation, session to session.",
    cta: "Book a Session",
  },
  {
    slug: "life-coaching",
    name: "Life Coaching",
    short:
      "Guidance for the transitions, decisions, and \u201cwho am I now?\u201d chapters of life.",
    seoTitle: "Life Coaching | Amoda Wellness",
    metaDescription:
      "Live, practitioner-led life coaching for the transitions, decisions, and \u201cwho am I now?\u201d chapters of life.",
    headline:
      "Guidance for the transitions, decisions, and \u201cwho am I now?\u201d chapters of life.",
    subheadline:
      "Live coaching and guidance from practitioners who understand the day-to-day of transitions, decisions, and the \u201cwho am I now?\u201d chapters of life.",
    forWhom:
      "Anyone in a transition, facing a decision, or in a \u201cwho am I now?\u201d chapter of life — who wants practical, judgment-free guidance instead of generic advice.",
    included: [
      "Live 1:1 or small-group sessions with certified life coaches",
      "Practical lifestyle guidance built around real routines",
      "Optional community accountability group",
      "Direct access to book follow-up sessions",
    ],
    outcome:
      "A clearer, calmer relationship with the chapter you're in — and a practitioner who actually knows your situation, session to session.",
    cta: "Book a Session",
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    short: "Live consulting and classes for sustainable, judgment-free eating.",
    seoTitle: "Nutrition Consulting & Classes | Amoda Wellness",
    metaDescription:
      "Live consulting and classes for sustainable, judgment-free eating, led by trusted Amoda practitioners.",
    headline: "Live consulting and classes for sustainable, judgment-free eating.",
    subheadline:
      "Live consulting and nutrition guidance from practitioners who understand the day-to-day of eating well.",
    forWhom:
      "Anyone working toward sustainable, judgment-free eating — who wants practical guidance instead of generic advice.",
    included: [
      "Live 1:1 or small-group sessions with certified nutrition experts",
      "Practical nutrition and lifestyle guidance built around real routines",
      "Optional community accountability group",
      "Direct access to book follow-up sessions",
    ],
    outcome:
      "A clearer, calmer relationship with food — and a practitioner who actually knows your situation, session to session.",
    cta: "Book a Session",
  },
  {
    slug: "yoga",
    name: "Yoga Classes",
    short: "Live online yoga for every level — strength, flexibility, and calm.",
    seoTitle: "Live Online Yoga Classes | Amoda Wellness",
    metaDescription:
      "Live online yoga for every level — strength, flexibility, and calm, with trusted Amoda teachers.",
    headline: "Live online yoga for every level — strength, flexibility, and calm.",
    subheadline:
      "Live classes and guidance from yoga teachers who understand the day-to-day of building strength, flexibility, and calm.",
    forWhom:
      "Anyone at any level looking for strength, flexibility, and calm — who wants practical, judgment-free guidance instead of generic advice.",
    included: [
      "Live 1:1 or small-group classes with certified yoga teachers",
      "Practical movement and lifestyle guidance built around real routines",
      "Optional community accountability group",
      "Direct access to book follow-up sessions",
    ],
    outcome:
      "A clearer, calmer relationship with your body — and a teacher who actually knows your situation, session to session.",
    cta: "Book a Session",
  },
  {
    slug: "diabetic-solutions",
    name: "Diabetic Solutions",
    short:
      "Specialized coaching and nutrition support for managing and living well with diabetes.",
    seoTitle: "Diabetic Wellness Coaching & Nutrition | Amoda Wellness",
    metaDescription:
      "Live, practitioner-led diabetic wellness coaching and nutrition support — practical, judgment-free, and built for real life.",
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
    cta: "Book a Session",
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);

/** Practitioners page — "Filter/Browse by" list (verbatim). */
export const browseLabels: Record<CategorySlug, string> = {
  "health-coaching": "Health Coaches",
  "life-coaching": "Life Coaches",
  nutrition: "Nutrition Experts",
  yoga: "Yoga Teachers",
  "diabetic-solutions": "Diabetic Wellness Specialists",
};
