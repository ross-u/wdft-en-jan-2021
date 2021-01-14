function incrementInside() {
  let num = 0;

  num++;
  num++;

  console.log('block scope num', num)
}

incrementInside();

console.log('\n** Function execution ends **');
console.log(' Local/block variables are deleted **');


incrementInside();



// Every function call creates it's own new function scope with new variables
// Once the function finishes executing, the scope and the variables
// inside are destroyed.