import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Goosejob" },
    { name: "description", content: "Good jobs and career search" },
  ];
}

export default function Route() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
      <div className="aspect-video rounded-xl bg-muted" />
      <div className="aspect-video rounded-xl bg-muted" />
      <div className="aspect-video rounded-xl bg-muted" />
      <div className="aspect-video rounded-xl bg-muted" />
    </div>
  );
}
