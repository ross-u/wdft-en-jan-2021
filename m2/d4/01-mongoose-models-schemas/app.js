const mongoose = require("mongoose");
const data = require("./data");
const DB_NAME = "iron-bank";

// CLIENT MODEL
const Client = require("./models/client-model.js");

// CREATE A DATABASE CONNECTION INSTANCE - TO DB `iron-bank`
mongoose
  .connect(`mongodb://localhost/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then(()=> {
    
    console.log(`Connected to Mongo Database -> ${DB_NAME}`);

    const pr = Client.insertMany(data);
    return pr;
  })
  .then((createdClients) => {
    // console.log('createdClients', createdClients);

    const pr = Client.find({ name: 'Watts Daniels'});
    return pr;
  })
  .then((client) => {
    // console.log('client', client);

    const newPayments = [ {amount: 23423400},  {amount: 19300}, {amount: 45550} ]

    const pr = Client.findOneAndUpdate(
      { name: 'Carol Whitney' },
      { $set: { payments: newPayments } },
      { new: true }
    );

    return pr;
  })
  .then((result) => {
    console.log('Payments successfully updated', result);

    const pr = Client.deleteOne({ name: "Maddox Leon" });
    return pr;
    
  })
  .then((deleteResult) => {
    console.log('deleteResult', deleteResult);
    if (deleteResult.deletedCount === 0) {
      throw new Error('deleteOne - unable to delete the document')
    }
    else {
      console.log('Document deleted');
    }
  })
  .catch((err) =>
    console.error(`Error`, err)
  );



  // DB query operations always return a pending promise.








// RETRIEVE A SINGLE DOCUMENT - `Model.findById`    //https://mongoosejs.com/docs/api.html#model_Model.findById

//  INSERT MULTIPLE DOCUMENTS - `Model.insertMany`    //  https://mongoosejs.com/docs/api.html#model_Model.insertMany

//  RETRIEVE DOCUMENTS  - `Model.find`    //  https://mongoosejs.com/docs/api.html#model_Model.find

// UPDATE ONE DOCUMENT  - Model.findOneAndUpdate    // https://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate

// DELETE ONE DOCUMENT -  Model.deleteOne   // https://mongoosejs.com/docs/api.html#model_Model.deleteOne
