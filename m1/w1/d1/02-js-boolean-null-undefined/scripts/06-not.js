// NOT operator `!`
// is used to negate/flip the Boolean value or an expression.

console.log(!true);


console.log(!false);


var MIN_AGE = 18;

var userAge = 15;


var isAdult = userAge >= MIN_AGE;


if (isAdult) {
  console.log('USER IS ALLOWED TO ENTER!')
}


if (!isAdult) {
  console.log("USER IS NOT ADULT. HASTA LUEGO")
}


console.log('bob');
console.log(!'bob');

console.log(0);
console.log(!0);
