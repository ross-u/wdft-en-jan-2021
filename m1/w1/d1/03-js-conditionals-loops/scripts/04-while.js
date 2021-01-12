var i = 0;

console.log('before');


while (i <= 20) {
  if ( i % 2 === 0) { // check if the number is even
    console.log(i);
  }


  // i = i + 1; // increment the counter to ensure we reach the end condition
  // i += 1;
  i++;
}

console.log('after');

