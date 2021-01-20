const canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

const ghost = {
  x: 25,
  y: 25,
  moveUp: function () {
    this.y -= 25;
  },
  moveDown: function () {
    this.y += 25;
  },
  moveLeft: function () {
    this.x -= 25;
  },
  moveRight: function () {
    this.x += 25;
  },
};

ctx.fillStyle = "white";
ctx.font = "18px serif";

const img = document.createElement("img");
img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function printText() {
  ctx.fillText("Ghost x: " + ghost.x, 580, 40);
  ctx.fillText("Ghost y: " + ghost.y, 580, 60);
}

function drawGhost() {
  ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
}

function updateCanvas() {
  clearCanvas();
  printText();
  drawGhost();
}

// EVENT LISTENERS
img.addEventListener("load", function () {
  // initial rendering
  updateCanvas();

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowUp":
        ghost.moveUp();
        break;

      case "ArrowDown":
        ghost.moveDown();
        break;

      case "ArrowLeft":
        ghost.moveLeft();
        break;

      case "ArrowRight":
        ghost.moveRight();
        break;
    }

    updateCanvas();
  });
});
