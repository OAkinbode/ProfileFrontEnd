import React from "react";
import MobileView from "./MobileView";
import Reactimg from "../assets/stack/React.png";
import Angular from "../assets/stack/Angular.png";
import Java from "../assets/stack/Java.png";
import SpringBoot from "../assets/stack/SpringBoot.png";
import Node from "../assets/stack/node.png";
import MongoDB from "../assets/stack/mongodb2.png";
import CPP from "../assets/stack/C++.png";

import { useSelector } from "react-redux";

function Textcontainer() {
  const isMobileRedux = useSelector((state) => state.isMobile);

  return (
    <div className="px-6 py-6 h-auto bg-gray-50">
      <div className="flex w-full bg-gray-50 shadow-xl px-4 h-full hover:bg-gray-100">
        <div className="flex flex-wrap justify-center items-center px-1 py-1">
          <img
            src={Reactimg}
            alt="Profile"
            className={`${
              isMobileRedux ? "w-3/4" : "w-1/2"
            } h-auto rounded-xl shadow-xl`}
          />
        </div>
        <div className="flex justify-center items-center px-1 py-1">
          <img
            src={Angular}
            alt="Profile"
            className={`${
              isMobileRedux ? "w-3/4" : "w-1/2"
            } h-auto rounded-xl shadow-xl`}
          />
        </div>
        <div className="flex justify-center items-center px-1 py-1">
          <img
            src={Java}
            alt="Profile"
            className={`${
              isMobileRedux ? "w-3/4" : "w-1/2"
            } h-auto rounded-xl shadow-xl`}
          />
        </div>
        <div className="flex justify-center items-center px-1 py-1">
          <img
            src={SpringBoot}
            alt="Profile"
            className={`${
              isMobileRedux ? "w-3/4" : "w-1/2"
            } h-auto rounded-xl shadow-xl`}
          />
        </div>
        <div className="flex justify-center items-center px-1 py-1">
          <img
            src={Node}
            alt="Profile"
            className={`${
              isMobileRedux ? "w-3/4" : "w-1/4"
            } h-auto rounded-xl shadow-xl`}
          />
        </div>
        <div className="flex justify-center items-center px-1 py-1">
          <img
            src={MongoDB}
            alt="Profile"
            className={`${
              isMobileRedux ? "w-3/4" : "w-1/4"
            } h-auto rounded-xl shadow-xl`}
          />
        </div>

        <div className="flex justify-center items-center px-1 py-1">
          <img
            src={CPP}
            alt="Profile"
            className={`${
              isMobileRedux ? "w-3/4" : "w-1/2"
            } h-auto rounded-xl shadow-xl`}
          />
        </div>
      </div>
    </div>
  );
}

export default Textcontainer;
