# Exercise

1. Fork and clone the repo

2. Install all the packages by running `npm install` and then start the server.

3. In the `public/javascripts/` folder create a new file `index-currencies.js`.

4. In the `views/` folder create a new view file `currencies-view.hbs`.

5. In the `site-router.js` create a new `GET` `/currencies-example` route that renders the `currencies-view` page.

6. Generate the key for the ALpha Vantage API [here](https://www.alphavantage.co/).

7. Following the previous example that you can find in the page `financial-data.hbs` and `index-financial-data.js` create a new request using axios, but this time to get the currency `CURRENCY_EXCHANGE_RATE`. You will have to check the documentation of Vantage API [here](https://www.alphavantage.co/documentation/#fx)

   [ChartJS Documentation](https://www.chartjs.org/)
