import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layouts/main.tsx", [
    index("routes/dashboard.tsx"),
    route("jobs", "routes/jobs.tsx"),
  ]),
] satisfies RouteConfig;
