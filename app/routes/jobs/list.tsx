import type { Route } from "./+types/list";
import { Debug } from "@/components/ui/debug";
import { db } from "@/db";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "List of Jobs - Goosejob" },
    {
      name: "description",
      content: "List of all posted jobs, available and more.",
    },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const jobs = await db.query.jobsTable.findMany({
    columns: {
      id: true,
      title: true,
      description: true,
    },
    with: {
      user: true,
    },
  });

  return {
    jobs,
    message: context.VALUE_FROM_VERCEL,
  };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>List of Jobs</h1>
      <Debug>{loaderData}</Debug>
    </>
  );
}
