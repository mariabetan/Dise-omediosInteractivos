//posición de vértice principal de cuadrado, dirección y velocidad (i)
var x = 150;
var y=10;
var ancho=40;
var alto= 100;
var dirx=1;
var i= 3;

var posx=200;
var posy=200;
var r=20;
var j=5;
var col=100;
var trans=255;
var col2=25;
var t=0;
var posx1=200;
var posy1=10;
var r1=20;

var hor=10;
var vert=200;
var crec1=20;
var crec2=30;
var crec3=40;
var crec4=50;
var crec5=60;
var xx=10;
var yy=0;
var l=0.5;
var rec=3;

var y2=200;
var x2=200;
var relleno=10;
var k=2;
var alargue=10;



function setup() { 
  createCanvas(400, 400);

} 

function draw() {
    var milisc= millis();
  //se dibuja el fondo
  background(0,0,0);
  
  fill(255,20,12);
  rect(x,y,ancho,alto);
  x=x+dirx*0.5;

  y=y+5*i;
 //se mueve hacia abajo y luego de devuelve
 if(y>200)
 {
  
   i=-i;
  
 }
  if(y<20)
  {
    i=i*-1; 
  }  
    y=y+0.5*i;
  if(y>300)
  {
    y=100;
  }
  
  //siga x moviéndose infinitamente
  
  if(x>=400)
  {
    x=-10;
    y=y+100;
  }
  //número de RGB
     col=-col+1;
  
        if(milisc>20000 && milisc<30000)
  
  {
    //aumento del ancho
 y=250;
    x=0;
    ancho=ancho+10;
   
  }

  if(milisc>4000 && milisc<20000)
  
  {
 //cambia el color y el tamaño del círculo
    fill(10+col, 100- col, col, trans);
    col=col+20;
    trans=trans-1;
     ellipse(  posx, posy, r);
    r=r+25;
    if(r>180)
    {
      r=-r;
    }
    
    if(col<20 && col>150)
    {
      col=-10*col;
    }
 
    

    
  }
  //un tirángulo se agranda al tamaño de la pantalla (más)
  
  if(milisc>25001 && milisc<30000)
  {
    fill(col2,0,col2-5,t);
    col2=col2+t;
    t=t+5;
    triangle(hor+crec1,vert+crec2,hor,vert-crec4,hor+crec5,vert+crec3)
    crec1=crec1-10;
    crec2=crec2+100;
    crec3=crec3+15;
    crec4=crec4+40;
    crec5=crec5+50;
  }
  // aparecen mucho círculos rápidamente en el canvas
  if(milisc>5000 && milisc<5050)
  {
    fill(255,10,10);
    ellipse(10,10,50);
  }
  
    else if(milisc>5200 && milisc<5250)
  {
    fill(10,255,10);
    ellipse(20,100,80);
  }
  
    if(milisc>5300 && milisc<5350)
  {
    fill(255,10,255);
    ellipse(200,40,50);
  }
  
    if(milisc>5400 && milisc<5450)
  {
    fill(255,255,10);
    ellipse(300,100,30);
  } 
    else if(milisc>5500 && milisc<5550)
  {
    fill(0,255,100);
    ellipse(200,300,20);
  }
  
    if(milisc>5600 && milisc<5650)
  {
    fill(255,255,255);
    ellipse(200,300,100);
  }
  // paparecen varía lineas paralelas en la parte superior de la pantalla
      if(milisc>5700 && milisc<8000)
  {
    for(var c=1; c<255; c=c+10)
    {
      c=c*2*j;
    }
    if(c>=255)
    {
      c=10;
    }
    fill(c,0,c+10);
    line(200,300,100);
    }
  
  //las líneas aumenta
 if (milisc>5900 && milisc<7000)
 {
   stroke(255,255,255);
   strokeWeight(1+l);
  
   line(xx,yy,xx,yy+100)
   
 }
   if (milisc>6000 && milisc<6500)
 {
   stroke(255,255,255);
   strokeWeight(1+l);
  
   line(xx+30,yy,xx+30,yy+100)
   
 }
  
     if (milisc>7500 && milisc<8500)
 {
   stroke(255,255,255);
   strokeWeight(1+l);
  
   line(xx+90,yy,xx+90,yy+100)
   
 }
  
       if (milisc>8500 && milisc<9500)
 {
   stroke(255,255,255);
   strokeWeight(1+l);
  
   line(xx+120,yy,xx+120,yy+100)
   
 }
  
       if (milisc>9500 && milisc<10500)
 {
   stroke(255,255,255);
 
   line(xx+120,yy,xx+120,yy+100)
   
 }
  
         if (milisc>10500 && milisc<11500)
 {
   stroke(255,255,255);
 
   line(xx+150,yy,xx+150,yy+100)
   
 }
  
           if (milisc>11500 && milisc<12500)
 {
   stroke(255,255,255);
 
   line(xx+200,yy,xx+200,yy+100)
   
 }
  
             if (milisc>12500 && milisc<13500)
 {
   stroke(255,255,255);
 
   line(xx+240,yy,xx+240,yy+100)
   
 }
  
    
             if (milisc>13500 && milisc<14500)
 {
   stroke(255,255,255);
 
   line(xx+280,yy,xx+280,yy+100)
   
 }
  
               if (milisc>14500 && milisc<15500)
 {
   stroke(255,255,255);
 
   line(xx+330,yy,xx+330,yy+100)
   
 }
 
  
   if (milisc>12000 && milisc<19000)
 {
   line(xx+50,yy,xx+50,yy+100)
     stroke(255,255,255);
   strokeWeight(1+l);
    l=l+1;
   //el cuadrado aumenta de ancho
   
          if(milisc>20050 && milisc<24000)
  
  {
 y=0;
    x=0;
    ancho=ancho+10;
   
  }
   
 }
  
  //aparecen varias líneas espaciadas entre ellas
  
    if (milisc>17000 && milisc<20000)
  {
  
    for(var espacio=1; espacio <= 400; espacio= espacio + 10)
    {
      stroke(0,255,255);
      strokeWeight(2.5);
      line(2,espacio,alargue+20, espacio);
      alargue=alargue+10;
    }
      
  
  }
  //aparece un cuadrado en medio de la pantalla
  
  if( milisc>20000)
  {
    fill(255,30,0);
    noStroke();
    rect(0,0,400,100-rec);
    
    rec=rec+5;
    
  }
  //dentro del cuadrado aparecen muchos pequeños
               if (milisc>9550 && milisc<17000)
 {
   noStroke();
   fill(255,0,255);
 
   rect(x2, y2, 100, 100);
   
   
 }
    
               if (milisc>10000 && milisc<17000)
 {
   noStroke();
   fill(0,245,0);
 
   rect(x2, y2, 50, 50);
   
   
 }
  
                 if (milisc>10550 && milisc<17000)
 {
   noStroke();
   fill(255,245,255);
 
   rect(x2, y2, 25, 25);
   
   
 }
  
                   if (milisc>11000 && milisc<17000)
 {
   noStroke();
   fill(255,20,0);
 
   rect(x2, y2, 17, 17);
   
   
 }
  
                     if (milisc>11550 && milisc<17000)
 {
   noStroke();
   fill(20,245,0);
 
   rect(x2, y2, 9, 9);
   
   
 }
  
                       if (milisc>12550 && milisc<20000)
 {
   noStroke();
   fill(255,245,255);
 
   rect(x2, y2, 4, 4);
   
   
 }

    
  //el fondo cambia muy rápido a varios colores
  if(milisc>13000 && milisc<17000)
  {
     background(relleno*k,relleno + 10*k, relleno,190);
    k=-k+0.1;
    relleno=relleno+1;
    if(relleno>255 || relleno<0)
    {
      relleno=100;
      k=2;
    }
  
  } 
} 