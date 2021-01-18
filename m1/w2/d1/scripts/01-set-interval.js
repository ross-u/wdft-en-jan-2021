// setInterval( cb, delay )

// Calls a function repeatedly with a fixed interval 
// between each call


let counter = 0;

function printCounter() {
  counter++;
  console.log(counter);

  if (counter === 10) {
    clearInterval(intervalId);
  }
}


// Start the interval counter, and save the interval id
// in order to be able to cancel it later
const intervalId = setInterval(printCounter, 1000);

console.log('intervalId', intervalId);


