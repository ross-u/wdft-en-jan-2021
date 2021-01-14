/* 

const reduced = array.reduce( function (accumulator, el, [index], [originalArr] ){
}, initialValue);

*/


const numbers = [10, 19, 41 ];


//
const result = numbers.reduce(function (total, el) {
  const updatedTotal = total + el;
  
  return updatedTotal;

  // Shorter:
  // return total + el;

}, 0)





console.log('result', result)