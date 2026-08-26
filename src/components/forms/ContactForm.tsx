import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactValues } from "./schemas";
import { Field, FormSuccess, SelectInput, TextArea, TextInput } from "./Fields";
import { QuietButton } from "@/components/site/QuietButton";
import { interestOptions } from "@/content/site";

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { interest: defaultInterest ?? "" },
  });

  if (isSubmitSuccessful) {
    return (
      <FormSuccess
        title="We have it. Nothing to prepare."
        body="A real person reads every message here. Expect a reply within one working day."
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <TextInput {...register("name")} invalid={!!errors.name} autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <TextInput
            {...register("email")}
            type="email"
            invalid={!!errors.email}
            autoComplete="email"
          />
        </Field>
      </div>
      <Field label="I'm interested in" error={errors.interest?.message}>
        <SelectInput {...register("interest")} invalid={!!errors.interest}>
          <option value="">Choose one</option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <TextArea {...register("message")} invalid={!!errors.message} />
      </Field>
      <QuietButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </QuietButton>
    </form>
  );
}
