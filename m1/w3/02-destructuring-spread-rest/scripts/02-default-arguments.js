// FUNCTION DEFAULT ARGUMENTS


function multiplyBy(num, multiplier = 1) {

  return num * multiplier;
}

const res = multiplyBy(2);

console.log('res', res);





function sayHello(name = 'user', city = 'our city') {
  console.log(`Hello ${name}, welcome to ${city}!`);
}


sayHello('Anna', 'Barcelona');
sayHello('David', 'Berlin');

sayHello();

