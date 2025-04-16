import { MapPin, Wallet, Building2 } from "lucide-react";

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
import { convertToCurrency } from "@/lib/currency";
import { ButtonLink } from "@/components/ui/button-link";
import { joinStringsFallback } from "@/lib/string";
import type { JobWithRelations } from "@/modules/job/type";

export function JobCard({ job }: { job: JobWithRelations }) {
  const salaryMin = convertToCurrency(job.salaryMin?.d);
  const salaryMax = convertToCurrency(job.salaryMax?.d);
  const salaryPeriod = job.salaryPeriod ?? "year";

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span>{job.title}</span>
          {job.level && <span> ({job.level})</span>}
        </CardTitle>

        <CardDescription className="space-y-2">
          <div className="flex items-center gap-1">
            <Building2 className="size-4" />
            <span>{job.organization.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="size-4" />
            <span> {job.location ?? "Unknown"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Wallet className="size-4" />
            <span>{job.salaryCurrency}</span>
            <span>
              {job.salaryMin && `${salaryMin}-${salaryMax}/${salaryPeriod}`}
              {!job.salaryMin && "Salary undisclosed"}
            </span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 md:h-12">
          <div>
            <p className="text-xs">Job Types</p>
            <p className="font-medium">{joinStringsFallback(job.types)}</p>
          </div>
          <Separator className="hidden md:block" orientation="vertical" />
          <div>
            <p className="text-xs">Workplace Types</p>
            <p className="font-medium">
              {joinStringsFallback(job.workplaceTypes)}
            </p>
          </div>
        </div>
        <p className="line-clamp-2 text-sm">{job.description}</p>
      </CardContent>

      <CardFooter>
        <ButtonLink to={`/jobs/${job.slug}`}>See Details</ButtonLink>
        <Button variant="secondary">Quick Apply</Button>
      </CardFooter>
    </Card>
  );
}
