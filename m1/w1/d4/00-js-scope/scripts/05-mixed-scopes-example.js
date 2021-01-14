const x = 1;  // global

if (true) {
  var g = 2;  // global
}


function outer() {      // global
  var o = 3;      // local


    
  if (true) {
    const b = 'B';  // block

    console.log(x)
  }

  

} 


outer()
