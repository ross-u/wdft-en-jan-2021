'use strict';

// CREATE NEW ELEMENTS
// document.createElement( elementType )

const h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Sub Title';

const body = document.querySelector('body');  // document.body
body.appendChild(h2Tag);