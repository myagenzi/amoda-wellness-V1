import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { practitionerSchema, type PractitionerValues } from "./schemas";
import { Field, FormSuccess, SelectInput, TextArea, TextInput } from "./Fields";
import { QuietButton } from "@/components/site/QuietButton";

const practices = [
  "Health Coaching",
  "Life Coaching",
  "Nutrition",
  "Yoga Classes",
  "Diabetic Solutions",
  "Other",
];

export function PractitionerApplicationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<PractitionerValues>({ resolver: zodResolver(practitionerSchema) });

  if (isSubmitSuccessful) {
    return (
      <FormSuccess
        title="Thank you — we read every application ourselves."
        body="Our vetting takes time on purpose: credentials, references, and a conversation. You'll hear from us within five working days, either way."
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
        <Field label="Where you're based" error={errors.location?.message}>
          <TextInput {...register("location")} invalid={!!errors.location} />
        </Field>
        <Field label="Practice area" error={errors.practice?.message}>
          <SelectInput {...register("practice")} invalid={!!errors.practice} defaultValue="">
            <option value="">Choose one</option>
            {practices.map((practice) => (
              <option key={practice} value={practice}>
                {practice}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>
      <Field
        label="Certifications & years of practice"
        error={errors.credentials?.message}
        hint="Verified certification and real history — this is the part we check first."
      >
        <TextArea {...register("credentials")} rows={4} invalid={!!errors.credentials} />
      </Field>
      <Field
        label="How you work"
        error={errors.about?.message}
        hint="Plainly, please. Tell us what your approach does — and what it doesn't."
      >
        <TextArea {...register("about")} invalid={!!errors.about} />
      </Field>
      <QuietButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Apply to Join Amoda"}
      </QuietButton>
    </form>
  );
}
