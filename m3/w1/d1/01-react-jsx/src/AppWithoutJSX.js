/* 
EXAMPLE:
Creating React component without JSX (using the method React.createElement).

`React.createElement` syntax :
    React.createElement( component, props, ...children ) 
*/

import React from "react";
import "./App.css";

class AppWithoutJSX extends React.Component {
  render() {
    return React.createElement("div", { className: "App" }, [
      React.createElement("h1", null, "Hello Ironhackers"),
      React.createElement("h3", null, "React without JSX"),
    ]);
  }
}

export default AppWithoutJSX;
