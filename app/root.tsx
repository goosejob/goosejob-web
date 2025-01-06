import {
  data,
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "@/tailwind.css?url";
import { sidebarState, getSidebarCookie } from "@/cookies.server";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "shortcut icon",
    href: "/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicons/favicon-96x96.png",
    sizes: "96x96",
  },
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicons/favicon.svg",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicons/apple-touch-icon.png",
  },
  {
    rel: "manifest",
    href: "/favicons/site.webmanifest",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicons/favicon-96x96.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicons/apple-touch-icon.png",
  },
  {
    rel: "mask-icon",
    href: "/favicons/safari-pinned-tab.svg",
    color: "#60a5fa",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export function meta() {
  return [
    { title: "Goosejob" },
    { name: "description", content: "Good job and career search." },
    { property: "og:title", content: "Goosejob" },
    { name: "apple-mobile-web-app-title", content: "Goosejob" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export async function loader({ request }: Route.LoaderArgs) {
  const sidebarCookie = await getSidebarCookie(request);

  if (sidebarCookie.sidebarState === undefined) {
    sidebarCookie.sidebarState = true;
  }

  return data(
    { sidebarState: sidebarCookie.sidebarState },
    { headers: { "Set-Cookie": await sidebarState.serialize(sidebarCookie) } }
  );
}

export async function action({ request }: Route.ActionArgs) {
  const sidebarCookie = await getSidebarCookie(request);
  const formData = await request.formData();

  const changeSidebarState = formData.get("changeSidebarState");

  if (changeSidebarState === "toggle") {
    sidebarCookie.sidebarState = !sidebarCookie.sidebarState;
  }

  return data(null, {
    headers: { "Set-Cookie": await sidebarState.serialize(sidebarCookie) },
  });
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
