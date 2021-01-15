class Example {
  constructor(/* values for the new object */) {
    // Shape of the new object
  }
}


class Car {
  constructor(brandV, modelV, averageSpeedV) {
    // this = {}
    this.brand = brandV;
    this.model = modelV;
    this.averageSpeed = averageSpeedV;
    this.mileage = 0;

    // return this
  }

}


const bmw = new Car('BMW', 'Series 3 M3', 90);
const toyota = new Car('Toyota', 'Prius', 60);

const seat = new Car('Seat', 'Ibiza', 60);

seat.calculateMillage = function () {}


console.log('bmw', bmw);
console.log('toyota', toyota);
console.log('seat', seat);
