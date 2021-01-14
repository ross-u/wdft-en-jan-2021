const fruits = ["Watermelon", "Banana","apple", "Orange", "Apple", "orange", "Dragon Fruit", "banana", "Mango", "Cheries"];


// fruits.sort(function (a, b) {
//   const aUp = a.toUpperCase();
//   const bUp = b.toUpperCase();
  
//   if (aUp < bUp) {
//     return -1;  /* aUp is less than b by some ordering criterion */
//   }
//   if (aUp > bUp) {
//     return 1;   /* aUp is greater than b by some ordering criterion */
//   }
//   if (aUp === bUp) {
//     return 0;   /* aUp is equal to b */
//   }
// })


// console.log('fruits', fruits)



const words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];


words.sort((a, b) => {
  if (a.length > b.length) {
    return -1;
  }

  if (a.length < b.length) { // when word a is longer than b, switch order
    return 1;
  }
  return 0;
})

console.log('words', words);



const apartments = [
  { street: 'Aaa', city: 'Barcelona', price: 123},
  { street: 'Daa', city: 'Barcelona', price: 47},
  { street: 'Eaa', city: 'Barcelona', price: 58},
  { street: 'Aab', city: 'Barcelona', price: 123},
  { street: 'Faa', city: 'Barcelona', price: 145},
  { street: 'Gaa', city: 'Barcelona', price: 10},
  { street: 'Aad', city: 'Barcelona', price: 123},
]


apartments.sort(function (a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  if (a.price === b.price) { // If the price of a and b object is the same
    if (a.street > b.street) {  // Check the lexographic order
      return 1;
    }
    else {
      return 0;
    }
  }
})



console.log('apartments', apartments)