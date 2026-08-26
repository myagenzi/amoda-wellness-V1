import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Lockup } from "@/components/brand/Lockup";
import { LotusMark } from "@/components/brand/LotusMark";
import { QuietLink } from "./QuietButton";
import { nav } from "@/content/site";
import { categories } from "@/content/categories";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-background/92 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to="/" aria-label="Amoda Wellness — home" onClick={() => setOpen(false)}>
          {/* Full lockup: header and footer only */}
          <Lockup size="sm" withTagline={false} className="hidden sm:flex" />
          <LotusMark variant="ring" className="w-9 sm:hidden" title="Amoda Wellness" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="type-label text-ink/70 transition-colors duration-400 hover:text-leaf"
              activeProps={{ className: "type-label text-leaf" }}
            >
              {item.label}
            </Link>
          ))}
          <QuietLink to="/membership" size="sm" className="ml-1">
            Join Amoda
          </QuietLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="type-label flex items-center gap-2 text-leaf lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "grain overflow-hidden border-t border-[var(--hairline)] bg-background transition-all duration-500 ease-[var(--ease-settle)] lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="space-y-1 px-5 py-6 sm:px-8" aria-label="Mobile">
          {nav.map((item) => (
            <div key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="type-h3 block py-2 text-ink"
              >
                {item.label}
              </Link>
              {item.to === "/classes" ? (
                <div className="mb-2 ml-1 space-y-1 border-l border-[var(--hairline)] pl-4">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to="/classes/$slug"
                      params={{ slug: category.slug }}
                      onClick={() => setOpen(false)}
                      className="block py-1 text-ink/70"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              ) : null}
              {item.to === "/practitioners" ? (
                <div className="mb-2 ml-1 space-y-1 border-l border-[var(--hairline)] pl-4">
                  <Link
                    to="/practitioners/apply"
                    onClick={() => setOpen(false)}
                    className="block py-1 text-ink/70"
                  >
                    Become a Practitioner
                  </Link>
                </div>
              ) : null}
            </div>
          ))}
          <QuietLink to="/membership" onClick={() => setOpen(false)} className="mt-4 w-full">
            Join Amoda
          </QuietLink>
        </nav>
      </div>
    </header>
  );
}
