import React from "react";

/* 
- `class` components have `state` object 
enabling them to store internal data and keep updating it.

- `class` component must have a render method

- `class` component can recieve data from the outside (this.props)
*/


class Welcome extends React.Component {
  state = {};

  render() {
    return (
      <div className="welcome">
        <h1> Welcome Component</h1>
        <p> Welcome to IH {this.props.student}</p>
      </div>
    );
  }
}

export default Welcome;
