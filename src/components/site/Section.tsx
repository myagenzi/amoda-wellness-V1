import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "parchment",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "parchment" | "sage" | "ink" | "card";
  id?: string;
}) {
  const tones = {
    parchment: "bg-background grain",
    sage: "bg-sage",
    ink: "bg-ink text-parchment",
    card: "bg-card",
  } as const;

  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 md:py-28", tones[tone], className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "leaf",
  withDot = false,
}: {
  children: ReactNode;
  tone?: "leaf" | "sage";
  withDot?: boolean;
}) {
  return (
    <p
      className={cn(
        "type-label flex items-center gap-2",
        tone === "leaf" ? "text-leaf" : "text-sage",
      )}
    >
      {withDot ? (
        <span className="inline-block size-1.5 rounded-full bg-gold" aria-hidden="true" />
      ) : null}
      {children}
    </p>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-[62ch] space-y-5 text-[1.0625rem] leading-relaxed text-ink/80",
        className,
      )}
    >
      {children}
    </div>
  );
}
