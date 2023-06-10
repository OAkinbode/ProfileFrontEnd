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
    <div className=" flex flex-col h-screen">
      <div className="bg-gray-50 shadow-md">
        <div className="py-12">
          <p className="font-sans text-red-600 text-4xl whitespace-normal text-center px-4">
            <Link to="/Projects">Sola Akinbode</Link>
          </p>
          <p className="text-center px-4">Full Stack Developer</p>
        </div>
      </div>

      <div className="flex-grow py-4">
        <div className="flex py-4 hover:bg-amber-50">
          <div className="px-4">
            <FaHome size={30} color="amber" />
          </div>
          <Link to="/" className="px-12">
            Home
          </Link>
        </div>
        <div className="flex py-4 hover:bg-red-50">
          <div className="px-4">
            <FaProjectDiagram size={30} color="brown" />
          </div>
          <Link to="/Projects" className="px-12">
            Projects
          </Link>
        </div>
        <div className="flex py-4 hover:bg-purple-50">
          <div className="px-4">
            <FaScrewdriver size={30} color="purple" />
          </div>
          <Link to="/Skills" className="px-12">
            Skills
          </Link>
        </div>
        <div className="flex py-4 hover:bg-orange-50">
          <div className="px-4">
            <FaSchool size={30} color="orange" />
          </div>
          <Link to="/Education" className="px-12">
            Education
          </Link>
        </div>
        <div className="flex py-4 hover:bg-gray-50">
          <div className="px-4">
            <FaTable size={30} color="gray" />
          </div>
          <Link to="/Resume" className="px-12">
            Resume
          </Link>
        </div>
        <div className="flex py-4 hover:bg-blue-50">
          <div className="px-4">
            <FaPhone size={30} color="blue" />
          </div>
          <Link to="/Contact" className="px-12">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Leftpane;
