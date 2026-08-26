import { cn } from "@/lib/utils";

export type IconName =
  | "trust"
  | "class"
  | "community"
  | "shoppe"
  | "retreat"
  | "corporate"
  | "practitioner";

/**
 * Organic 1.5px linework echoing the lotus petal — no fills, no geometric/tech
 * shapes. Leaf stroke throughout; gold appears only on "trust", the icon tied
 * directly to the standard we hold practitioners to.
 */
export function EcosystemIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-9 text-leaf", className)}
      aria-hidden="true"
    >
      {name === "trust" ? (
        <>
          <path
            d="M24 6c6 3 10 4 13 4 0 12-2 22-13 32C13 32 11 22 11 10c3 0 7-1 13-4Z"
            {...common}
          />
          <path d="M18 23c2.6 0 4.6 1.8 6 5 1.4-3.2 3.4-5 6-5" {...common} />
          <circle cx="24" cy="17" r="3" fill="none" stroke="var(--color-gold)" strokeWidth="2.4" />
        </>
      ) : null}

      {name === "class" ? (
        <>
          <path d="M24 12c5 4 8 8 8 12s-3 8-8 12c-5-4-8-8-8-12s3-8 8-12Z" {...common} />
          <path d="M8 24c4-3 8-4 11-4M40 24c-4-3-8-4-11-4" {...common} />
          <path d="M24 12V6" {...common} />
        </>
      ) : null}

      {name === "community" ? (
        <>
          <path d="M17 27c-4 1.6-6 4.4-6 8h12c0-3.6-2-6.4-6-8Z" {...common} />
          <circle cx="17" cy="20" r="5" {...common} />
          <path d="M31 27c4 1.6 6 4.4 6 8h-8" {...common} />
          <circle cx="31" cy="20" r="4" {...common} />
        </>
      ) : null}

      {name === "shoppe" ? (
        <>
          <path d="M12 18h24l-2.5 20a2 2 0 0 1-2 2H16.5a2 2 0 0 1-2-2L12 18Z" {...common} />
          <path d="M19 18c0-5 2.2-8 5-8s5 3 5 8" {...common} />
        </>
      ) : null}

      {name === "retreat" ? (
        <>
          <path d="M24 40c0-9 4-15 12-18-2 10-6 15-12 18Z" {...common} />
          <path d="M24 40c0-9-4-15-12-18 2 10 6 15 12 18Z" {...common} />
          <path d="M24 40V26c0-6 0-10 0-14" {...common} />
        </>
      ) : null}

      {name === "corporate" ? (
        <>
          <path d="M10 40V20c0-1 .7-2 2-2h10c1.3 0 2 1 2 2v20" {...common} />
          <path d="M24 40V26c0-1 .7-2 2-2h10c1.3 0 2 1 2 2v14" {...common} />
          <path d="M15 26h4M15 32h4M29 31h4" {...common} />
          <path d="M6 40h36" {...common} />
        </>
      ) : null}
    </svg>
  );
}
