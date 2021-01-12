
const students = ['Arslan', 'Clement', 'Isabel', 'Soti'];

// .slice(start, end)
// Copies the elements from an array. Doesn't mutate the original array
// Returns an array

// Copy entire array
const studentsCopy = students.slice();
console.log('studentsCopy', studentsCopy);

const firstTwo = students.slice(0, 2);
console.log('firstTwo', firstTwo);


const secondEl = students.slice(1, 2);
console.log('secondEl', secondEl);


const lastTwo = students.slice(-2);
console.log('lastTwo', lastTwo);


console.log('students', students);


// .splice( start, deleteCount )
// Removes the elements from an array. It mutates the original array.
// Returns an array

const teachers = ['Julian', 'Capucine', 'Marta', 'David', 'Axel', 'Bob', 'Pablo'];

const capucineInArr = teachers.splice(1, 1);
console.log('capucineInArr', capucineInArr);

console.log('teachers', teachers)


// Remove elements from the end
const davidInArr = teachers.splice(-2);
console.log('davidInArr', davidInArr);
