import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { PetalDivider, LotusMark } from "@/components/brand/LotusMark";
import { LotusMorphReveal } from "@/components/brand/LotusMorphReveal";
import { manifesto } from "@/content/home";
import { site } from "@/content/site";
import founderImage from "@/assets/founder.jpg";
import { VideoBackdrop } from "@/components/site/VideoBackdrop";
import missionVideo from "@/assets/mission.mp4.asset.json";
import missionPoster from "@/assets/mission-poster.jpg.asset.json";

const roles = [
  {
    title: "As Connector",
    body: "she brings together clients and trusted practitioners, local communities and global wisdom, modern life and traditional practice.",
  },
  {
    title: "As Curator",
    body: "she ensures every practitioner and experience inside Amoda meets a real standard — qualified, ethical, authentic.",
  },
  {
    title: "As Community Builder",
    body: "she creates the belonging, accountability, and shared growth that makes wellness stick.",
  },
];

const seo = {
  title: "About Amoda Wellness — Our Story & Founder",
  description:
    "Amoda means joy. Meet Arti — connector, curator, community builder — and the mission behind Amoda Wellness: trusted practitioners, live classes, and real community.",
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="max-w-[54ch]">
            <Eyebrow withDot>About Amoda</Eyebrow>
            <h1 className="type-hero mt-6 text-ink">
              Amoda means <span className="type-accent">joy.</span>
            </h1>
            <p className="type-caption mt-4 text-leaf">(Sanskrit for joy, delight)</p>
            <Prose className="mt-6">
              <p>
                We believe wellness isn't the absence of illness — it's the presence of vitality,
                connection, balance, and joy in everyday life.
              </p>
              <p>That belief is the whole reason Amoda exists.</p>
            </Prose>
          </Reveal>
          <Reveal delay={140} className="justify-self-center">
            <LotusMorphReveal className="mx-auto max-w-[22rem] sm:max-w-[26rem] lg:max-w-none" />
          </Reveal>
        </div>
      </Section>

      <Section tone="card">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <img
              src={founderImage}
              alt="Arti, founder of Amoda Wellness, in conversation in a warm, lived-in studio"
              width={1400}
              height={1200}
              loading="lazy"
              className="emboss aspect-[7/6] w-full rounded-lg object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Our Story &amp; Founder</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[26ch] text-ink">
              Meet Arti — Connector, Curator, Community Builder
            </h2>
            <Prose className="mt-6">
              <p>
                Arti didn't set out to become another wellness expert adding her voice to an already
                crowded space. She set out to build the bridge — between people looking for real
                guidance and the practitioners, wisdom, and communities who could actually provide
                it.
              </p>
            </Prose>
            <dl className="mt-8 space-y-5">
              {roles.map((role) => (
                <div key={role.title} className="border-t border-[var(--hairline)] pt-5">
                  <dt className="type-h3 text-ink">{role.title}</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink/75">{role.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 md:py-32">
        <VideoBackdrop
          video={missionVideo}
          poster={missionPoster}
          scrim="bg-mission-scrim"
          videoClassName="scale-105 blur-[2px] saturate-[0.9] object-[50%_90%] md:object-[50%_100%]"
        />
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="sage">Our Mission</Eyebrow>
            <p className="type-h2 mt-5 max-w-[38ch] text-parchment [text-shadow:0_2px_16px_var(--ink)]">
              To connect people with trusted wellness experts, transformative live classes and
              coaching, and supportive communities that nurture the body, mind, emotions, and spirit.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow tone="sage">Where We're Headed</Eyebrow>
            <Prose className="mt-5 text-parchment/85">
              <p>
                From Ottawa to India to the world — Amoda is building toward becoming the first name
                people think of when they seek trusted wellness support. Not just a platform. A
                global village of wellness.
              </p>
            </Prose>
            <div className="mt-8 flex flex-wrap gap-4">
              <QuietLink to="/about/how-it-works" variant="onInk">
                How Amoda Works
              </QuietLink>
              <QuietLink to="/practitioners" variant="quiet" className="text-sage hover:text-parchment">
                Meet Our Practitioners
              </QuietLink>
            </div>
          </Reveal>
        </div>
      </section>


      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <LotusMark variant="ring" ground="dark" className="mx-auto w-14" />
            <div className="mt-8">
              <Eyebrow tone="sage">Our Manifesto</Eyebrow>
            </div>
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
