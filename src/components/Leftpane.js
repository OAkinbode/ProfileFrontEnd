import React from "react";
import { Link } from "react-router-dom";
import {
  FaProjectDiagram,
  FaScrewdriver,
  FaSchool,
  FaTable,
  FaPhone,
  FaHome,
} from "react-icons/fa";

function Leftpane() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-50 shadow-md py-4">
        <p className="font-sans text-red-600 text-4xl whitespace-normal text-center px-4">
          <Link to="/Projects">Sola Akinbode</Link>
        </p>
        <p className="text-center px-4">Full Stack Developer</p>
      </div>

      <div className="flex-grow py-4">
        <Link to="/" className="flex py-4 hover:bg-amber-50 items-center">
          <div className="px-4">
            <FaHome size={30} color="amber" />
          </div>
          <span>Home</span>
        </Link>
        <Link to="/Projects" className="flex py-4 hover:bg-red-50 items-center">
          <div className="px-4">
            <FaProjectDiagram size={30} color="brown" />
          </div>
          <span>Projects</span>
        </Link>
        <Link
          to="/Skills"
          className="flex py-4 hover:bg-purple-50 items-center"
        >
          <div className="px-4">
            <FaScrewdriver size={30} color="purple" />
          </div>
          <span>Skills</span>
        </Link>
        <Link
          to="/Education"
          className="flex py-4 hover:bg-orange-50 items-center"
        >
          <div className="px-4">
            <FaSchool size={30} color="orange" />
          </div>
          <span>Education</span>
        </Link>
        <Link to="/Resume" className="flex py-4 hover:bg-gray-50 items-center">
          <div className="px-4">
            <FaTable size={30} color="gray" />
          </div>
          <span>Resume</span>
        </Link>
        <Link to="/Contact" className="flex py-4 hover:bg-blue-50 items-center">
          <div className="px-4">
            <FaPhone size={30} color="blue" />
          </div>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default Leftpane;
