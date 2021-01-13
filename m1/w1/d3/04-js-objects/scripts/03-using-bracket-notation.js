const obj = {
  name: 'John',
  age: 30,
  knowsJS: false,
  car1: 'bmw',
  car2: 'toyota'
}

const propName = 'knowsJS';

function getPropName() { 
  return 'car2'
}


console.log(obj[ propsName ])
console.log(obj[ getPropName()  ])