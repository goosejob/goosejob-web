import type { Route } from "./+types/index";
import type { JobWithRelations } from "@/modules/job/type";

import { JobCard } from "@/components/shared/job-card";
import { prisma } from "@/lib/prisma";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "List of Jobs - Goosejob" },
    {
      name: "description",
      content: "List of all posted jobs, available and more.",
    },
  ];
}

export async function loader() {
  const jobs = await prisma.job.findMany({
    where: { status: { slug: "published" } },
    include: { status: true, organization: true },
  });

  return { jobs };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  const { jobs } = loaderData;

  return (
    <>
      <h1>Find Good Jobs on Goosejob</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job as JobWithRelations} />
        ))}
      </div>
    </>
  );
}
