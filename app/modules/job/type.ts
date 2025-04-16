import type { Prisma, Job } from "@prisma/client";

export type JobWithRelations = Job &
  Prisma.JobGetPayload<{
    include: { status: true; organization: true };
  }>;
