import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { products, shoppeCategories, shoppeIntro, shoppeSeo } from "@/content/shoppe";
import shoppeImage from "@/assets/shoppe-still-life.jpg";

export const Route = createFileRoute("/shoppe/")({
  head: () => ({
    meta: [
      { title: shoppeSeo.title },
      { name: "description", content: shoppeSeo.description },
      { property: "og:title", content: shoppeSeo.title },
      { property: "og:description", content: shoppeSeo.description },
    ],
  }),
  component: ShoppeIndex,
});

function ShoppeIndex() {
  const boxes = products.filter((product) => product.kind === "box");
  const tools = products.filter((product) => product.kind === "tool");

  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <Eyebrow withDot>The Shoppe</Eyebrow>
            <h1 className="type-hero mt-6 max-w-[20ch] text-ink">{shoppeIntro.headline}</h1>
            <Prose className="mt-6">
              <p>{shoppeIntro.body}</p>
            </Prose>
          </Reveal>
          <Reveal delay={140}>
            <img
              src={shoppeImage}
              alt="Brass neti pot, stoneware cup, oil and dried herbs on a linen surface"
              width={1600}
              height={1100}
              className="emboss aspect-[16/11] w-full rounded-lg object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="card">
        <Reveal className="max-w-[44ch]">
          <Eyebrow>The Shoppe</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">{shoppeCategories[0].name}</h2>
          <p className="mt-4 text-ink/80">{shoppeCategories[0].body}</p>
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {boxes.map((product, index) => (
            <Reveal as="li" key={product.slug} delay={index * 90}>
              <Link
                to="/shoppe/$slug"
                params={{ slug: product.slug }}
                className="emboss emboss-lift flex h-full flex-col p-7 no-underline"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="type-h2 text-ink">{product.name}</h3>
                  <span className="type-label whitespace-nowrap text-leaf">{product.price}</span>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">
                  {product.summary}
                </p>
                <span className="type-label mt-auto pt-6 text-leaf">Enquire about this →</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="sage">
        <Reveal className="max-w-[44ch]">
          <Eyebrow>The Shoppe</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">{shoppeCategories[1].name}</h2>
          <p className="mt-4 text-ink/80">{shoppeCategories[1].body}</p>
        </Reveal>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((product, index) => (
            <Reveal as="li" key={product.slug} delay={index * 80}>
              <Link
                to="/shoppe/$slug"
                params={{ slug: product.slug }}
                className="emboss emboss-lift flex h-full flex-col p-6 no-underline"
              >
                <h3 className="type-h3 text-ink">{product.name}</h3>
                <span className="type-label mt-2 text-leaf">{product.price}</span>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">
                  {product.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="type-h1 text-ink">Want something from the Shoppe?</h2>
          <p className="mt-4 text-ink/75">
            Tell us which item and where you are. We'll confirm availability, shipping and payment by
            email — no cart required.
          </p>
          <div className="mt-8">
            <QuietLink to="/contact" size="lg">
              Enquire about an order
            </QuietLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
