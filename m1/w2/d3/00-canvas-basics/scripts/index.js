const canvas = document.querySelector('#example');
// Create a 2 dimensional drawing board using canvas method `.getContext()`
const ctx = canvas.getContext('2d');


// DRAWING RECTANGLES

/*
fillStyle = 'color';  // Set the fill style for the next filled shape

strokeStyle = 'color';  // Set the line style for the next shape
lineWidth = '1px';  // Set line width for the next shape


fillRect(x, y, width, height)    //Draws a filled rectangle.

strokeRect(x, y, width, height)  //Draws a rectangular outline.

clearRect(x, y, width, height)  //Clears the specified rect. area, making it transparent.
*/



ctx.fillStyle = 'purple'; // Set the color of a filled shape

// FILLED RECTANGLE
ctx.fillRect(25, 25, 100, 100);


// CLEAR RECTANGLE
// draws a clear rectangle on top of the purple one
ctx.clearRect(45, 45, 60, 60);


// BLUE STROKE/BORDER-ONLY RECTANGLE
// Set the color and line width for the stroke/border
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;

ctx.strokeRect(150, 50, 50, 50);


// TO CLEAR THE CANVAS
// ctx.clearRect(0, 0, 500, 400);



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


// SETTING TRANSPARENCY   `.globalAlpha`


// Draw a green rectangle
ctx.fillStyle = 'green';
ctx.fillRect(300, 60, 75, 50);



// Draw a transparent rectangle
// Turn transparency on
ctx.globalAlpha = 0.8;

ctx.fillStyle = 'yellow';
ctx.fillRect(330, 80, 75, 50);


// Draw a red rectangle
// Turn transparency off
ctx.globalAlpha = 1;

ctx.fillStyle = 'red';
ctx.fillRect(380, 110, 75, 50);



// CREATING CANVAS FOR THE PATTERN EXAMPLE
const patternCanvas = document.querySelector('#pattern-canvas');
const pCtx = patternCanvas.getContext('2d');

// In here image element serves as a temporary container to load the image before using it

// const img = new Image();
const img = document.createElement('img');
img.src = 'https://img.stockfresh.com/files/r/robuart/x/29/8049774_52896881.jpg';

img.addEventListener('load', function () {
  const pattern = pCtx.createPattern(img, 'repeat');

  // Set the style of the next filled shape
  pCtx.fillStyle = pattern;
  pCtx.fillRect(0, 0, 300, 300);
})



// DRAWING TEXT
// .fillText( textString, x, y )
// .strokeText( textString, x, y )

// CREATING CANVAS FOR THE TEXT EXAMPLE
const fontCanvas = document.querySelector('#font-canvas');
const fCtx = fontCanvas.getContext('2d');

// Set the font and the size of the text
fCtx.font = '50px monospace';
fCtx.fillText('Ironhack', 10, 50);

fCtx.font = '36px monospace';
fCtx.strokeText('Ironhack', 10, 100);

// Print centered text
fCtx.font = '26px monospace';
fCtx.fillStyle = 'cornflowerblue';
fCtx.textAlign = 'center'; // default value - 'start'
fCtx.fillText('Ironhack', fontCanvas.width / 2, fontCanvas.height / 2);




// CREATING CANVAS FOR THE IMAGE EXAMPLE
// .drawImage( imageObj, x, y, width, height)

const imageCanvas = document.querySelector('#image-canvas');
const iCtx = imageCanvas.getContext('2d');

const dogImg = document.createElement('img');
dogImg.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg';

dogImg.addEventListener('load', function () {
  iCtx.drawImage(dogImg, 100, 100, 300, 200);
})


// calculating the proportion of the image:
// https://codepen.io/Denzelzeldi/pen/NmdOja?editors=1010