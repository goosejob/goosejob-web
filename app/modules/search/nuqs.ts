import { createLoader, parseAsString } from "nuqs/server";

// Describe your search params, and reuse this in useQueryStates / createSerializer
// Examples: https://nuqs.47ng.com/docs/server-side
export const searchParams = {
  q: parseAsString.withDefault(""),
};

export const loadSearchParams = createLoader(searchParams);
