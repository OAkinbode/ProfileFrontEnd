import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Leftpane from "../components/Leftpane";
import profileimage from "../assets/ProfilePicture6.jpeg";
import backgroundimage from "../assets/checkerboard-cross.webp";
import Textcontainer2 from "../components/Textcontainer2";
import Navbar from "../components/Navbar";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the width threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial value based on the window width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar isMobile={isMobile}></Navbar>

      <div className="flex">
        {!isMobile && <Leftpane />}
        <div className="flex" style={{ background: `url(${backgroundimage})` }}>
          <div className="">
            <div className="flex flex-wrap">
              <div className="py-6 px-6 flex w-full">
                <div className="bg-teal-900 flex items-center justify-center w-full">
                  <div className="px-4 py-4 w-1/4">
                    <img
                      src={profileimage}
                      alt="Profile"
                      className="rounded-full shadow-xl max-h-96 min-h-min"
                    />
                  </div>
                  <div className="flex flex-wrap">
                    <p
                      className={`font-sans text-gray-50 text-left px-4 py-4 ${
                        isMobile ? "text-3xl" : "text-6xl"
                      }`}
                    >
                      I build{" "}
                      <span className="text-black italic hover:text-slate-300 ">
                        <Link to="/Projects">beautiful</Link>
                      </span>{" "}
                      things
                    </p>
                  </div>
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
    </div>
  );
}

export default Home;
