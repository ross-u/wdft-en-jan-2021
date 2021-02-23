import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    username: "bob",
  };

  render() {
    return (
      <nav id="navbar">
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
