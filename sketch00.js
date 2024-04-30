/* 

  Temos quatros pontos no canvas, o ponto de partida, o primeiro checkpoint, o segundo checkoutpoint e o terceiro checkpoint. Cada um dos pontos estão alinhado e concicidem com os vertices de um quadrado. Nosso plano tem as dimensões de 400 pixels de largura por 400 pixels de altura. O ponto de partida será a coordenada x <-- 100, y <-- 100; ck1 o primeiro checkpoint terá às coordenads x <-- 100


*/


var x,y, x1, y1, x2,y2, x3, y3; 

function setup() {
  createCanvas(400, 400);
  strokeWeight(5)
  // vamos inicializar nossas variáveis 
  x = 100
  y = 100
  x1 = 300
  y1 = 100
  x2 = 300
  y2 = 300 
  x3 = 100
  y3 = 300
  
   point(x,y)
   point(x1,y1)
   point(x2,y2)
   point(x3,y3)

}

function draw() {
background(220);
 
  if(x===x1 && y!=y2) { 
      point(x,y)
   
     
      y++
      
  } else {
    
     if(y===y2 && x!=x3){

       x--
       point(x,y)
         
     } else { 
        if(x1!=x) {
          point(x,y)
          x++
        } else { 
          console.log('fim')
        }
          
        
     }
    
  }
  


}