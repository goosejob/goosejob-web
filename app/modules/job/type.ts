import type { Prisma, Job } from "@/generated/prisma";
import type { Decimal } from "@prisma/client/runtime/library";

// Override the Decimal type in Job to use the correct Decimal type
export type JobWithDecimal = Omit<Job, "salaryMin" | "salaryMax"> & {
  salaryMin: Decimal | null;
  salaryMax: Decimal | null;
};

export type JobWithRelations = JobWithDecimal &
  Prisma.JobGetPayload<{
    include: { status: true; organization: true };
  }>;
