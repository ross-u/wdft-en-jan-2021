// `arguments`  - Available only in functions created with `function` keyword
// `arguments` - array-like object. If needed to use array methods, convert it to an array first


function printArgs(a, b, c) {
  console.log(arguments);

  const argsArr = Array.from(arguments);

  argsArr.forEach(function (el) {
    console.log(el)
  })

}

printArgs(10, 34, 5, 56, 99)




/* 

function sum(a, b) {
  return a + b;
}


console.log(sum(5, 6, 10, 10, 55))


function dynamicSum() {
  const args = Array.from(arguments);

  let sum = 0;

  args.forEach((el) => {
    sum += el;
  })

  return sum;
}


console.log(dynamicSum(5, 6, 10, 10, 55)) 
*/