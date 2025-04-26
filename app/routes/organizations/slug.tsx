import type { Route } from "./+types/slug";
import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { href, redirect } from "react-router";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `${data.organization.name} - Goosejob` },
    {
      name: "description",
      content: data.organization.description,
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const organization = await prisma.organization.findUnique({
    where: { slug: params.slug },
    include: {
      jobs: {
        where: { status: { slug: "published" } },
        include: { status: true },
      },
    },
  });

  if (!organization) {
    return redirect(href("/organizations"));
  }

  return { organization };
}

export default function OrganizationSlugRoute({
  loaderData,
}: Route.ComponentProps) {
  const { organization } = loaderData;
  const hasJobs = organization.jobs.length > 0;

  return (
    <div className="container max-w-4xl">
      <Card className="border-none p-0 shadow-none">
        <CardHeader className="space-y-4">
          <div className="flex items-start gap-4">
            {organization.logoUrl && (
              <img
                src={organization.logoUrl}
                alt={organization.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
            )}
            <div className="flex-1 space-y-1">
              <CardTitle className="text-2xl">{organization.name}</CardTitle>
              <CardDescription>{organization.tagline}</CardDescription>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs">Workplace Types</p>
            <div className="flex flex-wrap gap-2">
              {organization.workplaceTypes.map((type) => (
                <Badge key={type} variant="secondary">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">About</h3>
            <p className="text-muted-foreground">{organization.description}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Location</h3>
            <p className="text-muted-foreground">{organization.location}</p>
          </div>

          {organization.websiteUrl && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Website</h3>
              <a
                href={organization.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                {organization.websiteUrl}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}

          {!hasJobs && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">No Open Positions</h3>
              <Card className="text-muted-foreground p-3 text-xs">
                This organization currently has no open positions.
              </Card>
            </div>
          )}

          {hasJobs && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Open Positions</h3>
              <div className="grid gap-4">
                {organization.jobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="text-lg font-medium">{job.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{job.level}</Badge>
                          <Badge variant="outline">{job.location}</Badge>
                          {job.types.map((type) => (
                            <Badge key={type} variant="outline">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
