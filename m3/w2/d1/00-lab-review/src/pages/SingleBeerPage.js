import axios from 'axios';
import React, { Component } from 'react';
import beerService from './../services/beer.service.js';

const spinnerURL = 'https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';





class SingleBeerPage extends Component {
  state = {
    beer: {},
    isReady: false,
  };

  componentDidMount() {
    this.loadSingleBeer();
  }

  loadSingleBeer = () => {
    const beerId = this.props.match.params.idOfTheBeer;

    beerService.getSingleBeer(beerId)
     .then((beer) => this.setState({ beer, isReady: true }))
  };

  render() {
    const { beer, isReady } = this.state;

    if (!isReady) return <img src={spinnerURL} alt="loading spinner" />;

    return (
      <div>
        <img src={beer.image_url} alt="" />
        <h2>{beer.name}</h2>
        <h4>{beer.tagline}</h4>
        <p>Created by: {beer.contributed_by}</p>
      </div>
    );
  }
}

export default SingleBeerPage;
