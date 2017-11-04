angulo=0;
function setup() { 
  createCanvas(400, 400, WEBGL);
 
} 

function draw() { 
  background(220);
  
    push();
  translate(-50,-50,mouseX);
  box(50);
  pop();
  
  push();
  translate(50,50,mouseX);
  sphere(25);
  pop();
  
    push();
  translate(50,-50,mouseX);
  rotateX(angulo);
  cylinder(25,100);
  pop();
  
      push();
  translate(-50,50,mouseX);
  cone(25,100);
  pop();
  
  angulo=angulo+0.1;
}