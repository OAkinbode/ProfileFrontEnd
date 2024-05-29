import React from "react";
// import resume from "../assets/Resume_Olusola_Akinbode_June_DVP01.pdf";
import resume from "../assets/Resume_Olusola_Akinbode_May_D1.pdf";

import Navbar from "../components/Navbar";

function Resume() {
  return (
    <div>
      <Navbar />
      <embed src={resume} type="application/pdf" width="100%" height="850px" />
    </div>
  );
}

export default Resume;
