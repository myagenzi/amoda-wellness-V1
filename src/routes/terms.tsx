import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { site } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Amoda Wellness" },
      {
        name: "description",
        content:
          "The terms that apply when you use the Amoda Wellness website, send an enquiry, or book a session with one of our practitioners.",
      },
      { property: "og:title", content: "Terms of Service | Amoda Wellness" },
      {
        property: "og:description",
        content: "The terms that apply to using this site and booking sessions with our practitioners.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="type-hero mt-5 text-ink">Terms of Service</h1>
      <Prose className="mt-8">
        <p className="type-caption text-muted-foreground">Last updated: February 2026</p>

        <h2 className="type-h3 text-ink">Using this site</h2>
        <p>
          This website provides information about Amoda Wellness and lets you enquire about classes,
          coaching, Shoppe items, membership and corporate programmes. By using it you agree to these
          terms.
        </p>

        <h2 className="type-h3 text-ink">Not medical advice</h2>
        <p>
          Amoda practitioners provide coaching, education and wellness guidance. Nothing on this site
          or in a session is medical diagnosis or treatment, and nothing here replaces care from a
          licensed physician. If you have a medical condition, consult your doctor — and tell your
          practitioner.
        </p>

        <h2 className="type-h3 text-ink">Enquiries and bookings</h2>
        <p>
          Submitting an enquiry does not create a booking. Sessions are confirmed by email, including
          time, price and the practitioner concerned. Practitioners are independent professionals
          responsible for their own practice, insurance and licensing; Amoda verifies credentials but
          does not deliver the sessions itself.
        </p>

        <h2 className="type-h3 text-ink">Shoppe orders</h2>
        <p>
          Shoppe items are sold on an enquiry basis while online checkout is being built. Prices are
          shown in Canadian dollars and confirmed by email with shipping before any payment is taken.
        </p>

        <h2 className="type-h3 text-ink">Cancellations</h2>
        <p>
          Sessions may be rescheduled or cancelled at least twenty-four hours in advance at no charge.
          Later cancellations may be charged at the practitioner's discretion, which will be stated
          before you confirm.
        </p>

        <h2 className="type-h3 text-ink">Content</h2>
        <p>
          The text, imagery, brand marks and design of this site belong to Amoda Wellness. Please do
          not reproduce them without written permission.
        </p>

        <h2 className="type-h3 text-ink">Changes and contact</h2>
        <p>
          We may update these terms as the platform grows; material changes will be noted on this
          page. Questions go to{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </Prose>
    </Section>
  );
}
