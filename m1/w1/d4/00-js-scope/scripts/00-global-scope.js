var first = 'john';  // global variables
var last = 'carr';   // global variables


function printName() {
  // Code from the function can access variables from the Global Scope
  console.log(first + ' ' + last);
}


printName();


// Values (variables, functions) created in the global scope
// can be accessed from anywhere in the program