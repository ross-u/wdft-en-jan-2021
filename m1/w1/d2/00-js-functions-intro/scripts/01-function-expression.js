// Function Declaration
function sumNumbers1(num1, num2) {
  const sum = num1 + num2;
  console.log('sum', sum);
}


// Function Expression
const sumNumbers2 = function (num1, num2) {
  const sum = num1 + num2;
  console.log('sum', sum);
}

// Invoke/call/run the function
sumNumbers2(10, 90);
sumNumbers2(2, 3);
sumNumbers2(999, 1);
sumNumbers2();
