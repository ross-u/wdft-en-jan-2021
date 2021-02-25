import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      year: undefined
    };

    console.log('== constructor');
  }

  render() {
    console.log('==== render');
    // Never call this.setState({}) in render() - (causes infinite re-rendering)

    return (
      <div className="Clock">
        <h1>Clock</h1>
        <h2>Year: {this.state.year}</h2>
      </div>
    );
  }

  componentDidMount() {
    console.log('========== componentDidMount');
    // Commonly used to set the initial `state` 

    // Setting the intial state coming through the `props`:
    // this.setState({ year: this.props.currentYear});


    // Setting the state with the data coming from an API
    fetch('http://worldclockapi.com/api/json/est/now')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ year: data.ordinalDate })
      })
  }


}

export default Clock;
