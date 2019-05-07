/* Eudes Medeiros - 01C
   Marcus Vinícius - 01C */
var yi = 0;
var xj = 320;
var yj = 450;
var disparo = false;
var xd;
var yd;

function setup() {
	createCanvas(640, 480);
  frameRate(60);
  		xj = 50
  		xd = xj;
  		
  		yj = 100
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
  }
  if (yd > width){
  	disparo = false;
  }
 
  
  
  
  if (keyIsDown(LEFT_ARROW))
		xj-=5;
  if (keyIsDown(RIGHT_ARROW))
		xj+=5;
  if (keyIsDown(UP_ARROW))
		yj-=5;
  if (keyIsDown(DOWN_ARROW))
		yj+=5;
  if (xj>=640)
		xj = 0;
  if (yj>=450)
		yj=450;
  if (xj<0)
      xj = 640;
  if (yj<0)
	  yj = 480;
	
	background(50)
	//Desenhos do cenario//
  ellipse(xj, yj, 50, 50);
  
  if (disparo){
  ellipse(xd, yd, 8, 8);
    }
  
  rect(320,yi,30,30);
 			 yi=yi+5;
			 if(yi > width){
			yi = random(-300,-60);
             }
}
