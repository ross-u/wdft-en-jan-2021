const numbers = [1, 2, 3, 4, 5, 6];


// arr.filter( function (el, [index], [arr] ) {})

const filteredNumbers = numbers.filter(function (el) {

  // if `true` returned, element will be included in new array
  // if `false` returned, element will be skipped (not included)

  // if (el > 3) {
  //   return true
  // }

  return el > 3;
})

// With the concise arrow function
// const filteredNumbers = numbers.filter( (el) => el > 3 )


console.log('numbers', numbers);
console.log('filteredNumbers', filteredNumbers);


const evenNumbers = numbers.filter(function (el) {
  if (el % 2 === 0) {
    return true;
  }

  // Shorter:
  // return el % 2 === 0
})


console.log('evenNumbers', evenNumbers)