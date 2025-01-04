import type { Route } from "./+types/applied";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Applied Jobs - Goosejob" },
    { name: "description", content: "Applied jobs." },
  ];
}

export default function Route() {
  return (
    <>
      <h1>Applied Jobs</h1>
    </>
  );
}
