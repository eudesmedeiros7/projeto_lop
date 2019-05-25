/*Eudes Medeiros - 01C
  Marcus Vinícius - 01C*/
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
var tela = 2;

function calculaY(){
	// geração de cada retangulo(obstáculo) em partes da tela(4 partes)
	// criação de uma função a fim de otimizar o código
		for (i=0; i<4; i++){
	    if (i==0){
			 xi[i]=xi[i]-7.6;
			  if(xi[i] < -30){
			xi[i] = 665;
				yi[i] = random(55, 55+105-35)
			  }
		  }else{
			if (i==1){
			  xi[i]=xi[i]-8;
			  if(xi[i] < -30){
			xi[i] = 665;
				yi[i] = random(105+55, 55+2*105-35)
			  }
			}else{
			  if (i==2){
				xi[i]=xi[i]-6.5;
				if(xi[i] < -30){
			  xi[i] = 665;
				  yi[i] = random(210+55, 55+3*105-35)
				}
			  }else{
				if (i==3){
				  xi[i]=xi[i]-7;
				  if(xi[i] < -30){
				xi[i] = 665;
					yi[i] = random( 315+55, 55+4*105-35)
				  }
				} 
			  }
			}
		  }
		}
}
  function setup() {
    createCanvas(640, 480);
      frameRate(60)
        xj = 40;
        xd = xj;
        
        yj = 250;
        yd = yj;
      for(i=0;i<4;i++){
        xi[i] = -50;
	   }
    calculaY();
  }
  function draw() {
	  if (tela==4){
	      // tela do game over 
		  background(0);
		  fill(random(0,255),random(0,255),random(0,255))
		  textSize(60);
		  textAlign(CENTER);
		  text('GAME OVER', 320, 240);
		  rect(143, 245, 360, 7);
		  fill(255, 255, 255);
		  fill(random(0,255),random(0,255),random(0,255))
		  textSize(20);
		  textAlign(CENTER);
		  text('Press F5 to restart', 320, 280);
	  }
	  if(tela == 2){
		  //tela do jogo logo após abrir
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
		
		
		// controle do personagem (cima em baixo)
		if (keyIsDown(UP_ARROW))
		  yj-=6
		if (keyIsDown(DOWN_ARROW))
		  yj+=6
      if( yj<73){
        yj=73
      }
		if (yj>=450)
		  yj=450;
		  background(20)
		//Desenhos do cenario//
		  fill (255, 255, 255)
		  textSize(32);
		  text('Vidas: '+vidas, 10, 30);
		  text('Pontos: '+pontos, 250, 30);
		  text('Dificuldade: '+dificuldade, 443, 30);
		  rect(-1, 40, 645, 12)
		  fill(255,255,255);
		  ellipse(xj, yj, 40, 40);
		  text(mouseX, 10, 70);
		  text(mouseY, 70, 70);
		if (disparo){
			//elipse disparada
		ellipse(xd, yd, 8, 8);
		  }
		
		for (i=0; i<4; i++){
			// geração de 4 retangulos com cores aleatórias
			fill(random(0,255),random(0,255),random(0,255))
			rect(xi[i], yi[i], 30, 30)
		}
		// geração de cada retangulo(obstáculo) em partes da tela(2 partes)
		calculaY();
		
	  //COLISÃO - ETAPA 6
	for(i=0; i<4; i++){
	if(collideRectCircle(xi[i], yi[i], 30, 30, xj, yj, 25)){
				xj = 40;
				yj = 255;
				xi[i] = 665;
        if (yi[i]==0){
          xi[i]=xi[i]-7.6;
           if(xi[i] < -30){
           yi[i] = random(55, 55+105-35)
           }
         }else{
         if (yi[i]==1){
           xi[i]=xi[i]-8;
           if(xi[i] < -30){
           yi[i] = random(105+55, 55+2*105-35)
           }
         }else{
           if (yi[i]==2){
           xi[i]=xi[i]-6.5;
           if(xi[i] < -30){
             yi[i] = random(210+55, 55+3*105-35)
           }
           }else{
           if (yi[i]==3){
             xi[i]=xi[i]-7;
             if(xi[i] < -30){
             yi[i] = random( 315+55, 55+4*105-35)
             }
           } 
           }
         }
         }
		    vidas--;
				if(vidas==0){
					// Fim do jogo, quando vidas = 0, game over
					tela = 4;
				}
			}
			if(collideRectCircle(xi[i], yi[i], 30, 30, xd, yd, 25)){
				// Disparos "multiplós se acerto verdadeiro e contagem de pontos para cada acerto
				disparo = false;
				xd = xj;
				yd = yj;
				pontos++;
			}
		}
	}
  }
