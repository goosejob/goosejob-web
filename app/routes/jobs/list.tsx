import type { Route } from "./+types/list";
import {
  MapPin,
  Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function meta({}: Route.MetaArgs) {
  return [
    { title: "List of Jobs - Goosejob" },
    {
      name: "description",
      content: "List of all posted jobs, available and more.",
    },
  ];
}

type Job = {
  jobTitle: string;
  jobLevel: string;
  jobLocation: string;
  jobTypes: string[];
  salaryCurrency: string;
  salaryMin: number;
  salaryMax: number;
  salaryPeriod: string;
  workplaceTypes: string[];
  description: string;
};

function JobCard(job: Job) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>
          {job.jobTitle} ({job.jobLevel})
        </CardTitle>
        <CardDescription className="flex gap">
          <div className="flex items-center gap">
            <MapPin className="h-4" />
            {job.jobLocation}
          </div>
          <div className="flex items-center gap">
            <Wallet className="h-4" />
            {job.salaryCurrency}{job.salaryMin}-{job.salaryMax}/{job.salaryPeriod}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 md:h-12">
          <div>
            <span className="font-medium">{job.jobTypes.join(", ")}</span>
            <CardDescription>Job Type</CardDescription>
          </div>
          <Separator className="hidden md:block" orientation="vertical" />
          <div>
            <span className="font-medium">{job.workplaceTypes.join(", ")}</span>
            <CardDescription>Workplace</CardDescription>
          </div>
        </div>
        <p className="line-clamp-2">
          {job.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button>See More</Button>
      </CardFooter>
    </Card>
  )
}

export default function Route() {
  return (
    <>
      <h1 className="text-4xl font-semibold">List of Jobs</h1>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
        <JobCard
          jobTitle="Software Engineer"
          jobLevel="Mid-level"
          jobLocation="Jakarta"
          jobTypes={["Full-time"]}
          salaryCurrency="USD"
          salaryMin={70000}
          salaryMax={90000}
          salaryPeriod="year"
          workplaceTypes={["Hybrid", "Remote"]}
          description="Develop and maintain software solutions, ensuring code quality and system performance." />
      </div>
    </>
  );
}

export {
  meta
}