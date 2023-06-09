import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer2";
import backgroundimage from "../assets/checkerboard-cross.webp";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Education() {
  const isMobileRedux = useSelector((state) => state.isMobile);
  return (
    <div className="flex w-screen">
      {!isMobileRedux && <Leftpane />}
      <div className="w-screen bg-gray-50">
        <Navbar isMobile={isMobileRedux}></Navbar>
        <Titleblock title="Education" />
        <div
          className="h-screen"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="flex flex-wrap item-center justify-center h-auto">
            <Textcontainer
              title="Bachelor's Degree (2010)"
              body="Mechanical Engineering from the Federal University of Agriculture Abeokuta, Ogun state, Nigeria."
            />
            <Textcontainer
              title="Master's Degree (2023)"
              body="Software Engineering from the University of Calgary, Alberta, Canada."
            />
            <Textcontainer
              title="PMP Certification (2020)"
              body="Project management professional certification attesting to experience and knowledge in the field."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
