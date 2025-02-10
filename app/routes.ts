import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layouts/main.tsx", [
    index("routes/dashboard.tsx"),

    route("jobs", "routes/jobs/list.tsx"),
    // route("jobs/:slug", "routes/jobs/slug.tsx"),

    route("jobs/new", "routes/jobs/new.tsx"),
    route("jobs/saved", "routes/jobs/saved.tsx"),
    route("jobs/applied", "routes/jobs/applied.tsx"),
    route("jobs/progress", "routes/jobs/progress.tsx"),
    route("jobs/canceled", "routes/jobs/canceled.tsx"),

    route("organizations", "routes/organizations/list.tsx"),
    route("organizations/new", "routes/organizations/new.tsx"),

    route("search", "routes/search/result.tsx"),
  ]),

  route("editor", "routes/editor/demo.tsx"),
] satisfies RouteConfig;
