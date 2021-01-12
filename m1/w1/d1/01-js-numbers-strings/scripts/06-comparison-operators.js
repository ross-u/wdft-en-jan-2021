
console.log(2 == 5);
console.log('bob' == 'bob');


// Difference between ==  and ===
// == loose comparison (allows coercion, compares only values)
console.log(  5 == 5  );
console.log(5 == '5');


// === strict comparison (compares the values by value and type)
console.log(5 === '5');
console.log( 10 === 10);



// Always use ===


// !==
console.log(5 !== 10);


// >   <   >=   <=
console.log(5 > 1);
console.log(5 < 1);

console.log((10 + 5) >= 2);
console.log( 3 <= 3  );



// We can also compare values stored in variables
const num1 = 5;
console.log(num1 > 3);



const total = (12 + 5) * 3; // 51
console.log( total > 100 );






