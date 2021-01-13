const items = {
  jacket: 40,
  pants: 23,
  glasses: 12
}


// Object.keys()
// It returns an array containing object's key names

const keyNamesArr = Object.keys(items);
console.log('keyNamesArr', keyNamesArr);


// Object.values()
// It returns an array containing object's values


const valuesArr = Object.values(items);
console.log('valuesArr', valuesArr);


const entries = Object.entries(items);
console.log('entries', entries);