import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = { username: 'YOUR NAME' } 

  render() {
    return (
      <nav id='navbar'>
        <ul>
          <NavLink to="/" exact activeClassName="selected-link"> Dashboard </NavLink>
          <NavLink to="/contact" activeClassName="selected-link"> Contact </NavLink>
          <NavLink to="/about" activeClassName="selected-link"> About </NavLink>
          <NavLink to="/projects" activeClassName="selected-link" style={{ color: 'orange', fontWeight: 'bold'}} >Projects</NavLink>

          {/* <Link to="/"> Dashboard </Link> */}
          {/* <Link to="/contact"> Contact </Link> */}
          {/* <Link to="/about"> About </Link> */}
          {/* <Link to="/projects" style={{ color: 'orange', fontWeight: 'bold'}} >Projects</Link> */}
        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    )
  }
}

export default Navbar;
