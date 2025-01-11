// import { db } from "@/lib/db.server";
import type { Route } from "./+types/healthcheck";

export function loader({ context }: Route.LoaderArgs) {
  console.log({ context });

  // const count = db.job.count();

  // console.log({ count });

  return {
    ok: true,
    // count,
  };
}

export default function Route() {
  return (
    <div>
      <h1>Healthcheck</h1>
    </div>
  );
}
