import type { Route } from "./+types/list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "List of Jobs - Goosejob" },
    {
      name: "description",
      content: "List of all posted jobs, available and more.",
    },
  ];
}

export default function Route() {
  return (
    <>
      <h1>List of Jobs</h1>
    </>
  );
}
