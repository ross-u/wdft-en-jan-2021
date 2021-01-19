'use strict';

// CREATING EVENT LISTENERS

// BASIC EXAMPLE
const button = document.querySelector('#add-item-button');
const testButton = document.querySelector('#test-button');

// .addEventListener
button.addEventListener('click', function (event) {
  console.log('event', event);
})

/* 
// .onclick 
button.onclick = function (event) {
  console.log('event', event);
}
*/

function backgroundRed(event) {
  // console.log(event)
  const btn = event.target;
  btn.style.backgroundColor = 'red';
  btn.style.fontSize = '30px';
}

function backgroundWhite(event) {
  // console.log(event)
  const btn = event.target;
  btn.style.backgroundColor = 'white';
  btn.style.fontSize = '20px';
}

function removeMouseEvents(event) {
  const btn = event.target;
  btn.removeEventListener('mouseover', backgroundRed);
  btn.removeEventListener('mouseout', backgroundWhite);
}


testButton.addEventListener('mouseover', backgroundRed);
testButton.addEventListener('mouseout', backgroundWhite);

testButton.addEventListener('click', removeMouseEvents);


// CREATE A DROPDOWN
// Get the elements
const dropdownSection = document.querySelector('#dropdown-section');
const toggleButton = document.querySelector('#hide-div');

// Add the class name to the existing class attribute values
dropdownSection.classList.add('open');
// .classList.add()
// .classList.remove()
// .classList.toggle()


// Add event listener to toggle (add or remove) the css class
// from the div element
toggleButton.addEventListener('click', function () {
  dropdownSection.classList.toggle('close');
  if (toggleButton.innerHTML === 'Hide') {
    toggleButton.textContent = 'Show';
  }
  else {
    toggleButton.textContent = 'Hide';
  }
})
