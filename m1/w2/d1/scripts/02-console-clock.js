const SECOND = 1000;
// let counter = 0;


function concatZero(num) {
  //  12   ==>  "012"  ==>  "12"
  //   5   ==>  "05"   ==>  "05"
  return ("0" + num).slice(-2);
}

function updateClock() {
  // Date class returns a date object storing time when the instance was created
  // enables us to extract current time or format it in certain way
  const dateObj = new Date();

  const seconds = dateObj.getSeconds();
  const minutes = dateObj.getMinutes();
  const hours = dateObj.getHours();

  const timeNow = `${ concatZero(hours) } : ${concatZero(minutes) } : ${concatZero(seconds) }`;

  console.log('timeNow', timeNow);
  // If we want to clear the interval and stop the clock after certain count
  // counter++;

  // if (counter > 5) {
  //   clearInterval(intervalId);
  // }
}


// updateClock()

const intervalId = setInterval(updateClock, SECOND);