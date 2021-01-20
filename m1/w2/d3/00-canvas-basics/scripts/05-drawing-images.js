// CREATING CANVAS FOR THE IMAGE EXAMPLE
// .drawImage( imageObj, x, y, width, height)

const imageCanvas = document.querySelector('#image-canvas');
const iCtx = imageCanvas.getContext('2d');

const dogImg = document.createElement('img');
dogImg.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg';

dogImg.addEventListener('load', function () {
  iCtx.drawImage(dogImg, 100, 100, 300, 200);
})


// calculating the proportion of the image:
// https://codepen.io/Denzelzeldi/pen/NmdOja?editors=1010