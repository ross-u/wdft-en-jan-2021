/* 
var obj = {
  key: value,
  key: value
}
*/

const person3 = {
  firstName: 'John',
  age: 40,
  knowsJS: false,
  sayHi: function (name) {
    console.log('Hello there ' + name);
  },
  address: {
    city: 'Greenock',
    country: 'Scotland'
  },
  friends: [],
}

// Adding properties to an object
// Dot notation
person3.nickname = 'Johnny';

// Bracket notation
// person3.age
person3['age'] = 33;


// Accessing property values
// Dot notation
console.log(person3.firstName);
person3.sayHi('Carlota');

// Bracket notation
console.log(person3['knowsJS'])

person3.address.zipCode = 12312;