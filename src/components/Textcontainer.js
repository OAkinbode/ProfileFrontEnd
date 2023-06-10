import React from "react";

function Textcontainer(props) {
  return (
    <div className="px-6 py-6 w-full md:w-96">
      <div className="w-full bg-gray-50 shadow-xl px-4">
        <div className="border-b-2 border-gray-400">
          <p className="font-sans text-2xl whitespace-normal text-left px-4 py-4 italic">
            {props.title}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-sans text-1xl whitespace-normal text-left px-4 py-2">
            {props.body}
          </p>
        </div>
        <div className="flex justify-center items-center">
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
