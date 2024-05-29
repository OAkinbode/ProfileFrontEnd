import React from "react";
import MobileView from "./MobileView";
import { useSelector } from "react-redux";

function Textcontainer(props) {
  const isMobileRedux = useSelector((state) => state.isMobile);

  return (
    <div className="px-4 py-4 md:w-80 md:h-72">
      <div className="w-full bg-gray-50 shadow-xl px-4 h-full">
        <div className="border-b-2 border-gray-400">
          <p className="font-sans text-2xl whitespace-normal text-left px-4 py-4 italic text-teal-900">
            {props.title}
            <MobileView />
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-sans text-1xl whitespace-normal text-left px-4 py-2 text-gray-700">
            {props.body}
          </p>
        </div>
        <div className="flex justify-center items-center px-2 py-2">
          <img
            src={props.image}
            alt="Profile"
            className="w-1/4 h-auto rounded-full shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Textcontainer;
