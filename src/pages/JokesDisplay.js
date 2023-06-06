import React from "react";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: "New joke incoming..." };
  }
  render() {
    return (
      <div className="flex flex-wrap justify-center py-4 bg-gray-100 border border-gray-400 p-20 rounded-lg">
        {this.props.display && (
          <div className="flex-wrap justify-center py-4">
            <h3 className="text-1xl font-sans text-center py-4">
              {this.props.setup}
            </h3>
            <h3 className="text-1xl font-sans text-center py-4">
              {this.props.delivery}
            </h3>
          </div>
        )}
      </div>
    );
  }
}

export default ButtonComponent;
