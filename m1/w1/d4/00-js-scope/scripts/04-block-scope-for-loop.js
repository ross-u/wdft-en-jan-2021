
const i = 'something important';

console.log(i);

for (let i = 0; i <= 10; i++){ 
  // let counter variable is scoped to the block `{}` of the `for` loop
  console.log(i)
}

console.log('After i => ', i)