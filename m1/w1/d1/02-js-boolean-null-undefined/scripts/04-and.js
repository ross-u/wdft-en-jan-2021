// &&


var expr1 = true && true; // true

var expr2 = false && true; // false
var expr3 = true && false; // false
var expr4 = false && false; // false

console.log( expr1 )
console.log( expr2 )
console.log( expr3 )
console.log(expr4)



var MIN_AGE = 18;
var BALANCED_NEEDED = 100;


var userAge = 18;
var userWallet = 101;

var allowEntry = (userAge >= MIN_AGE) && (userWallet > BALANCED_NEEDED) && (2 == 2);
//                   17  >   18           101      >    100
//                    false                     true
//                                false                                      true


console.log('allowEntry', allowEntry)