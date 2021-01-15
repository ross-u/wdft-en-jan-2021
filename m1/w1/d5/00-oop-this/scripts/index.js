// THIS
// this - is a special value, that exists inside of the functions

// value of "this" changes depending on how the function is used/called. 
// There are 5 different scenarios, and in each the value of "this" behaves different



// 1. When using keyword "new" - in class
// The value "this" in class, represents the new object that class will create 
//  when called ==>   new ClassName()

class Car {
  constructor(brandV, modelV, averageSpeedV) {
    // this = {} 
    console.log(this);

    this.brand = brandV;
    this.model = modelV;
    this.averageSpeed = averageSpeedV;
    this.mileage = 0;

    // return this
  }

}

const car1 = new Car('Toyota', 'Prius', 50);


// 2. When using "this" inside of the free function ("function" that is not a method)
// The value of "this" in free function hold window/global object. 

function printThis() {
  console.log(this);
}


printThis();


// 3.  "this" in methods ("function" stored in the objects)
// The value of "this" in the method, represents the object where the method is located.

const person = {
  name: 'John',
  age: 30,
  country: 'Scotland',
  printThisM: function () {
    console.log(this);
  },
  printBio: function () {
    console.log(this.name + ' - ' + this.age + ' - ' + this.country)
  }
}

// person.printThisM();
// person.printBio();


// 4. Arrow function doesn't have value "this" available inside it.
// Arrow function takes the value "this" from the surrounding scope (place)
// where it was created

const actor = {
  name: 'Bob The Ironhacker',
  age: 33,


  printThisRegular: function () {
    console.log('function this -->', this); // this === actor {}

    const arrowInside = () => {
      console.log('arrowInside this -->', this); // this ?
    }

    arrowInside();
  },
  printThisArrow: () => {
    console.log('arrow this -->', this)
  },
}

actor.printThisRegular();

// actor.printThisArrow()