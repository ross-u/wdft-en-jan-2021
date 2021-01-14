const arr = ['a', 'b', 'c'];


// arr.forEach( function(el, [index], [originalArr ] ) {}   )


arr.forEach(function ( char, i ) {
  
  console.log(i, char);
})



arr.forEach( ( char, i ) => {
  console.log(i, char);
})



const employees = [
  { name: 'bob', salary: 1600 },
  { name: 'sarah', salary: 1800 },
  { name: 'anna', salary: 2300 },
  { name: 'Mark', salary: 4500 },
  { name: 'bobby', salary: 2300 },
]

let total = 0;

employees.forEach((oneEmployee, i) => {

  total += oneEmployee.salary;
})

console.log('total', total)