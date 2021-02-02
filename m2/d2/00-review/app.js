// CREATE THE SERVER
const express = require("express");
const app = express();
const PORT = 3000;

// MIDDLEWARE
app.use(express.static("public"));

//  GET  http://localhost:3000/css/about.css
// public/css/about.css

// ENDPOINTS (ROUTES)
app.get("/", (req, res, next) => {
  res.send("<div> <h1>Hello from Home Page</h1></div>");
});

app.get("/about", (req, res, next) => {
  // res.send("<div> <h1>About Page!!!</h1></div>");

  res.sendFile(__dirname + "/about.html");
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

/* 
Server and client communicate via HTTP.
HTTP uses HTTP messages.
HTTP message is only text(containing special parts - Start Line, Headers, Body)
HTTP message:   request or response

HTTP request message can have a different type, and we use Verbs
to specify which type of the request it is:
GET, POST, PUT, PATCH, DELETE
*/
