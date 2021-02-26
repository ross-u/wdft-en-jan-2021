import React from 'react';
import countriesData from './../../countries.json';

import { Link } from 'react-router-dom';

function CountryDetails(props) {
  // Get the cca3 of the country from the react-router props  (`props.match.params`)
  console.log('props', props);
  // const cca3Code = props.match.params.cca3Code;
  const { cca3Code } = props.match.params;

  // Get the country by using the cca3
  const country = countriesData.find((c) => c.cca3 === cca3Code);

  return (
    <div className="col-7">
      <h1>{country.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30 %' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((cca3) => {
                  return (
                    <li key={cca3}>
                      <Link to={`/${cca3}`}>
                        {/* Get the name of the country */}
                        {countriesData.find((c) => c.cca3 === cca3).name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
