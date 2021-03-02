import React from 'react';
import logo from './../ih-logo.png';
import withTheme from './../hoc/withTheme';

function Navbar(props) {
  return (
    <nav className="navbar" style={props.style}>
      <img src={logo} alt="ironhack logo" width="50px" />
    </nav>
  )
}



export default withTheme(Navbar, 'light');


// export default Navbar
