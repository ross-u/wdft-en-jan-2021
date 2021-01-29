// CREATING A PROMISE
const pr = new Promise(function (resolve, reject) { })


console.log('pr', pr);







const promise1 = new Promise(function (resolve, reject) {
  
  // IN HERE WE DO SOME ASYNCHRONOUS OPERATION

    // `resolve` is called if operation is fullfiled
    resolve();
    // `reject` if the operation 
    reject();

})


promise1
  .then(function() {})   //  this runs when resolve() is called
  .catch(function () {})  // this runs when reject() is called
