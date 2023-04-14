// Carter Lambo
// Assignment 5 Question 2

let bubbles = [];

function setup() {
  createCanvas(960, 540);

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = 20;
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(random(255), random(255),random(255));
frameRate(8)
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].borderEdges();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }

  show() {
    push();
    fill(25, 25, 0);
    stroke(2);
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }

   borderEdges() {
    if (this.x < this.r) {
      this.x = this.r;
    } else if (this.x > width - this.r) {
      this.x = width - this.r;
    }

    if (this.y < this.r) {
      this.y = this.r;
    } else if (this.y > height - this.r) {
      this.y = height - this.r;
    }
  }
}
