import React from "react"; // const React = require('react')
import "./App.css";

import List from "./List";

// App.js is a root component and we nest all of the content that
// we want to show in our React app inside of it
// all other components and elements

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Ironhackers!</h1>
        <h3>React Intro</h3>

        <List />
      </div>
    );
  }
}

export default App; // module.exports = App
