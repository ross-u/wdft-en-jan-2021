var globalVar = 'I am global';  // global 

function print() {
  var localVar = 'I am local';  // local

  console.log(globalVar);
  console.log(localVar);
}

print();

// local variables are not accessible from outside scopes
// console.log(localVar); // ERROR


if (true) {
  var x = 'var from if';
}


console.log(x);

// var variables created outside of functions, have global scope
// even if they are created in other constructs such as if/else, for loop

