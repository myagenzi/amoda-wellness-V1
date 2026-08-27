import { Reveal } from "@/components/site/Reveal";
import { LotusField } from "@/components/brand/LotusField";
import { manifesto } from "@/content/home";

/**
 * Section 7 — the manifesto, set on a dark ink-green field with a slow, living
 * lotus drawn behind the words. The text is untouched; only the stage changes.
 */
export function ManifestoBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 py-28 sm:px-8 md:py-36">
      <LotusField />

      {/* Soft radial vignette so the copy stays clean while the linework glows at the edges. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--ink) 78%, transparent) 0%, transparent 68%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="type-label mb-10 text-sage/70">Our Manifesto</p>

        <Reveal>
          <div className="space-y-10">
            {manifesto.map((line, index) => {
              const isClosing = index === manifesto.length - 1;
              return (
                <p
                  key={index}
                  className={
                    isClosing
                      ? "type-accent mt-12 italic text-gold"
                      : "type-h2 whitespace-pre-line italic text-parchment/90 [text-wrap:balance]"

                  }
                >
                  {line}
                </p>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
