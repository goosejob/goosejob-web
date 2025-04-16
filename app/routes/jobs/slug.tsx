import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { convertToCurrency } from "@/lib/currency";
import { formatDate, formatRelativeDateTime } from "@/lib/datetime";
import { prisma } from "@/lib/prisma";
import { refineJobs } from "@/modules/job/util";
import { Building2, Clock, Globe, MapPin, Wallet } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Route } from "./+types/slug";

export function meta() {
  return [
    { title: "Job Details - Goosejob" },
    {
      name: "description",
      content: "View detailed information about this job posting.",
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const job = await prisma.job.findFirst({
    where: { slug: params.slug },
    include: { status: true, organization: true },
  });

  if (!job) {
    throw new Response("Not Found", { status: 404 });
  }

  return { job: refineJobs([job])[0] };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  const { job } = loaderData;
  const salaryMin = convertToCurrency(job.salaryMin);
  const salaryMax = convertToCurrency(job.salaryMax);
  const salaryPeriod = job.salaryPeriod ?? "year";

  return (
    <div className="container mx-auto p-0 sm:p-4">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl font-bold">
                    {job.title}
                    {job.level && <span> ({job.level})</span>}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Building2 className="size-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Company</p>
                    <p className="font-medium">{job.organization.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{job.location ?? "Remote"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="size-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Salary</p>
                    <p className="font-medium">
                      {job.salaryCurrency} {salaryMin}-{salaryMax}/
                      {salaryPeriod}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Published</p>
                    <p className="font-medium">{formatDate(job.createdAt)}</p>
                    <p className="text-xs">
                      {formatRelativeDateTime(job.createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-xl font-semibold">Job Description</h3>
                <div className="prose max-w-none">
                  <p>{job.description}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium">Job Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.types.map((type) => (
                      <span
                        key={type}
                        className="rounded-full bg-secondary px-3 py-1 text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Workplace Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.workplaceTypes.map((type) => (
                      <span
                        key={type}
                        className="rounded-full bg-secondary px-3 py-1 text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <Card>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg">
                Quick Apply
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Save Job
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Avatar className="size-10">
                  {job.organization.logoUrl ? (
                    <AvatarImage
                      src={job.organization.logoUrl}
                      alt={job.organization.name}
                    />
                  ) : null}
                  <AvatarFallback>
                    {job.organization.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{job.organization.name}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {job.organization.tagline && (
                <p className="text-sm text-muted-foreground">
                  {job.organization.tagline}
                </p>
              )}

              {job.organization.websiteUrl && (
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="size-4" />
                  <a
                    href={job.organization.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {job.organization.websiteUrl}
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
