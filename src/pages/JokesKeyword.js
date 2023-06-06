import React from "react";

class Keyword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        keyWord: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  displayJoke = (keyWord) => {
    this.props.displayJoke(keyWord);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.displayJoke(this.state.formData.keyWord);
    // Reset form fields
    this.setState({
      formData: {
        keyWord: "",
      },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="flex flex-wrap justify-center">
            <label htmlFor="keyWord"></label>
            <textarea
              className="border border-blue-500 p-2 rounded-lg"
              placeholder="Enter Keyword"
              id="keyWord"
              name="keyWord"
              value={this.state.formData.keyWord}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-wrap justify-center py-8 px-4">
            <button
              className="bg-gray-200 hover:bg-gray-700 text-black font-bold rounded shadow-md"
              type="submit"
            >
              Grab a joke
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Keyword;
