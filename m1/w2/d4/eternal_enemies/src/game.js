"use strict";

class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.enemies = [];
    this.player = undefined;
    this.gameIsOver = false;
    this.score = 0;

    this.gameScreen = undefined;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }

  start() {
    const canvasContainer = document.querySelector(".canvas-container");

    // Get and create the canvas context
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    // Save reference to the score and lives elements
    this.livesElement = document.querySelector(".lives .value");
    this.scoreElement = document.querySelector(".score .value");

    // Set the canvas dimensions
    const containerWidth = canvasContainer.clientWidth;
    const containerHeight = canvasContainer.clientHeight;

    console.log("containerWidth", containerWidth);
    console.log("containerHeight", containerHeight);

    // Create the new Player
    this.player = new Player(this.canvas, 3);

    this.player.draw();

    // Arrow function doesn't value `this` inside.
    // Arrow function takes the value of this form the surrounding scope (place)
    // where it is created

    function handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        this.player.setDirection("up");
        console.log("this.player.direction", this.player.direction);
      } else if (event.key === "ArrowDown") {
        this.player.setDirection("down");
        console.log("this.player.direction", this.player.direction);
      }
    }

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    // Second way of handling this inside of the event function
    // Add event listeners to the keyboard, listen for key press
    // document.body.addEventListener("keydown", (event) => {
    //   if (event.key === "ArrowUp") {
    //     console.log("this", this);
    //     this.player.setDirection("up");
    //   } else if (event.key === "ArrowDown") {
    //     this.player.setDirection("down");
    //   }
    // });

    // Start the loop using requestAnimationFrame()
    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      // EVERYTHING HAPPENS HERE !
      console.log("in loop");

      // if the game is not over, keep looping
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
    }.bind(this);

    // initial call - start the recursive loop call
    loop();
  }

  checkCollisions() {}

  gameOver() {}

  updateGameStats() {}
}
