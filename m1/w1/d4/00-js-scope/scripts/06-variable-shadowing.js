var x = 5;      // Variable in outer scope

function foo() {
  // Inner variable with the same name is shadowing the outer variable
  // It takes precedence over the outer variable with the same name
  
  var x = 100;  // Variable in Local scope
  console.log(x);  // ==> ?
}
