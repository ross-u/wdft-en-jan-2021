const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  name: String,
  votes: { type: Number, default: 0 },
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
