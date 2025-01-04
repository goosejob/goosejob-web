import type { Route } from "./+types/list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create New Organization - Goosejob" },
    {
      name: "description",
      content: "Setup a new organization before posting a job.",
    },
  ];
}

export default function Route() {
  return (
    <>
      <h1>Create New Organization</h1>
    </>
  );
}
