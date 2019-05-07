/* Eudes Medeiros - 01C 
   Marcus Vinícius - 01C */

var x = 320;
var y = 450;
function setup() {
	createCanvas(640, 480);
}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW))
		x-=5;
  if (keyIsDown(RIGHT_ARROW))
		x+=5;
  if (keyIsDown(UP_ARROW))
		y-=5;
  if (keyIsDown(DOWN_ARROW))
		y+=5;
  if (x>=640)
		x = 0;
  if (y>=450)
		y=450;
  if (x<0)
      x = 640;
  if (y<0)
	  y = 480;
		
  ellipse(x, y, 50, 50);
  rect(320,0,25,25);
  
}
