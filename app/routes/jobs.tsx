import type { Route } from "./+types/jobs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs - Goosejob" },
    { name: "description", content: "List of all jobs" },
  ];
}

export default function JobsRoute() {
  return (
    <div>
      <h1>Jobs List</h1>
    </div>
  );
}
