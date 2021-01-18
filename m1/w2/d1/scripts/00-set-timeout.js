
// setTimeout( cb, delay )
// clearTimeout( timerId )

const timeoutId = setTimeout(function () {   // asynchronously
  console.log('First')
}, 0);


console.log('Second');  // synchronously

console.log('Third');  // synchronously






