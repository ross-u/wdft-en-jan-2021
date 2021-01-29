const student = {
  program: 'WebDev',
  city: 'Barcelona',
  age: 21,
  name: 'Bob',
  gender: 'M'
}


// OBJECT DESTRUCTURING

// OLD WAY - extracting values from an object
// const program = student.program; //  student['program']
// const city = student.city;
// const age = student.age;
// const name = student.name;

// NEW WAY
const { program, city, age, name } = student;


console.log('program', program);
console.log('city', city);
console.log('age', age);
console.log('name', name);


// Destructuring and renaming at the same time
const { name: fullName, gender } = student;

console.log('fullName', fullName);
console.log('gender', gender);
