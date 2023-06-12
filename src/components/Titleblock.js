import React from "react";

function Titleblock(props) {
  return (
    <div>
      <div className="w-full bg-teal-500">
        <p className="font-sans text-gray-900 text-4xl whitespace-normal text-left px-4 py-4">
          {props.title}
        </p>
      </div>
    </div>
  );
}

export default Titleblock;
