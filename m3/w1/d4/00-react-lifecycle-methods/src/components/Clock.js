import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      year: undefined,
      counter: 0,
      counterId: undefined,
    };

    console.log('== constructor');
  }


  updateCounter = () => this.setState({ counter: this.state.counter + 1})

  render() {
    console.log('==== render');
    // Never call this.setState({}) in render() - (causes infinite re-rendering)

    return (
      <div className="Clock">
        <h1>Clock</h1>
        <h2>Year: {this.state.year}</h2>

        {/* If the props are updated (new prop value is passed) component re-renders */}
        <h2>Current Time: {this.props.currentTime}</h2> 

        <h2>Counter: { this.state.counter}</h2>

      </div>
    );
  }


  componentDidMount() {
    const intervalId = setInterval(this.updateCounter, 1000);


    console.log('========== componentDidMount');
    // Commonly used to set the initial `state` 

    // Setting the intial state coming through the `props`:
    // this.setState({ year: this.props.currentYear});


    // Setting the state with the data coming from an API
    fetch('http://worldclockapi.com/api/json/est/now')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ year: data.ordinalDate, counterId: intervalId })
      })
    
  }


  componentDidUpdate(prevProps, prevState) {
    // this method runs after every update
    // componentDidUpdate is used for comparing the previous state and props with the current
    console.log('============= componentDidUpdate');
    
  }


  componentWillUnmount() {
    // componentWillUnmount is used for performing actions right before
    // the component is destroyed and removed from the DOM
    // Used to cancel any running operation, like timer(setInterval), call to API.

    console.log('#######  componentWillUnmount   #######');
    clearInterval(this.state.counterId);
    
  }


}

export default Clock;
