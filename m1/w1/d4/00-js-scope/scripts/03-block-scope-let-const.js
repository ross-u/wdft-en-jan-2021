
if (true) {
  let a = 'I am let';
  const b = 'I am const';

  var c = 'I am var';
}


console.log('Outside => var c', c); // Accessible - created in global scope


console.log('Outside => a', a); // block scoped - can't be accessed
console.log('Outside => b', b); // block scoped - can't be accessed


