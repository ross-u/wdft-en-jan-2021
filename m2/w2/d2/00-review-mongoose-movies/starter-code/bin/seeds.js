const mongoose = require("mongoose");
const Celebrity = require("./../models/celebrity")
require('dotenv').config();



const celebrityArr = [
    {name: "Shakira", occupation: "Singer", catchPhrase:"Waka Waka"},
    {name:"Julian Abasolo", occupation:"TA", catchPhrase:"Fork this repo"},
    {name:"Mariano Rajoy", occupation:"Politician", catchPhrase:"Fin de la cita"}
];





mongoose.connect(
    `mongodb://localhost:27017/celebrities`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then((x) => {
    console.log('Connected to the DB');
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then(() => {
    const pr = Celebrity.create(celebrityArr);
    return pr;
  })
    .then((celebrityInserted) => {
      console.log(`Created ${celebrityInserted}`);
      mongoose.connection.close();
  })
  .catch( (err) => console.log('Error connection to the DB', err));
