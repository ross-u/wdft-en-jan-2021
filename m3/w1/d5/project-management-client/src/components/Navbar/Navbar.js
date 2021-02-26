//  src/components/Navbar/Navbar.js

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    username: "User's name",
  };

  render() {
    return (
      <nav id="navbar">
        <ul>
          <NavLink activeClassName="selected-link" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="selected-link" exact to="/projects">
            Projects
          </NavLink>
        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
