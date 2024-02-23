/* 
  @pitadas de magenta - 2024 - estudo - design system busca bruta 
  @author: ÍA - ITALO ADLER 
  @description: an educational and artistic project
  @date: 2024

*/



// let x = 300;
// let y = 300;

// function setup() {
//   createCanvas(600, 600);
//   background('beige');
// }

// function draw() {
//   stroke('magenta');
//   strokeWeight(random(0.1,1.6));
  
//   // Draw a point at the current position
//   point(x, y);
  
//   // Move the point randomly
//   let stepSize = random(20);
//   x += random(-stepSize, stepSize);
//   y += random(-stepSize, stepSize);
  
//   // Constrain the point to stay within the canvas
//   x = constrain(x, 0, width);
//   y = constrain(y, 0, height);
// }





let walkers = [];

function setup() {
  createCanvas(600, 600);
    background('beige');
  for (let i = 0; i < 1000; i++) {
    walkers.push(new Walker());
  }
}

function draw() {

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].display();
  }
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.stepSize = random(5,15);
  }

  step() {
    this.x += random(-this.stepSize, this.stepSize);
    this.y += random(-this.stepSize, this.stepSize);
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    stroke(0);
    strokeWeight(0.1);
    point(this.x, this.y);
  }
}