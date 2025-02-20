import type { Route } from "./+types/home";
import Welcome from "../components/welcome/welcome"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zero2React" },
    { name: "description", content: "Investments Platform" },
  ];
}

const Home : React.FC = () => {
  return <Welcome />;
}

export default Home;