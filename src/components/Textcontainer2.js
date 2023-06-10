import React from "react";

function Skillslist(props) {
  return (
    <div className="px-6 py-6 w-1/2">
      <div className="w-full h-1/2 bg-gray-100 shadow-xl h-60 px-4">
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
      </div>
    </div>
  );
}

export default Skillslist;
