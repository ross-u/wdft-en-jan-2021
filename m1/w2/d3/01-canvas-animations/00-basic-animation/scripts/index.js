const canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

const button = document.querySelector("button");

// 4 Animation Steps:

// 1. Update the element position and state

// 2. Clear the canvas - `.clearRect()`

// 3. Draw the shape - `.fillRect()` `.drawImage()`

// 4. Repeat -- loop over

// `window.requestAnimationFrame( function() {} )`
// to cancel the last call we use `cancelAnimationFrame(animationId)`;

ctx.fillStyle = "red";

// Draw the elements - initially
// ctx.fillRect(x, y, width, height);
ctx.fillRect(100, 0, 50, 50);
ctx.fillRect(250, 0, 50, 50);
ctx.fillRect(400, 0, 50, 50);

let speed1 = 0;
let speed2 = 0;
let speed3 = 0;

function updateCanvas() {
  // Update state and position
  if (speed1 > canvas.height) {
    // if the square is out of the canvas, reset it to top
    speed1 = -50; // speed1 % canvas.height
  }
  if (speed2 > canvas.height) {
    speed2 = -50;
  }
  if (speed3 > canvas.height) {
    speed3 = -50;
  }

  speed1 += 1;
  speed2 += 2;
  speed3 += 3;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the updated element/s
  ctx.fillRect(100, speed1, 50, 50);
  ctx.fillRect(250, speed2, 50, 50);
  ctx.fillRect(400, speed3, 50, 50);

  // Repeat - to create the loop
  window.requestAnimationFrame(updateCanvas);
  // setTimeout(updateCanvas, 10);
}

function initialRun() {
  // initial call to start the loop/recursive calls
  updateCanvas();
  button.removeEventListener("click", initialRun);
}

button.addEventListener("click", initialRun);
