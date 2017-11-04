var name = "flipbook"; 
var coled =[];
var yed = []; 
var xed=[];
var ang=0;
var x=[];
var x1=[];
var x2=[];
var x3=[];
var lx=[];
var ly=[];
var ll=0;
var w=0;
var hx=[];
var hy=[];
var xu=[];


var tiempo;
var segundos;
//cantidad de edificios
var cant = 5000;
 // se crea un un canvas y conteo de frames 
function setup() {
angleMode(DEGREES);
createCanvas (240.94 , 155.91);
frameRate(12);
  
   
}



function draw(){
  
  background(211,211,216);
  // el tamaño de los edificos y el color es asignado como una variable aleatoria 
  for ( var i = 0; i < cant; i=i+1){
   
  xed[i]=random(15,60);
   yed[i] = random(60, height); 
   coled[i]=random(0,255);
   
   
   fill(coled[i],coled[i],coled[i]+1);
    stroke(1);
    rect(i*30, height, xed[i], -yed[i]);
    
    
  }
  fill(0,0,0,200);
  rect(0,147,width,60);
  fill(178,158,118,95);
  rect(0,0,width,height);
  
  

  segundos=second();
  tiempo=millis();
  //la rueda trasera de la bicicleta 
  
    push();
 
   
   translate(width-45, height-35);
  rotate(ang);
  strokeWeight(5.5);
  stroke(0,0,0,155);
  fill(90,90,90,90);
  ellipse(0,0,50,50);
    noFill();
  strokeWeight(2);
  line(0,0,15,15)
  line(0,0,-15,-15)
  line(0,0,0,-25)
  line(0,0,-25,0)
   line(0,0,0,25)
  line(0,0,25,0)
  line(0,0,18,-18);
  line(0,0,-18,18);
    
  pop();
  
    //la rueda delantera de la bicicleta 
  push();
 
   
   translate(width-155, height-35);
  rotate(ang);
  strokeWeight(5.5);
  stroke(0,0,0,155);
  fill(90,90,90,90);
  ellipse(0,0,50,50);
    noFill();
  strokeWeight(2);
  line(0,0,15,15)
  line(0,0,-15,-15)
  line(0,0,0,-25)
  line(0,0,-25,0)
   line(0,0,0,25)
  line(0,0,25,0)
  line(0,0,18,-18);
  line(0,0,-18,18);
    
  pop();
 //el angulo de giro aumenta, para que la rueda gire
  ang=ang+6;
  
  //manubrio  
  push();
  strokeWeight(8);
    stroke(125,124,128);
  line(width-145,height-80,width-155,height-35);
  noFill();
  stroke(0,0,0);
  bezier(105, 50, 50, 50, 100, 100, 97, 70);
  pop();

//el marco de la bicicleta  
  push();
  stroke(125,124,128);
  strokeWeight(5);
  line(width-45, height-35,width-90,height-60); 
  line(width-45, height-35,width-100,height-30); 
  line(width-90,height-75,width-100,height-30);
  line(width-100,height-30,width-150,height-50);
 
  pop();
  
//la cabeza del ciclista  
  push();
  fill(10,10,10);
  ellipse(width-95,height-75,30,10);
  
  pop();
  
  //el cuerpo de palitos del ciclista
  push();
  fill(0,0,0);
  
  pop();
  push();
  fill(203,203,209);
  stroke(203,203,209);
  strokeWeight(5);
  line(120,30,140,60);
  line(140,60,100,80);
  
  line(120,30,152,80);
  line(152,80, 130,105);
  ellipse(120,30,30,40);
  pop();
  push();
  
  //el movmiento constante de arriba a abajo del peda de la bicicleta
for(var k=0;k<1000;k++)
{
  x[k]=random(132,138);
  x1[k]=random(134,136);
  x2[k]=random(128,130);
  x3[k]=random(132,138);
  stroke(203,203,209);
  strokeWeight(5);
  
   line(140,130,125,x3[k]);
  line(130,105,140,x2[k]);
  stroke(0,0,0);
  strokeWeight(1);
  
  line(142,128,142,x[k]+random(-2,2));
  fill(90,90,90);
  rect(130,x1[k],20,10);
}
  
  pop();
  //la lluvia
for ( var h = 0; h < 5000; h=h+1){
   lx[h] = random(0, width); 
   ly[h] = random(0, height); 
  
  if(tiempo>=5000 && tiempo<13000)
  {
    //se le pone una ubicación aleatoria a cada gota
    noStroke();
    fill(113,113,117,50);
    ellipse(lx[h], ly[h]+ll, 5, 10);
    
    ll=ll+0.1;
    if(ly[h]+ll>height)
    {
      
      //las gotas van cayendo, cuando llegan al máximo del canvas vuelven a empezar desde lo mas arriba a caer
      ll=0;
      ll=ll+1;
    }
  }
  }
  
  //pasa el bus
if(tiempo>=15000 && tiempo<25000)
  {
    
    if(tiempo<20000)
    {
      fill(124,124,128);
      rect(100-w,20,500,130);
      fill(255,255,255,100);
      //ventanas del bus
      rect(110-w,30,80,60);
      rect(180-w,30,80,60)
      rect(250-w,30,80,60)
      rect(320-w,30,80,60)
      rect(390-w,30,80,60)
      rect(460-w,30,80,60)
      
      //movimiento del bus
      w=w+40;
    }
    
    //cuando el buz pasa deja humo
    if (tiempo>=18000)
    {
      
      //el humo también se hace como una serie de elipses con opacidad que tienen ubicaciones aleatorias en un rando de espacios 
       for ( var s = 0; s < 200; s=s+1){
   hx[s] = random(0, width-20); 
   hy[s] = random(0, height/2); 
         xu[s]=random(0,25);
         noStroke();
         
         fill(95,94,98,100);
   ellipse(hx[s], hy[s], xu[s], xu[s]);
  }
 
    }
  }
  //se guardan los frames como imágenes
  if (frameCount < 70) {
 //saveCanvas(name+frameCount, 'jpg');
    
  }


}