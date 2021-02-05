// ehbs + Tab

const express = require("express");
const hbs = require("hbs");
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// SET THE TEMPLATE ENGINE
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// REGISTER THE PARTIAL
hbs.registerPartials(__dirname + "/views/partials");


// MIDDLEWARE
// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


// ROUTES
// ...
app.get("/users", (req, res, next) => {
  console.log("in /users");

  res.send();
});


//
// Route Parameters aka 'params'
app.get("/users/:name", (req, res, next) => {
  // req.params  { name: 'dimitrij' }

  console.log("req.params", req.params);

  res.send();
});


app.get('/users/:username/posts/:postId', (req, res, next) => {

  console.log('req.params', req.params);

  res.send();
})



// URL Query String
// BASE_URL/search?name=bob&city=barcelona
//                ? name=bob & city=barcelona

app.get('/search', (req, res, next) => {
  console.log('req.query', req.query);

  res.send();
});


// Render the form in the view
app.get('/', (req, res) => {
  res
    .status(200)
    .render('index')
})


// Endpoint to receive the form data
app.get('/login', (req, res, next) => {
  console.log('req.body', req.body); // --> undefined as GET requests don't use request body
  console.log('req.query', req.query);  // Form data is sent via the URL string (not safe)


  res.send();
});


app.post('/login', (req, res, next) => {
  console.log('req.body', req.body); // --> body of the POST request has to be parsed. We use bodyParser middleware

  res.send();
})



// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
