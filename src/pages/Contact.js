import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import { Link } from "react-router-dom";
import backgroundimage from "../assets/checkerboard-cross.webp";
import Navbar from "../components/Navbar";
import MobileView from "../components/MobileView";
import { useSelector } from "react-redux";

function Contact() {
  const isMobileRedux = useSelector((state) => state.isMobile);
  return (
    <div className="flex w-screen">
      {!isMobileRedux && <Leftpane />}
      <div className="w-screen bg-gray-50">
        <Navbar isMobile={isMobileRedux}></Navbar>
        <Titleblock title="Contact" />
        <div
          className="flex flex-wrap item-center justify-center h-screen"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="px-6 py-6 h-auto w-auto">
            <div className="w-full bg-gray-100 shadow-xl h-auto px-4">
              <div className="border-b-2 border-gray-400 w-auto">
                <p className="font-sans text-2xl whitespace-normal text-left px-4 py-4 italic">
                  I can be reached on:
                </p>
              </div>
              <div className="">
                <div>
                  <p className="font-sans text-1xl whitespace-normal text-left px-4 py-2">
                    Phone: +14034669066
                  </p>
                </div>
                <div>
                  <p className="font-sans text-1xl whitespace-normal text-left px-4 py-2">
                    Email: akinbodesola@gmail.com
                  </p>
                </div>
                <div className="">
                  <Link to="https://www.linkedin.com/in/olusolaakinbode/">
                    <p className="font-sans text-1xl whitespace-normal hover:text-blue-500 text-left px-4 py-2">
                      LinkedIn
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="https://github.com/OAkinbode">
                    <p className="font-sans text-1xl whitespace-normal hover:text-blue-500 text-left px-4 py-2">
                      Github
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
