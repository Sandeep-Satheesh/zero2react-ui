import Welcome from "../views/welcome/welcome"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MetaArgs } from 'react-router-dom';

export function meta({}: MetaArgs) {
  return [
    { title: "Zero2React" },
    { name: "description", content: "Investments Platform" },
  ];
}

const Home : React.FC = () => {
  return <Welcome />;
}

export default Home;