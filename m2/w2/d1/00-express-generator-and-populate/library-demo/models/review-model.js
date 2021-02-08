const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// CREATE SCHEMA
const reviewSchema = new Schema({
  name: String,
  comments: String
},
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);


// CREATE MODEL
const Review = mongoose.model('Review', reviewSchema);


// EXPORT
module.exports = Review;