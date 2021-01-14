
function muliplyBy( multiplicator ) {
  
  return function (num) {
    console.log(num * multiplicator);
  }
}



const byTwo = muliplyBy(2); //  muliplyBy(2)(5)
const byTen = muliplyBy(10); // muliplyBy(10)(99)


console.log( byTwo(5) )
  
console.log( byTen(99)  )

