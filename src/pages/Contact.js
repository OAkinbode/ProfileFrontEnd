import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";

import backgroundimage from "../assets/checkerboard-cross.webp";

function Contact() {
  return (
    <div className="flex w-screen">
      <Leftpane />
      <div className="w-screen bg-gray-50">
        <Titleblock title="Contact" />
        <div
          className="flex px-4 h-screen"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="px-6 py-6 w-1/2">
            <div className="w-full h-1/2 bg-gray-100 shadow-xl h-60 px-4">
              <div className="border-b-2 border-gray-400">
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
                <div>
                  <p className="font-sans text-1xl whitespace-normal text-left px-4 py-2">
                    LinkedIn: https://www.linkedin.com/in/olusolaakinbode/
                  </p>
                </div>
                <div>
                  <p className="font-sans text-1xl whitespace-normal text-left px-4 py-2">
                    Github: https://github.com/OAkinbode
                  </p>
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
