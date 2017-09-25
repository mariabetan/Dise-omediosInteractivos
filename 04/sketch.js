//las contantes, son básicamente las posiciones y tamaños de los botones
var b1x=10;
var b1y=10;
var b1tam=20;

var b2x=10;
var b2y=50;
var b2tam=20;

var b3x=10;
var b3y=90;
var b3tam=20;

var b4x=10;
var b4y=130;
var b4tam=20;

var b5x=10;
var b5y=170;
var b5tam=20;

var b6x=10;
var b6y=210;
var b6tam=20;

var b7x=10;
var b7y=250;
var b7tam=20;

var b8x=10;
var b8y=290;
var b8tam=20;

var b9x=10;
var b9y=330;
var b9tam=20;

var b10x=12;
var b10y=360;
var b10tam=15;

var borrx=20;
var borry=390;
var borrtam=10;

var erx=385;
var ery= 15;
var er1=15;
var er2=25;


//son los valores que le da cada botón
var valor=0;
var value=0;
var valeur=0;
var borr=0;


//se creaa el CANVAS
function setup() { 
  createCanvas(windowWidth,windowHeight);
       var inc=TWO_PI/50.0; 
    background(255,255,255);

} 

function draw() { 
 
  //se le da un valor a cada botón, para sí luego darle una acción
  if(mouseIsPressed)
  {
    if(mouseX>b1x&&mouseY>b1y&&mouseX<=b1x+b1tam&&mouseY<=b1y+b1tam)
    {
      valor=1;
    }
    
    if(mouseX>=b2x&&mouseY>=b2y&&mouseX<=b2x+b2tam&&mouseY<=b2y+b2tam)
    {
      valor=2;
    }
     if(mouseX>=b3x&&mouseY>=b3y&&mouseX<=b3x+b3tam&&mouseY<=b3y+b3tam)
    {
      valor=3;
    }
    
     if(mouseX>=b4x&&mouseY>=b4y&&mouseX<=b4x+b4tam&&mouseY<=b4y+b4tam)
    {
      valor=4;
    }
    
         if(mouseX>=b5x&&mouseY>=b5y&&mouseX<=b5x+b5tam&&mouseY<=b5y+b5tam)
    {
      valor=5;
    }
    
           if(mouseX>=b6x&&mouseY>=b6y&&mouseX<=b6x+b6tam&&mouseY<=b6y+b6tam)
    {
      valor=6;
    }
    //los botones 7,8 y 9 hacen cambios en las herramientas anteriors
               if(mouseX>=b7x&&mouseY>=b7y&&mouseX<=b7x+b7tam&&mouseY<=b7y+b7tam)
    {
      value=1;
    }
    
                   if(mouseX>=b8x&&mouseY>=b8y&&mouseX<=b8x+b8tam&&mouseY<=b8y+b8tam)
    {
      value=2;
    }
    
                   if(mouseX>=b9x&&mouseY>=b9y&&mouseX<=b9x+b9tam&&mouseY<=b9y+b9tam)
    {
      value=3;
    }
    
                       if(mouseX>=b10x&&mouseY>=b10y&&mouseX<=b10x+b10tam&&mouseY<=b10y+b10tam)
    {
      valeur=1;
    }
     //el borrador                   
    if(mouseX>=borrx&&mouseY>=borry&&mouseX<=borrx+borrtam&&mouseY<=borry+borrtam)
    {
      borr=1;
    }
    
     if(mouseX>=erx&&mouseY>=ery&&mouseX<=erx+er1&&mouseY<=ery+er1)
    {
      borr=2;
    }
    }
  
  //la acción que hará cada botón
  if(valor==1)
  {
   if(value==1)
   {
     //creará un letra que cambiará de tamaño con el movimiento del mouse
      textSize(pwinMouseX);
    fill(255,0,0);
    text(key, mouseX+40,mouseY+20);
    text(key, 220,220);
    text(key, 100,220);
   }
    if(value==2)
   {
      textSize(pwinMouseY/6);
    fill(255,0,mouseY);
    text(key, mouseX+40,mouseY+20);
    text(key, 220,220);
    text(key, 100,220);
   }
     if(value==3)
   {
      textSize(pwinMouseY/3);
    fill(255,255,0,mouseX);
    text(key, mouseX+40,mouseY+20);
    
   
   }
    
  }
  //para el botón 2 se crea una curva, que cambia su punto final con el mouse
  if(valor==2)
  {
    if(value==1)
    {
      //si además se presiona el boton 7, se obtiene un cambio en el color
    stroke(0,0,0);
      strokeWeight(1);
    noFill();
	bezier(width/2,height/2, (width/10), (height/10), (width/10), 3*(height/4), mouseX,mouseY);
    }
      if(value==2)
    {
    stroke(255,0,255);
      strokeWeight(1);
    noFill();
	bezier(width/2,height/2, (width/10), (height/10), (width/10), 3*(height/4), mouseX,mouseY);
    }
          if(value==3)
    {
    stroke(255-mouseX,0,pwinMouseY);
      strokeWeight(5);
    noFill();
	bezier(width/2,height/2, (width/10), (height/10), (width/10), 3*(height/4), mouseX,mouseY);
    }
    
  }
  
  //se forma un polígono, que cambia sus vértices con el movimiento del mouse
  if(valor==3)
  {
   fill(255,255,0); 
  beginShape();
vertex(mouseX,mouseY);
vertex(mouseX+10,mouseY-10);
vertex(mouseX+(width/25),mouseY-60);
vertex(mouseX+(width/15),mouseY+(height/15));
vertex(mouseX/15,mouseY+(height/25));
endShape();
  
  }
 // se busca tener dos opciones según lo typeado en el teclado 
if(valor==4)
{
 //sale un letero que advierte de esta función
  var milis = millis();
 if(milis>3000&&milis<10000)
 {
 
    fill(0,0,0,100);
     textSize(16);
     text("Presiona 2 o 3",b4x+45,b4y);
   fill(255,255,255);
  
  }
  //dependiendo de si se presiona 2 o 3 se forman círculos o cuadrados (son varios)
if(key==2)
{
  fill(255,0,mouseY, mouseX-50);
  ellipse(mouseX/2,mouseY/2,width/15);
  ellipse((mouseX/2),(mouseY/2),width/35);
   ellipse((mouseX/2)+(width/20),(mouseY/2)-(height/10),width/15);
  ellipse((mouseX/2)+(width/20),(mouseY/2)-(height/10),width/35);
  ellipse((mouseX/2)+(width/15),(mouseY/2),width/15);
   ellipse((mouseX/2)+(width/15),(mouseY/2),width/35);
   ellipse((mouseX/2)+(width/20),(mouseY/2)+(height/10),width/15);
   ellipse((mouseX/2)+(width/20),(mouseY/2)+(height/10),width/35);

}
 
 if(key==3)
  {
   fill(mouseX,255,mouseY, mouseX); 
    rect(mouseX,mouseY,width/20, height/20);
    rect(mouseX+(width/30),mouseY-(height/15),width/20, height/20);
    rect(mouseX+(width/15),mouseY,width/20, height/20);
    rect(mouseX+(width/30),mouseY+(height/15),width/20,height/20);
  } 
}
//se crea un línea que sigue un patrón trigonómetro, el cuál depende del movimiento del mouse  
  if(valor==5)
  {
var a = 0.0;
var inc = TWO_PI/25.0;
    stroke(mouseX,mouseY,mouseX+mouseY);
    strokeWeight(2.2);
    line(mouseX*4, 50, mouseX*4, mouseY+sin(a*winMouseX)*40.0);
     a = a + inc;
  }
  
  //se crea un curva cuyo color cambia según la posición del mouse
  if(valor==6)
  {
    fill(255,0,255,10);
    stroke(mouseX,mouseY,0);
curve(width/60,height/30, (mouseX/3)-(width/5),(mouseY/2)-(height/10), mouseX,mouseY, width/3, 3*height/5 )
  }
 // se crean trángulos cuyo color y vértices cambian según la posición del mouse
if(valeur==1)
    {
    fill(0,0,mouseY);
     
      triangle(pwinMouseY,pwinMouseY,(width/5)+mouseY,(3*height/4)+mouseX,(width/8)+pwinMouseY,(height/8)+pwinMouseX);
  }
  //borra todo
  if(borr==1)
  {
    background(255,255,255);
  }
  //borrador tradicional
    if(borr==2)
  {
//es necesario darles valor de cero, para que las demás funciones no continúen
    valor=0; 
    value=0;
    valeur=0;
    fill(255);
    noStroke();
    ellipse(mouseX,mouseY,40,40);
  }
  
  
//se crean los aspectos gráficos de la interfaz al final, para que los pinceles pueden pintar sobre estos  
  //la barra
  noStroke();
  fill(200,200,200);
  rect(0,0,width/10,height);
  
  
  //los botones
 
  		fill(255,255,0);
  		rect(b1x,b1y,b1tam,b1tam);
  fill(255,255,255);
      rect(b2x,b2y,b2tam,b2tam);
    fill(255,0,255);
      rect(b3x,b3y,b3tam,b3tam);
    fill(0,0,255);
      rect(b4x,b4y,b4tam,b4tam);
      fill(0,0,0);
      rect(b5x,b5y,b5tam,b5tam);
      fill(255,0,0);
      rect(b6x,b6y,b6tam,b6tam);
      fill(100,0,255);
      rect(b7x,b7y,b7tam,b7tam);
          fill(155,200,100);
      rect(b8x,b8y,b8tam,b8tam);
      fill(25,230,200);
      rect(b9x,b9y,b9tam,b9tam);
      fill(100,20,170);
      rect(b10x,b10y,b10tam,b10tam);
  fill(255,255,255);
  ellipse(borrx,borry,borrtam);
  
    fill(255,255,0,155);
  ellipse(erx,ery,er2);
   fill(255,255,255);
  ellipse(erx,ery,er1);
  }