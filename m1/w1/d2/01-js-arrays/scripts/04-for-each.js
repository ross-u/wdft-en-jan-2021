const students = ['Arslan', 'Clement', 'Isabel', 'Soti'];


for (let i = 0; i < students.length; i++) {
  const el = students[i];

  console.log(el);
}



// .forEach( function(el, [index], [arr]) { }  )

// Used to iterate over the entire array
students.forEach( function (element, i, arr) {
  console.log('i', i);
  console.log('element', element);
})






// Using an arrow function
students.forEach( (element, i, arr) => {
  console.log('i', i);
  console.log('element', element)
})

// Using concise arrow function
students.forEach( (element ) =>  console.log('element', element)  )


// .concat()
// Used to put arrays together

