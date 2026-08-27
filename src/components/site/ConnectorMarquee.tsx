import { LotusMark } from "@/components/brand/LotusMark";
import { connectorWords } from "@/content/site";

/**
 * The seam between the free-class frame and the Trust + Manifesto frame.
 * A single slow word band on the ink field, faded at both edges so the two
 * photographs dissolve into it instead of butting against each other.
 */
export function ConnectorMarquee() {
  const words = [...connectorWords, ...connectorWords];

  return (
    <section
      aria-label="What Amoda means"
      className="relative isolate overflow-hidden bg-ink py-10 md:py-12"
    >
      {/* Vertical bleed into the neighbouring frames. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-ink"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-16 h-16 bg-gradient-to-t from-transparent to-ink"
      />

      <div className="marquee-mask">
        <div className="marquee-track items-center">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex shrink-0 items-center gap-6 pr-6"
            >
              <span className="type-label whitespace-nowrap text-sage/85">{word}</span>
              <LotusMark
                variant="micro"
                ground="dark"
                className="w-3.5 shrink-0 opacity-70"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
