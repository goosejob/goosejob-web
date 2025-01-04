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
    route("jobs/saved", "routes/jobs/saved.tsx"),
    route("jobs/applied", "routes/jobs/applied.tsx"),
    route("jobs/progress", "routes/jobs/progress.tsx"),
    route("jobs/canceled", "routes/jobs/canceled.tsx"),
  ]),
] satisfies RouteConfig;
