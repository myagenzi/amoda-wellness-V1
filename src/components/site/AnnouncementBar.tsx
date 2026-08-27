import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { announcement } from "@/content/site";

const KEY = "amoda-announcement-dismissed";

/**
 * Slim ink strip above the nav. Parchment small-caps on ink with a gold dot;
 * the whole line links to Membership. Dismissal lasts the session only.
 */
export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(KEY) === "1") setDismissed(true);
  }, []);

  if (dismissed) return null;

  const line = (
    <span className="flex items-center gap-3 whitespace-nowrap">
      <span className="inline-block size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
      <span className="type-label text-parchment/90">{announcement.text}</span>
    </span>
  );

  return (
    <div className="relative z-[60] bg-ink">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-5 py-2.5 sm:px-8">
        <Link
          to={announcement.to}
          className="min-w-0 flex-1 transition-opacity duration-500 hover:opacity-80"
        >
          {/* Desktop: one static line. Mobile: the line drifts rather than wraps. */}
          <span className="hidden md:flex md:justify-center">{line}</span>
          <span className="marquee-mask block md:hidden">
            <span className="marquee-track-fast items-center">
              <span className="flex shrink-0 items-center pr-10">{line}</span>
              <span className="flex shrink-0 items-center pr-10" aria-hidden="true">
                {line}
              </span>
            </span>
          </span>
        </Link>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => {
            setDismissed(true);
            sessionStorage.setItem(KEY, "1");
          }}
          className="shrink-0 rounded-full p-1 text-parchment/60 transition-colors duration-400 hover:text-parchment"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
