import React from "react";
import MobileView from "./MobileView";
import { useSelector } from "react-redux";

function Textcontainer2(props) {
  const isMobileRedux = useSelector((state) => state.isMobile);

  return (
    <div className="px-6 py-6 w-full">
      <div
        className={`w-full bg-gray-100 shadow-xl border ${
          isMobileRedux ? "h-auto" : "h-auto pb-2"
        }`}
      >
        <div className="border-b-2 border-gray-400 h-auto bg-teal-200">
          <p className="font-sans text-2xl whitespace-normal text-left px-4 py-4 italic h-auto text-teal-800">
            {props.title}
            <MobileView />
          </p>
        </div>
        <div className="flex items-center justify-center bg-gray-100">
          <p className="font-sans text-1xl whitespace-normal text-left px-4 py-2 text-teal-900">
            {props.body}
          </p>
        </div>
        <MobileView />
      </div>
    </div>
  );
}

export default Textcontainer2;
