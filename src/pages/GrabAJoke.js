import React from "react";
import { connect } from "react-redux";
import JokesDisplay from "../components/JokesDisplay";
import JokesForm from "../components/JokesForm";
import JokesButton from "../components/JokesButton";
import JokesKeyword from "./../components/JokesKeyword";
import LeftPane from "../components/Leftpane";
import Loading from "../components/Loading";
import Titleblock from "../components/Titleblock";
import backgroundimage from "../assets/checkerboard-cross.webp";
import MobileView from "../components/MobileView";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

class GrabAJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setup: "setup",
      delivery: "delivery",
      displayJoke: false,
      jokeMode: "button",
      isLoading: false,
    };
  }

  handleClick = (keyword) => {
    this.setState({ isLoading: true });
    // Make the API call here

    fetch(
      `https://jokes-backend-in-node-oakinbode.vercel.app/api/getjoke?keyWord=${keyword}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        if (data.setup === undefined) {
          console.log(data.setup);
          this.setState({ setup: "Oops, no jokes found." });
          this.setState({ delivery: "Try again!" });
        } else {
          this.setState({ setup: data.setup });
          this.setState({ delivery: data.delivery });
        }
        this.setState({ displayJoke: true });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error(error);
      });
  };

  displayJokeControl = (keyword = "") => {
    this.handleClick(keyword);
  };

  choseJokeMode = (jokeMode) => {
    this.setState({ jokeMode: jokeMode });
  };

  render() {
    const { jokeMode, displayJoke, isLoading } = this.state;
    const { isMobileRedux } = this.props;
    return (
      <div className="flex flex-grow">
        {!isMobileRedux && <LeftPane />}
        <div className="w-screen">
          <Navbar isMobile={isMobileRedux}></Navbar>
          <Titleblock title="Grab-A-Joke" />
          <MobileView />
          <div
            className="bg-gray-100 flex-grow"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              padding: 100,
              background: `url(${backgroundimage})`,
            }}
          >
            <div className="flex-wrap justify-center shadow-md bg-gray-100">
              <div className="flex justify-center">
                <h5 className="text-3xl">Welcome! Click 'Grab a Joke'</h5>
              </div>
              <div className="flex flex-wrap justify-center py-10 px-4 ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2 w-48 h-12 whitespace-normal shadow-md"
                  onClick={() => this.choseJokeMode("button")}
                >
                  One Click Joke
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2 w-48 h-12 whitespace-normal shadow-md"
                  onClick={() => this.choseJokeMode("keyword")}
                >
                  Give a Keyword
                </button>
                {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2 w-48 h-12 whitespace-normal shadow-md"
                onClick={() => this.choseJokeMode("email")}
              >
                Email a Joke
              </button> */}
              </div>
              {jokeMode === "email" && (
                <div>
                  <JokesForm displayJoke={this.displayJokeControl} />
                </div>
              )}
              {jokeMode === "keyword" && (
                <div>
                  <JokesKeyword displayJoke={this.displayJokeControl} />
                </div>
              )}
              {jokeMode === "button" && (
                <div>
                  <JokesButton displayJoke={this.displayJokeControl} />
                </div>
              )}
              <div className="py-10 px-10 ">
                {isLoading && <Loading />}
                {displayJoke && (
                  <JokesDisplay
                    display={this.state.displayJoke}
                    setup={this.state.setup}
                    delivery={this.state.delivery}
                  />
                )}
              </div>
              <div className="flex items-end justify-center">
                <Link
                  to="/Projects"
                  className="bg-red-500 hover:bg-red-20 text-white font-bold py-2 px-4 rounded w-32 flex items-center justify-center"
                >
                  Return
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobileRedux: state.isMobile,
  };
};

export default connect(mapStateToProps)(GrabAJoke);
