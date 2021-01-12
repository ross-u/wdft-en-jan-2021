// length

const students = ['Arslan', 'Clement', 'Isabel', 'Soti'];
//                    0         1          2       3


console.log(students.length);

const lastEl = students[students.length - 1];
console.log('lastEl', lastEl)

// ARRAY METHODS
// .push() - adds element/s to the end of the array
students.push('Carlota');
students.push('Miguel', 'Javi');

const sergio = 'Sergio';

students.push(sergio);
console.log('students', students)


// .pop() - Removes the last element from an array (1 item)
// It removes the element from the array, mutates the array
// and it returns the removed element
const res = students.pop();

console.log('res', res);
console.log('students', students);


// .unshift()
// Add an element to the beginning of the array

students.unshift('Octocat');

console.log('\n students', students);


// .shift()
// Removes the first element from the beginning of the array (1 item)
// It removes the element from the array, mutates the array
// and it returns the removed element
const octocat = students.shift();

console.log('octocat', octocat)
console.log('\n students', students);


// .join()
// Creates a string out of an array
const str1 = students.join();
const str2 = students.join(' $$$ ')

// console.log('str1', str1);

// console.log('str2', str2);


const htmlLikeStr = '<p>' + students.join('</p><p>') + '</p>';


console.log('htmlLikeStr', htmlLikeStr)


str.split()
Used to split a string and convert it to an array


const namesStr = "Mark Susan Luca Jennifer Hanna Ross Anna";


const namesArr = namesStr.split(" ");
//const namesArr1 = namesStr.split("a");
//const namesArr2 = namesStr.split("");

console.log('namesArr', namesArr);