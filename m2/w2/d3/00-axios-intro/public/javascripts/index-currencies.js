

const key = 'L1O9R8JGGAOX4ZYL';
const functionName = 'CURRENCY_EXCHANGE_RATE';
const symbolName = 'MSFT';
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;
 

axios.get(apiUrl)
  .then((response) => {
    // const data = response.data;
    const { data } = response;
    const dailyData = data['Time Series (Daily)'];

    const stockDates = Object.keys(dailyData);

    console.log('stockDates', stockDates);

    const stockData = stockDates.map(dateStr => {
      return dailyData[dateStr]["4. close"]

      //    dailyData["2021-09-17"]["4. close"]
    })

    const stockDates10 = stockDates.slice(0, 10);
    const stockData10 = stockData.slice(0, 10);

    console.log('stockData', stockData);

    const ctx = document.querySelector('#my-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: stockDates10,
        datasets: [
          {
            label: `Closing values - ${symbolName}`,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: stockData10
          }
        ]
      }
    });

  })
  .catch( (err) => console.log(err));
