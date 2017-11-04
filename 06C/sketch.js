var nieve;
var x=0;
var y=0;
var p;
// se carga la imagen
function preload(){
   nieve= loadImage("assets/nievee.jpg");
}
// se le da un tamaño al canvas igual a la fotografía
function setup() { 
  createCanvas(2500,1666);

} 

function draw() { 
  background(220);

//se lee los pixeles de la imagen
  p=nieve.get(x,y);
  
  var rojo=p[0];
  var verde=p[1];
  var azul=p[2];
   var tra=p[4];
  //se le da opacidad
  p[4]=155;
  //se aplica a la imagen y se actualiza
  nieve.set(x,y,p);
  nieve.updatePixels();
  //se aplica un filtro
  image(nieve,0,0);
  filter(POSTERIZE,3);
  
  // el recorrido se hace cada 5 pixeles
  x=x+5;
  if(x>nieve.width)
  {
    x=0;
  y=y+5;
  }
  
}