
// Checking the string length
var myString = 'Bananarama!';


console.log(myString.length);


// Access the characters from a string
//  Strings use zero based indexing, so the first character starts at index 0

// string[i]
// string.charAt(i)


console.log(myString[0])

console.log(myString.charAt(0))


// Get the last character of the string
var lastChar = myString[myString.length - 1];

console.log('lastChar', lastChar)




// indexOf()  /  lastIndexOf()
var message = "Don't be sad, be happy!";

 
console.log(message.indexOf("Don't"))
console.log(message.indexOf("t"))

console.log(message.indexOf("Be")) // case sensitive // -1 means not found

console.log(message.indexOf("be"))

console.log( message.lastIndexOf('be') ); // 14



// .repeat()

console.log("$".repeat(5))

var str = 'Na';

console.log(str.repeat(10))



// .includes() - returns true/false depending if a substring exist in the string

var pet = 'dog';

console.log(pet.includes('cat'))
console.log(pet.includes('og')  )




// .substring(start, end)
// .slice(start, end) -   supports negative values

var message2 = "Don't be sad, be happy!";

var substring = message.substring(0, 3)
console.log('substring', substring)


var sliced = message.slice(0, 3)
console.log('sliced', sliced);

var slicedMinus = message.slice(-6);

console.log('slicedMinus', slicedMinus)


var onlyHappy = message.slice(-6, -1);
console.log('onlyHappy', onlyHappy);


