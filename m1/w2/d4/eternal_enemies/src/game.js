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

    this.canvas.width = containerWidth;
    this.canvas.height = containerHeight;

    // Create the new Player
    this.player = new Player(this.canvas, 3);

    this.player.draw();

    // Arrow function doesn't value `this` inside.
    // Arrow function takes the value of this form the surrounding scope (place)
    // where it is created

    function handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        this.player.setDirection("up");
      } else if (event.key === "ArrowDown") {
        this.player.setDirection("down");
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
      // 1. UPDATE THE STATE OF PLAYER AND ENEMIES
      this.score += 5;
      this.updateGameStats();

      // 1.1. Create new enemies - randomly
      if (Math.random() > 0.97) {
        // 0 - 0.991

        const randomY = Math.random() * this.canvas.height;
        const newEnemy = new Enemy(this.canvas, randomY, 5);

        this.enemies.push(newEnemy);
      }

      // 1.2 Check if the player had hit any enemy
      this.checkCollisions();

      // 1.3 Update the player and check the screen collision
      this.player.updatePosition();
      this.player.handleScreenCollision();

      // 1.4 Move existing the enemies
      // 1.5 Remove the enemies that are outside of the screen
      const updatedEnemies = this.enemies.filter(function (enemyObj) {
        enemyObj.updatePosition();
        return enemyObj.isInsideScreen(); // false - filter out
      });

      this.enemies = updatedEnemies;

      // 2. CLEAR THE CANVAS - clear the previous frame
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // 3. DRAW - UPDATE THE CANVAS
      // 3.1 Draw the player
      this.player.draw();

      // 3.2 Draw all of the enemies
      this.enemies.forEach(function (enemyObj) {
        enemyObj.draw();
      });

      // 4. REPEAT
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
    }.bind(this);

    // initial call
    loop();
  }

  checkCollisions() {
    // .forEach .map .filter methods block the value of `this`
    this.enemies.forEach(function (enemy) {
      if (this.player.didCollide(enemy)) {
        this.player.removeLife();

        console.log("this.player.lives", this.player.lives);

        // Move the enemy off the screen, to the left
        enemy.x = 0 - enemy.size;

        if (this.player.lives <= 0) {
          this.gameOver(); // TODO
        }
      }
    }, this);
  }

  gameOver() {
    this.gameIsOver = true;
    console.log("GAME OVER");

    // show the end game screen
    endGame();
  }

  updateGameStats() {
    this.livesElement.textContent = this.player.lives;
    this.scoreElement.textContent = this.score;
  }
}
