import { cn } from "@/lib/utils";

/**
 * The Amoda mark: six-petal lotus (four Leaf petals on the diagonals, four Sage
 * petals on the axes), inner hairline ring, gold centre, outer ring.
 *
 * Variants follow the brand guideline exactly:
 *  - "ring"  : full mark with the outer ring — 48px and above
 *  - "micro" : ring dropped, petals + gold centre only — below 48px (favicon,
 *              avatars, inline UI)
 * The gold centre is never recoloured and never used as a field.
 */
export type LotusVariant = "ring" | "micro";
export type LotusGround = "light" | "dark";

const DIAGONALS = [45, 135, 225, 315];

export function LotusMark({
  variant = "ring",
  ground = "light",
  className,
  unfold = false,
  title,
}: {
  variant?: LotusVariant;
  ground?: LotusGround;
  className?: string;
  unfold?: boolean;
  title?: string;
}) {
  const leaf = ground === "dark" ? "var(--color-sage)" : "var(--color-leaf)";
  const soft =
    ground === "dark" ? "oklch(0.8895 0.054 117.81 / 45%)" : "var(--color-sage)";
  const ring = ground === "dark" ? "var(--color-sage)" : "var(--color-leaf)";

  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("h-auto w-full", className)}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {variant === "ring" ? (
        <>
          <circle cx="100" cy="100" r="75" fill="none" stroke={ring} strokeWidth="3.2" />
          <circle
            cx="100"
            cy="100"
            r="32"
            fill="none"
            stroke={ring}
            strokeWidth="0.7"
            opacity="0.75"
          />
        </>
      ) : null}

      <g className={unfold ? "unfold" : undefined}>
        {/* Sage petals on the axes */}
        <ellipse cx="100" cy="100" rx="7.5" ry="59" fill={soft} />
        <ellipse cx="100" cy="100" rx="59" ry="7.5" fill={soft} />

        {/* Leaf petals on the diagonals */}
        {DIAGONALS.map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-29"
            rx="8.6"
            ry="29"
            fill={leaf}
            transform={`translate(100 100) rotate(${deg})`}
          />
        ))}

        {/* Gold Standard — the centre, accent only */}
        <circle
          cx="100"
          cy="100"
          r="12.5"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="7"
        />
      </g>
    </svg>
  );
}

/** One petal, used as a section divider in place of a horizontal rule. */
export function PetalDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="h-px w-16 bg-[var(--hairline)] sm:w-24" />
      <svg viewBox="0 0 24 40" className="h-5 w-3" aria-hidden="true">
        <ellipse cx="12" cy="20" rx="5" ry="18" fill="var(--color-leaf)" opacity="0.28" />
      </svg>
      <span className="h-px w-16 bg-[var(--hairline)] sm:w-24" />
    </div>
  );
}

/** Six-petal watermark — Manifesto section only, 4% opacity. */
export function LotusWatermark({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute select-none opacity-[0.04]", className)}
      aria-hidden="true"
    >
      <LotusMark variant="micro" />
    </div>
  );
}
