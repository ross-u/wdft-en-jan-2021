const canvas = document.querySelector('#example');
// Create a 2 dimensional drawing board using canvas method `.getContext()`
const ctx = canvas.getContext('2d');


// DRAWING PATHS/LINES
/* 
  Steps to draw a Canvas path/line:
  - Begin the path `ctx.beginPath()`
  - Use drawing commands to draw the path `ctx.moveTo(x, y)` `ctx.lineTo(x, y)`
  - Use `.stroke()` or `.fill()` to render the path
  - Close the path `ctx.closePath()`

*/


// PATH - drawing a line

// Start the path/line
ctx.beginPath();

// set the line color
ctx.strokeStyle = 'orange';
ctx.lineWidth = 10;

// starting position is x=50  y=150
ctx.moveTo(50, 150);

// draw the line that ends on coordinates  x=250  y=250
ctx.lineTo(250, 150);
ctx.lineTo(250, 250);

// .stroke()  prints the drawing
ctx.stroke();

// close the path
ctx.closePath();
