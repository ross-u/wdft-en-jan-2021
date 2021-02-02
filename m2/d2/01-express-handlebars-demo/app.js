const express = require("express");
const hbs = require("hbs");
const app = express();

const PORT = 3001;
const moviesArr = require('./movies-data');


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


  /* 
  // Omit layout for the particular view
  const data = { layout: false }

  res.render('index', data);
  */
})


app.get('/movies', (req, res, next) => {
  const data = {
    movies: moviesArr,
    favMovie: { title: 'BOB!!', rank: 1 }
  };



  res.render('movies', data);

})


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
