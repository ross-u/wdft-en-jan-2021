const express = require("express");
const mongoose = require("mongoose");
const Candidate = require("./models/candidate-model");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/elections")
  .then((x) => {
    console.log("Connected to DB");
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then(() => {
    console.log("DB Droped!");
    Candidate.insertMany([{ name: "Biden" }, { name: "Trump" }]);
  });

// ROUTES
app.get("/biden", (req, res, next) => {
  Candidate.findOneAndUpdate({ name: "Biden" }, { $inc: { votes: 1 } })
    .then((update) => {
      console.log("Vote for Biden!");
      res.send("<h1>You voted Biden!</h1>");
    })
    .catch((err) => console.log(err));
});

app.get("/trump", (req, res, next) => {
  Candidate.findOneAndUpdate({ name: "Trump" }, { $inc: { votes: 1 } })
    .then((update) => {
      console.log("Vote for Trump!");
      res.send("<h1>You voted Trump!</h1>");
    })
    .catch((err) => console.log(err));
});

app.get("/result", (req, res, next) => {
  Candidate.find().then((candidates) => {
    const candidate1 = candidates[0];
    const candidate2 = candidates[1];
    res.send(`
              <h1>RESULTS</h1>
              <h3>${candidate1.name} = ${candidate1.votes}</h3>
              <h3>${candidate2.name} = ${candidate2.votes}</h3>
            `);
  });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
