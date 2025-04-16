import { Outlet } from "react-router";

export default function Route() {
  return (
    <main className="p-4 sm:p-8 space-y-4 sm:space-y-8">
      <Outlet />
    </main>
  );
}
