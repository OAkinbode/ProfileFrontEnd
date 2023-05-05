import React, { useState } from "react";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";
import profileimage from "../assets/profileimage.jpeg";
import { Link } from "react-router-dom";

export default function RightPane() {
  const [clickedHome, setClickedHome] = useState(false);
  const [clickedProjects, setClickedProjects] = useState(false);
  const [clickedContact, setClickedContact] = useState(false);
  const [showList, setShowList] = useState(false);

  function handleClickHome() {
    setClickedHome(true);
  }

  function handleClickProjects() {
    setClickedProjects(true);
  }

  function handleClickContact() {
    setClickedContact(true);
  }

  function handleClick() {
    if (showList === false) setShowList(true);
    else if (showList === true) setShowList(false);
  }

  return (
    <div
      style={{
        backgroundColor: "#B5E0B2",
        maxWidth: 300,
        minWidth: 200,
        paddingTop: 20,
      }}
    >
      <Container>
        <ol style={{ listStyle: "none" }}>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              onClick={handleClickHome}
              style={{
                color: clickedHome ? "blue" : "inherit",
                fontSize: "1.1rem",
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              <Link to="/">Home</Link>
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{
                color: clickedProjects ? "blue" : "inherit",
                fontSize: "1.1rem",
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              <Link onClick={handleClick}>Projects</Link>
              {showList && (
                <ul>
                  <li>
                    <Link to="/TicTacToe">Tic-Tac-Toe</Link>
                  </li>
                  <li>
                    <Link to="/GrabAJoke">Grab-a-Joke</Link>
                  </li>
                </ul>
              )}
              {/* <Link to="/projects"> My Projects </Link> */}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              onClick={handleClickProjects}
              style={{
                color: clickedProjects ? "blue" : "inherit",
                fontSize: "1.1rem",
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              <Link to="/MyResume">View my Resume</Link>
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              onClick={handleClickContact}
              style={{
                color: clickedContact ? "blue" : "inherit",
                fontSize: "1.1rem",
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              <Link to="/contactus"> Contact Me </Link>
            </Typography>
          </li>
        </ol>
      </Container>
    </div>
  );
}
