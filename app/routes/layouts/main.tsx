import { Outlet } from "react-router";

export default function MainLayoutRoute() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-[1]">
        <Outlet />
      </main>
    </div>
  );
}
