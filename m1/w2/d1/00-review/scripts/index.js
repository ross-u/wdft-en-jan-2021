const house = {
  type: "duplex",
  color: "red",
  address: "Carrer De Sardenya",
  city: "Barcelona",
  number: 190,

  printFullAddress: function (direction) {
    console.log(`${direction}: ${this.address} ${this.number} - ${this.city}`);
  },
};

house.printFullAddress("TO");

const office = {
  address: "Carrer De Pamplona",
  city: "Barcelona",
  number: 96,
};

const school = {
  address: "Carrer De Diputacio",
  city: "Barcelona",
  number: 343,
};

// call(),apply()   - Used to call a function only once with a custom this/context
house.printFullAddress.call(office, "FROM");

// bind() - Used to create a new function, out of an existing one, with a custom this/context
// where this/context  and arguments will be bound (locks it) to the new function

const customSchoolPrint = house.printFullAddress.bind(school);

house.printFullAddress = function () {
  console.log("CHANGED");
};

customSchoolPrint();
