var express = require('express');
var reviewsRouter = express.Router();
const Review = require('./../models/review-model');
const Book = require('./../models/book-model');


// POST     /reviews/:bookId
reviewsRouter.post('/:bookId', (req, res, next) => {
  // Create the new review in the review collection
  const { name, comments } = req.body;
  const { bookId } = req.params;

  
  Review.create({ name, comments })
    .then((createdReview) => {
      // Take the id of the newly created review
      // and update the book document

      Book.findByIdAndUpdate(bookId, { $push: { reviews: createdReview._id } })
        .then(() => {
          // res.redirect('/books')
          res.redirect(`/books/details/${bookId}`);

        })
      
    })
    .catch( (err) => console.log(err));


  // Redirect to the /books page
})

module.exports = reviewsRouter;