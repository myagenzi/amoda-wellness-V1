import type { CategorySlug } from "./categories";

export type Practitioner = {
  slug: string;
  name: string;
  title: string;
  categories: CategorySlug[];
  location: string;
  languages: string[];
  credentials: string[];
  years: number;
  approach: string;
  curationNote: string;
  sessionTypes: string[];
  testimonial?: { quote: string; author: string };
};

export const practitioners: Practitioner[] = [
  {
    slug: "meera-raghavan",
    name: "Meera Raghavan",
    title: "Health Coach & Ayurvedic Practitioner",
    categories: ["health-coaching", "nutrition"],
    location: "Ottawa, Canada",
    languages: ["English", "Tamil", "Hindi"],
    credentials: [
      "NBC-HWC Board Certified Health & Wellness Coach",
      "Diploma in Ayurvedic Lifestyle Counselling",
      "22 years in clinical and community practice",
    ],
    years: 22,
    approach:
      "Meera starts with sleep and meals before anything else, and refuses to add a practice until the one before it is holding. Sessions are unhurried and specific.",
    curationNote:
      "We vetted Meera over four conversations and two client references. She was the only practitioner who told us what her approach does not fix — that is why she is here.",
    sessionTypes: ["1:1 coaching", "Small-group class"],
    testimonial: {
      quote:
        "She never once told me to drink more water. She asked what my Tuesdays looked like, and we started there.",
      author: "Anita, Health Coaching client",
    },
  },
  {
    slug: "joanne-mercier",
    name: "Joanne Mercier",
    title: "Life Coach, Transitions & Burnout",
    categories: ["life-coaching"],
    location: "Montréal, Canada",
    languages: ["English", "French"],
    credentials: [
      "ICF Professional Certified Coach (PCC)",
      "MSc Organisational Psychology",
      "17 years coaching founders and senior operators",
    ],
    years: 17,
    approach:
      "Joanne works in plain language and short cycles: one focus per session, one commitment small enough that you actually keep it.",
    curationNote:
      "Joanne came to us through a client who had worked with her for six years. She declined our first offer because her roster was full — we waited.",
    sessionTypes: ["1:1 coaching"],
    testimonial: {
      quote:
        "I expected reframing exercises. I got a very direct question I had been avoiding for two years.",
      author: "Priya, Life Coaching client",
    },
  },
  {
    slug: "arun-desai",
    name: "Arun Desai",
    title: "Diabetic Wellness Practitioner & Nutritionist",
    categories: ["diabetic-solutions", "nutrition"],
    location: "Pune, India",
    languages: ["English", "Marathi", "Hindi"],
    credentials: [
      "Registered Dietitian, Certified Diabetes Educator",
      "MSc Clinical Nutrition",
      "14 years in diabetic care",
    ],
    years: 14,
    approach:
      "Arun plans around the food you already cook. He is unbothered by a bad reading and very interested in what happened the day before it.",
    curationNote:
      "Arun brings clinical rigour without clinical coldness. His notes between sessions are the most thorough of any practitioner we assessed.",
    sessionTypes: ["1:1 coaching", "Small-group class"],
    testimonial: {
      quote:
        "First person who looked at what my family actually eats instead of handing me a printout.",
      author: "Sunil, Diabetic Solutions client",
    },
  },
  {
    slug: "hannah-osei",
    name: "Hannah Osei",
    title: "Yoga Teacher, Restorative & Strength",
    categories: ["yoga"],
    location: "London, UK",
    languages: ["English"],
    credentials: [
      "E-RYT 500, Yoga Alliance",
      "Trauma-informed yoga certification",
      "Prenatal and post-injury training",
    ],
    years: 11,
    approach:
      "Hannah offers options before you need them and keeps her classes small enough to see everyone. Nothing about her cueing assumes a particular body.",
    curationNote:
      "We sat in four of Hannah's classes before inviting her. In each one, the least experienced person in the room was clearly considered first.",
    sessionTypes: ["Small-group class", "1:1 session", "Free weekly class"],
    testimonial: {
      quote:
        "I came back after a shoulder surgery expecting to sit most of it out. I did the whole class, differently.",
      author: "Renée, Yoga student",
    },
  },
  {
    slug: "lila-shah",
    name: "Lila Shah",
    title: "Nutritionist, Cultural & Plant-Forward",
    categories: ["nutrition", "health-coaching"],
    location: "Toronto, Canada",
    languages: ["English", "Gujarati"],
    credentials: [
      "Registered Holistic Nutritionist",
      "Culinary Nutrition Expert",
      "9 years in private practice",
    ],
    years: 9,
    approach:
      "Lila builds guidance around your own kitchen and heritage foods. No elimination lists unless there is a clinical reason for one.",
    curationNote:
      "Lila's references described the same thing independently: she never made them feel their family's food was a problem to solve.",
    sessionTypes: ["1:1 coaching", "Small-group class"],
  },
  {
    slug: "david-kim",
    name: "David Kim",
    title: "Life & Performance Coach",
    categories: ["life-coaching", "health-coaching"],
    location: "Vancouver, Canada",
    languages: ["English", "Korean"],
    credentials: [
      "ICF Associate Certified Coach (ACC)",
      "Former operator, two-time founder",
      "8 years coaching entrepreneurs",
    ],
    years: 8,
    approach:
      "David works with people who treat rest as a line item. Sessions are practical, calendar-level, and honest about tradeoffs.",
    curationNote:
      "David is direct in a way that suits people who have outgrown gentle. We tested him against exactly that brief.",
    sessionTypes: ["1:1 coaching"],
  },
];

export const practitionerBySlug = (slug: string) =>
  practitioners.find((practitioner) => practitioner.slug === slug);
