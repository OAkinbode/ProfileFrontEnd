import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer2";
import backgroundimage from "../assets/checkerboard-cross.webp";

function Skills() {
  return (
    <div className="flex w-screen">
      <Leftpane />
      <div className="w-screen bg-gray-50">
        <Titleblock title="Skills" />
        <div
          className="flex flex-wrap item-center justify-center h-screen"
          style={{ background: `url(${backgroundimage})` }}
        >
          <Textcontainer
            title="Front End Development"
            body="I have experience using React.js, Angular, Redux and TailwindCSS. I am currently learning native android and IOS development."
          />
          <Textcontainer
            title="Back End Development"
            body="I use SpringBoot, Java, Node.js, MongoDB and MySQL to develop clean code on the backend. I am know Python and C++ for other use cases."
          />
          <Textcontainer
            title="Machine Learning"
            body="I am competent in Scikitlearn, Pytorch, Pandas, Numpy, PySpark and most machine learning models used for supervised and unsupervised learning."
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
