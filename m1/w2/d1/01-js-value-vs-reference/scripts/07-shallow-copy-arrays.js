// SHALLOW COPY ARRAYS

const mixedArr = [1, 2, 3, 'Hello', 'Ironhack'];
const mixedArrRef = mixedArr;

// array concat
const arr1 = [].concat(mixedArr);
console.log('arr1', arr1); 


// array slice
const arr2 = mixedArr.slice();
console.log('arr2', arr2);


// spread operator ... 
const arr3 = [...mixedArr];
console.log('arr3', arr3)


// Object assign

const arr4 = Object.assign([], mixedArr);
console.log('arr4', arr4);

console.log(mixedArr === arr4);
