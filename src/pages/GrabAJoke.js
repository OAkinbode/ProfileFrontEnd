import { Link } from "react-router-dom";
import * as React from "react";
import Navbar from "../components/Navbar";
import RightPane from "./RightPane";
import { Container, Typography, Paper } from "@mui/material";

function GrabAJoke() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <RightPane />
        <Container>
          <Paper sx={{ padding: "2rem" }}>
            <div>
              <Typography
                variant="h6"
                textAlign={"left"}
                gutterBottom
                style={{ color: "black", fontStyle: "italic" }}
              >
                Grab-a-Joke
              </Typography>
              <Typography
                variant="body1"
                textAlign={"left"}
                style={{ color: "black" }}
              >
                This project will allow the user to click generate jokes from
                around the world based on a key word. You could also have the
                jokes texted or emailed for a maximum of 7 days. Further down in
                the development I will add a feature to verify the user's email
                and/or phone number so that this project cannot be used to spam
                others.
              </Typography>
              <Typography
                variant="body1"
                textAlign={"left"}
                style={{ color: "black" }}
              >
                This project is currently being developed in node.js and will be
                available for use soon.
              </Typography>
            </div>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

export default GrabAJoke;
