// FETCH
// `fetch()` is a interface we use to make request to the servers from our webpage
// to get data

// fetch() always returns a promise
// and in order to read the data coming from fetch request
// we have to use .then()  .catch()


fetch('https://api.spacexdata.com/v4/launches')
  .then(function (response) {
    
    console.log('API response', response);

    const pr = response.json(); // conversion of data is async operation, creates a promise
    return pr; // this will pass the promise to the next `then` block

  })
  .then(function (parsedBody) {
    
    console.log('parsedBody', parsedBody);

    parsedBody.forEach(function (obj) {
      // Create a new image, and use link from the object coming from the server
      // to display it
      const newImg = document.createElement('img');
      newImg.setAttribute('src', obj.links.patch.small);
      newImg.setAttribute('width', 200);

      document.body.appendChild(newImg);
    })

  })
  .catch(function (err) {
    console.log('there was an error', err)
  } )