export type Product = {
  slug: string;
  name: string;
  kind: "box" | "tool";
  price: string;
  summary: string;
  detail: string;
  contents?: string[];
};

export const products: Product[] = [
  {
    slug: "autumn-grounding-box",
    name: "Autumn Grounding Box",
    kind: "box",
    price: "CA$128",
    summary: "A seasonal box for the turn into colder months — warming, tactile, unfussy.",
    detail:
      "Assembled with two of our practitioners for the weeks when light drops and routines slip. Everything in it is something they use themselves.",
    contents: [
      "Warming herbal blend, loose leaf, 60g",
      "Hand-thrown ceramic cup, single glaze",
      "Body oil, sesame and vetiver, 100ml",
      "A one-page practice card written by Meera Raghavan",
    ],
  },
  {
    slug: "spring-reset-box",
    name: "Spring Reset Box",
    kind: "box",
    price: "CA$118",
    summary: "For the lighter end of the year — bitter herbs, citrus, and a shorter practice.",
    detail:
      "A quieter box than most spring offerings. No detox language, no 21-day plan — just three things worth having and a practice that takes ten minutes.",
    contents: [
      "Bitter herb tincture, 30ml",
      "Citrus and neroli room mist, 50ml",
      "Linen eye pillow, buckwheat and lavender",
      "A one-page practice card written by Hannah Osei",
    ],
  },
  {
    slug: "brass-neti-pot",
    name: "Brass Neti Pot",
    kind: "tool",
    price: "CA$46",
    summary: "The one our ayurvedic practitioners actually keep on the shelf.",
    detail:
      "Solid brass, unlacquered, made by a family workshop in Moradabad. It will patina. That is correct.",
  },
  {
    slug: "kansa-wand",
    name: "Kansa Wand",
    kind: "tool",
    price: "CA$52",
    summary: "Bronze alloy wand for facial and foot massage.",
    detail:
      "We stock one version because we only found one worth stocking. Comes with a short use guide — no claims beyond what it does.",
  },
  {
    slug: "cotton-yoga-strap",
    name: "Cotton Yoga Strap",
    kind: "tool",
    price: "CA$28",
    summary: "Undyed cotton, 8ft, metal D-ring.",
    detail:
      "Chosen by Hannah Osei for her own students. Long enough for tall bodies, which is more than most straps manage.",
  },
  {
    slug: "practitioner-tea-set",
    name: "Practitioner Tea Set",
    kind: "tool",
    price: "CA$94",
    summary: "Two cups and a pot, stoneware, made in small batches.",
    detail:
      "For sessions held at home, or for the five minutes before one. Dishwasher-safe, despite appearances.",
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

/** Shoppe page copy — verbatim from the approved content document (v2). */
export const shoppeSeo = {
  title: "The Amoda Shoppe — Curated Wellness Products",
  description: "Seasonal wellness boxes and everyday tools we trust, hand-selected by Amoda.",
} as const;

export const shoppeIntro = {
  headline: "Wellness you can hold in your hands.",
  body: "We curate seasonal wellness boxes and everyday tools we trust — no fluff, no gimmicks, just what actually supports whole-person wellbeing.",
  cta: "Enquire about this",
} as const;

export const shoppeCategories = [
  {
    kind: "box" as const,
    name: "Seasonal Wellness Boxes",
    body: "Curated, rotating boxes built around the season and what your body needs right now.",
  },
  {
    kind: "tool" as const,
    name: "Tools We Trust",
    body: "Everyday products our practitioners actually recommend.",
  },
] as const;

export const boxCategory = shoppeCategories[0];
export const toolCategory = shoppeCategories[1];
