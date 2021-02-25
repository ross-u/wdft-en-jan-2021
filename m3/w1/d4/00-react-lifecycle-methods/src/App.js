import React, { Component } from "react";
import "./App.css";

import Clock from "./components/Clock";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: "26 Feb",
      showClock: false,
    };
  }


  toggleClock = () => {
    this.setState({ showClock: !this.state.showClock });
  };

  updateCurrentTime = () => this.setState({ currentTime: (new Date()).toUTCString() })  


  render() {
    console.log('App ===== render');
    

    return (
      <div className="App">
        
        <h1>Lifecycle methods</h1>
        <button onClick={this.updateCurrentTime}> UPDATE CURRENT TIME</button>
        <button onClick={this.toggleClock}> TOGGLE CLOCK</button>


        {
          this.state.showClock
            ? <Clock currentYear="2021 *******" currentTime={this.state.currentTime} />
            : null
        }

      </div>
    );
  }


}

export default App;
