import React from "react";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";
import profileimage from "../assets/profileimage.jpeg";
import aboutmeimage from "../assets/ProfileAvatar5.png";
import techstackimage from "../assets/TechStack3.png";
import projectsimage from "../assets/Projects2.webp";
import educationImage from "../assets/Education5.png";
import wallPaper from "../assets/WallPaper8.jpeg";

import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "2rem",
      }}
    >
      <Typography variant="h3" gutterBottom>
        {/* Sola Akinbode */}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Avatar
          src={profileimage}
          sx={{ width: 150, height: 150, marginRight: "1rem" }}
          alt="Picture"
        />
        <Typography variant="h4">Sola Akinbode</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Avatar
          src={aboutmeimage}
          sx={{ width: 80, height: 80, marginRight: "1rem" }}
          alt="Picture"
        />
        <Typography
          variant="body1"
          textAlign={"left"}
          gutterBottom
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          I am a full stack developer based in Calgary, Alberta. I have 1 year
          of experience building web applications using React, Angular and
          Spring boot. I love to code, play the bass guitar and connect with
          people.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Avatar
          src={techstackimage}
          sx={{ width: 80, height: 80, marginRight: "1rem" }}
          alt="Picture"
        />
        <ul>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <b>FrontEnd:</b> Angular, React, HTML, CSS, TypeScript,
              JavaScript, Selenium.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <b>Backend:</b> Java, Python, C++, MVC, Restful APIs, Linux, Data
              Structures and Algorithms, Spring/Spring Boot, Django, Git/Version
              Control, Docker, Databases/SQL, Testing/Junit, Postman, Maven,
              Gradle, AWS (in view).{" "}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <b>Machine Learning: </b>
              Machine Learning, Neural Networks, NLP, PySpark, TensorFlow,
              PyTorch, Pandas and NumPy.
            </Typography>
          </li>
        </ul>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "2rem",
        }}
      >
        <Avatar
          src={educationImage}
          sx={{ width: 80, height: 80, marginRight: "1rem" }}
          alt="Picture"
        />
        <ul>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <b>Masters of Software Engineering:</b> University of Calgary.{" "}
              <i>2022-2023</i>.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <b>Bachelors of Mechanical Engineering:</b> University of
              Agriculture Abeokuta. <i>2005-2010</i>.
            </Typography>
          </li>
        </ul>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          marginBottom: "2rem",
        }}
      >
        <Avatar
          src={projectsimage}
          sx={{ width: 80, height: 80, marginRight: "1rem" }}
          alt="Picture"
        />
        <ul>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <b>Java Game:</b>
              <Link to="/tictactoe">
                {" "}
                <i>
                  {" "}
                  Play tic-tac-toe against my algorithm implemented in
                  Java/Springboot
                </i>
                .{" "}
              </Link>
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <b>Other Projects:</b>
              <Link to="https://github.com/OAkinbode?tab=repositories">
                {" "}
                <i> Click here to go to my github</i>.{" "}
              </Link>
            </Typography>
            <Typography
              variant="body1"
              textAlign={"left"}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Links to my accounts are at the bottom of page.
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
}
