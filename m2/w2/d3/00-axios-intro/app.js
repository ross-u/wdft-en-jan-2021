const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index-router");
const siteRouter = require("./routes/site-router");

const app = express();

// VIEW ENGINE SETUP
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");


// MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Listens for requests that end with a file extension
// tries to find and serve that file from the public folder
app.use(express.static("public"));



// ROUTES
app.use("/", indexRouter);
app.use("/", siteRouter);


// 404 HANDLER
app.use(function (req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
