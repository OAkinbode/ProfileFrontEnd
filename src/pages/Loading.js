import React from "react";

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: "New joke incoming..." };
  }
  render() {
    return (
      <div>
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }
}

export default Loading;
