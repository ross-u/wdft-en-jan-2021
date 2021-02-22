import React from "react";
import "./App.css"; // CSS files are loaded directly into the .js file

import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Recap</h1>
        <Profile name="Javi" username="javi123" />
      </div>
    );
  }
}

export default App;
