// OR   ||
// Returns true when even one of the operands is true


var expr1 = false || false; // false


var expr2 = true || false; // true
var expr3 = false || true; // true
var expr4 = true || true; // true


console.log('expr1', expr1)
console.log('expr2', expr2)
console.log('expr3', expr3)
console.log('expr4', expr4)



var didPrework = true;
var submittedRover = true;

var submittedNPM = false;
var submittedSkydive = true;


var studentReady = (didPrework && submittedRover) && (submittedNPM || submittedSkydive);
//                   false         true                  true           true
//                            false                              true

console.log('studentReady', studentReady)