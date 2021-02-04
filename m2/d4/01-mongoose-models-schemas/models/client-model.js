const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const payment = require('./../schemas/payment-schema');

// CREATE SCHEMA
const clientSchema = new Schema({
  // name: String,
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  accountActive: { type: Boolean, default: true },
  balance: { type: Number, required: true},
  payments: { type: [ payment ], required: true },
});

// CREATE MODEL
//                             Client  -->  `clients`
const Client = mongoose.model("Client", clientSchema);

// EXPORT MODEL
module.exports = Client;
