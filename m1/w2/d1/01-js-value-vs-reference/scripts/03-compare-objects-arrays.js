// When comparing 2 values or variables storing objects (object/array)
// JS compares only the reference of that object (address in memory)

const arr1 = [1, 2];   // <123abc>
const arr2 = [1, 2];   // <390xyz>


// Even if the arrays contain identical elements
console.log(arr1 == arr2);
console.log(arr1 === arr2);



const obj1 = { name: 'John', age: 25 };    // <234ioo>
const obj2 = { name: 'John', age: 25 };    // <556uui>

console.log(obj1 == obj2);
console.log(obj1 === obj2);



