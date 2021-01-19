'use strict';

const usernameInput = document.querySelector('#username-field');
const createButton = document.querySelector('#create-btn');
const userList = document.querySelector('#user-list');

const p = document.querySelector('p');



createButton.addEventListener('click', function (event) {
  // event object is provided by default in the event callback
  // and it represents the event that caused the callback to fire
  // We use it to access information about the event, such as event.target

  // prevent the default page reload on submit
  event.preventDefault();

  // Get the value from the input via `.value` property
  const usernameV = usernameInput.value;
  
  // Create the new `li` element
  const newLi = document.createElement('li');
  newLi.innerHTML = `
    <p>${usernameV}</p>
    <button class="delete"> Delete item </button>
  `;
    console.log('newLi', newLi)


  // Add event listener to the delete button
  const deleteBtn = newLi.querySelector('.delete');

  // Add event listener to delete a parent element
  deleteBtn.addEventListener('click', function (event) {
    const parentLi = deleteBtn.parentNode;
    parentLi.remove();
  })

  // Append `li` to the list
  userList.appendChild(newLi);

  // Clear the input ?
  usernameInput.value = '';
})



// DELETE AN ELEMENT
// parent.removeChild( nodeToRemove )
// node.remove()

p.remove()
