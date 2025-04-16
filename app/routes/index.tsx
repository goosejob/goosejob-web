import type { Route } from "./+types/index";
import type { JobRefined } from "@/modules/job/type";

import { JobCard } from "@/components/shared/job-card";
import { prisma } from "@/lib/prisma";
import { refineJobs } from "@/modules/job/util";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Goosejob" },
    {
      name: "description",
      content:
        "Find good jobs with 🪿Goosejob. List of all posted jobs, available and more.",
    },
  ];
}

export async function loader() {
  const jobs = await prisma.job.findMany({
    where: { status: { slug: "published" } },
    include: { status: true, organization: true },
  });

  return {
    jobs: refineJobs(jobs),
  };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  const { jobs } = loaderData;

  return (
    <>
      <h1>Find Good Jobs on Goosejob</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {jobs.map((job: JobRefined, index: number) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </>
  );
}
