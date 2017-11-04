//variables para el recorrido de los pixeles de la imagen
var hor=0;
var vert=0;
var imagen1;
var pixe;

//cargar la imagen
function preload(){
 imagen1= loadImage('assets/tortugas.jpg');
}

//se crea un canvas del mismo tamaño de la imagen
function setup() { 
  createCanvas(2018,1365);
} 



function draw() { 
  background(220);
 //se obitnenen los valores para R,G,B y transparencia de la imagen 
  pixe=imagen1.get(hor,vert);
  
  var rouge=pixe[0];
  var vert=pixe[1];
  var bluee=pixe[2];
  var trans=pixe[3];
  
//se la da un tono azul a los pixels que tengan poco B (RGB)
  if(pixe[2]<100)
  {
  
  pixe[2]=255;
  }
  //se le da esas caracterísiticas a cada pixel de la imagen
  imagen1.set(hor,vert,pixe);

//se vuelven a cargar los valores y los pixeles
  imagen1.updatePixels();
  //se ubica la imagen
  image(imagen1,0,0);
  //se aplica un filtro borroso
  filter(BLUR,2);
  // esta instrucción es la que hace que se recorra la imagen
  hor++;
  if(hor>imagen1.width)
  {
    hor=0;
    vert++;
  }
  
}