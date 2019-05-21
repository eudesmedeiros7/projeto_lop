//Eudes Medeiros - 01C//
//Marcus Vinicius - 01C//
var yi = 0;
var xj = 320;
var yj = 450;
var disparo = false;
var xd;
var yd;
var vidas=3;
var pontos=0;
var dificuldade=1;

function setup() {
	createCanvas(640, 480);
  frameRate(60)
  		xj = 40;
  		xd = xj;
  		
  		yj = 100;
        yd = yj;

}
function draw() {
  if (keyIsDown(CONTROL) && (! disparo)){
      disparo = true;
      xd = xj;
      yd = yj;
      }
      
  if (disparo){
  	 xd = xd +10;
  
     if (xd > width){
  	    disparo = false;
     }
  }
  
  
  
  if (keyIsDown(UP_ARROW))
		yj-=7
  if (keyIsDown(DOWN_ARROW))
		yj+=7
  if (xj>=640)
		xj = 0;
  if (yj>=450)
		yj=450;
  if (xj<0)
      xj = 640;
  if (yj<0)
	  yj = 480;
	
	background(20)
	//Desenhos do cenario//
    textSize(32);
    text('Vidas: '+vidas, 10, 30);
    text('Pontos: '+pontos, 250, 30);
    text('Dificuldade: '+dificuldade, 443, 30);
    fill(900,700,900);
  ellipse(xj, yj, 50, 50);
  
  if (disparo){
  ellipse(xd, yd, 8, 8);
    }
  
  rect(320,yi,30,30);
 			 yi=yi+4;
			 if(yi > width){
			yi = random(-300,-60);
             }
  
}
