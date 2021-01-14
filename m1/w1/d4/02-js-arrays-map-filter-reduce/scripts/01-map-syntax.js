const numbers = [45, 34, 100];


const doubledNums = numbers.map(function (el) {
  return el * 2;
})

const strings = numbers.map(function (el) {
  return String(el)
})


const pairs = numbers.map( function (el) {
   return [ el, el * 2 ]
})



console.log('numbers', numbers);

console.log('doubledNums', doubledNums);

console.log('strings', strings);

console.log('pairs', pairs)
