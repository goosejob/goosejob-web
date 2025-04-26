import { OrganizationSchema as GeneratedOrganizationSchema } from "../../../prisma/generated/zod";
import { z } from "zod";

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
