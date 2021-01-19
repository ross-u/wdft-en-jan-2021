'use strict';


// WORKING WITH THE ELEMENT ATTRIBUTES

const h1 = document.querySelector('#title');
const googleLink = document.querySelector('#google-link');
const contentDiv = document.querySelector('#content');

const list = document.querySelector('#item-list');
// const list = contentDiv.querySelector('#item-list');
// const list = document.querySelector('ul');
// const list = document.querySelector('#content ul');



console.log('h1', h1);
console.log('googleLink', googleLink);

//  .getAttribute() -  Get the attribute value from an element
const h1Id = h1.getAttribute('id');
const linkClass = googleLink.getAttribute('class');
const linkHref = googleLink.getAttribute('href');


// .setAttribute(attrName, attrValue) - Change the value of the attribute
googleLink.setAttribute('href', 'https://google.com');
contentDiv.setAttribute('class', 'container');


console.log('contentDiv', contentDiv);

// .removeAttribute(attrName) - Removes and existing 
console.log('list', list);
list.removeAttribute('id');