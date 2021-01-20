const canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

// SET CANVAS DIMENSIONS
// When the page loads, set the dimensions of the canvas and then display it

window.addEventListener("load", function () {
  canvas.height = document.body.clientHeight;
  canvas.width = document.body.clientWidth;

  console.log("canvas.height", canvas.height);
  console.log("canvas.width", canvas.width);

  canvas.style.visibility = "visible";
});
