const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// sort() ascending .o:0 - shorthand

// numbers.sort(function (a, b) {
//   return a - b;
// })

numbers.sort((a, b) => a - b);

console.log("numbers", numbers);

const numbers2 = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// numbers2.sort(function (a, b) {
//   return b - a;
// })

numbers.sort((a, b) => b - a);

console.log("numbers2", numbers2);
