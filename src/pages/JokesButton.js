import React from "react";

class PushButton extends React.Component {
  displayJoke = () => {
    this.props.displayJoke();
  };

  render() {
    return (
      <div className="flex flex-wrap justify-center">
        <button
          className="bg-gray-200 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded shadow-md"
          onClick={this.displayJoke}
        >
          Grab a Joke
        </button>
      </div>
    );
  }
}

export default PushButton;
