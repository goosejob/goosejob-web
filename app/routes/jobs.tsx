import type { Route } from "./+types/jobs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs List - Goosejob" },
    {
      name: "description",
      content: "List of all posted jobs, available and others",
    },
  ];
}

export default function JobsRoute() {
  return (
    <>
      <h1>Jobs List</h1>
    </>
  );
}
