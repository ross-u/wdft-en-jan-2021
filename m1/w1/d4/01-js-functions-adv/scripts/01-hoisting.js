/*

function subtractNumbers(num1, num2) {
  console.log(num1 - num2);
}

var addNumbers = undefined

*/


subtractNumbers(50, 10);

function subtractNumbers(num1, num2) {
  console.log(num1 - num2);
}




var addNumbers = function (num1, num2) { // only var declaration is hoisted, without the function
  console.log(num1 + num2);
}

addNumbers(99, 10);

