// Carter Lambo
// Assignment 5 Question 1
let bubble1
let bubble2
let bubble3
let bubble4
let bubble5

function setup() {
  createCanvas(960, 540);
  
  bubble1 = new Bubble(700, 200, 20);
  bubble2 = new Bubble(350, 200,20);
  bubble3 = new Bubble(600,330,20);
  bubble4 = new Bubble(220,100,20);
  bubble5 = new Bubble(100,96,20);
}

function draw() {
  background(random(255),random(255),random(255));
  frameRate(8)
  bubble1.move();
  bubble1.show();
  bubble2.show();
  bubble2.move();
  bubble3.show();
  bubble3.move();
  bubble4.show();
  bubble4.move();
  bubble5.show();
  bubble5.move();
}

class Bubble {
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
	}
	move() {
		this.x = this.x + random(-10,10)
        this.y = this.y + random(-10,10)
	}
	show() {
push();
fill(25,25,0);
stroke(2);

ellipse(this.x, this.y, this.r * 2);	
pop();
	}
} 
