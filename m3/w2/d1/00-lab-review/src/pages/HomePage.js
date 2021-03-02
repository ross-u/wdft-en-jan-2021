import React from 'react';

import { Link } from 'react-router-dom';

import allBeersPic from './../assets/beers.png';
import randomBeerPic from './../assets/random-beer.png';
import newBeerPic from './../assets/new-beer.png';

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <div className="page-card">
          <h2>All Beers</h2>
          <img src={allBeersPic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi
            incidunt corporis molestias adipisci quis explicabo id magnam, quo
            ipsum numquam asperiores! Exercitationem minima cum asperiores aut!
            Et, dignissimos soluta.
          </p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div className="page-card">
          <h2>Random Beer</h2>
          <img src={randomBeerPic} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            voluptatem temporibus nobis quos consequuntur at enim consectetur,
            odio et quisquam laboriosam earum ad eius optio ipsam. A corrupti
            repudiandae nemo?
          </p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div className="page-card">
          <h2>New Beer</h2>
          <img src={newBeerPic} alt="" />
          <p></p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
