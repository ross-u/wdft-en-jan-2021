
var i = 'something important';

console.log(i);

for (var i = 0; i <= 10; i++){ // Solution => use `let`
  console.log(i)
}

// `var` variables created outside of functions are always global
// this can cause issues with for loops, and overwrite global values

console.log('After => i ', i)