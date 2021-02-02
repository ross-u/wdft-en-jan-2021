const express = require("express");
const hbs = require("hbs");
const app = express();
const fetch = require('node-fetch');


const PORT = 3001;


// SET THE DIRECTORY USED TO RENDER VIEWS
app.set("views", __dirname + "/views");

// SET THE VIEW ENGINE
app.set("view engine", "hbs");

// SET THE DIRECTORY FOR HBS PARTIALS
hbs.registerPartials(__dirname + "/views/partials");


// MIDDLEWARE
app.use(express.static("public"));



// ROUTES (ENDPOINTS)
app.get('/', (req, res, next) => {
  res.render('index');
})


app.get('/launches', (req, res, next) => {
  // REQUEST TO SPACEX API TO GET DATA

  // punkAPI.getBeers()  punkAPI.getRandom()
  fetch('https://api.spacexdata.com/v4/launches')
    .then((response) => {

      const pr = response.json(); // convert the response to object. Async task, returns a promise
      return pr;
    })
    .then((dataFromAPI) => {
      
      const data = {
        launches: dataFromAPI
      }

      res.render('launches', data);
    })
    .catch((err) => {})
    
  
  
  
})


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
