/* 
  @pitadas de magenta - 2024 - estudo - design system busca bruta 
  @author: IA - ITALO ADLER 
  @description: an educational and artistic project
  @date: 2024

*/



let x = 300;
let y = 300;

function setup() {
  createCanvas(200, 200);
  background('beige');
}

function draw() {
  stroke('magenta');
  strokeWeight(random(0.1,10.6));
  
  // Draw a point at the current position
  point(x, y);
  
  // Move the point randomly
  let stepSize = random(20);
  x += random(-stepSize, stepSize);
  y += random(-stepSize, stepSize);
  
  // Constrain the point to stay within the canvas
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}





// let walkers = [];

// function setup() {
//   createCanvas(600, 600);
//     background('beige');
//   for (let i = 0; i < 1000; i++) {
//     walkers.push(new Walker());
//   }
// }

// function draw() {

//   for (let i = 0; i < walkers.length; i++) {
//     walkers[i].step();
//     walkers[i].display();
//   }
// }

// class Walker {
//   constructor() {
//     this.x = width / 2;
//     this.y = height / 2;
//     this.stepSize = random(5,15);
//   }

//   step() {
//     this.x += random(-this.stepSize, this.stepSize);
//     this.y += random(-this.stepSize, this.stepSize);
//     this.x = constrain(this.x, 0, width);
//     this.y = constrain(this.y, 0, height);
//   }

//   display() {
//     stroke(0);
//     strokeWeight(0.1);
//     point(this.x, this.y);
//   }
// }


// var x, y, x1, y1, x2, y2, x3, y3; 

// function setup() {
//   createCanvas(400, 400);
//   strokeWeight(5)
//   // vamos inicializar nossas variáveis 
//   x = 100
//   y = 100
//   x1 = 300
//   y1 = 100
//   x2 = 300
//   y2 = 300 
//   x3 = 100
//   y3 = 300
//   // vamos desenhar os pontos pela 
//   point(x,y)
//   point(x1,y1)
//   point(x2,y2)
//   point(x3,y3)
// }

// function draw() {
//   background('beige');
//   point(x,y)
//   if(x < x1 && y === y1) { 
    
//     x++
//   } else if(x === x1 && y < y2) {
 
//     y++
//   } else if(x > x3 && y === y2) {
 
//     x--
//   } else {

//     y--;
//     if(y===y1) {
//       debugger;
//       noLoop()
//     }
//   } 
// }
// a complexidade do código acima é muito alta, vamos simplificar o código


// let colors;

// function setup() {
//   createCanvas(400, 400);
//   colors = new Array(width * height).fill(255);
// }

// function draw() {
//   for(let i=0; i<height; i+=25) {
//     for(let j=0; j<width; j+=25) {
//       // Verifica se o mouse está dentro do quadrado
//       if(mouseX > i && mouseX < i+25 && mouseY > j && mouseY < j+25) {
//         colors[i/25 + j/25 * width/25] = 0; // Muda a cor de preenchimento para preto
//       }
      
//       fill(colors[i/25 + j/25 * width/25]); // Usa a cor armazenada para este quadrado
//       rect(i, j, 25, 25);
//     }
//   }
// }