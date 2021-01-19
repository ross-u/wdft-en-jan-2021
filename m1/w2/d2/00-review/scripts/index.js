// setTimeout(cb, delay)
// It runs the provided callback function after the given delay, once
// the setTimeout function, returns the timeout id used to cancel the timeout counter in needed


// function printHello() {
//   console.log('Hello')
// }

// setTimeout(function () {
//   console.log('Bye')
// }, 1000);




class Chronometer {
  constructor() {
    // this = { currentTime: 0, intervalId: 0, __proto__: }
    this.currentTime = 0;
    this.intervalId = 0;
    // return this
  }

  incTime() {
    this.currentTime += 1;
  }


  startClick() {
    // this ? 
    this.intervalId = setInterval( () => {
      console.log('this', this);
      this.incTime()
    }, 1000) 

    // printThis() { console.log(this) }
    // const boundPrintThis = printThis.bind(this);
    // this.intervalId = setInterval( boundPrintThis, 1000) 
  }
}
// Chronometer.prototype = {  startClick()  }



document.addEventListener('click', function () { })

// setInterval()  setTimeout()  addEventListener() - registered callback
// that callback function is ran by Window (by JavaScript itself)


const chrono = new Chronometer();


// chrono.startClick();





