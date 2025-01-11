import { createRequestHandler } from "react-router";

declare global {
  interface CloudflareEnvironment {
    DATABASE_URL: string;
  }
}

declare module "react-router" {
  export interface AppLoadContext {
    VALUE_FROM_SERVER: string;
    DATABASE_URL: string;
  }
}

const requestHandler = createRequestHandler(
  // @ts-expect-error - virtual module provided by React Router at build time
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  fetch(request, env) {
    // TODO: How to load env into this?????

    return requestHandler(request, {
      VALUE_FROM_SERVER: "Value from server",
      DATABASE_URL: String(env.DATABASE_URL),
    });
  },
} satisfies ExportedHandler<CloudflareEnvironment>;
