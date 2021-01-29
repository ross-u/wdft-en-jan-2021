// ENHANCED OBJECT LITERAL

const name = 'John';
const age = 21;
const city = 'Barcelona';



const obj = {
  name: name,
  age: age,
  city: city
}

const obj1 = {
  name,         //   name: name,
  age,          //   age: age,
  city          //   city: city
}


// We commonly do this in one line
const obj2 = { name, age, city };

// If the name of the created property, and the name
// of the variable storing value are the same,
// we can include only one


console.log('obj', obj);
console.log('obj1', obj1);
console.log('obj2', obj2);