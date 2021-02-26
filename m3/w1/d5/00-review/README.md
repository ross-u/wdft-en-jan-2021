![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React WikiCountries

## Introduction

After spending too much time on GitHub, you found a [JSON database of countries](https://raw.githubusercontent.com/mledoze/countries/master/countries.json) and you decide to use it to create your Wikipedia for countries!

![](https://media.giphy.com/media/fdUHHKI36bTVduRDfB/giphy.gif)

## Setup

- Fork this repo
- Clone this repo

```shell
$ cd lab-wiki-countries
$ npm install
$ npm start
```

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up on your work.

## Instructions

### Iteration 0 | React Router installation

Don't forget to install the React Router:

```shell
$ npm install react-router-dom
```

And setup the router in your `src/index.js` file:

```jsx
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// comment skipped to stay organized
reportWebVitals();
```

### Bootstrap installation

We will use [Bootstrap V4](https://getbootstrap.com/) for the design :+1:

```sh
$ npm install bootstrap
```

```javascript
// src/index.js
import 'bootstrap/dist/css/bootstrap.css';
```

## Instructions

### Iteration 1.1 | Create components

In this iteration, we will focus on the general layout. Before you start, inside the `src` folder, create the `components` folder. There you will create at least 3 components:

- `Navbar`: Displaying the basic navbar with the LAB name

- `CountriesList`: Displays the list of links with the country names. Each link should be a `react-router-dom` `Link` which we will use to <u>send</u> the country code (`cca3`) via the URL.

- `CountryDetails`: Is the component that we will render via the `react-router-dom`'s `Route` and will be <u>receiving</u> the country code (`cca3`) via the URL.

  This is actually the id of the country (example: `/ESP` for Spain, `/FRA` for France).

To help you with the structure of the components, we gave you an example of a page inside `example.html`.

If you want to style it, refresh your memory on Bootstrap in the [docs](https://getbootstrap.com/docs/4.0) or check out how we approached styling in the `example.html`.

### Iteration 1.2 | Navbar component

The simplest way to define a component in React is to write a JavaScript function aka function component. The navbar should be displaying the title of the LAB - WikiCountries.

### Iteration 1.3 | CountriesList component

This component should render a list of links that are used to trigger the browser URL change via the `react-router-dom` `Link`. Click on a `Link` component will then activate the corresponding `Route` showing the country details component.

### Iteration 1.4 | CountryDetails component and `Route` setup

Now when our list of countries is ready, we should create the `CountryDetails` component that will be displaying the details of a particular country of a link that we clicked. This component should be dynamically displayed/rendered by the `react-router-dom` `Route`.

In this case, you should use only 1 `<Route />` for `CountryDetails` component.

Components rendered by the `Route` receive special `props` (`match`, `location` and `history`) passed by the `react-router-dom`. We can use this props to obtain the information coming from the browser's URL bar, for example, the `cca3` code of the country. For a reminder on how to create a dynamic `Route` that displays a component feel free to check [this example](https://reactrouter.com/web/api/Route/route-props).

**NOTE:** For Windows users, there is no emoji for the `flag`. Instead, you can rely on these links:

- France: https://www.countryflags.io/fr/flat/64.png
- Germany: https://www.countryflags.io/de/flat/64.png
- etc.

### Iteration 2 | Linking it all together

Once done creating the components the structure of elements that your `App.js` will render should look somewhat like this:

```jsx
<div className="App">
  <Navbar />

  <div className="container">
    <div className="row">
      <CountriesList countries={countries} />
      {/* React Router Route rendering the CountryDetails should go here */}
    </div>
  </div>
</div>
```

### Iteration 3 | Set the state when the component mounts

Our `App.js` application should have its own state holding one property `countries` holding the data coming from the `countries.json` file.

The state should be set only once the component is rendered to the DOM, using the lifecycle method `componentDidMount()` .

### Bonus | Fetch the data from an API

Instead of relying on the static data coming from a `json` file, let's do something more interesting and get out the data from an actual API.

Let's make a `GET` request to the URL [https://restcountries.eu/#api-endpoints-all](https://restcountries.eu/#api-endpoints-all) and use the data returned from the response as the list of the countries. You can use either `fetch` or `axios` to make the request. You may want to check the lifecycle method [`componentDidMount`](https://reactjs.org/docs/react-component.html#componentdidmount).

The request should happen first thing when the application loads, therefore think about when and from where we should make the request to the API.

Happy coding! :heart:
