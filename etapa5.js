//Eudes Medeiros - 01C//
//Marcus Vinicius - 01C//
var xi = 660;
var yi = 320;
var xj = 320;
var yj = 450;
var disparo = false;
var xd;
var yd;
var vidas=3;
var pontos=0;
var dificuldade=1;
var yi2 = 60;
var xi2 = 660;
var yi3 = 110;
var xi3 = 660;
var yi4 = 140;
var xi4 = 660;

function setup() {
	createCanvas(640, 480);
    frameRate(60)
  		xj = 40;
  		xd = xj;
  		
  		yj = 250;
        yd = yj;

}
function draw() {
  if (keyIsDown(CONTROL) && (! disparo)){
      disparo = true;
      xd = xj;
      yd = yj;
      }
  if( yj<80){
   yj=yj+7
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
    rect(-1, 40, 645, 12)
    fill(900,700,900);
    ellipse(xj, yj, 50, 50);
    text(mouseX, 10, 70);
    text(mouseY, 70, 70);
    fill (255, 255, 255)
  
  if (disparo){
  ellipse(xd, yd, 8, 8);
    }
  
  rect(xi,yi,30,30);
 			 xi=xi-5;
			 if(xi < -30){
			    xi = 665;
                yi = random(95, 210)
             }
  rect(xi2,yi2,30,30);
 			 xi2=xi2-10;
			 if(xi2 < -30){
			    xi2 = 665;
                yi2 = random(95, 210)
             }
  rect(xi3,yi3,30,30);
 			 xi3=xi3-7;
			 if(xi3 < -30){
			    xi3 = 665;
                yi3 = random(210, 455)
             }
  rect(xi4,yi4,30,30);
 			 xi4=xi4-13;
			 if(xi4 < -30){
			    xi4 = 665;
                yi4 = random(210, 455)
             }
  //colisão teste
  //collideRectCircle(xi, yi, 30, 30, xj, yj, 50)
}
