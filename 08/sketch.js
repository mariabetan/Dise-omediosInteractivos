var img;
var filtro;
var y=0;
var misS;
var posX=0;
var posY=0;
//se carga la imágen
function preload(){
  img=loadImage('assets/foto1.jpg');
  filtro=loadImage('assets/filtro.png');
  
}
//los filtors se hacen según tiempo, el primer filtro es un máscara de recorte
function setup() { 
   createCanvas(400, 400);
   
 misS=millis();
     image(img,0,0);  
  
  if(misS>1&&misS<10000)
  {
   img.mask(filtro);
  }
}

//el segundo filtro es convertir el valor del venrde (RGB) es cero
function draw() { 
   background(255,255,255);
  misS=millis();
  for(var x=0; x<img.width;x++){
     for(var y=0; y<img.height;y++)
     {
      var pix=img.get(x,y);
     
    var rojo=pix[0];
  var verde=pix[1];
  var azul=pix[2];
  var transp=pix[3];   
     }
    }
if(misS>10000&&misS<20000)
{
     image(img,0,0);  
  img.loadPixels();
    
    pix[1]=0;
    img.set(pix);
  imgGato.updatePixels();
}
//el segundo filtro es la imagen pixelada
 if(misS>25000&&misS<35000)
 {
  fill(rojo,verde,azul,transp);
 	ellipse(posX+5,posY+5,5,5);
  
    posX=posX+1;
   if(posX>img.width)

  {
    posX=0;
    posY=posY+1;
  }
   
 }
}

