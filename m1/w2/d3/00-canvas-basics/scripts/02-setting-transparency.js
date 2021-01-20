const canvas = document.querySelector('#example');
// Create a 2 dimensional drawing board using canvas method `.getContext()`
const ctx = canvas.getContext('2d');


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
