// const
// `const` is used to declare a variable we want to remain unchanged, constant
// `const` forbids the assignment of a new value after the variable creation
// `const` must be assigned initial value, or it will throw error


const name = 'Uros';

// name = 'Anna';  // 🚨 TypeError: Assignment to constant variable;


const city = 'Barcelona';

const address = undefined;



// let
// `let` is used to declare variables whose value we plan to change later
// `let` can be declared empty, without an inital value
// `let` variable cant be re-declared (safer than var)

let price;
price = 123;
price = 500;

console.log('price', price);

// let price;


// typeof operator

console.log(typeof price);
console.log(typeof name);
console.log(typeof address);



