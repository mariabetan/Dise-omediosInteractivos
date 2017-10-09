var angle=0;
var ang=0;
var si=0;
function setup(){
  createCanvas(400, 400, WEBGL);
}

function draw(){
  background(200);
  var Seg=second();
  angle=angle+0.05;
  //dona
  push();
  rotateX(angle);
    torus(50, 30);
  pop();
  //cono
  push();
  translate(mouseX-60,mouseY-70);
  rotateX(frameCount*0.05);
  cone(50,50);
  pop();
  
 
  if(Seg%2==0)
  {
    si=0;
  }
  else
  {
    si=1;
  }
   push();
  if(si==1)
     {
       ang=ang+0.1;
     }
  else
  {
    ang=ang-0.1;
  }
  //cilindro
  rotateX(ang);
  rotateY(ang);
  translate(-20,-20,mouseY);
  cylinder(40,100);
  pop();
  //huevo
  push();
  translate(-100,-140, mouseX-90);
  rotateY(angle+PI);
  ellipsoid(20, 30, 40);
  pop();
  
}