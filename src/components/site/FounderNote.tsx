import { ArrowRight } from "lucide-react";
import { LotusMark } from "@/components/brand/LotusMark";
import { QuietLink } from "@/components/site/QuietButton";
import { Reveal } from "@/components/site/Reveal";

export function FounderNote() {
  return (
    <section
      aria-labelledby="founder-note-name"
      className="grain relative isolate overflow-hidden bg-background px-5 py-20 sm:px-8 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 w-64 opacity-[0.035] sm:-right-16 sm:-top-32 sm:w-96"
      >
        <LotusMark variant="ring" />
      </div>

      <Reveal className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="font-display text-4xl leading-none text-gold/80" aria-hidden="true">
          “
        </span>

        <blockquote className="mt-5 max-w-[37ch]">
          <p className="font-display text-[1.5rem] font-light italic leading-[1.5] text-ink sm:text-[1.75rem] md:text-[2rem]">
            I created Amoda because I believe wellness should be something we can all access,
            wherever we are in the world, and no one should have to navigate their journey alone.
          </p>
        </blockquote>

        <div className="mt-8 h-px w-9 bg-gold/55" aria-hidden="true" />

        <div className="mt-6">
          <h2 id="founder-note-name" className="font-display text-xl font-medium text-ink">
            Arti Joshi
          </h2>
          <p className="type-label mt-1.5 text-gold">Founder, Amoda Wellness</p>
        </div>

        <QuietLink to="/about" variant="outline" className="mt-9 group">
          Meet the Founder
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-500 ease-[var(--ease-settle)] group-hover:translate-x-1"
          />
        </QuietLink>
      </Reveal>
    </section>
  );
}