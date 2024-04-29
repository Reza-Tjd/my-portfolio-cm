import React from "react";

import "./App.css";

import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./Components/navbar/Navbar";

export default function App() {
  let router = useRoutes(routes);
  return (
    <div>
      {/* <Header/> */}
      {/* <Body/> */}
      <Navbar />
      {router}
    </div>
  );
}
