const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const booksRouter = require('./routes/books');
const reviewsRouter = require('./routes/reviews');

require('dotenv').config();  // process.env


// DB CONNECTION
mongoose.connect(
  `mongodb://localhost:27017/${process.env.DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then( () => console.log('Connected to the DB'))
.catch( (err) => console.log('Error connection to the DB', err));



const app = express();


// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ROUTES
app.use('/books', booksRouter);
app.use('/reviews', reviewsRouter);

app.get('/', (req, res, next) => {
  res.render('index');
})





// LAST MIDDLEWARE
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
