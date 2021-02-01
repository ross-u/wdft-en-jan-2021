// CREATE THE SERVER
const express = require("express");
const app = express();

const PORT = 3000;

// MIDDLEWARE
// Middleware is a function that will run for every request
// and enable certain access or functionality

// static files middleware
app.use(express.static("public"));

// http://localhost:3000/css/main.css

// SPECIFY THE ENDPOINTS (ROUTES)
// GET  /
app.get("/", (req, res, next) => {
  // res.send("<h1>HOME PAGE</h1>");
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res, next) => {
  // res.send("<h1>ABOUT PAGE</h1>");
  res.sendFile(__dirname + "/public/views/about.html");
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
