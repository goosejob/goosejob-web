import type { Prisma, Job } from "@/generated/prisma";

export type JobWithRelations = Job &
  Prisma.JobGetPayload<{
    include: { status: true; organization: true };
  }>;
