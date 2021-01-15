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


// printThis();


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
// Used when working with Events (event callbacks), in class and in React
const actor = {
  name: 'Bob The Ironhacker',
  age: 33,
  printThisRegular: function () {
    console.log('function this -->', this); // this === actor {}

    const arrowInside = () => {
      console.log('arrowInside this -->', this); // this ==> actor {}
    }

    arrowInside();
  },
  printThisArrow: () => {
    console.log('arrow this -->', this)
  },
}

// actor.printThisRegular();
// actor.printThisArrow()




// 5. We can use JS methods call(), apply() or bind()
// To change the value of "this" in a function

// call(), apply()  - used to invoke a function once, with a custom "this" value
// bind() - used to create a new function, out of an existing one, and give it custom "this" value

const house = {
  size: 100,
  street: 'Carrer de Pamplona',
  streetNo: 96,
  printAddress: function (direction) {
    console.log(direction + ': ' + this.street + ' - ' + this.streetNo);
  }
}

const storage = {
  purpose: 'amazon stroage',
  street: 'Carrer De Sardenya',
  streetNo: 123
}

const school = {
  street: 'SCHOOL STREET',
  streetNo: 8888,
}

house.printAddress('FROM')
house.printAddress.call(storage, "TO");
console.log('house', house);


const boundPrintAddress = house.printAddress.bind(school, "SCHOOL MAIL");

boundPrintAddress();

console.log('school', school)
