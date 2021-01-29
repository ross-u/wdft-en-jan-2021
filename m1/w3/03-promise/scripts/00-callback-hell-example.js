setTimeout(function () {
  console.log('first Timeout');


  setTimeout(function () {
    console.log('second Timeout');


    setTimeout(function () {
      console.log('third Timeout');
      
    }, 1000)
  }, 1500)
}, 2000)