
const obj = {
  name: 'Bob',
  age: 30,
  sayHi: function (name) {
    const nameUpper = name.toUpperCase();

    console.log(`Hello ${nameUpper}`);
  },
  address: {
    city: 'Barcelona',
    zip: 08012
  }
}

// Dot notation
const bio = `${obj.name} ${obj.age}`; // obj.name + ' ' + obj.age
console.log('bio', bio)


// Bracket Notation
const address = obj['address'];  //  obj.address
console.log('address', address);


// Access value by evaluating variable via bracket notation
const propName = 'city';

const city = obj.address.city;
// const city = obj['address']['city'];
// const city = obj['address'][propName];
// const city = obj.address[propName];
console.log('city', city)

obj.sayHi('bob');
obj['sayHi']('sarah');
