import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, X } from "lucide-react";
import { LotusMark } from "@/components/brand/LotusMark";
import { GUIDE_OPENERS } from "@/lib/guide.prompt";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

/** Renders [label](/path) links and paragraph breaks — nothing else. */
function GuideText({ text }: { text: string }) {
  const parts = useMemo(() => {
    const out: Array<{ type: "text" | "link"; value: string; to?: string }> = [];
    const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) {
      if (m.index > last) out.push({ type: "text", value: text.slice(last, m.index) });
      out.push({ type: "link", value: m[1] ?? "", to: m[2] ?? "/" });
      last = m.index + m[0].length;
    }
    if (last < text.length) out.push({ type: "text", value: text.slice(last) });
    return out;
  }, [text]);

  return (
    <>
      {parts.map((part, i) =>
        part.type === "link" ? (
          <Link
            key={i}
            to={part.to!}
            className="underline decoration-leaf/40 underline-offset-[4px] hover:decoration-leaf"
          >
            {part.value}
          </Link>
        ) : (
          <span key={i} className="whitespace-pre-wrap">
            {part.value.replace(/\*\*/g, "")}
          </span>
        ),
      )}
    </>
  );
}

export function AmodaGuide() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [opener, setOpener] = useState<string>(GUIDE_OPENERS[0]);
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpener(
      GUIDE_OPENERS[Math.floor(Math.random() * GUIDE_OPENERS.length)] ?? GUIDE_OPENERS[0],
    );
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, pending]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || pending) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setError(null);
    setPending(true);

    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        const detail = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(detail?.error ?? "The Guide couldn't answer just now.");
      }

      setMessages([...next, { role: "assistant", content: "" }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let answer = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            const delta: string = json.choices?.[0]?.delta?.content ?? "";
            if (delta) {
              answer += delta;
              setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = { role: "assistant", content: answer };
                return copy;
              });
            }
          } catch {
            /* partial frame — wait for more bytes */
          }
        }
      }

      if (!answer) {
        setMessages(next);
        setError("The Guide went quiet. Try asking once more.");
      }
    } catch (err) {
      setMessages(next);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close the Amoda Guide" : "Talk with the Amoda Guide"}
        className={cn(
          "fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-full border border-sage/40 bg-ink px-4 py-3 text-parchment shadow-[0_18px_40px_-22px_rgb(30_46_26/0.7)] transition-all duration-500 ease-[var(--ease-settle)] hover:border-sage sm:bottom-7 sm:right-7",
          open && "opacity-0 pointer-events-none",
        )}
      >
        <LotusMark variant="micro" ground="dark" className="w-6" />
        <span className="type-label hidden sm:inline">Ask the Amoda Guide</span>
      </button>

      {/* Panel */}
      <div
        className={cn(
          "fixed inset-x-3 bottom-3 z-[75] flex max-h-[80svh] flex-col overflow-hidden rounded-2xl border border-leaf/15 bg-background shadow-[0_30px_70px_-30px_rgb(30_46_26/0.55)] transition-all duration-500 ease-[var(--ease-settle)] sm:inset-x-auto sm:right-7 sm:bottom-7 sm:w-[25rem]",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
        role="dialog"
        aria-label="The Amoda Guide"
        aria-hidden={!open}
      >
        <div className="flex items-center gap-3 bg-ink px-5 py-4">
          <LotusMark variant="micro" ground="dark" className="w-7 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="type-label text-parchment">The Amoda Guide</p>
            <p className="type-caption text-parchment/60">Come as you are.</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="rounded-full p-1 text-parchment/70 transition-colors hover:text-parchment"
          >
            <X className="size-4" />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          <div className="max-w-[92%] rounded-xl bg-card px-4 py-3 text-[0.9375rem] leading-relaxed text-ink/85">
            {opener}
          </div>

          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[92%] rounded-xl px-4 py-3 text-[0.9375rem] leading-relaxed",
                message.role === "user"
                  ? "ml-auto bg-leaf text-parchment"
                  : "bg-card text-ink/85",
              )}
            >
              {message.role === "assistant" ? (
                <GuideText text={message.content} />
              ) : (
                <span className="whitespace-pre-wrap">{message.content}</span>
              )}
            </div>
          ))}

          {pending && messages[messages.length - 1]?.role === "user" ? (
            <p className="type-caption text-muted-foreground">Thinking…</p>
          ) : null}

          {error ? <p className="type-caption text-destructive">{error}</p> : null}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            void send(input);
          }}
          className="flex items-end gap-2 border-t border-[var(--hairline)] px-4 py-3"
        >
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void send(input);
              }
            }}
            rows={1}
            placeholder="Tell me what's going on…"
            className="max-h-28 min-h-10 flex-1 resize-none rounded-lg border border-[var(--input)] bg-background px-3 py-2 text-[0.9375rem] text-ink outline-none placeholder:text-muted-foreground focus:border-leaf-soft"
          />
          <button
            type="submit"
            disabled={pending || !input.trim()}
            aria-label="Send"
            className="rounded-full bg-leaf p-2.5 text-parchment transition-colors duration-400 hover:bg-ink disabled:opacity-45"
          >
            <ArrowUp className="size-4" />
          </button>
        </form>
      </div>
    </>
  );
}
