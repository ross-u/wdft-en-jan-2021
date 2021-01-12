function sumNumbers(num1, num2) {
  const sum = num1 + num2;

  console.log('Before');
  
  return sum;

}

// Function always returns something
// If `return` is not specified, function will return `undefined` by default

const result = sumNumbers(1, 2);

console.log('result', result)

