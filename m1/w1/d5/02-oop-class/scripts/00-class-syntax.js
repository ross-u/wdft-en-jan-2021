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


const bmw = new Car('BMW', 'X5');
const lexus = new Car('Lexus', 'L300');

console.log('bmw', bmw);
console.log('lexus', lexus);


bmw.getDescription();
lexus.getDescription();

