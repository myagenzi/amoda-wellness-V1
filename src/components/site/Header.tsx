import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Lockup } from "@/components/brand/Lockup";
import { LotusMark } from "@/components/brand/LotusMark";
import { QuietLink } from "./QuietButton";
import { HeaderSearch } from "./HeaderSearch";
import { nav } from "@/content/site";
import { categories } from "@/content/categories";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Over the hero video: transparent bar, parchment type. */
  const onInk = isHome && !scrolled && !open;

  const desktopNav = nav.filter((item) => item.to !== "/" && item.to !== "/shoppe");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-500 ease-[var(--ease-settle)]",
        onInk
          ? "border-transparent bg-transparent"
          : "border-[var(--hairline)] bg-background/92 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to="/" aria-label="Amoda Wellness — home" onClick={() => setOpen(false)}>
          <Lockup
            size="sm"
            withTagline={false}
            ground={onInk ? "dark" : "light"}
            className="hidden sm:flex"
          />
          <LotusMark
            variant="ring"
            ground={onInk ? "dark" : "light"}
            className="w-9 sm:hidden"
            title="Amoda Wellness"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {desktopNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "type-nav transition-colors duration-400",
                onInk ? "text-parchment/85 hover:text-parchment" : "text-ink/70 hover:text-leaf",
              )}
              activeProps={{ className: onInk ? "type-nav text-parchment" : "type-nav text-leaf" }}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-1 pl-1">
            <HeaderSearch onInk={onInk} />
            <Link
              to="/shoppe"
              aria-label="Shoppe"
              className={cn(
                "rounded-full p-2 transition-colors duration-500",
                onInk ? "text-parchment hover:text-sage" : "text-leaf hover:text-ink",
              )}
            >
              <ShoppingBag className="size-[1.05rem]" />
            </Link>
            <QuietLink
              to="/membership"
              size="sm"
              variant={onInk ? "onInk" : "leaf"}
              className="ml-2"
            >
              Join Amoda
            </QuietLink>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={cn("type-label flex items-center gap-2 lg:hidden", onInk ? "text-parchment" : "text-leaf")}
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
