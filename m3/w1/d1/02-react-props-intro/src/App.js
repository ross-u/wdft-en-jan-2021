import React from "react";
import "./App.css";

import MyComponent from './MyComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent />
        <MyComponent city="Barcelona"  />
        <MyComponent city="Paris" />
      </div>
    );
  }
}

export default App;
