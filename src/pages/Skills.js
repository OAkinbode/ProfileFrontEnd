import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer2";
import backgroundimage from "../assets/checkerboard-cross.webp";
import Navbar from "../components/Navbar";
import MobileView from "../components/MobileView";
import { useSelector } from "react-redux";
import Picscontainer from "../components/Picscontainer";

function Skills() {
  const isMobileRedux = useSelector((state) => state.isMobile);

  return (
    <div className="flex w-screen">
      {!isMobileRedux && <Leftpane />}
      <div className="w-screen bg-gray-50">
        <Navbar isMobile={isMobileRedux}></Navbar>
        <Titleblock title="Skills" />
        <MobileView />
        <div
          className={`${isMobileRedux ? "h-auto" : "h-screen"}`}
          style={{ background: `url(${backgroundimage})` }}
        >
          <div
            className={`flex flex-wrap item-center justify-center h-auto
            }`}
          >
            <Textcontainer
              title="Front End Development"
              body="I build front-end applications using Next.js, React, Angular, Redux and TailwindCSS. I have applied this skills to an enterprise e-commerce application in my role as a software developer. I also teach these skills at the Southern Alberta Institute of Technology (SAIT) as a software development instructor."
            />
            <Textcontainer
              title="Mobile Development"
              body="My mobile work for android and ios is done primarily in React-Native. I have performed development and extensive integrations of mobile applications with their web equivalents in the areas of data, authentication and authorization, and UI/UX."
            />
            <Textcontainer
              title="Back End Development and AI model Integrations"
              body="I have extensive experience working with Node based server frameworks such as Express.js and Next.js server. I have also developed APIs using Python based frameworks such as FastAPI. My python development involves implementing integrations with Huggingface.io AI models, OpenAI/LLM GPT models, vector and traditional databases."
            />
            <Textcontainer
              title="Cloud Development and Devops"
              body="I have developed and supported applications with a wide variety of deployment strategies including docker container deployments, serverless through AWS lambdas, EKS and specialized services such as Vercel and Heroku. I have worked with many cloud based PAAS and IAAS for authentication and data storage such as Auth0, Firebase, MongoDB, SuperBase(postgresql ORM)."
            />
            <Picscontainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
