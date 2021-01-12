// Naming a function
function verbNoun() { }


function divideNums() { }

function printName(firstName, lastName) { }



// Handling code in the function
// Don't change the passed arguments
// Instead create new variables
function printFullName(firstName, lastName) {

  const firstNameUp = firstName.toUpperCase();
  const lastNameUp = lastName.toUpperCase();

  console.log(firstNameUp + ' ' + lastNameUp);
}

printFullName('Bob', 'Ironhacker')