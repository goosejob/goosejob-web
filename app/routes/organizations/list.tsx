import type { Route } from "./+types/list";
import { prisma } from "@/lib/prisma";
import { OrganizationCard } from "@/components/shared/organization-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "List of Organizations - Goosejob" },
    {
      name: "description",
      content: "List of registered organizations, companies and such.",
    },
  ];
}

export async function loader() {
  const organizations = await prisma.organization.findMany({});

  return { organizations };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  const { organizations } = loaderData;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {organizations.map((organization, index) => (
          <OrganizationCard key={index} organization={organization} />
        ))}
      </div>
    </>
  );
}
