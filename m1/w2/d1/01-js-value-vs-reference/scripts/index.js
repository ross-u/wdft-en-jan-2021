
// Function that iterates over the properties of an object, or items of an array
// Checks if property/item is primitive or an object
// and using recursion creates new copies of objects and arrays.
function cloneObject(object) {
  let copy;
  
  if (Array.isArray(object)) {
  	copy = [];
  } else {
    copy = {};
  }
  
    for(let key in object) {
        if(typeof(object[key]) === "object" && object[key] !== null ){
            copy[key] = cloneObject(object[key]); // Clone the object/array
        } else {
            copy[key] = object[key]; // Copy the primitive value
        }
    }
    return copy;
}


let original = {
	name: 'Sarah',
	age: 35,
	family: [
    	{ name: 'Mark', age: 29 },
    	{ name: 'Linda', age: 33 }
	] 
}


const cloned = cloneObject(original);
