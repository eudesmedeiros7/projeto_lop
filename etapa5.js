//Eudes Medeiros - 01C//
//Marcus Vinicius - 01C//
var xj = 320;
var yj = 450;
var disparo = false;
var xd;
var yd;
var vidas=3;
var pontos=0;
var dificuldade=1;
var xi=[];
var yi=[];
function setup() {
	createCanvas(640, 480);
    frameRate(60)
  		xj = 40;
  		xd = xj;
  		
  		yj = 250;
        yd = yj;
    for(i=0;i<4;i++){
      xi[i] = 625;
      yi[i] = random(95, 455);
  }
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
  
  for (i=0; i<4; i++){
     rect(xi[i], yi[i], 30, 30)
  }
  for (i=0; i<4; i++){
    if (i==0){
       xi[i]=xi[i]-15;
        if(xi[i] < -30){
		  xi[i] = 665;
          yi[i] = random(95, 195)
        }
    }else{
      if (i==1){
        xi[i]=xi[i]-10;
        if(xi[i] < -30){
		  xi[i] = 665;
          yi[i] = random(95, 195)
        }
      }else{
        if (i==2){
          xi[i]=xi[i]-7;
          if(xi[i] < -30){
		    xi[i] = 665;
            yi[i] = random(225, 455)
          }
        }else{
          if (i==3){
            xi[i]=xi[i]-13;
            if(xi[i] < -30){
		      xi[i] = 665;
              yi[i] = random(225, 455)
            }
          } 
        }
      }
    }
  }
}
