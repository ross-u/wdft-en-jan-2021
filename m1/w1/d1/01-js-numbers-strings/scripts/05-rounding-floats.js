var num = 0.1 + 0.2;

console.log('num', num);

// 1.
// Using toFixed() method
// this method rounds the number and converts it to a string

var result = Number(num.toFixed(2));

console.log('result', result);


// 2.
var num2 = 0.1 + 0.2; // 0.3000000000004 * 100

var result2 = Math.round(num2 * 100) / 100;
console.log('result2', result2)



// Another approach
// 1 EUR = 100 cents
// 10 EUR = 1000 cents

const price = 99