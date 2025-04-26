import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Organization } from "@prisma/client";
import { GlobeIcon, MapPinIcon } from "lucide-react";
import { href } from "react-router";

export function OrganizationCard({
  organization,
}: {
  organization: Organization;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {organization.logoUrl && (
            <img
              src={organization.logoUrl}
              alt={organization.name}
              className="size-8 rounded-lg"
            />
          )}
          <span>{organization.name}</span>
        </CardTitle>

        <CardDescription className="space-y-2">
          <div className="inline-flex gap-4">
            <div className="flex items-center gap-1">
              <MapPinIcon className="size-4" />
              <span>{organization.location ?? "Unknown"}</span>
            </div>
            {organization.websiteUrl && (
              <div className="flex items-center gap-1">
                <GlobeIcon className="size-4" />
                <a
                  href={organization.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Website
                </a>
              </div>
            )}
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 md:h-12">
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
        </div>
        <p className="line-clamp-2 text-sm">{organization.description}</p>
      </CardContent>

      <CardFooter>
        <ButtonLink
          to={href("/organizations/:slug", { slug: organization.slug })}
        >
          See Details
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
