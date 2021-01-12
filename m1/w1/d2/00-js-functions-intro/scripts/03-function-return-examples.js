// Functions can return any value (any data type) from within


function returnObj() {
  // const obj = { name: 'Bob', age: 30 };
  // return obj
  return { name: 'Bob', age: 30 }
}

function returnArr() {
  // const arr = [1, 2, 3];
  // return arr;
  return [1, 2, 3];
}

function returnStr(name) {
  return "Hello " + name;
}

function returnNum(num1, num2) {
  return num1 / num2;
}


function returnFunction() {
  return function () {}
}

console.log(returnObj());
console.log(returnArr());
console.log(returnStr('Julian'));
console.log(returnNum(15, 3))
console.log( returnFunction() );

