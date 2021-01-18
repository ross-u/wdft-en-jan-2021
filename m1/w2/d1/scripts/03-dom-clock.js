const SECOND = 1000;
// let counter = 0;

const hoursSpan = document.querySelector('#hours-span');
const minSpan = document.querySelector('#min-span');
const secSpan = document.querySelector('#sec-span');


function concatZero(num) {
  //  12   ==>  "012"  ==>  "12"
  //   5   ==>  "05"   ==>  "05"
  return ("0" + num).slice(-2);
}

function updateClock() {
  const dateObj = new Date();

  const seconds = dateObj.getSeconds();
  const minutes = dateObj.getMinutes();
  const hours = dateObj.getHours();

  const hoursFormated = concatZero(hours);
  const secondsFormated = concatZero(seconds);
  const minutesFormated = concatZero(minutes);

  hoursSpan.innerHTML = hoursFormated;
  minSpan.innerHTML = minutesFormated;
  secSpan.innerHTML = secondsFormated;
}


// updateClock()

const intervalId = setInterval(updateClock, SECOND);