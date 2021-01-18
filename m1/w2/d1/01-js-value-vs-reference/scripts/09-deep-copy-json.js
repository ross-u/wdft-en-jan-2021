
const book = {
  author: 'Charlote Bronte',
  publishers: [
    { companyName: 'Penguin Books' },
    { companyName: 'Amazon' }
  ]
};



// JSON.stringify()  - convers and object/array to a string representation
console.log(JSON.stringify(book));


// JSON.parse()  - convers a string that looks like object/array to an actual object/array
console.log(  JSON.parse( '{"name":"John", "age": 21.3456, "title": "Harry Potter"}') )



// Deep copy of an object (or array)
// Poor man's copy
const newBook = JSON.parse(JSON.stringify(book));



book.publishers[0] = { companyName: 'Cool Company' };
console.log('book', book);


console.log('newBook', newBook); // newBook.publishers[0] ?