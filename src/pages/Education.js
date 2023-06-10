import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer2";
import backgroundimage from "../assets/checkerboard-cross.webp";

function Education() {
  return (
    <div className="flex w-screen">
      <Leftpane />
      <div className="w-screen bg-gray-50">
        <Titleblock title="Education" />
        <div
          className="flex flex-wrap item-center justify-center h-screen"
          style={{ background: `url(${backgroundimage})` }}
        >
          <Textcontainer
            title="Bachelor's Degree"
            body="Mechanical Engineering from the Federal University of Agriculture Abeokuta, Ogun state, Nigeria."
          />
          <Textcontainer
            title="Master's Degree"
            body="Software Engineering from the University of Calgary, Alberta, Canada."
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
