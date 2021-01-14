const fruits = ["Apple", "Banana", "Pear", "Orange", "Coconut", "Mango", "Kiwi"];


// splice( startIndex, deleteCount )  mutates the original array, removes the items and it 
// returns an array with the removed items


const arr1 = fruits.splice(0, 2);
console.log('arr1', arr1);


console.log('fruits', fruits);

// Inserting new elements to an array
fruits.splice(1, 0, 'Lemon', 'Watermelon');


console.log('fruits', fruits);