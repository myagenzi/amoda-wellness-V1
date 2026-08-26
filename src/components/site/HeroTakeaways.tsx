import { Link } from "@tanstack/react-router";
import { EcosystemIcon } from "@/components/brand/EcosystemIcon";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: "corporate" as const,
    label: "Corporate Wellness",
    body: "Bring Amoda's coaching and classes to your team.",
    to: "/membership",
  },
  {
    icon: "practitioner" as const,
    label: "Become a Practitioner",
    body: "Share your practice with a global community.",
    to: "/practitioners/apply",
  },
];

/**
 * Two key takeaways resting on the foot of the hero video — closes the stage
 * so the next section never shows as a pale seam.
 */
export function HeroTakeaways({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 bottom-0 border-t border-sage/20 bg-ink/35 backdrop-blur-[2px]",
        className,
      )}
    >
      <ul className="mx-auto grid w-full max-w-6xl gap-px sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.label} className={index === 1 ? "sm:border-l sm:border-sage/20" : undefined}>
            <Link
              to={item.to}
              className="flex items-start gap-4 px-5 py-6 no-underline transition-colors duration-300 hover:bg-ink/25 sm:px-8"
            >
              <EcosystemIcon name={item.icon} className="mt-0.5 size-8 shrink-0 text-sage" />
              <span className="block">
                <span className="type-label block text-parchment">{item.label}</span>
                <span className="mt-1.5 block text-[0.875rem] leading-relaxed text-parchment/70">
                  {item.body}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
