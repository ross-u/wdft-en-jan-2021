// localStorage allows to store stringified data .
// localStorage.setItem('keyName', stringValue )

const score = [
  { name: 'Anna', score: 1234},
  { name: 'Aleix', score: 123 },
  { name: 'Julian', score: 1 },
  { name: 'Uros', score: 12 },
]


// Stringify the data before storing in the localStorage
const scoreStringfied = JSON.stringify(score);
console.log('scoreStringfied', scoreStringfied);


// Save the string data to localStorage
localStorage.setItem('score', scoreStringfied);




// Retrieve the string data from the localStorage
// localStorage.getItem('keyName');
const scoreString = localStorage.getItem('score');


// Convert the retrieved string data to array or object
const scoreArray = JSON.parse(scoreString);
console.log('scoreArray', scoreArray);



// Update the score array with a new score
const newScore = { name: 'Isabel', score: 100000 }
scoreArray.push(newScore);


// Stringify the updated array before storing in `localStorage`
const updatedScoreString = JSON.stringify(scoreArray);
localStorage.setItem('score', scoreArray)