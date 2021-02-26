import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countriesData } = props;

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {/* TODO map and create*/}

        {countriesData.map(({ alpha3Code, name }) => {
          return (
            <Link
              key={alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${alpha3Code}`}
            >
              {/* {flag} */}{' '}
              {/* we comment the flag and name due to data structure difference */}
              {/* {name.common} */}
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
