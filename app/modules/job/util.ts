import type { JobRefined, JobWithRelations } from "@/modules/job/type";

export function refineJob(job: JobWithRelations): JobRefined {
  return {
    ...job,
    salaryMin: job.salaryMin.toNumber(),
    salaryMax: job.salaryMax.toNumber(),
  };
}

export function refineJobs(jobs: JobWithRelations[]): JobRefined[] {
  return jobs.map(refineJob);
}
