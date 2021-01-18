// SHALLOW COPY OBJECTS
/* 
Object.assign(destinationObject, sourceObject, [additionalSource])
*/

const description = { brand: 'Apple', color: 'silver gray' }


const mac = Object.assign({}, description)


// `mac` is an exact copy of `description`, but they are 2 different object in the memory
console.log('description', description)
console.log('mac', mac);

console.log(mac === description);


// We can specify additional sources after the second parameter
const macPro16 = Object.assign({}, description, { size: '16in', year: '2021' })
console.log('macPro16', macPro16);


/* 
... spread operator
 */
const iPhone = { ...description };
console.log('iPhone', iPhone);

// We can also add additional properties after spreading an object

const macAir13 = { ...description, size: '13in', color: 'rose gold' };

console.log('macAir13', macAir13)