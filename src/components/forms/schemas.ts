import { z } from "zod";
import { interestOptions } from "@/content/site";

const name = z
  .string()
  .trim()
  .min(2, { message: "Please enter your name." })
  .max(100, { message: "Name must be under 100 characters." });

const email = z
  .string()
  .trim()
  .email({ message: "Please enter a valid email address." })
  .max(255, { message: "Email must be under 255 characters." });

const optionalPhone = z
  .string()
  .trim()
  .max(30, { message: "Phone must be under 30 characters." })
  .optional()
  .or(z.literal(""));

export const contactSchema = z.object({
  name,
  email,
  interest: z.enum(interestOptions as unknown as [string, ...string[]], {
    errorMap: () => ({ message: "Please choose what you're interested in." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: "A sentence or two is plenty." })
    .max(1500, { message: "Message must be under 1500 characters." }),
});
export type ContactValues = z.infer<typeof contactSchema>;

export const enquirySchema = z.object({
  name,
  email,
  phone: optionalPhone,
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be under 1000 characters." })
    .optional()
    .or(z.literal("")),
});
export type EnquiryValues = z.infer<typeof enquirySchema>;

export const emailOnlySchema = z.object({ email });
export type EmailOnlyValues = z.infer<typeof emailOnlySchema>;

export const practitionerSchema = z.object({
  name,
  email,
  location: z
    .string()
    .trim()
    .min(2, { message: "Where are you based?" })
    .max(120, { message: "Location must be under 120 characters." }),
  practice: z.enum(
    [
      "Health Coaching",
      "Life Coaching",
      "Nutrition",
      "Yoga Classes",
      "Diabetic Solutions",
      "Other",
    ] as unknown as [string, ...string[]],
    { errorMap: () => ({ message: "Please choose your practice area." }) },
  ),
  credentials: z
    .string()
    .trim()
    .min(10, { message: "Please list your certifications and years of practice." })
    .max(1000, { message: "Please keep this under 1000 characters." }),
  about: z
    .string()
    .trim()
    .min(10, { message: "A few sentences about your approach." })
    .max(1500, { message: "Please keep this under 1500 characters." }),
});
export type PractitionerValues = z.infer<typeof practitionerSchema>;
