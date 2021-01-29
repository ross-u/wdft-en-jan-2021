// CREATING A PROMISE
const promiseToExerciseToday = new Promise(function (resolve, reject) {
  
  // Asynchronous operation
  setTimeout(() => {
    const userDidExercise = false;

    // When asynchronous operation is done,
    // we can either resolve or reject the promise
    if (userDidExercise) {
      resolve(' EXERCISED TODAY!!!');
    }
    else if (!userDidExercise) {
      reject('SOOO LAZY!');
    }
  }, 3000)
})


// HANDLING THE PROMISE
// We specify the code to run after promise finishes (when it either succeeds or fails)
// reject()  triggers --> .then()
// resolve()  triggers --> .catch()

promiseToExerciseToday
  .then(function (fromResolve) {
    console.log('then ->', fromResolve)
  })
  .catch(function (fromReject) {
    console.log('catch ->', fromReject);
  })


  
