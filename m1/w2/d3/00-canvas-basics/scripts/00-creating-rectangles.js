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