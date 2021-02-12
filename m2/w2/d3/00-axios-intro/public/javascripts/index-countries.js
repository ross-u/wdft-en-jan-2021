'use strict'


const buttonEl = document.querySelector('#get-country-btn');
const searchInputEl = document.querySelector('#country-name-input');


const countryNameEl = document.querySelector("#country-name");
const countryCapitalEl = document.querySelector("#country-capital");
const countryFlagImg = document.querySelector("#country-flag");



// ADD EVENT LISTENER TO THE BUTTON

buttonEl.addEventListener('click', function () {
  const country = searchInputEl.value;

  axios.get(`http://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => {
      const responseBody = response.data;

      const country = responseBody[0];
      const countries = responseBody;

      
      countryNameEl.textContent = country.name;
      countryCapitalEl.textContent = country.capital;
      
      countryFlagImg.setAttribute('src', country.flag)

    })
    .catch( (err) => console.log(err));

})
