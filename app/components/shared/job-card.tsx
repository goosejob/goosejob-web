import { MapPin, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import type { Job } from "@/modules/job/data";

export function JobCard({ job }: { job: Job }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {job.jobTitle} ({job.jobLevel})
        </CardTitle>
        <CardDescription className="flex flex-wrap gap">
          <div className="flex items-center gap">
            <MapPin className="h-4" />
            {job.jobLocation}
          </div>
          <div className="flex items-center gap">
            <Wallet className="h-4" />
            {job.salaryCurrency}
            {job.salaryMin}-{job.salaryMax}/{job.salaryPeriod}
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
        <p className="line-clamp-2">{job.description}</p>
      </CardContent>
      <CardFooter>
        <Button>See More</Button>
      </CardFooter>
    </Card>
  );
}
