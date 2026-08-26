import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { ContactForm } from "@/components/forms/ContactForm";
import communityImage from "@/assets/community-call.jpg";

const steps = [
  {
    step: "01",
    title: "Tell us what's going on",
    body: "A sentence or two is enough. No intake quiz, no questionnaire designed to sell you a tier.",
  },
  {
    step: "02",
    title: "We match you to a practitioner",
    body: "A person reads your note and suggests someone specific — with a reason, and an honest alternative if we have one.",
  },
  {
    step: "03",
    title: "Meet live",
    body: "1:1 or in a small group, held online. The first session sets a focus and a realistic starting point.",
  },
  {
    step: "04",
    title: "Keep going, with support",
    body: "Follow-ups with the same practitioner, plus community accountability groups for the weeks in between.",
  },
];

const faqs = [
  {
    q: "Can I book and pay online?",
    a: "Not yet. Every session starts as an enquiry, and a person replies within one working day with times. We'd rather do this by hand until the matching is right.",
  },
  {
    q: "Is anything pre-recorded?",
    a: "No. Every class and session on Amoda is live with a practitioner present.",
  },
  {
    q: "How are practitioners vetted?",
    a: "Verified certification, references we call ourselves, and a long conversation about scope and ethics. Anyone who overclaims is not listed.",
  },
  {
    q: "Do I need a membership?",
    a: "No. Membership adds community, accountability groups and member pricing, but you can enquire about any class or 1:1 session without one.",
  },
  {
    q: "Where are you based?",
    a: "Ottawa, Canada — with practitioners across Canada, India and the UK, serving clients globally in several languages.",
  },
];

export const Route = createFileRoute("/about/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Amoda Works — From Enquiry to Live Session" },
      {
        name: "description",
        content:
          "How Amoda works: tell us what's going on, we match you to a vetted practitioner, and you meet live. Enquiry-based, no online booking engine, nothing pre-recorded.",
      },
      { property: "og:title", content: "How Amoda Works" },
      {
        property: "og:description",
        content:
          "Four steps from enquiry to a live session with a vetted practitioner — matched by a person, not a quiz.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <Section>
        <Reveal className="max-w-[52ch]">
          <Eyebrow withDot>How Amoda works</Eyebrow>
          <h1 className="type-hero mt-6 text-ink">Four steps, one of them a conversation.</h1>
          <Prose className="mt-6">
            <p>
              There is no algorithm here and no funnel. A person reads what you send and matches you
              to a practitioner they'd send a friend to.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section tone="card">
        <ol className="grid gap-6 md:grid-cols-2">
          {steps.map((item, index) => (
            <Reveal as="li" key={item.step} delay={index * 90}>
              <div className="emboss flex h-full flex-col p-7">
                <span className="type-label text-leaf">{item.step}</span>
                <h2 className="type-h2 mt-4 text-ink">{item.title}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="sage">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <Eyebrow>What "live" actually means</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[24ch] text-ink">
              A small room, on a schedule, with someone who remembers you.
            </h2>
            <Prose className="mt-6">
              <p>
                Sessions are held online — 45 to 60 minutes, 1:1 or in groups small enough that your
                practitioner can see and cue for you specifically.
              </p>
              <p>
                Between sessions, members join accountability groups. That part is not decoration: it
                is the reason a practice survives week three.
              </p>
            </Prose>
          </Reveal>
          <Reveal delay={130}>
            <img
              src={communityImage}
              alt="A laptop on a wooden table showing a small live class in progress"
              width={1400}
              height={900}
              loading="lazy"
              className="emboss aspect-[16/10] w-full rounded-lg object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="type-h1 mt-5 text-ink">Answered plainly.</h2>
            <div className="mt-8">
              <QuietLink to="/classes" variant="outline">
                Explore live classes
              </QuietLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-6">
                  <dt className="type-h3 text-ink">{faq.q}</dt>
                  <dd className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink/75">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section tone="card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow withDot>Still deciding</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[22ch] text-ink">Ask us anything first.</h2>
            <Prose className="mt-5">
              <p>
                No obligation and no sales sequence. Tell us what you're weighing up and we'll answer
                honestly — including when Amoda isn't the right fit.
              </p>
            </Prose>
          </Reveal>
          <Reveal delay={130} className="emboss p-7 sm:p-9">
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
