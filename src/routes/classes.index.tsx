import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import { categories } from "@/content/categories";
import { categoryImage } from "@/content/images";
import { freeClass } from "@/content/site";
import shoppeImage from "@/assets/shoppe-still-life.jpg";

const seo = {
  title: "Live Wellness Classes & Coaching | Amoda Wellness",
  description:
    "Book live online health coaching, life coaching, nutrition consulting, yoga classes, or diabetic wellness support — with trusted Amoda practitioners.",
};

export const Route = createFileRoute("/classes/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
    ],
  }),
  component: ClassesIndex,
});

function ClassesIndex() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-5 py-28 sm:px-8 md:py-40">
        <VideoBackdrop
          video={classesVideo}
          poster={classesPoster}
          scrim="bg-classes-scrim"
          videoClassName="scale-105 blur-[2px] saturate-[0.85]"
        />
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="max-w-[52ch]">
            <Eyebrow tone="sage" withDot>
              Live Classes &amp; Coaching
            </Eyebrow>
            <h1 className="type-hero mt-6 text-parchment [text-shadow:0_2px_18px_var(--ink)]">
              Real support, live and online — wherever you are.
            </h1>
            <Prose className="mt-6 text-parchment/85">
              <p>
                Amoda's launch offerings are simple by design: live classes and 1:1 consulting with
                practitioners you can trust. No pre-recorded filler — real people, real time, real
                guidance.
              </p>
            </Prose>
          </Reveal>
        </div>
      </section>


      <Section tone="card">
        <ul className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <Reveal as="li" key={category.slug} delay={index * 90}>
              <article className="emboss flex h-full flex-col overflow-hidden">
                <Link
                  to="/classes/$slug"
                  params={{ slug: category.slug }}
                  className="group no-underline"
                >
                  <img
                    src={categoryImage[category.slug]}
                    alt={category.name}
                    width={1400}
                    height={900}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="type-h2 text-ink">
                    <Link
                      to="/classes/$slug"
                      params={{ slug: category.slug }}
                      className="no-underline transition-colors duration-500 hover:text-leaf"
                    >
                      {category.name}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">
                    {category.short}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
                    <QuietLink
                      to={`/classes/${category.slug}`}
                      variant="quiet"
                      size="sm"
                      className="px-0"
                    >
                      Book Now
                    </QuietLink>

                    <span className="text-ink/30" aria-hidden="true">
                      |
                    </span>
                    <QuietLink to="/practitioners" variant="quiet" size="sm" className="px-0">
                      Meet the Practitioner
                    </QuietLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Shoppe card — as listed on the overview page in the content document */}
          <Reveal as="li" delay={categories.length * 90}>
            <article className="emboss flex h-full flex-col overflow-hidden">
              <Link to="/shoppe" className="no-underline">
                <img
                  src={shoppeImage}
                  alt="Curated Amoda Shoppe products arranged on linen"
                  width={1400}
                  height={900}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="type-h2 text-ink">
                  <Link
                    to="/shoppe"
                    className="no-underline transition-colors duration-500 hover:text-leaf"
                  >
                    Shoppe
                  </Link>
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">
                  Seasonal wellness boxes and the tools we trust, shipped to your door. See the
                  Shoppe page.
                </p>
                <div className="mt-auto pt-6">
                  <QuietLink to="/shoppe" variant="quiet" size="sm" className="px-0">
                    See the Shoppe
                  </QuietLink>
                </div>
              </div>
            </article>
          </Reveal>
        </ul>
      </Section>

      <Section tone="sage" id="free-live-class">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow withDot>{freeClass.eyebrow}</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[26ch] text-ink">{freeClass.title}</h2>
            <p className="mt-5 max-w-[56ch] text-ink/80">{freeClass.body}</p>
          </Reveal>
          <Reveal delay={130} className="emboss p-7">
            <p className="type-label text-leaf">{freeClass.cta}</p>
            <div className="mt-5">
              <EmailCaptureForm
                cta={freeClass.cta}
                successTitle="Your spot is reserved."
                successBody="The link is on its way, with one reminder an hour before."
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="type-h1 text-ink">Not Sure Where to Start?</h2>
          <p className="mt-4 text-ink/75">
            Take the Quick Wellness Check-In — tell us what's going on and a person will point you to
            the right practitioner.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <QuietLink to="/contact">Take the Quick Wellness Check-In</QuietLink>
            <QuietLink to="/practitioners" variant="outline">
              Browse Practitioners
            </QuietLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
