// Debugging example

function add(n1, n2) {
  return n1 + n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  n1 / n2;
}

function make_calc(n1, n2, operation) {
  if (operation == "add") {
    return add(n1, n2);
  }
  if (operation == "subtract") {
    subtract(n1, n2);
  }
  if (operation == "multiply") {
    return multiply(n1, n2);
  }
  if (operation == "divide") {
    return divide(n1, n2);
  }
}

function init() {
  var result = 0;

  // debugger;
  var sum = make_calc(2, 3, "add"); // 5
  var subs = make_calc(2, 3, "subtract"); // -1
  var mult = make_calc(2, 3, "multiply");
  var div = make_calc(2, 3, "divide");

  result = sum + subs + mult + div;

  console.lg(result);
}

init();
