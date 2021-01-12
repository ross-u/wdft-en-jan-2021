// Function Expression
const sumNumbers2 = function (num1, num2) {
  const sum = num1 + num2;
  return sum;
}


// Arrow Function - ES6
const sumNumbers3 =  (num1, num2) => {
  const sum = num1 + num2;
  return sum;
}

const result = sumNumbers3(10, 55);
console.log('result',result);



// Concise Arrow Function
// - Allows us to omit curly brackets `{}` and `return` keyword
// and put the code in one line
const sumNumbers4 = (num1, num2) => num1 + num2;

const result2 = sumNumbers4(99, 1);
console.log('result2', result2);
