import { createCookie } from "react-router";

export const sidebarState = createCookie("goosejob-sidebar-state");

export async function getSidebarCookie(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await sidebarState.parse(cookieHeader)) || {};
  return cookie;
}
