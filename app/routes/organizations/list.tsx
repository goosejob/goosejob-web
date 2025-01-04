import type { Route } from "./+types/list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "List of Organizations - Goosejob" },
    {
      name: "description",
      content: "List of registered organizations, companies and such.",
    },
  ];
}

export default function Route() {
  return (
    <>
      <h1>List of Organizations</h1>
    </>
  );
}
