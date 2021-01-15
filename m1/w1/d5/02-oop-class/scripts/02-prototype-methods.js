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

  // methods created after the constructor block will be added to the "prototype" object
  // regular function method:
  drive () {
    console.log('Driving ' + this.model )
  }

}

// Car.prototype = {  }   - prototype is created automatically by JS on each "class"

// Purpose of "prototype" object is to store methods that we want to share with
// objects (instances) of the "class"


const bmw = new Car('BMW', 'X5');
const lexus = new Car('Lexus', 'L300');


console.log('bmw', bmw);
console.log('lexus', lexus);


console.log(bmw.__proto__ === Car.prototype);


bmw.drive();









