'use strict';


// GET ELEMENTS
const fullNameInput = document.querySelector('#full-name');
const programInput = document.querySelector('#program');

const createBtn = document.querySelector('form button');
const studentList = document.querySelector('#student-list');


const h1 = document.querySelector('h1');
console.log(h1.innerHTML);



// FUNCTIONS



// EVENT LISTENERS
createBtn.addEventListener('click', function (event) {
  
  // Prevent default behaviour of the form - prevent page reloading
  event.preventDefault();

  // Get the values from the inputs   -->  accessed using `.value`
  const fullNameV = fullNameInput.value;
  const programV = programInput.value;

  // Create a new student card element, used to show values from the inputs
  const newCard = document.createElement('div');

  // Create content of the car using `.innerHTML`
  newCard.innerHTML = `
    <p>
      <span class="name-data"> ${fullNameV} </span> - <span class="program-data">${programV}</span>
    </p>
    <button class="delete-btn">Delete</button>
  `;

/* 
  // Create content of the card using  `.createElement`  `.textContent` (takes longer)
  const newP = document.createElement('p');
  const newSpan1 = document.createElement('span');
  const newSpan2 = document.createElement('span');
  const deleteBtn = document.createElement('button');


  // newSpan1.classList.add('name-data');
  newSpan1.className = 'name-data';
  newSpan2.className = 'program-data';
  deleteBtn.className = 'delete-btn';

  deleteBtn.textContent = 'Delete';
  newSpan1.textContent = fullNameV;
  newSpan2.textContent = programV;

  newP.appendChild(newSpan1);
  newP.appendChild(newSpan2);

  //  forming the card content
  newCard.appendChild(newP);
  newCard.appendChild(deleteBtn);
 */ 

  // Add a listener to the new card delete button
  const deleteButton = newCard.querySelector('.delete-btn');

  deleteButton.addEventListener('click', function (event) {
    console.log('Delete clicked');
    // Delete the card (parent div) when button is clicked
    // Check on `.parentNode`  and `.remove()`
  })

  // Append the new student card element to the `studentList`
  studentList.appendChild(newCard);


  // Clear the inputs  -->  set the `.value` of the input to an empty string
  fullNameInput.value = '';
  programInput.value = '';
})


