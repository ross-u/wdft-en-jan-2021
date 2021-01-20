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
fCtx.fillText('Ironhack', fontCanvas.width / 2 , fontCanvas.height / 2);