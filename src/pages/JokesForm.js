import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
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

  displayJoke = (keyword) => {
    this.props.displayJoke(keyword);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.displayJoke(this.state.formData.keyWord);
    // Reset form fields
    this.setState({
      formData: {
        email: "",
        keyWord: "",
      },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.formData.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="keyWord">Keyword:</label>
            <textarea
              id="keyWord"
              name="keyWord"
              value={this.state.formData.keyWord}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">Grab a joke</button>
        </form>
      </div>
    );
  }
}

export default Form;
