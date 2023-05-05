import { Link } from "react-router-dom";
import * as React from "react";
import Navbar from "../components/Navbar";
import RightPane from "./RightPane";
import Project1 from "./Project1";

function Projects() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <RightPane />
        <Project1 />
      </div>
    </div>
  );
}

export default Projects;
