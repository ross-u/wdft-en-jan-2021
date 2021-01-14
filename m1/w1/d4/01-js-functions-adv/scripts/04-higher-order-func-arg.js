
function eatDessert() {
  console.log("Eating the dessert 🍰");
}


function startEatingDinner( func ) {  
  // var func = f()

  console.log("Eating the dinner 🍽");
  console.log("Finished eating dinner!");

  
  func()
  
}




startEatingDinner(  eatDessert   );


