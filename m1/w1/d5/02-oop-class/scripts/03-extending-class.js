// Class names start with capital letter

class Car {
  constructor(brandV, modelV) {
    this.brand = brandV;
    this.model = modelV;
    this.getDescription = function () {
      console.log(this.brand + ' ' + this.model)
    }
  }

  drive () {
    console.log('Driving ' + this.model )
  }
}
//  Car.prototype = {   drive()   }


class HybridCar extends Car {
  constructor(brandV, modelV, engineTypeV) {
    super(brandV, modelV);
    // this.brand
    // this.model
    this.engineType = engineTypeV;
  }

}
// HybridCar.prototype = {     }



const tesla = new HybridCar('Tesla', '3', 'electric');
console.log('tesla', tesla)

tesla.drive();



// static
// getters
// setters




