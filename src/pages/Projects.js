import React from "react";
import { Link } from "react-router-dom";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer";
import TicTacToe from "../assets/Tictactoe.jpeg";
import Jokes from "../assets/Jokes.jpeg";
import Ticket from "../assets/Ticket.webp";
import backgroundimage from "../assets/checkerboard-cross.webp";

function Projects() {
  return (
    <div className="flex">
      <Leftpane />
      <div className="flex-grow bg-gray-50">
        <Titleblock title="Projects" />
        <div
          className="flex flex-wrap item-center justify-center"
          style={{ background: `url(${backgroundimage})` }}
        >
          <Link to="/TicTacToe">
            <div className="px-4">
              <Textcontainer
                title="Tic-Tac-Toe"
                body="This game is built in SpringBoot/Java and in React.js. Click to play against the computer!"
                image={TicTacToe}
              />
            </div>
          </Link>
          <Link to="/GrabAJoke">
            <div className="px-4 ">
              <Textcontainer
                title="Grab a Joke"
                body="This app is built in Node.js/MongoDB and in React.js. Click to go grab-a-joke!"
                image={Jokes}
              />
            </div>
          </Link>
          {/* <Link to="/">
            <div className="px-4">
              <Textcontainer
                title="Security"
                body="This work was done as part of an internship with Enverus. I used Angular and Spring Boot"
                image={Security}
              />
            </div>
          </Link> */}
          <a
            href="https://github.com/OAkinbode/ticket-reservation-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-4">
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
