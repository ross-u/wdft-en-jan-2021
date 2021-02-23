import React from "react";

// To load files from the `/src` folder:
import logoSRC from "../vr-react-logo.png";
// importing logo from src folder - loaded as a file in the bundle if less than 100KB

// To load the files from the `/public` folder:
const logoPublic = "/logo512.png";

function Header() {
  return (
    <header className="App-header">
      {/* <img src={logoPublic} className="App-logo" alt="logo" /> */}

      <img src={logoSRC} className="App-logo" alt="" />

      <h1 className="App-title"> Welcome to React</h1>
      <h3>This is a CRA example !</h3>
    </header>
  );
}

export default Header;
