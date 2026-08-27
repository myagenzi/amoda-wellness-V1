import { LotusMark } from "@/components/brand/LotusMark";
import { cn } from "@/lib/utils";

/**
 * The real Amoda mark, scaled enormous behind the manifesto — blended into
 * the ink field at low opacity with a soft blur and a radial mask that opens
 * a quiet zone where the type sits. Motion is continuous and restrained: one
 * very slow turn (~240s) and a gentle breathing sway. Reduced-motion users
 * get the static mark via the global motion guard.
 */
export function LotusField({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[150vw] min-w-[1000px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.12] blur-[1px]",
        className,
      )}
      style={{
        maskImage:
          "radial-gradient(ellipse at center, transparent 22%, black 62%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, transparent 22%, black 62%)",
      }}
      aria-hidden="true"
    >
      <div className="lotus-turn">
        <div className="lotus-breathe">
          <LotusMark variant="ring" ground="dark" />
        </div>
      </div>
    </div>
  );
}
