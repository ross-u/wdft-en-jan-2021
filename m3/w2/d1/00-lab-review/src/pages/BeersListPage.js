import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const spinnerURL = 'https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';

class BeersListPage extends React.Component {
  state = {
    beers: [],
    isReady: false,
  };

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('response', response);

      const { data } = response;
      this.setState({ beers: data, isReady: true });
    });
  };

  render() {
    const { beers, isReady } = this.state;

    if (!isReady) return <img src={spinnerURL} alt="loading spinner" />;

    return (
      <div>
        <h1>Beers List</h1>
        {beers.map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="" />
              <h2>{beer.name}</h2>
              <h4>{beer.tagline}</h4>
              <p>Created by: {beer.contributed_by}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default BeersListPage;
