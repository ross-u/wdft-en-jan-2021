import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const spinnerURL = 'https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';

class RandomBeerPage extends React.Component {
  state = {
    beer: {},
    isReady: false,
  };

  componentDidMount() {
    this.loadRandomBeer();
  }

  loadRandomBeer = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log('response', response);

        const { data } = response;
        this.setState({ beer: data, isReady: true });
      });
  };

  render() {
    const { beer, isReady } = this.state;

    if (!isReady)
      return (
        <Loader
          type="Hearts"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );

    return (
      <div>
        <h1>Random Beer</h1>
        <div>
          <img src={beer.image_url} alt="" />
          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeerPage;
