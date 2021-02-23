import React, { Component } from "react";
import "./App.css";

import User from "./components/User";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userA: {
        firstName: "John",
        avatar: "https://i.imgur.com/d1UsoDK.png",
      },
      userB: {
        firstName: "Leea",
        avatar: "https://i.imgur.com/6thUiuU.png",
      },
      clickCount: 0,
      favouriteDesert: 'ice cream'
    };

    this.handleClick = this.handleClick.bind(this);
  }



  handleClick () {

    this.setState({ clickCount: this.state.clickCount + 1 });
  };



  render() {
    return (
      <div className="App">
        <h1>Click Count: {this.state.clickCount}</h1>
        <button onClick={this.handleClick}>Click me</button>

        <User
          name={this.state.userA.firstName}
          image={this.state.userA.avatar}
        />

        <User
          name={this.state.userB.firstName}
          image={this.state.userB.avatar}
        />
      </div>
    );
  }
}

export default App;
