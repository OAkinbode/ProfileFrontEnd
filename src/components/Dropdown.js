import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Leftpane from "./Leftpane";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const clickAction = function () {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-16 relative flex flex-col items-left rounded-lg">
      <div className="px-4 py-4">
        {" "}
        {props.isMobile && (
          <GiHamburgerMenu size={30} color="white" onClick={clickAction} />
        )}
      </div>
      <div className="w-48 ">
        {isOpen && (
          <div className="bg-gray-100 absolute z-10 top-full h-auto">
            <Leftpane />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
