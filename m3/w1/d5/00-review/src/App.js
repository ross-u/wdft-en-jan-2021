import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import countriesData from './countries.json';

import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './pages/CountryDetails/CountryDetails';

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    // set the initial state of the component
    // this.setState({ countries: countriesData });  // previous iteration

    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ countries: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { countries } = this.state;
    // const { appTitle } = this.props;

    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countriesData={countries} />

            <Switch>
              <Route path="/:cca3Code" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
