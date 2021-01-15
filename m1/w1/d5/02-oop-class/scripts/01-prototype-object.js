// Class names start with capital letter

class Car {
  constructor(brandV, modelV) {
    // this = {}
    this.brand = brandV;
    this.model = modelV;
    this.getDescription = function () {
      console.log(this.brand + ' ' + this.model)
    }

    // return this
  }
}


// Car.prototype = {  }   - prototype is created automatically by JS on each "class"


// Purpose of "prototype" object is to store methods that we want to share with
// objects (instances) of the "class"


Car.prototype.drive = function () {
  console.log('Driving ' + this.model )
}

Car.prototype.market = 'Europe';


const bmw = new Car('BMW', 'X5');
const lexus = new Car('Lexus', 'L300');


bmw.drive();













/*
const wd = 'RL'; // 'RL'

if (wd === 'RL') {
  bmw.getDescription = function () {
    console.log((this.brand + ' ' + this.model).split('').reverse().join(''))
  }
  
  lexus.getDescription = function () {
    console.log((this.brand + ' ' + this.model).split('').reverse().join(''))
  }
}



*/




