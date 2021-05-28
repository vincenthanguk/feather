import React, { Component } from "react";

class YearOfBirth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange = (evt) => {
    this.setState({ value: evt.target.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="YearOfBirth">
        <h1>What's your birth year? 🐣</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default YearOfBirth;
