const express = require('express');
const hbs = require('hbs');
const app = express();


const PORT = 3000;

// SET THE VIEW ENGINE
app.set('view engine', 'hbs');
// SET THE DIRECTORY USED FOR THE VIEWS
app.set('views', __dirname + '/views');
// SET THE DIRECTORY FOR PARTIALS
hbs.registerPartials(__dirname + '/views/partials');


// MIDDLEWARE
app.use(express.static('public'));



// ROUTES (ENDPOINTS)
// ... 
// GET   localhost:3000/
app.get('/', (req, res, next) => {
  // DO SOMETHING

  // res.send(); // Send an empty response or text
  // res.sendFile(__dirname + '/file.txt'); // Send a response with a file in the body
  // res.json();

  const data = {
    users: [
      {name: 'BOB 1', image: 'https://i.imgur.com/X7nm0R5.png', descr: 'asldfasdf'},
      {name: 'BOB 2', image: 'https://i.imgur.com/X7nm0R5.png', descr: 'asldfasdf'},
      {name: 'SARAH', image: 'https://i.imgur.com/T4EpAg6.png', descr: 'asldfasdf'},
    ]
  }

  res.render('index', data);
  // It uses the view engine template, renders the HTML page, sends the page response
})


// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
})