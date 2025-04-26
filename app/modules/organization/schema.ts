import { z } from "zod";

export const GeneratedOrganizationSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  location: z.string(),
  workplaceTypes: z.string().array(),
  websiteUrl: z.string().nullable(),
  logoUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const OrganizationSchema = GeneratedOrganizationSchema.extend({
  name: z.string().min(1, "Name is required"),
  websiteUrl: z.string().url("Invalid URL").optional(),
});

export const NewOrganizationSchema = OrganizationSchema.pick({
  name: true,
  tagline: true,
  description: true,
  location: true,
  workplaceTypes: true,
  websiteUrl: true,
  logoUrl: true,
});
