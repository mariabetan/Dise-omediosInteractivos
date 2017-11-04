var desierto;
var filtro;

//se cargan archivps
function preload(){
 desierto=loadImage('assets/desierto.jpeg');
  filtro=loadImage('assets/filtro1.png');
}
//se genera un canvas y se hace la máscara de recorte
function setup() { 
  createCanvas(1202, 801);
  desierto.mask(filtro);
} 

function draw() { 
  background(220);
  // se posiciona la imagen y se le da un color
  image(desierto,0,0);
  
  tint(255,174,1);
}