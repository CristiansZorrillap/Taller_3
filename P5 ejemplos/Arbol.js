let s1, s2, s3, s4,s5;
let gravity = 2;
let mass = 0.9;

function setup() {
  createCanvas(720, 500);
  fill(980, 126);
  // Inputs: x, y, mass, gravity
  s1 = new Spring2D(0.0, width / 2, mass, gravity);
  s2 = new Spring2D(0.0, width / 2, mass, gravity);
  s3 = new Spring2D(0.0, width / 2, mass, gravity);
  s4 = new Spring2D(0.0, width / 2, mass, gravity);
  s5 = new Spring2D(0.0, width / 2, mass, gravity);
}

function draw() {
  background(0);
  s1.update(mouseX, mouseY);
  s1.display(mouseX, mouseY);
  s2.update(s1.x, s1.y);
  s2.display(s1.x, s1.y);
   s3.update(s1.x, s1.y);
  s3.display(s1.x, s1.y);
   s4.update(s1.x, s1.y);
  s4.display(s1.x, s1.y);
   s5.update(s1.x, s1.y);
  s5.display(s1.x, s1.y);
}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 5; // The x- and y-axis velocities
  this.vy = 5;
  this.mass = m;
  this.gravity = g;
  this.radius = 60;
  this.stiffness = 0.1;
  this.damping = 0.7;

  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    noStroke();
    rect(this.x, this.y, this.radius * 2, this.radius * 2);
    stroke(800);
    line(this.x, this.y, nx, ny);
  }
}