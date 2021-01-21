"use strict";

class Enemy {
  constructor(canvas, y, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.size = 20;
    this.x = canvas.width + 50;
    this.y = y;
    this.speed = speed;
  }

  draw() {
    this.ctx.fillStyle = "#FF6F27";
    // this.ctx.fillRect(x, y, width, height);
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  updatePosition() {
    this.x = this.x - this.speed;
  }

  isInsideScreen() {
    const enemyRight = this.x + this.size;
    const isInside = enemyRight > 0; // true or false

    return isInside;
    // return this.x + this.size > 0
  }
}
