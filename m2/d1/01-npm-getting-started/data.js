// Example on exporting mulitple values from one file

const clement = {
  score: 10,
  module: 2,
};

const aleix = {
  score: 10,
  module: 2,
};

const isabel = {
  score: 10,
  module: 2,
};

const anna = {
  score: 10,
  module: 2,
};

function printDetails(studentObj) {
  console.log(`score: ${studentObj.score}, module: ${studentObj.module}`);
}

/* 
To export mulitiple values we create an object,
and add those values as properties to that exported object
*/

module.exports = {
  clement,
  aleix,
  anna,
  isabel,
  printDetails,
};
