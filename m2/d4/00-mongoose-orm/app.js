const mongoose = require("mongoose");

// The name of the new or existing database
const DB_NAME = "example-mongoose";

// CREATE AN INSTANCE OF CONNECTION TO DATABASE - `example-mongoose`
// If database exists, it connects to it
// If database doesn't exist, it creates it first and then connects to it*
mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Collections:       cats  dogs
// CREATE MODEL -    Cat   Dog

/* 
- The (data) model is what directly manages the one collection data and querying.
- Model is an overlay on top of one collection, that we use to query and interact with that collection
- Each collection has it's own model.

- Model also gives a structure to the collection documents, and enforces it.
*/

//                          Cat   is managing the collection of `cats`
const Cat = mongoose.model("Cat", {
  // SCHEMA OBJECT
  name: String,
  color: String,
});

// Create a document
/* 
Cat.create({ name: "Iron Kitty Cat 3", color: "Ironhack blue" })
  .then((createdDocument) => {
    console.log("createdDocument", createdDocument);
  })
  .catch((err) => {
    console.log("Query Error", err);
  }); 
*/

// Retireve all documents from `cats` collection
/* 
Cat.find()
  .then((results) => {
    console.log("RESULTS:", results);
  })
  .catch((err) => {
    console.log("Query error", err);
  }); 
  */

//                          Dog   -->  `dogs`
const Dog = mongoose.model("Dog", { name: String, age: Number });

const arrayOfCats = [
  { name: "marbles", color: "black" },
  { name: "fluffy", color: "white" },
  { name: "tiger", color: "orange and black" },
];

const arrayOfDogs = [
  { name: "daisy", age: 1 },
  { name: "bella", age: 3 },
  { name: "sudo", age: 6 },
];

/* 
  MONGOOSE CONNECTION EVENTS
  We can provide a callback to be run on each
  of the below database events.
*/

// Create multiple documents
const promise1 = Cat.insertMany(arrayOfCats);
const promise2 = Dog.insertMany(arrayOfDogs);

Promise.all([promise1, promise2])
  //          [ []   ,     []  ]
  .then((result) => {
    console.log("Promise.all result", result);
  })
  .catch((err) => console.log(err));

// When successfully connected
mongoose.connection.on("connected", () => console.log("Mongoose connected"));

// When the connection is disconnected
mongoose.connection.on("disconnected", () =>
  console.log("Mongoose disconnected")
);

// If the connection throws an error
mongoose.connection.on("error", (err) =>
  console.log("Mongoose connection error: " + err)
);

// BONUS
// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  mongoose.connection
    .close()
    .then((data) => console.log("Connection closed"))
    .catch((err) => console.log(err));
});
