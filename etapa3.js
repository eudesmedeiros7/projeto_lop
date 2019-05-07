var yi = 0;
var xj = 320;
var yj = 450;
var dis;
function setup() {
	createCanvas(640, 480);
    frameRate(60);
	dis = new Disparo(width, width);
}

function draw() {
  background(0);
  disparo.show();
  disparo.move();
  
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
		
  ellipse(xj, yj, 50, 50);
  rect(320,yi,25,25);
 			 yi=yi+5;
			 if(yi > width){
			yi = random(-300,-50);
             }

  
}
