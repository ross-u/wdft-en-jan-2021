import React from "react";
import dragonsData from "./../dragons.json";
import DragonCard from './DragonCard';

class DragonList extends React.Component {
  constructor() {
    super();

    this.state = {
      // we can set state from a static resource directly:
      // dragons: dragonsData,

      // if we are setting state with data from an API we should set the value
      // to be an empty array to avoid error in the render when mapping over this array
      dragons: [],
      showError: false,
      errorMessage: undefined,
    };

    console.log("== constructor");
  }

  getDragonsData = () => {
    // this method makes a HTTP request to the API and we then update the `state`
    // to store that data and show it on re-render
    fetch("https://api.spacexdata.com/v3/dragons")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ dragons: data });
      })
      .catch((err) => {
        this.setState({ showError: true, errorMessage: "Something broke!" });
      });
  };

  render() {
    console.log("==== render");

    return (
      <div>
        {
          this.state.showError
            ? <p>{this.state.errorMessage}</p>
            : this.state.dragons.map((obj) => <DragonCard dragonData={obj} />)
        }
      </div>
    );
  }

  componentDidMount() {
    console.log("======== componentDidMount");
    this.getDragonsData();
  }
}

export default DragonList;
