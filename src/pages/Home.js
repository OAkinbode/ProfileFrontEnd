import React from "react";
import { Link } from "react-router-dom";
import Leftpane from "../components/Leftpane";
import profileimage from "../assets/ProfilePicture6.jpeg";
import backgroundimage from "../assets/checkerboard-cross.webp";
import Textcontainer2 from "../components/Textcontainer2";

function Home() {
  return (
    <div className="flex ">
      <Leftpane />
      <div
        className="flex w-full"
        style={{ background: `url(${backgroundimage})` }}
      >
        <div className="">
          <div className="flex">
            <div className="w-1/4 px-6 py-6">
              <img
                src={profileimage}
                alt="Profile"
                className="h-auto rounded-full shadow-xl "
              />
            </div>
            <div className="w-3/4 py-20 px-6">
              <div className="w-full h-1/2 bg-teal-900 h-40 flex items-center justify-center">
                <p className="font-sans text-gray-50 text-5xl whitespace-normal text-left px-4 py-4 ">
                  I build{" "}
                  <span className="text-black italic hover:text-slate-300 ">
                    <Link to="/Projects">beautiful</Link>
                  </span>{" "}
                  things
                </p>
              </div>
            </div>
          </div>
          <div className="flex ">
            <Textcontainer2
              title="Welcome"
              body="Hi, My name is Sola. I build websites and applications that pop! I have a passion for quality and would love to work with you."
            />

            <Textcontainer2
              title="A little about me"
              body="I work in React, Angular, Spring Boot, Node.js, MongoDB
            and MySQL to build one-of-a-kind applications. This website showcases some of my skills and projects. So lets jump right in. Click on 'beautiful' above to see some of my projects."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
