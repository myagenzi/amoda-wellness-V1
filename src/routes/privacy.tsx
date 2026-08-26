import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { site } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Amoda Wellness" },
      {
        name: "description",
        content:
          "How Amoda Wellness collects, uses and protects the information you share through enquiry forms, newsletter signups and class registrations.",
      },
      { property: "og:title", content: "Privacy Policy | Amoda Wellness" },
      {
        property: "og:description",
        content: "What we collect, why, and how to have it removed.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="type-hero mt-5 text-ink">Privacy Policy</h1>
      <Prose className="mt-8">
        <p className="type-caption text-muted-foreground">Last updated: February 2026</p>

        <h2 className="type-h3 text-ink">What we collect</h2>
        <p>
          When you send an enquiry, apply as a practitioner, register for a free class or subscribe to
          our newsletter, we collect the details you enter — typically your name, email address, and
          optionally a phone number and a short message. We do not ask for health records, and we ask
          that you do not send clinical documents through these forms.
        </p>

        <h2 className="type-h3 text-ink">Why we collect it</h2>
        <p>
          To reply to you, to match you with a suitable practitioner, to send the class link you asked
          for, and — only if you subscribed — to send occasional updates. We do not sell or rent your
          information, and we do not use it for advertising profiles.
        </p>

        <h2 className="type-h3 text-ink">Who can see it</h2>
        <p>
          A small number of people at Amoda, and the practitioner you are matched with once you agree
          to that introduction. Service providers we use to send email and host this site process data
          on our behalf under their own agreements.
        </p>

        <h2 className="type-h3 text-ink">How long we keep it</h2>
        <p>
          Enquiries are kept for as long as needed to support your relationship with a practitioner,
          and no longer than three years after our last contact. Newsletter subscriptions last until
          you unsubscribe, which takes one click.
        </p>

        <h2 className="type-h3 text-ink">Your choices</h2>
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Write to{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>{" "}
          and we will action it within thirty days.
        </p>

        <h2 className="type-h3 text-ink">Cookies</h2>
        <p>
          This site uses only what it needs to function. We do not run third-party advertising
          trackers.
        </p>

        <h2 className="type-h3 text-ink">Contact</h2>
        <p>
          Amoda Wellness · {site.base} ·{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </Prose>
    </Section>
  );
}
