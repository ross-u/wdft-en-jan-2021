// CREATE THE SERVER
const express = require("express");
const app = express();
const PORT = 3000;

// VIEW-ENGINE SETUP
// Set the folder where view engine files are located
app.set("views", __dirname + "/views");
// Set Handlebars as a view engine
app.set("view engine", "hbs");

// MIDDLEWARE
app.use(express.static("public"));

// ENDPOINTS (ROUTES)
app.get("/", (req, res, next) => {
  // res.sendFile(__dirname + "/views/home.html");

  // reads views/index.hbs and creates HTML page out of it and then sends it to the client
  res.render("index");
});

app.get("/example", (req, res, next) => {
  const data = {
    name: "Ironhacker Bob",
    bootcamp: "Ironhack Barcelona - WebDev",
    htmlStr: "<h3>Html string example</h3>",
    message: "Hello there ... msg",
    address: "Viewmont ave 123",
    // address: undefined,
    // address: 0,
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlin"],
    countries: ["France", "Spain", "USA", "UK"],
    info: { name: "Ironhacker", campus: "Barcelona", year: 2019 },
  };

  res.render("syntax", data);
});

// EXERCISE !
app.get("/user", (req, res, next) => {
  const data = {
    firstName: "Uros",
    lastName: "Cirkovic",
    image: "https://i.imgur.com/X7nm0R5.png",
    techStack: ["html", "css", "js", "node", "express"],
  };

  res.render("user", data);
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
