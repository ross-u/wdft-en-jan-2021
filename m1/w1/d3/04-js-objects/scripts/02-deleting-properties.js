const obj = {
  name: 'John',
  age: 30,
  knowsJS: false,
  car1: 'bmw',
  car2: 'toyota'
}

console.log('before obj', obj);


delete obj.name;
console.log('1 obj', obj);

delete obj['age'];
console.log('2 obj', obj);


