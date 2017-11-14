var pavoreales=[];
var cucarrones=[];
var aviones=[];
var cucarachas=[];
var numerop=50;
var numeroi=100;
var numeroa=20;


function setup() {
  createCanvas(400, 400);

  for (var i=0; i<numerop; i++)
  {
    pavoreales[i]=new Pavoreal();
    
  }
  for ( var j=0;j<numeroi;j++)
  {
    cucarrones[j]=new cucarron();
    cucarachas[j]= new cucaracha();
  }
    for ( var k=0;k<numeroa;k++)
  {
    aviones[k]= new Avion();
  }
}

function draw() {
  background(255, 255, 255);
  for (var j=0; j<numerop; j++)
  { 
    pavoreales[j].dibujarse();
    pavoreales[j].moverse();
    pavoreales[j].crecerse();
    for( var i=0; i<numeroi;i++)
    {
      cucarrones[i].dibujo();
      cucarachas[i].dibujar();
      for(var k=0; k<numeroa;k++)
      {
        aviones[k].dibujar();
    var disCentro1;
    //disCentro1=dist(mouseX, mouseY, flores[j].x, flores[j].y);
    if(mouseIsPressed)
    {
       if (disCentro1<10)
    {
      flores[j].girar();
    }
    }
    var disCentro;
    disCentro=dist(mouseX, mouseY, pavoreales[j].x, pavoreales[j].y);
    var distanteC;
    //distanteC=dist(flores[j].x, flores[j].y, lascruces[j].x, lascruces[j].y);
    if (disCentro<10)
    {
      pavoreales[j].morirse();
    }
    if (distanteC<5)
    {flores[j].muerte();
    }
  }
}
}
}
function Pavoreal()
{
  this.x=random(0, width);
  this.y=random(0, height);
  this.viva=true;
  this.sexo=true;
    this.colR=random(0, 255);
  this.colG=random(0, 255);
  this.colB=random(0, 255);

  this.dibujarse= function()
  {
    if (this.viva)
    {
      fill(this.colR,this.colG,this.colB);
      triangle(this.x-10, this.y-2,this.x-20,this.y-15,this.x-20,this.y-10);
      triangle(this.x-10, this.y,this.x-20,this.y,this.x-20,this.y+2);
      ellipse(this.x,this.y,20,10);
      push();
      fill(255,136,6);
      triangle(this.x+10,this.y,this.x+20,this.y,this.x+10,this.y+2);
      pop();
       push();
      fill(255,255,255);
      ellipse(this.x+2,this.y-2,5);
      pop();
             push();
      fill(0,0,0);
      ellipse(this.x+2,this.y-2,2);
      pop();
      push();
      stroke(255,136,6);
      strokeWeight(2);
      line(this.x,this.y+6,this.x,this.y+10)
      line(this.x,this.y+10,this.x+10,this.y+10);
      pop();
    }
  }
  this.moverse=function()
  {
    this.x=this.x+random(-5, 5);
    this.y=this.y+random(-5, 5);
  }
  this.crecerse=function()
  {
    this.tam=this.tam+random(-1, 1);
  }
  this. morirse=function()
  {
    this.viva=false;
  }
}

function cucarron()
{
  
    this.x=random(0, width);
  this.y=random(0, height);
  this.viva=true;
  this.sexo=true;
  this.tiempo=millis();
  this. col1=random(100,200);
  this. col2=random(100,200);
  this. col=random(50,200);


  
  this.dibujo=function()
  {
    if(this.viva)
    {
 		fill(this. col1,this. col2,this. col3);
      line(this.x, this.y-4,this.x+3,this.y-7);
      line(this.x,this.y-4,this.x-3,this.y-7);
      ellipse(this.x,this.y-2.5,2,2);
      ellipse(this.x,this.y,5);
      push();
      stroke(0,0,0);
      strokeWeight(1.5);
      line(this.x-2.5,this.y-2,this.x-4,this.y-4);
      line(this.x-2.5,this.y+2,this.x-4,this.y+4);
      line(this.x+2.5,this.y-2,this.x+4,this.y-4);
      line(this.x+2.5,this.y+2,this.x+4,this.y+4);
      pop();
      
      
    }
  }
 
	}

  function Avion()
{
    this.x=random(0, width);
  this.y=random(0, height);
  this.viva=true;
  this.tiempo=millis();
  this. col1=random(0,20);
  this. col2=random(0,20);
  this. col=random(0,20);


  
  this.dibujar=function()
  {
    if(this.viva)
    {
 		fill(this. col1,this. col2,this. col3);
		beginShape();
      vertex(this.x,this.y);
      vertex(this.x+4,this.y+4);
      vertex(this.x+4,this.y+10);
      vertex(this.x+14,this.y+20);
      vertex(this.x+14,this.y+27);
      //6
      vertex(this.x+4,this.y+22);
      vertex(this.x+4,this.y+37);
      vertex(this.x+7,this.y+45);
      vertex(this.x-7,this.y+45);
      vertex(this.x-4,this.y+37);
      //11
      vertex(this.x-4,this.y+22);
      vertex(this.x-14,this.y+27);
      vertex(this.x-14,this.y+20);
      vertex(this.x-4,this.y+10);
      vertex(this.x-4,this.y+4);
    endShape(CLOSE);
     
    	}
  	}
}

  function cucaracha()
{
    this.x=random(0, width);
  this.y=random(0, height);
  this.viva=true;
  this.tiempo=millis();
  
  this.dibujar=function()
  {
    if(this.viva)
    {
 		

      push();
      fill(127,63,0);
      ellipse(this.x,this.y,5,10);
      stroke(0,0,0);
      strokeWeight(1.5);
      line(this.x-5,this.y-3,this.x+5,this.y-3);
      line(this.x-5,this.y,this.x+5,this.y);
      line(this.x-5,this.y+3,this.x+5,this.y+3);
      pop();
     
    	}
  	}
}