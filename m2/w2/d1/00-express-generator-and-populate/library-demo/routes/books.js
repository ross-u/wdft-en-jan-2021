var express = require('express');
var booksRouter = express.Router();
const Book = require('./../models/book-model');


// GET     /books
booksRouter.get('/', (req, res, next) => {
  Book.find()
    .then((allBooks) => {
      const data = {
        allBooks: allBooks
      }

      res.render('books', data);
    })

})

// Render the add-book form
// GET     /books/add
booksRouter.get('/add', (req, res, next) => {
  res.render('book-add');
})


// Receives the data from the add-book form
// POST     /books/add
booksRouter.post('/add', (req, res, next) => {

  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then((createdBook) => {
      res.redirect('/books');
    })
    .catch( (err) => console.log(err));
})

// GET     /books/edit/:bookId
booksRouter.get('/edit/:bookId', (req, res, next) => {
  // Get the book id
  // const { bookId } = req.params;
  const bookId = req.params.bookId;

  // Get the book from the DB
  Book.findById(bookId)
    .then((oneBook) => {
      const data = { 
        oneBook: oneBook
      }
      res.render('book-edit', data);

    })
    .catch((err) => console.log(err))

  // Render the book edit form with book details
})


// POST     /books/edit/:bookId
booksRouter.post('/edit/:bookId', (req, res, next) => {
  // Get the book id
  const bookId = req.params.bookId;
  const { title, description, author, rating } = req.body;

  // Update the book in the DB
  Book.findByIdAndUpdate(bookId, { title, description, author, rating })
    .then((updatedBook) => {
      res.redirect('/books')
    })
    .catch((err) => console.log(err));
})


// GET    /books/details/:bookId
booksRouter.get('/details/:bookId', (req, res, next) => {

    // Get the id of the book
    const { bookId } = req.params;
    
    // Get the book from the DB
  Book.findById(bookId)
      .populate('reviews')
      .then((oneBook) => {
        
        res.render('book-details', { oneBook: oneBook });
      }) 
      .catch( (err) => console.log(err));
  

    
  

  // Render the book-details view
})




module.exports = booksRouter;
