import type { Route } from "./+types/progress";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "In Progress Jobs - Goosejob" },
    { name: "description", content: "In Progress jobs." },
  ];
}

export default function Route() {
  return (
    <>
      <h1>In Progress Jobs</h1>
    </>
  );
}
