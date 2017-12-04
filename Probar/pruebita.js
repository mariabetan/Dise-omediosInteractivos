var osos;
var mamas;
var arboles=[];
var cazadores=[];
var cortadores;
var tortugas=[];
var peces=[];
var bolsas=[];
var numPez=20;
var numBolsa=20;
var numTortuga=15;
var numArboles=40;
var numCazadores=7;
var pez;
var pezM;
var mama1;
var mama2;
var oso;
var osoHerido;
var bolsa;
var tortuga;
var tortugaEnf;
var arbol;
var tronco;
var cazador;
var leñador;
var fondoP;
var fondoV;
var fondoM;
var ganar;
var perder;
var Introo;
var Intro1=1;
var Intro2=2;
var Intro3=3;
var ganador=4;
var perdedor=5;
var Nivel1=6;
var Nivel2=7;
var Nivel3=8;
var intro=9;
var estado=0;
var fuente1;
var fuente2;
var fuente3;
var fuente4;
var puntaje=0;
var puntajeCopo;
var puntajeEstrella;
var puntajeFlor;
var tiempo=0;
var tiempo2=0;
var puntajeMalo=0;


function preload(){
pez=loadImage('data/pez.png');
pezM=loadImage('data/pezMuerto.png');
mama1=loadImage('data/mamaOso1.png');
mama2=loadImage('data/mamaOso2.png');
oso=loadImage('data/osoBebe.png');
osoHerido=loadImage('data/osoHerido.png');
bolsa=loadImage('data/bolsa.png');
tortuga=loadImage('data/tortuga.png');
tortugaEnf=loadImage('data/torEnferma.png');
arbol=loadImage('data/arbol.png');
tronco=loadImage('data/tronco.png');
cazador=loadImage('data/cazador.png');
leñador=loadImage('data/cortador.png');
fondoP=loadImage('data/paisaje2.png');
fondoV=loadImage('data/paisaje1.png');
fondoM=loadImage('data/paisaje3.png');
ganar=loadImage('data/ganaste.png');
perder=loadImage('data/perder.png');
Introo=loadImage('data/intro.png');
puntajeEstrella=loadImage('data/puntajeEstrella.png');
puntajeFlor=loadImage('data/puntajeFlor.png');
puntajeCopo=loadImage('data/puntajeCopo.png');
fuente1 = loadFont('data/Biko_Black.otf');
fuente2 = loadFont('data/Biko_Bold.otf');
fuente3 = loadFont('data/Biko_Light-Restricted.otf');
fuente4 = loadFont('data/Biko_Regular.otf');  
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  estado = intro;
  
  //console.log("hello");
  
for(i=0;i<numArboles;i++){
  arboles[i]=new arbolito();
}
  for(j=0;j<numCazadores;j++){
  cazadores[j]=new hombreMalo();
}
    for(k=0;k<numTortuga;k++){
  tortugas[k]=new tortuguita();
}
      for(l=0;l<numPez;l++){
  peces[l]=new pecesitos();
}
        for(m=0;m<numBolsa;m++){
  bolsas[m]=new basura();
}

mamas=new MamaO();
osos= new osito();
cortadores=new hombreCorta();

} 

function draw() { 
if(estado==intro){
    background(Introo);
    
  }
 if(estado==Intro1){
    background(fondoV);
        puntajeMalo=0;
    puntaje=0;
    fill(0,0,0);
    push();
    textFont(fuente1,20);
    textAlign(CENTER);
    text('¡No dejes que corten los árboles!',width/2,width/10);
    pop();
     push();
    textFont(fuente4,15);
    textAlign(CENTER);
    text('¡Dale un toque al malhechor!',width/2,width/7);
    pop();
  }
  
  if(estado==Intro2){
    background(fondoP);
    puntajeMalo=0;
    puntaje=0;
    fill(0,0,0);
    push();
    textFont(fuente1,20);
    textAlign(CENTER);
    text('¡Ayuda a la cría a llegar con su mamá!',width/2,width/10);
    pop();
     push();
    textFont(fuente4,15);
    textAlign(CENTER);
    text('¡Gira el iPad y cuidado con los malos!',width/2,width/7);
    pop();
  }
   else if(estado==Intro3){
    background(fondoM);
        puntajeMalo=0;
    puntaje=0;
    fill(0,0,0);
    push();
    textFont(fuente1,20);
    textAlign(CENTER);
    text('¡No dejes que la tortuga coma plástico!',width/2,width/10);
    pop();
     push();
    textFont(fuente4,15);
    textAlign(CENTER);
    text('¡Rompe las bolsas y ciudado, no vayas a matar a un pez!',width/2,width/7);
    pop();
  }
  
     else if(estado==Nivel1){

    background(104,180,111);


for(i=0;i<numArboles;i++){
  arboles[i].dibujar();

cortadores.dibujar();
cortadores.mover();
        
  if(dist(arboles[i].x,arboles[i].y,cortadores.x,cortadores.y)<10 && arboles[i].viva){
    arboles[i].morir();
    puntajeMalo++;
    }
  
      push();
        tiempo=map(millis(),0,60000,0,width);
        push();
        fill(0,0,0);
        rect(width,height-30,width-tiempo,50);
        pop();
            image(puntajeFlor,40,40,width/20,height/20);
            stroke(0);
            fill(0,0,0);
                  textFont(fuente4);
                  textSize(20);
   textAlign(CENTER);
    text(puntaje,60,50);

    
    if(puntaje>=15 && tiempo<width)
{
  estado=Intro2;
}
else if(puntaje<15 && tiempo>=width||puntajeMalo>10 && tiempo>=width)
{
  estado=perder;
}

      }
}
  
   else if(estado==Nivel2){
    background(164,214,233);
        tiempo=map(millis(),0,60000,0,width);

for(  j=0;j<numCazadores;j++){
  cazadores[j].dibujar();
  cazadores[j].mover();
  mamas.mover();
osos.dibujar();        
  if(dist(cazadores[j].x,cazadores[j].y,osos.x,osos.y)<10 && osos.viva){
    osos.enfermar();
    osos.muerto++;
  if(osos.muerto>=5){
    osos.morir();
    puntajeMalo++;
       }
    }
  }
          push();
        fill(0,0,0);
        rect(width,height-30,width-tiempo,50);
        pop();
  image(puntajeCopo,40,40,width/20,height/20);
      textFont(fuente4);
   textSize(20);
   textAlign(CENTER);
     text(puntaje,60,50);
     
     if(puntaje>=15 && tiempo<width)
{
  estado=Intro3;
}
else if(puntaje<15 && tiempo>=width||puntajeMalo>10 && tiempo>=width)
{
  estado=perder;
}
}

else if(estado==Nivel3){
    background(167,207,159);
        tiempo=map(millis(),0,60000,0,width);

for(  k=0;k<numTortuga;k++){
  tortugas[k].dibujar();
  tortugas[k].mover();
     for(l=0;l<numPez;l++){
    peces[l].dibujar();
    peces[l].mover();
        for(m=0;m<numBolsa;m++){
        bolsas[m].dibujar();
        bolsas[m].mover();

          if(dist(tortugas[k].x, tortugas[k].y,peces[l].x, peces[l].y)<10&& peces[l].viva){
          peces[l].morir();
          }
          else if(dist(tortugas[k].x, tortugas[k].y,bolsas[m].x, bolsas[m].y)<10 && bolsas[m].viva){
          bolsas[m].partirse();
          tortugas[k].enfermar();
          tortugas.enfermedad++;
            if(tortugas.enfermedad>5){
              tortugas.morir();
              puntajeMalo++;
            }
          }
        }
       
    }
}
            push();
        fill(0,0,0);
        rect(width,height-30,width-tiempo,50);
        pop();
    image(puntajeEstrella,40,40,width/20,height/20);
    fill(0,0,0);
    textFont(fuente4);
   textSize(20);
   textAlign(CENTER);
     text(puntaje,60,50);
     
     if(puntaje>=15 && tiempo<width)
{
  estado=ganar;
}
else if(puntaje<15 && tiempo>=width||puntajeMalo>10 && tiempo>=width)
{
  estado=perder;
}

if(puntaje>=15 && tiempo<width)
{
  estado=ganar;
}
else if(puntaje<15 && tiempo>=width||puntajeMalo>10 && tiempo>=width)
{
  estado=perder;
}

}
  
  else if(estado==ganador)
  {
    puntajeMalo=0;
    puntaje=0;
    background(ganar);
    fill(0,0,0);
    push();
    textFont(fuente2,20);
    textAlign(CENTER);
    text('¡Ganaste y ganó la tierra!',width/2,width/10);
    pop();
     push();
    textFont(fuente3,15);
    textAlign(CENTER);
    text('¡Un día más de vida a tu planeta!',width/2,width/7);
    pop();
  }
  
  else if(estado==perdedor)
  {
    puntajeMalo=0;
    puntaje=0;
    background(perder);
    fill(0,0,0);
    push();
    textFont(fuente2,20);
    textAlign(CENTER);
    text('¡Perdiste y perdió la tierra!',width/2,width/10);
    pop();
     push();
    textFont(fuente3,15);
    textAlign(CENTER);
    text('¡El calentamiento global es real!',width/2,width/7);
    pop();
  }
  
}



function touchStarted() {
  if (estado==intro) {
    estado=Intro1;
  } 
else if(estado==Intro1) {
    estado=Nivel1;

  }

else if(estado==Nivel1) {

  if(dist(touch[0].x, touch[0].y,cortadores.x,cortadores.y)<40){
    cortadores.rebotar(); 
    puntaje++;

  }
}

else if(estado==Intro2) {
    estado=Nivel2;

  }
else if(estado==Intro3) {
    estado=Nivel3;
  }

else if(estado==perdedor ||estado==ganador) {
    estado=intro;
  }
  return false;
}

function touchMoved() {
    if (estado==Nivel3) {

    for(l=0;l<numPez;l++){
          for(m=0;m<numBolsa;m++){

            if(dist(touch[0].x, touch[0].y, bolsas[m].x, bolsas[m].y)<20 && bolsas[m].viva){
            bolsas[m].partir();
            puntaje++;
            }
            if(dist(touch[0].x, touch[0].y, peces[l].x, peces[l].y)<20 && peces[l].viva){
            peces[l].morir();
            puntajeMalo++;
            }
          }
    }
  }
    return false;
}


function basura(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.bolsa= bolsa;
  this.dirX=1;
  this.dirY=1;
  
  this.dibujar=function()
  {
    if (this.viva){
      imageMode(CENTER);
      image(this.bolsa,this.x,this.y,15,15);
    }
  }
  
  this.partir=function()
  {
    this.viva=false;
    puntaje++;
  }
  this.mover=function()
  {
    this.x=this.x+dirX;
    if(this.x>=width||this.x<=0){
      this.y=this.y+this.dirY;
      this.dirX=-this.dirX;
      if(this.y>=height||this.y<=0){
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
      }
      
    }
  }
}

function tortuguita(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.dirX=-1;
  this.dirY=-1;
  this.tortuga= tortuga;
  this.enferma= tortugaEnf;
  this.enfermita=false;
  this.enfermedad=0;
  this.dibujar=function()
  {
    if(this.viva)
    {
      if(this.enfermita==false){
    imageMode(CENTER);
    image(this.tortuga,this.x,this.y,30,30);
      }
      else{
    imageMode(CENTER);
    image(this.enferma,this.x,this.y,30,30);    
      }
    }
  }
  this.mover=function(){
     this.x=this.x+dirX;
    if(this.x<=0 ||this.x>width){
      this.y=this.y+this.dirY;
      this.dirX=-this.dirX;
      if(this.y<=0||this.y>height){
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
      }
      
    } 
  
  }
  
  this.enfermar=function(){
    enfermita=true;
    enfermedad++;
  }
  this.morir=function()
  {
    this.viva=false;
  }
}

function osito(){

  this.x = 0;
  this.y = height;
  this.viva = true;
  this.oso= oso;
  this.osoHerido=osoHerido;
  this.muerto=0;
  this.herida=false;
  this.seg=millis()/1000;
  
  this.dibujar=function()
  {
    if(this.viva){
      if(this.herida && this.seg%2!=0){
      imageMode(CENTER);
      image(this.oso,this.x,this.y,30,30);
      }
      if(this.herida && this.seg%2==0){
      imageMode(CENTER);
      image(this.osoHerido,this.x,this.y,30,30);
      }
      else if(this.herida==false){
      imageMode(CENTER);
      image(this.oso,this.x,this.y,30,30);
      }
    }
    
  }
  
  this.morir=function(){
    this.viva=false;
  }
  this.enfermar=function(){
    this.herida=true;
    this.muerto++;
  }
  
  this.mover=function(){
    this.x=map(rotationX,-180,180,0,width);
    this.y=map(rotationY,-90,90,0,height);
  }
}

function MamaO(){
  this.x=width;
  this.y=0;
  this.mama1=mama1;
   this.mama2=mama2;
  this.seg=millis/1000;
  this.mover=function()
  {
    imageMode(CENTER);
    if(this.seg%2==0)
    {
      image(this.mama1,this.x,this.y,40,40);
    }
    else{
      image(this.mama2,this.x,this.y,40,40);
    }
    
  }
}


function pecesitos(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.dirX=-1;
  this.dirY=-1;
  this.pez= pez;
  this.pezM=pezM;
  this.dibujar=function()
  {
    if(this.viva){
      imageMode(CENTER);
      image(this.pez,this.x,this.y,15,15);
    }
    else{
      imageMode(CENTER);
      image(this.pezM,this.x,this.y,15,15);
    }
  }
  this.morir=function(){
    this.viva=false;
  }
  this.mover=function(){
    this.y=this.y+this.dirY;
    
    if(this.y>height||this.y<=0){
      this.x=this.x+this.dirX;
      this.dirY=-this-dirY;
      if(this.x>width||this.x<=0){
        this.dirX=-this.dirX;
         this.x=this.x+this.dirX;
      }
    }
  }
  
  
}

function arbolito(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.arbol=arbol;
  this.tronco=tronco;
  this.dibujar=function()
  {
    if(this.viva){
      imageMode(CENTER);
      image(this.arbol,this.x,this.y,40,60);
    }
    else{
      imageMode(CENTER);
      image(this.tronco,this.x,this.y,30,50);
    }
  }
  this.morir=function(){
    this.viva=false;
  }
}



function hombreMalo(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX=0.3;
  this.dirY=0.3;
  this.cazador=cazador;
  this.dibujar=function(){
    imageMode(CENTER);
    image(this.cazador,this.x,this.y,20,30);
  }
    this.mover=function(){
      this.x=this.x+this.dirX;
      if(this.x<=0||this.x>=width){
        this.dirX=-this.dirX;
        this.y=this.y+this.dirY
        if(this.y<=0||this.y>=height){
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
        }
      }

    }  
}



function hombreCorta(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX=0.1;
  this.dirY=10;
  this.leñador=leñador;
  this.dibujar=function(){
    imageMode(CENTER);
    image(this.leñador,this.x,this.y,30,40);
  }
    this.mover=function(){
      this.x=this.x+this.dirX;
      if(this.x<=0||this.x>=width){
        this.dirX=-this.dirX;
        this.y=this.y+this.dirY
      }
        if(this.y<=0||this.y>=height){
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
        }
 
    
        
      if(this.x<=0||this.x>=width || this.rebote==true){
        this.dirX=-this.dirX;
        this.y=this.y+this.dirY;
        this.x=this.x+this.dirX;
      }
        if(this.y<=0||this.y>=height){
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
          this.rebote=false;
        }
              if(this.rebote==true){
        this.dirX=-this.dirX;
        this.x=this.x+this.dirX;
        this.rebote=false;
      if(this.x<=0||this.x>=width){
        this.dirX=-this.dirX;
        this.y=this.y+this.dirY
        if(this.y<=0||this.y>=height){
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
          
        }
      }
      }
      }
      
}





