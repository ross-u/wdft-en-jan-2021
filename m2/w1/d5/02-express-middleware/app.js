// ehbs + Tab

const express = require("express");
const hbs = require("hbs");
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = 3001;

// SET THE TEMPLATE ENGINE
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// REGISTER THE PARTIAL
hbs.registerPartials(__dirname + "/views/partials");


// MIDDLEWARE
// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


app.use(morgan('tiny'));

// Our custom middleware function
app.use(function (req, res, next) {
  console.log('HELLO FROM MIDDLEWARE!');
  next();
})


// ROUTES
// ...

// Render search form
app.get('/', (req, res) => {
  res
    .status(200)
    .render('search')
});

// Handle search form data
app.get('/search', (req, res, next) => {
  console.log('req.query', req.query);

  res.send();
})

// Render signup form page
app.get('/signup', (req, res, next) => { 
  res.render('signup')
});


// Handle signup form data (coming on form submit)
app.post('/signup', (req, res, next) => {
  console.log('req.body', req.body);

  res.send();
});




// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
