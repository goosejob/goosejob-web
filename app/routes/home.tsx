import type { Route } from "./+types/home";
import { Welcome } from "../components/shared/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Goosejob" },
    { name: "description", content: "Good jobs and career search" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  console.log("VALUE_FROM_SERVER", context.VALUE_FROM_SERVER);

  return { message: context.VALUE_FROM_SERVER };
}

export default function HomeRoute({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
