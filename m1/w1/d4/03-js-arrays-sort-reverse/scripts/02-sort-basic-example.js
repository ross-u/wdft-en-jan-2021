const fruits = ["Watermelon", "Banana", "Orange", "Apple", "Dragon Fruit", "banana", "Mango", "Cheries"];

// Works as expected ( taking into consideration lowercase / uppercase order)
fruits.sort();
console.log('fruits', fruits);



// ! !
// It doesn't work as expected with numbers
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();
console.log('numbers', numbers);




const mixed = [22, 23, 99, 68, 1, 0, ':', '!', 9, 112, 223, 64, 18];
mixed.sort();


console.log('mixed', mixed);