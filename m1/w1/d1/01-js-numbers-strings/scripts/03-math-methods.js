// Math object

// Math.round() = rounding numbers
var result1 = Math.round(4.7); // returns 5
var result2 = Math.round(4.4); // returns 4
var result3 = Math.round(4.5); // if .5 it rounds up  - returns 5


console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);


// Math.ceil()  / Math.floor()
var result4 = Math.ceil(2.001) // rounds up to the nearest integer
console.log('result4', result4);


var result5 = Math.floor(9.9999); // rounds down to the nearest integer
console.log('result5', result5);



// Math.min()   /   Math.max()  - Take numbers as arguments and return biggest or lowest number
var min = Math.min(0, 150, 30, 20, -55, -100);

var max = Math.max(0, 150, 30, 20, -55, -100);

console.log('min', min);
console.log('max', max);


// Math.random() // returns a random number between 0 and 0.99 (1 is excluded)

console.log('Math.random()', Math.random())


