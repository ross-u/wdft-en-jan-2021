
function higherFunc() {

  return function (name) {
    console.log(name)
  }
  
}


// const printName = higherFunc();
const result = higherFunc();
result('Anna')


higherFunc()



// returns the anonymous function and assigns it to `printName` variable

// printName('Aleix');
// `printName` variable is now the anonymous function `higherFunc` returned