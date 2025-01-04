import type { Route } from "./+types/saved";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Saved Jobs - Goosejob" },
    { name: "description", content: "Saved jobs by you." },
  ];
}

export default function Route() {
  return (
    <>
      <h1>Saved Jobs</h1>
    </>
  );
}
