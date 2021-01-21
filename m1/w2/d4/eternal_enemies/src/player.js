"use strict";

class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.lives = lives;
    this.size = 100; //  this.width   this.height
    this.x = 50;
    this.y = canvas.height / 2; // (canvas.height / 2) - (this.size / 2)
    this.direction = 0; //  -1  0  1
    this.speed = 5;
  }

  setDirection(direction) {
    // 1 down     -1 up
    if (direction === "up") this.direction = -1;
    else if (direction === "down") this.direction = 1;
  }

  updatePosition() {
    this.y = this.y + this.direction * this.speed; // update player's position
  }

  handleScreenCollision() {
    const screenTop = 0;
    const screenBottom = this.canvas.height;

    const playerTop = this.y;
    const playerBottom = this.y + this.size;

    if (playerBottom >= screenBottom) this.setDirection("up");
    else if (playerTop <= screenTop) this.setDirection("down");
  }

  removeLife() {
    this.lives -= 1;
  }

  didCollide(enemy) {
    const playerLeft = this.x;
    const playerRight = this.x + this.size;
    const playerTop = this.y;
    const playerBottom = this.y + this.size;

    const enemyLeft = enemy.x;
    const enemyRight = enemy.x + enemy.size;
    const enemyTop = enemy.y;
    const enemyBottom = enemy.y + enemy.size;

    const crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
    const crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;

    const crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;
    const crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  draw() {
    this.ctx.fillStyle = "#66D3FA";
    // this.ctx.fillRect(x, y, width, height);
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
