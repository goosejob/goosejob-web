import { z } from "zod";

// TODO: optional fields to be added later in form fields
export const newJobFormSchema = z.object({
  organizationSlug: z.string().nonempty("Organization is required").optional(),

  title: z.string().nonempty("Job title is required"),
  level: z.string().nonempty("Job level is required"), // junior, mid, senior

  currency: z.string().nonempty("Currency is required").optional(),
  rateType: z.enum(["hourly", "monthly", "yearly"]).optional(),
  salaryMin: z.number().min(0, "Minimum salary must be 0 or greater"),
  salaryMax: z.number().min(0, "Maximum salary must be 0 or greater"),

  experienceMin: z.number().min(0, "Minimum experience must be 0 or greater"),
  experienceMax: z.number().optional(),

  types: z
    .array(z.string())
    .nonempty("Select at least one job type")
    .optional(),

  workplaceTypes: z
    .array(z.string())
    .nonempty("Select at least one workplace type")
    .optional(),

  description: z
    .string()
    .min(100, "Job description need at least 100 characters"),

  benefits: z.string().min(20, "Benefits need at least 20 characters"),

  skills: z.array(z.string()), // typescript, python, react, rest-api, graphql
});
