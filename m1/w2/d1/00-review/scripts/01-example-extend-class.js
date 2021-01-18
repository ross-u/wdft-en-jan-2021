class Product {
  constructor(name, price) {
    // this = {}
    this.name = name;
    this.price = price;
    // return this
  }

  printDetails() {
    // <123abc>
    console.log(this.name + " - " + this.price);
  }
}
// Product.prototype = {  printDetails()  }

class Toy extends Product {
  constructor(name, price, brand, country) {
    super(name, price);
    // Product will create properties `name` and `price`
    this.brand = brand;
    this.country = country;
  }

  printDetails() {
    console.log("Toy: " + this.name + " - " + this.price);
  }
}
// Toy.prototype = {  printDetails()  }

const lego = new Toy("Lego cubes", 20, "LEGO", "Spain");
console.log("lego", lego);

lego.printDetails();

class Airplane {
  constructor(name, price, brand, model, capacity) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.model = model;
    this.capacity = capacity;
  }
}

// Copy the method that exist in another prototype object
// to the prototype object of the Airplane
Airplane.prototype.printDetails = Product.prototype.printDetails;

const b737 = new Airplane("Max", "20m", "Boeing", "737", 250);

console.log("b737", b737);

b737.printDetails();
