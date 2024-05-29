import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Leftpane from "../components/Leftpane";
import profileimage from "../assets/ProfilePicture6.jpeg";
// import profileimage from "../assets/profile.jpeg";
import backgroundimage from "../assets/checkerboard-cross.webp";
import Textcontainer2 from "../components/Textcontainer2";
import Navbar from "../components/Navbar";
import Picscontainer from "../components/Picscontainer";

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

      <div className="flex w-full">
        {!isMobile && <Leftpane />}
        <div
          className="flex w-full"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="w-full flex flex-col">
            <div className="flex flex-wrap">
              <div className="py-6 px-6 flex w-full">
                <div className="bg-teal-900 flex items-center justify-center w-full">
                  <div className="px-4 py-4 w-1/4 h-1/4 flex items-center justify-center">
                    <img
                      src={profileimage}
                      alt="Profile"
                      className="rounded-full shadow-xl"
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
            <div className="flex flex-col w-full">
              <Textcontainer2
                title="Welcome"
                body="Hi, My name is Sola. I build web applications that pop! I have a passion for quality and would love to work with you!"
              />

              <Textcontainer2
                title="A little about me"
                body="I am a fullstack software developer and a web development instructor with experience building e-commerce applications. I work with popular frontend frameworks and languages such as React, Next.js, Angular, JavaScript and Typescript. I also work with many popular server, database and cloud-based technologies such as AWS, Spring Boot, Node.js, MongoDB, Firebase, Postgresql,
            and MySQL to build one-of-a-kind applications. This web application showcases some of my skills and projects. So lets jump right in. Click on 'beautiful' above to see some of my projects."
              />
            </div>
            <div className="w-full ">
              <Link to="/Skills">
                <Picscontainer />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
