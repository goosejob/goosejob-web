import { Link, Outlet } from "react-router";

const navItems = [
  { to: "/", text: "Home" },
  { to: "/jobs", text: "Jobs" },
];

const year = new Date().getFullYear();

export default function MainLayoutRoute() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <ul>
          {navItems.map((navItem, index) => (
            <li key={index}>
              <Link to={navItem.to}>{navItem.text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-[1]">
        <Outlet />
      </main>

      <footer>
        <p>© {year} Goosejob</p>
      </footer>
    </div>
  );
}
