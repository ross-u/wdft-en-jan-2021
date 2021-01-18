//                                              { name: 'John', age: 50 }


const person1 = { name: 'John', age: 50 };

const person2 = person1;   // What is being copied here ?



person2.name = 'Mark';
console.log(person1); // >> What is the result ?


person1.age = 21;
console.log(person2); // >> What is the result ? 
