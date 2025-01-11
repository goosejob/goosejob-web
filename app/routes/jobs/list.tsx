import type { Route } from "./+types/list";
import { seedDataJobs } from "@/modules/job/data";
import { JobCard } from "@/components/shared/job-card";

console.log({
  VITE_DATABASE_URL: import.meta.env.VITE_DATABASE_URL,
  DATABASE_URL: import.meta.env.DATABASE_URL,
  process_DATABASE_URL: process.env.DATABASE_URL,
});

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
  // const jobs = await prisma.job.findMany();

  return { jobs: seedDataJobs };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  const { jobs } = loaderData;

  return (
    <>
      <h1 className="text-4xl font-semibold">List of Jobs</h1>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </>
  );
}
