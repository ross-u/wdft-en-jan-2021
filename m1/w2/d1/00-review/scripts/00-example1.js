class Product {
  constructor(name, price) {
    // this = {}
    this.name = name;
    this.price = price;
    // return this
  }

  printDetails() {
    console.log(this.name + " - " + this.price);
  }
}

// Product.prototype = {   printDetails(), storeName, priceToEur()   }

Product.prototype.storeName = "Amazon";

Product.prototype.priceToEur = function () {
  console.log(this.price + "  €");
};

const chair = new Product("chair", 100);
const mac = new Product("Macbook Pro 13", 2000);
const table = new Product("Table - white", 120);

console.log("Product.prototype", Product.prototype);

mac.printDetails();
mac.priceToEur();

table.printDetails();
table.priceToEur();
