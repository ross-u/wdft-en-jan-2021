// DESTRUCTURING ARRAYS
const favoriteBands = ['RHCP', 'Rage Against The Machine', 'Pink Floyd', 'U2', 'Guns & Roses'];


// OLD WAY
const firstBand = favoriteBands[0];
const secondBand = favoriteBands[1];
const thirdBand = favoriteBands[3];


const [a, , c, d, e, f] = favoriteBands;

// Array destructuring uses the order of the elements
// In order to skip a certain element we should provide an empty space(as in above example).

console.log('a', a);

console.log('c', c);
console.log('d', d);
console.log('e', e);

console.log('f', f);

