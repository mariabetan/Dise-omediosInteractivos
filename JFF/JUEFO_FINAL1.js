var fuente1;
var fuente2;
var fuente3;
var fuente4;
 
//variables especies nivel 1
var arboles=[];
var cortadores=[];
var arbol;
var tronco;
var numArboles=40;
var leñador1;
var numLeñadores=2;

//var especie nivel 2
var cazadores=[];
var numCazadores=7;
var oso1;
var mamaO;
var mama1;
var mama2;
var osoHerido1;
var cazador;
var osoP1;


  
  //variables de los niveles, ganar, perder e introducciones
var ganar;
var perder;
var Introo;
//variables de niveles generales
var Intro2=2;
var Intro3=3;
var ganador=4;
var perdedor=5;
//var nivel 1 y fondos de este nivel
var Nivel1=6;
var fondo1;
var fondoV;
var Intro1=1;
//var nivel 2 y fondos de este nivel  
var Nivel2=7;
var fondo2;
var fondoP;
var Intro2=2;

var Nivel3=8;

var intro=9;
var estado=0;

var fuente1;
var fuente2;
var fuente3;
var fuente4;

//variables de puntajes
var puntaje1=0;
var puntajeMalo1=0;
var puntaje2=0;
var puntajeMalo2=0;


function preload() {
  //generales
  fuente1 = loadFont('data/Biko_Black.otf');
  fuente2 = loadFont('data/Biko_Bold.otf');
  fuente3 = loadFont('data/Biko_Light-Restricted.otf');
  fuente4 = loadFont('data/Biko_Regular.otf');
  
  ganar=loadImage('data/ganaste.png');
  perder=loadImage('data/perder.png');
  Introo=loadImage('data/intro.png');
  //nivel 1
  arbol=loadImage('data/arbol.png');
  tronco=loadImage('data/tronco.png');
  leñador1=loadImage('data/cortador.png');
 
  fondoV=loadImage('data/paisaje1.png');
  fondo1=loadImage('data/bosque.jpg');
  
  //nivel2
  mama1=loadImage('data/mamaOso1.png');
  mama2=loadImage('data/mamaOso2.png');
  osoP1=loadImage('data/osoBebe.png');
  osoHerido1=loadImage('data/osoHerido.png');
  cazador=loadImage('data/cazador.png');
  
  fondoP=loadImage('data/paisaje2.png');
  fondo2=loadImage('data/polo.jpg');
  
  
}

function setup() {
 //canvas del ancho y alto de la ventana  
   createCanvas(windowWidth, windowHeight);
  estado = intro;
  //creación de personakes de nivel1
  
  //árboles
  for (i=0; i<numArboles; i++) {
    arboles[i]=new arbolito();
  }
  //leñadores
    for (nu=0; nu<numLeñadores; nu++) {
     cortadores[nu]=new hombreCorta();
  }
  //oso mamá y bebé
  oso1= new osito();
  mamaO=new mamaOso();

 

}


function draw() {
  //intro general del juego
 if (estado==intro) {
    background(Introo);
 }
 //intro nivel1
  if (estado==Intro1) {
    background(fondoV);
    fill(0, 0, 0);
    push();
    textFont(fuente1, 15);
    textAlign(CENTER);
    text('¡No dejes que corten los árboles!', width/2, height/6);
    pop();
    push();
    textFont(fuente4, 15);
    textAlign(CENTER);
    text('¡Dale un toque al malhechor!', width/2, height/3);
    pop();
  }
  //nivel 1 del juego
  else if (estado==Nivel1) {
//fondo es una imagen 
    imageMode(CENTER);
    image(fondo1,0,0);
//se dibuja
    for (i=0; i<numArboles; i++) {
      arboles[i].dibujar();
      for (nu=0; nu<numLeñadores; nu++){
        cortadores[nu].dibujar();
        cortadores[nu].mover();
        //si el leñador corta los arboles->mueren y se suma el puntaje malo      
      if (dist(arboles[i].x, arboles[i].y, cortadores[nu].x, cortadores[nu].y)<10 && arboles[i].viva) 
      {
        arboles[i].morir();
        puntajeMalo1++;
        }
      }

    }    
   
    push();
    fill(255);
    noStroke();
    ellipse(60, 40,50,50);
    pop();
    stroke(0);
    fill(0, 0, 0);
    textFont(fuente4);
    textSize(30);
    textAlign(CENTER);
    text(puntaje1, 60, 50);
    //se gana con puntaje mayor 15
      if (puntaje1>15)
      {

        estado=Intro2;
      } 
      //cuando el leñador corta un árbol se le suma una puntaje malo,si pasa más de 5 veces se pierde el juego
      if (puntajeMalo1>5)
      {
        estado=perdedor;
      }

  }
  //introducción al nivel2
  else if (estado==Intro2) {
    imageMode(CENTER);
    image(fondoP,width/2,height/2);
    fill(0, 0, 0);
    push();
    textFont(fuente1, 14);
    textAlign(CENTER);
    text('¡Ayuda a la cría a llegar con su mamá!', width/2, height/6);
    pop();
    push();
    textFont(fuente4, 13);
    textAlign(CENTER);
    text('¡Mueve el iPad y cuidado con los malos!', width/2, height/4);
    pop();
  } 
  
  else if (estado==Nivel2) {
    //fondo es una imagen 
    imageMode(CENTER);
    image(fondo2,0,0);
    oso1.dibujar();
    oso1.mover();
    mamaO.mover();

  }
  
  //lo que sale cuando gana
   else if (estado==ganador)
  {
    
    puntaje1=0;
    puntajeMalo1=0;
    
    puntaje2=0;
    puntajeMalo2=0;
    /*
    puntaje3=0;
    puntajeMalo3=0;
    */
    
    image(ganar,windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    fill(0, 0, 0);
    push();
    textFont(fuente2, 20);
    textAlign(CENTER);
    text('¡Ganaste y ganó la tierra!', width/2, width/10);
    pop();

  }
    //lo que sale cuando pierde
  else if (estado==perdedor)
  {
    
    puntaje1=0;
    puntajeMalo1=0;
    puntaje2=0;
    puntajeMalo2=0;
    /*
    puntaje3=0;
    puntajeMalo3=0;
    */
    

    image(perder,windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    fill(0, 0, 0);
    push();
    textFont(fuente2, 20);
    textAlign(CENTER);
    text('¡Perdiste y perdió la tierra!', width/2, width/10);
    pop();

  }
}

function mouseReleased() {
  if (estado==intro) {
    estado=Intro1;
  }
  else if (estado==Intro1) {
    estado=Nivel1;
  }
  if (estado==Nivel1) {
 for (nu=0; nu<numLeñadores; nu++){
    if (dist(mouseX, mouseY, cortadores[nu].x, cortadores[nu].y)<40) {
      puntaje1++;
      cortadores[nu].rebotar();
      }
    }
  }
  else if (estado==Intro2) {
  estado=Nivel2;
  }
  return false;
}
  

//función arbol
function arbolito() {

  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.arbol1=arbol;
  this.tronco1=tronco;
  //se dibja como un arbol si no lo han cortado, cuando o cortan se convierte en tronco
   this.dibujar=function(){
      if (this.viva==true) {
      imageMode(CENTER);
      image(this.arbol1, this.x, this.y, 40, 60);
  }
    else {
      imageMode(CENTER);
      image(this.tronco1, this.x, this.y, 30, 50);
    }
   }  
    this.morir=function() {
      this.viva=false;
    }
}

//función del leñador
function hombreCorta() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX=0.1;
  this.dirY=10;
  this.leñador=leñador1;
  this.rebote=false;
  this.dibujar=function() {
    imageMode(CENTER);
    image(this.leñador, this.x, this.y, 30, 40);
  }
  this.mover=function() {
    this.x=this.x+this.dirX;
    if (this.x<=0||this.x>=width || this.rebote==true) {
      this.dirX=-this.dirX;
      this.y=this.y+this.dirY

        if (this.y<=0||this.y>=height|| this.rebote==true) {
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
      }
    }
    this.rebote=false;
  }

  this.rebotar=function() {
    this.rebote=true;
  }
}

function osito() {

  this.x = width/8;
  this.y = 3*height/4 -20;
  this.dirX=0;
  this.dirY=0;
  this.viva = true;

  this.oso = osoP1;
  this.osoHerido=osoHerido1;
  this.muerto=0;
  this.herida=false;
  this.secc=second();

  this.dibujar=function()
  {
    if (this.viva==true) {
      if (this.herida==true && secc%2==0) {
        imageMode(CENTER);
        image(this.osoHerido, this.x, this.y, 50, 50);
      }if (this.herida==true && secc%2!=0) {
        imageMode(CENTER);
        image(this.oso, this.x, this.y, 50, 50);
      } 
      else if (this.herida==false) {
        imageMode(CENTER);
        image(this.oso, this.x, this.y, 50, 50);
      }
    }
  }

  this.morir=function() {
    this.viva=false;
  }
  this.enfermar=function() {
    this.herida=true;
    this.muerto++;
  }

  this.mover=function() {
    if (this.viva||this.herida) {

      this.x=this.x+this.dirX;
      this.y=this.y+this.dirY;
      this.dirX=map(rotationX, 90, -90, 1, -1);
      this.dirY=map(rotationY, 90, -90, 1, -1);
      if (this.x>width) {
        this.x=20;
      }
      if (this.x<0) {
        this.x=width-20;
      }
      if (this.y>height) {
        this.y=20;
      }
      if (this.y<0) {
        this.y=height-20;
      }
    }
  }
}
function MamaOso() {
  this.x=4*width/5;
  this.y=height/8;
  this.mama1=mama1;
  this.mama2=mama2;
  this.seg=second();
 
  this.mover=function()
  {
    imageMode(CENTER);
   if(this.seg%2==0){
      image(this.mama1, this.x, this.y, 60, 60);
   }
   else{
     image(this.mama2, this.x, this.y, 60, 60);
   }
  }
}