import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { GUIDE_SYSTEM_PROMPT } from "@/lib/guide.prompt";

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(40),
});

export const Route = createFileRoute("/api/guide")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "The Guide isn't configured yet." }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }

        let parsed;
        try {
          parsed = bodySchema.parse(await request.json());
        } catch {
          return new Response(JSON.stringify({ error: "Bad request." }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "Lovable-API-Key": apiKey,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "google/gemini-3.7-flash",
            stream: true,
            messages: [
              { role: "system", content: GUIDE_SYSTEM_PROMPT },
              ...parsed.messages,
            ],
          }),
        });

        if (!upstream.ok || !upstream.body) {
          const detail = await upstream.text().catch(() => "");
          const message =
            upstream.status === 429
              ? "A lot of people are talking with the Guide right now. Try again in a moment."
              : upstream.status === 402
                ? "The Guide is out of credits for now. The Amoda team can still help you at /contact."
                : "The Guide couldn't answer just now.";
          console.error("guide upstream error", upstream.status, detail.slice(0, 400));
          return new Response(JSON.stringify({ error: message }), {
            status: upstream.status === 429 ? 429 : 502,
            headers: { "content-type": "application/json" },
          });
        }

        return new Response(upstream.body, {
          headers: {
            "content-type": "text/event-stream; charset=utf-8",
            "cache-control": "no-cache, no-transform",
            connection: "keep-alive",
          },
        });
      },
    },
  },
});
