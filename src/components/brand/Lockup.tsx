import { cn } from "@/lib/utils";
import { LotusMark, type LotusGround } from "./LotusMark";

/**
 * The full lockup — mark + AMODA / WELLNESS wordmark + tagline.
 * Per the brand guidelines this appears ONLY in the header and footer, and never
 * below 120px wide. Everywhere else use <LotusMark /> instead.
 *   ground="light" -> Lotus Parchment lockup
 *   ground="dark"  -> Lily Shadow lockup
 */
export function Lockup({
  ground = "light",
  size = "md",
  withTagline = true,
  className,
}: {
  ground?: LotusGround;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  className?: string;
}) {
  const markSize = size === "lg" ? "w-16" : size === "md" ? "w-11" : "w-9";
  const wordSize =
    size === "lg" ? "text-3xl" : size === "md" ? "text-xl" : "text-lg";
  const text = ground === "dark" ? "text-parchment" : "text-ink";
  const sub = ground === "dark" ? "text-sage" : "text-leaf";

  return (
    <span className={cn("flex min-w-[120px] items-center gap-3", className)}>
      <LotusMark variant="ring" ground={ground} className={markSize} />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display leading-none tracking-[0.02em]",
            wordSize,
            text,
          )}
        >
          AMODA
        </span>
        <span className={cn("mt-1 h-px w-full", ground === "dark" ? "bg-sage/60" : "bg-leaf/45")} />
        <span className={cn("type-label mt-1 text-[0.6rem]", sub)}>Wellness</span>
        {withTagline ? (
          <span className={cn("type-accent mt-0.5 text-[0.68rem] leading-none", sub)}>
            ancient roots, modern results
          </span>
        ) : null}
      </span>
    </span>
  );
}
