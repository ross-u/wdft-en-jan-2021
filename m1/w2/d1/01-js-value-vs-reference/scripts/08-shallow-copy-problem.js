// Shallow copy, copies only the primitive values. 
// Object and arrays are not copied and only their address/reference is copied 
// (passed to the new object). This as result can cause having 
// nested properties pointing to the same array/object in the memory

const book = {
  author: 'Charlote Bronte',
  publishers: [
    { companyName: 'Penguin Books' },
    { companyName: 'Amazon' }
  ]
};

//  book = { author: 'Charlote Bronte', publishers: <123abc> }
// newBook = { author: 'Charlote Bronte', publishers: <123abc> }


// Creates only a shallow copy
// Only the primitve values are copied.
//Object property values are not copied, but only the reference.

// const newBook = Object.assign({}, book);
const newBook = { ...book };
console.log('newBook', newBook);


// New book was not affected as primitive value was copied.
book.author = 'Sponge Bob';
console.log('newBook', newBook);


book.publishers[0] = { companyName: 'Cool Company' };

console.log('book', book);


console.log('newBook', newBook); // newBook.publishers[0] ?