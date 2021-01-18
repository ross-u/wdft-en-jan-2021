const obj1 = { name: 'John', age: 25 };    // <234ioo>
const obj2 = { name: 'John', age: 25 };    // <556uui>

// Comparing the reference
console.log(obj1 == obj2);
console.log(obj1 === obj2);


// Convert the object to a string
const str1 = JSON.stringify(obj1);
const str2 = JSON.stringify(obj2);


console.log('str1', str1);

// Compare 2 strings if same
console.log(str1 === str2);



// Summary
// Primitive values (String, Number, boolean ...) are stored, passed and compared by value.

// Objects (Object, Array ...) are stored, passed and compared by reference.