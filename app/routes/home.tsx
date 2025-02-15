import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zero2React" },
    { name: "description", content: "Investments Platform" },
  ];
}

export default function Home() {
  return <Welcome />;
}
