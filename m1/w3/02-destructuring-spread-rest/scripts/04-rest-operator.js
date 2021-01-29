// REST OPERATOR  ...
// Used inside of the function to collect arguments of a function


function sum(a, b, c) {
  console.log(this);
  
  console.log(arguments);
}


sum(123, 333, 663);



const arrowSum = (...rest) => {
  // rest = []  

  let total = 0;

  rest.forEach((value) => {
    total += value;
  })
  console.log('total ->', total);
}


arrowSum(123, 123, 123, 123, 456565656);



function doMath(operation, ...rest) {
  let total = 0;

  rest.forEach((v) => {
    if (operation === 'sum'){ total += v}
    else if (operation === 'subt') { total -= v };
  })

  console.log('doMath total ->', total);

}

doMath('sum', 23, 23, 456, 564, 678, 678);
doMath('subt', 23, 23, 456, 564, 678, 678);