import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  login = (event) => {
    event.preventDefault();
    this.state.data = 1;
  };

  render() {
    return (
      <div className="main">
        <input type="number" name="" id="" value={this.state.data} />
        <button onClick={this.login}></button>
      </div>
    );
  }
}
