import type { Prisma, Job } from "@prisma/client";

export type JobWithRelations = Prisma.JobGetPayload<{
  include: { status: true; organization: true };
}>;

export type JobRefined = Omit<JobWithRelations, "salaryMin" | "salaryMax"> & {
  salaryMin: number;
  salaryMax: number;
};
