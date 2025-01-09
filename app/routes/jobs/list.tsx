import { useEffect, useState } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";

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

const jobs: Job[] = [
  {
    jobTitle: "Software Engineer",
    jobLevel: "Mid-level",
    jobLocation: "New York, NY",
    jobTypes: ["Full-time", "Contract"],
    salaryCurrency: "USD",
    salaryMin: 80000,
    salaryMax: 110000,
    salaryPeriod: "year",
    workplaceTypes: ["Hybrid", "Remote"],
    description: "Design, develop, and maintain scalable software solutions in a collaborative environment.",
  },
  {
    jobTitle: "Data Scientist",
    jobLevel: "Senior",
    jobLocation: "San Francisco, CA",
    jobTypes: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 120000,
    salaryMax: 150000,
    salaryPeriod: "year",
    workplaceTypes: ["On-site"],
    description: "Analyze large datasets to identify trends and provide actionable insights to drive business decisions.",
  },
  {
    jobTitle: "UI/UX Designer",
    jobLevel: "Entry-level",
    jobLocation: "Remote",
    jobTypes: ["Part-time"],
    salaryCurrency: "USD",
    salaryMin: 40000,
    salaryMax: 60000,
    salaryPeriod: "year",
    workplaceTypes: ["Remote"],
    description: "Design user-friendly interfaces and create seamless experiences across web and mobile platforms.",
  },
  {
    jobTitle: "Product Manager",
    jobLevel: "Senior",
    jobLocation: "Los Angeles, CA",
    jobTypes: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 100000,
    salaryMax: 130000,
    salaryPeriod: "year",
    workplaceTypes: ["Hybrid"],
    description: "Manage product development from ideation to launch, ensuring alignment with business goals and customer needs.",
  },
  {
    jobTitle: "Marketing Specialist",
    jobLevel: "Mid-level",
    jobLocation: "Chicago, IL",
    jobTypes: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 55000,
    salaryMax: 75000,
    salaryPeriod: "year",
    workplaceTypes: ["On-site", "Hybrid"],
    description: "Develop and execute marketing strategies to drive brand awareness, engagement, and revenue growth.",
  },
];

function JobCard({ job }: { job: Job }) {
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

function JobCardSkeleton() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-1/2 h-6" />
        </CardTitle>
        <CardDescription className="flex gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="w-24 h-4" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="w-32 h-4" />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 md:h-12">
          <div className="flex flex-col gap-1">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
          <Separator className="hidden md:block" orientation="vertical" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
        </div>
        <Skeleton className="h-6 w-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-24 h-8" />
      </CardFooter>
    </Card>
  );
}

function loader(): Promise<Job[]> {
  return new Promise((resolve) => setTimeout(() => resolve(jobs), 2000)); // Simulate loading delay
}

export default function Route() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobList, setJobList] = useState<Job[]>([]);

  useEffect(() => {
    loader().then((data) => {
      setJobList(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-semibold">List of Jobs</h1>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
        { isLoading
          ? Array.from({ length: 3 }).map((_, index) => <JobCardSkeleton key={index} />)
          : jobList.map((job, index) => <JobCard key={index} job={job} />
        )}
      </div>
    </>
  );
}

export {
  meta,
  loader
}