import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { categories } from "@/content/categories";
import { practitioners } from "@/content/practitioners";
import { products } from "@/content/shoppe";
import { cn } from "@/lib/utils";

type Entry = { group: string; label: string; sub: string; to: string };

function buildIndex(): Entry[] {
  return [
    ...categories.map((c) => ({
      group: "Classes",
      label: c.name,
      sub: c.short,
      to: `/classes/${c.slug}`,
    })),
    ...practitioners.map((p) => ({
      group: "Coaches",
      label: p.name,
      sub: p.title,
      to: `/practitioners/${p.slug}`,
    })),
    ...products.map((p) => ({
      group: "Shoppe",
      label: p.name,
      sub: p.summary,
      to: `/shoppe/${p.slug}`,
    })),
  ];
}

export function HeaderSearch({ onInk }: { onInk: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const index = useMemo(buildIndex, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as Entry[];
    return index
      .filter((e) => `${e.label} ${e.sub} ${e.group}`.toLowerCase().includes(q))
      .slice(0, 8);
  }, [index, query]);

  const groups = ["Classes", "Coaches", "Shoppe"].filter((g) =>
    results.some((r) => r.group === g),
  );

  return (
    <div ref={wrapRef} className="relative flex items-center">
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[var(--ease-settle)]",
          open ? "w-48 opacity-100 xl:w-64" : "w-0 opacity-0",
        )}
      >
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Classes, coaches & more..."
          aria-label="Search Amoda"
          className={cn(
            "search-plain w-full rounded-full border bg-transparent px-4 py-1.5 text-sm outline-none transition-colors duration-500",
            onInk
              ? "border-parchment/35 text-parchment placeholder:text-parchment/45"
              : "border-[var(--hairline)] text-ink placeholder:text-ink/40",
          )}
        />
      </div>

      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value);
          if (open) setQuery("");
        }}
        aria-label={open ? "Close search" : "Open search"}
        aria-expanded={open}
        className={cn(
          "ml-1 rounded-full p-2 transition-colors duration-500",
          onInk ? "text-parchment hover:text-sage" : "text-leaf hover:text-ink",
        )}
      >
        {open ? <X className="size-[1.05rem]" /> : <Search className="size-[1.05rem]" />}
      </button>

      {open && results.length > 0 ? (
        <div className="emboss absolute top-full right-0 mt-3 w-80 p-3">
          {groups.map((group) => (
            <div key={group} className="mb-2 last:mb-0">
              <p className="type-label px-2 text-muted-foreground">{group}</p>
              <ul className="mt-1">
                {results
                  .filter((r) => r.group === group)
                  .map((entry) => (
                    <li key={entry.to}>
                      <Link
                        to={entry.to}
                        onClick={() => {
                          setOpen(false);
                          setQuery("");
                        }}
                        className="block rounded-md px-2 py-1.5 text-sm text-ink no-underline hover:bg-sage/45"
                      >
                        <span className="block">{entry.label}</span>
                        <span className="type-caption block truncate text-muted-foreground">
                          {entry.sub}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
