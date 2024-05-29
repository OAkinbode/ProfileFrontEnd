import React from "react";
import { Link } from "react-router-dom";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textandpicscontainer";
import TicTacToe from "../assets/Tictactoe.jpeg";
import Jokes from "../assets/Jokes.jpeg";
import Ticket from "../assets/Ticket.webp";
import backgroundimage from "../assets/checkerboard-cross.webp";
import MobileView from "../components/MobileView";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import votingImage from "../assets/votingImage.webp";
import resin8 from "../assets/resin8.jpg";

function Projects() {
  const isMobileRedux = useSelector((state) => state.isMobile);

  return (
    <div className="flex">
      {!isMobileRedux && <Leftpane />}
      <div className="flex-grow bg-gray-50">
        <Navbar isMobile={isMobileRedux}></Navbar>

        <Titleblock title="Projects" />
        <MobileView />
        <div
          className={`flex flex-wrap item-center justify-center ${
            isMobileRedux ? "h-auto" : "h-screen"
          }`}
          style={{ background: `url(${backgroundimage})` }}
        >
          <a
            href="https://app.resin8.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-4">
              <Textcontainer
                title="Resin8.ai"
                body="AI enabled ecommerce application for industrial and agricultural equipment."
                image={resin8}
              />
            </div>
          </a>
          <a
            href="https://agm-voting-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-4">
              <Textcontainer
                title="Be Counted"
                body="A voting application to help corporate bodies securely vote on motions during meetings such as AGMs"
                image={votingImage}
              />
            </div>
          </a>
          <Link to="/TicTacToe">
            <div className="px-2">
              <Textcontainer
                title="Game: Tic-Tac-Toe"
                body="This game is built in SpringBoot/Java and in React.js. Click to play against the computer!"
                image={TicTacToe}
              />
            </div>
          </Link>
          <Link to="/GrabAJoke">
            <div className="px-2 ">
              <Textcontainer
                title="Grab a Joke"
                body="This app is built in Node.js/MongoDB and in React.js. Click to go grab-a-joke!"
                image={Jokes}
              />
            </div>
          </Link>

          <a
            href="https://github.com/OAkinbode/ticket-reservation-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-2">
              <Textcontainer
                title="Ticketing System (Github)"
                body="An app that allows users to make reservations at cinemas. Written in React.js and Spring Boot."
                image={Ticket}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
