import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { PetalDivider, LotusMark } from "@/components/brand/LotusMark";
import { manifesto } from "@/content/home";
import { site } from "@/content/site";
import founderImage from "@/assets/founder.jpg";

const values = [
  {
    title: "Trust before scale",
    body: "We would rather list six practitioners we can vouch for than six hundred we can't. Growth follows the standard, never the reverse.",
  },
  {
    title: "Live over library",
    body: "Recorded content is easy to sell and easy to abandon. Presence is what changes anything, so everything here is held live.",
  },
  {
    title: "Ancient roots, modern results",
    body: "Practices with real lineage, held to a modern standard of clarity — specific guidance, honest limits, no mysticism as a substitute for rigour.",
  },
  {
    title: "Joy is not optional",
    body: "Amoda means delight. Wellbeing that feels like punishment doesn't last, and we won't build it.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Amoda Wellness — Why We Built This" },
      {
        name: "description",
        content:
          "Amoda Wellness exists because trustworthy wellness guidance is hard to find. Our story, our values, and the standard we hold every practitioner to.",
      },
      { property: "og:title", content: "About Amoda Wellness" },
      {
        property: "og:description",
        content:
          "Trust before scale. Live over library. The story behind Amoda and the standard we hold practitioners to.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <Reveal className="max-w-[54ch]">
          <Eyebrow withDot>About Amoda</Eyebrow>
          <h1 className="type-hero mt-6 text-ink">
            Amoda means <span className="type-accent">delight.</span>
          </h1>
          <Prose className="mt-6">
            <p>{site.promise}</p>
            <p>
              We started Amoda after watching people we love spend years and real money on wellness
              that never quite landed — certifications nobody could verify, subscriptions nobody
              finished, advice written for a body that wasn't theirs.
            </p>
            <p>
              So we built the opposite: a small, carefully vetted network of practitioners, live
              sessions instead of a content library, and a community that keeps a practice going
              after the initial enthusiasm fades.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section tone="card">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <img
              src={founderImage}
              alt="Amoda's founder in conversation in a warm, lived-in studio"
              width={1400}
              height={1200}
              loading="lazy"
              className="emboss aspect-[7/6] w-full rounded-lg object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[24ch] text-ink">
              It began with a question nobody could answer well.
            </h2>
            <Prose className="mt-6">
              <p>
                “Who should I actually see?” We asked it on behalf of a family member, and found that
                the honest answer required weeks of checking credentials, calling references, and
                sitting in on sessions.
              </p>
              <p>
                That work — the unglamorous verification part — became the product. Amoda is based in
                Ottawa and works with practitioners across Canada, India and the UK, in several
                languages.
              </p>
            </Prose>
            <div className="mt-8">
              <QuietLink to="/about/how-it-works" variant="outline">
                How Amoda works
              </QuietLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-[44ch]">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">Four commitments we hold to.</h2>
        </Reveal>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90} className="emboss p-7">
              <dt className="type-h3 text-ink">{value.title}</dt>
              <dd className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{value.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <LotusMark variant="ring" ground="dark" className="mx-auto w-14" />
            <div className="mt-8 space-y-6">
              {manifesto.map((line) => (
                <p key={line} className="type-h2 text-parchment">
                  {line}
                </p>
              ))}
            </div>
            <PetalDivider className="mx-auto mt-10 w-28 text-sage" />
            <p className="type-accent mt-8 text-xl text-sage">{site.tagline}</p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
