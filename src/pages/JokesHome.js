import React from "react";
import JokesDisplay from "./JokesDisplay";
import JokesForm from "./JokesForm";
import JokesButton from "./JokesButton";
import JokesKeyword from "./JokesKeyword";
import RightPane from "./RightPane";
import Loading from "./Loading";

class JokesHome extends React.Component {
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
      // fetch(`http://localhost:3000/api/getjoke?keyWord=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        this.setState({ setup: data.setup });
        this.setState({ delivery: data.delivery });
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
    return (
      <div className="flex flex-grow">
        <RightPane />
        <div
          className="bg-gray-100 flex-grow"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            padding: 100,
          }}
        >
          <div className="flex-wrap justify-center shadow-md">
            <div className="flex justify-center">
              <h3 className="text-3xl">Welcome to the Jokes page</h3>
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
          </div>
        </div>
      </div>
    );
  }
}

export default JokesHome;
