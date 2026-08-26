import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { productBySlug, type Product } from "@/content/shoppe";
import shoppeImage from "@/assets/shoppe-still-life.jpg";

export const Route = createFileRoute("/shoppe/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found | Amoda Wellness" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.price} | Amoda Shoppe`;
    return {
      meta: [
        { title },
        { name: "description", content: product.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: product.summary },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };

  return (
    <>
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={shoppeImage}
              alt={product.name}
              width={1600}
              height={1100}
              className="emboss aspect-[4/3] w-full rounded-lg object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <Link to="/shoppe" className="type-label text-leaf no-underline">
              ← The Shoppe
            </Link>
            <h1 className="type-h1 mt-6 text-ink">{product.name}</h1>
            <p className="type-accent mt-3 text-xl text-leaf">{product.price}</p>
            <Prose className="mt-6">
              <p>{product.summary}</p>
              <p>{product.detail}</p>
            </Prose>
            {product.contents ? (
              <div className="mt-8">
                <Eyebrow>What's inside</Eyebrow>
                <ul className="mt-4 space-y-3">
                  {product.contents.map((item) => (
                    <li key={item} className="flex gap-4 border-b border-[var(--hairline)] pb-3">
                      <span
                        className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      <span className="text-[0.9375rem] text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <p className="type-caption mt-8 text-leaf">
              Enquiry-based ordering while checkout is being built. Ships from Ottawa, Canada.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow withDot>Order enquiry</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[22ch] text-ink">
              Tell us where you are, we'll do the rest.
            </h2>
            <Prose className="mt-5">
              <p>
                We'll confirm availability, shipping cost to your address, and send a payment link —
                usually the same day.
              </p>
            </Prose>
          </Reveal>
          <Reveal delay={130} className="emboss p-7 sm:p-9">
            <EnquiryForm subject={product.name} cta="Send order enquiry" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
