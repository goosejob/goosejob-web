import type { JobWithRelations } from "./type";

export function refineJob(job: JobWithRelations) {
  return {
    ...job,
    salaryMin: job.salaryMin.toNumber(),
    salaryMax: job.salaryMax.toNumber(),
  };
}

export function refineJobs(jobs: JobWithRelations[]) {
  return jobs.map(refineJob);
}
