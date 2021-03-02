import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';

// PAGE COMPONENTS
import BeersListPage from './pages/BeersListPage';
import HomePage from './pages/HomePage';
import NewBeerPage from './pages/NewBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import SingleBeerPage from './pages/SingleBeerPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={BeersListPage} />
        <Route exact path="/beers/:idOfTheBeer" component={SingleBeerPage} />
        <Route exact path="/random-beer" component={RandomBeerPage} />
        <Route exact path="/new-beer" component={NewBeerPage} />
      </Switch>
    </div>
  );
}

export default App;
