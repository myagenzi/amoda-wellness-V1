import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const quietButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-center font-body text-[0.9375rem] font-medium transition-all duration-500 ease-[var(--ease-settle)] disabled:pointer-events-none disabled:opacity-55",
  {
    variants: {
      variant: {
        leaf: "bg-leaf text-parchment hover:bg-ink",
        outline:
          "border border-[color-mix(in_oklab,var(--leaf)_40%,transparent)] bg-transparent text-leaf hover:bg-sage/60",
        onInk:
          "border border-sage/45 bg-transparent text-parchment hover:bg-parchment hover:text-ink",
        quiet: "text-leaf underline decoration-[var(--hairline)] underline-offset-[6px] hover:decoration-leaf",
      },
      size: {
        md: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-7 py-3.5",
      },
    },
    defaultVariants: { variant: "leaf", size: "md" },
  },
);

type Props = VariantProps<typeof quietButton> & { className?: string; children: ReactNode };

export function QuietButton({
  variant,
  size,
  className,
  children,
  ...rest
}: Props & ComponentProps<"button">) {
  return (
    <button className={cn(quietButton({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}

export function QuietLink({
  variant,
  size,
  className,
  children,
  ...rest
}: Props & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(quietButton({ variant, size }), className)} {...rest}>
      {children}
    </Link>
  );
}

export { quietButton };
