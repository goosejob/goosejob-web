import type { Route } from "./+types/result";

import { loadSearchParams } from "@/modules/search/nuqs";

export function loader({ request }: Route.LoaderArgs) {
  const { q } = loadSearchParams(request);

  console.info({ q });

  return { q };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1 className="text-2xl">Search Results</h1>
      <p>Query: {loaderData.q}</p>
    </div>
  );
}
