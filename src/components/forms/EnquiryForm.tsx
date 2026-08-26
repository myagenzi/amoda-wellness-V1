import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, type EnquiryValues } from "./schemas";
import { Field, FormSuccess, TextArea, TextInput } from "./Fields";
import { QuietButton } from "@/components/site/QuietButton";

/**
 * Session / class enquiry. Enquiry-only at launch: no booking engine, no
 * payment. The submission is confirmed to the visitor and followed up by hand.
 */
export function EnquiryForm({
  subject,
  cta = "Send enquiry",
  compact = false,
}: {
  subject: string;
  cta?: string;
  compact?: boolean;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EnquiryValues>({ resolver: zodResolver(enquirySchema) });

  if (isSubmitSuccessful) {
    return (
      <FormSuccess
        title="Come as you are. We'll meet you there."
        body={`Your enquiry about ${subject} is with us. A person — not an autoresponder — will reply within one working day with times and a practitioner match.`}
        onReset={() => reset()}
      />
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async () => {
        await new Promise((resolve) => setTimeout(resolve, 450));
      })}
      className="space-y-5"
    >
      <input type="hidden" value={subject} readOnly />
      <div className={compact ? "space-y-5" : "grid gap-5 sm:grid-cols-2"}>
        <Field label="Your name" error={errors.name?.message}>
          <TextInput
            {...register("name")}
            invalid={!!errors.name}
            autoComplete="name"
            placeholder="First and last"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <TextInput
            {...register("email")}
            type="email"
            invalid={!!errors.email}
            autoComplete="email"
            placeholder="you@email.com"
          />
        </Field>
      </div>
      <Field label="Phone" error={errors.phone?.message} hint="Optional.">
        <TextInput {...register("phone")} invalid={!!errors.phone} autoComplete="tel" />
      </Field>
      <Field
        label="Anything we should know"
        error={errors.message?.message}
        hint="Optional. Nothing to prepare — a sentence is enough."
      >
        <TextArea {...register("message")} rows={4} invalid={!!errors.message} />
      </Field>
      <QuietButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : cta}
      </QuietButton>
    </form>
  );
}
