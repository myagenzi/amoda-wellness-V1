import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailOnlySchema, type EmailOnlyValues } from "./schemas";
import { QuietButton } from "@/components/site/QuietButton";
import { TextInput } from "./Fields";
import { cn } from "@/lib/utils";

/** Free-class RSVP, newsletter, and waitlist capture. */
export function EmailCaptureForm({
  cta,
  successTitle,
  successBody,
  ground = "light",
  label = "Email address",
}: {
  cta: string;
  successTitle: string;
  successBody: string;
  ground?: "light" | "dark";
  label?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EmailOnlyValues>({ resolver: zodResolver(emailOnlySchema) });

  if (isSubmitSuccessful) {
    return (
      <div role="status" className="max-w-[52ch]">
        <p className={cn("type-h3", ground === "dark" ? "text-parchment" : "text-ink")}>
          {successTitle}
        </p>
        <p className={cn("mt-2", ground === "dark" ? "text-sage/85" : "text-ink/75")}>
          {successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async () => {
        await new Promise((resolve) => setTimeout(resolve, 400));
      })}
      className="w-full max-w-lg"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">{label}</span>
          <TextInput
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            invalid={!!errors.email}
            className={ground === "dark" ? "bg-ink/40 text-parchment placeholder:text-sage/50" : ""}
          />
        </label>
        <QuietButton
          type="submit"
          variant={ground === "dark" ? "onInk" : "leaf"}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : cta}
        </QuietButton>
      </div>
      {errors.email ? (
        <p
          role="alert"
          className={cn(
            "type-caption mt-2",
            ground === "dark" ? "text-gold" : "text-destructive",
          )}
        >
          {errors.email.message}
        </p>
      ) : null}
    </form>
  );
}
