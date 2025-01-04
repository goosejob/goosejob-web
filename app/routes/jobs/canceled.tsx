import type { Route } from "./+types/canceled";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Canceled Jobs - Goosejob" },
    { name: "description", content: "Canceled jobs." },
  ];
}

export default function Route() {
  return (
    <>
      <h1>Canceled Jobs</h1>
    </>
  );
}
