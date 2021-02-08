const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// CREATE SCHEMA
const bookSchema = new Schema({
  title: String,
  description: String,
  author: String,
  rating: Number,
  reviews: {
    type: [
      {type: Schema.Types.ObjectId, ref: 'Review' }
    ],
    default: []
  }
},
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });


// CREATE MODEL
//                           Book -->  books
const Book = mongoose.model('Book', bookSchema);


// EXPORT
module.exports = Book;