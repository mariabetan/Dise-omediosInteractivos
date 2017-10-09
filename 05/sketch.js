var xb=30;
var yb=270;
var xb1=70;
var xb2=110;
var si=0;
var xx1=330;
var yy1=190;

var xt1=180;
var yt1=220;
function setup() { 
  createCanvas(400, 400);
  
  angleMode(DEGREES);
} 

function draw() { 

  var misSeg=second();
  var altoCafe =map(misSeg,0,59,0,80);

  
    var misMin=minute();
 
  strokeWeight(5);
  
      var misHor=hour();
  
  //horas de la mañana
  if(misHor>=6 && misHor<9)
  {
    
    background(237,173,135);
    if(misHor<7)
    {
      //taza de café
  fill(188,160,169,200);
  rect(160,310,60,80);
  noFill();
  
   arc(220,345,40,40,-28*PI, 28*PI);
      
   //taza llenándose
      push();
        fill(135,80,36);
   rect(160,390,60,-altoCafe);
     pop();
    }
    //tasa llenándose
      else if(misHor<8)
      {
          fill(188,160,169,200);
  rect(160,210,60,80);
  noFill();
  
   arc(220,245,40,40,-28*PI, 28*PI);
     //llenado   
        push();
        fill(135,80,36);
   rect(160,290,60,-altoCafe);
     pop();
        
      }
    //8am
    else
    {
         fill(188,160,169,200);
      rect(160,110,60,80);
  noFill();
  
   arc(220,145,40,40,-28*PI, 28*PI);
      push();
        fill(135,80,36);
      //(llenado
   rect(160,190,60,-altoCafe);
     pop();
    }
  }
  
  else if(misHor>=9 && misHor<12)
  {
    //cambio color
    background(223,251,241);
     fill(51,155,219);
    //lochera
  rect(10,180,90,60);
  rect(20,190,70,40);
  noFill();
    point(50,198);
    point(60,198);
   arc(55,178,40,40,-58*PI,PI);
  arc(55,205,20,30,PI,-58*PI);

    if(misHor<10)  
    {
push();
      fill(249,224,105);
      //banano forma
      beginShape();
vertex(xb, yb);
bezierVertex(0,yb+15, 0, yb+60, xb+10,yb+70);
bezierVertex(xb-10,yb+30,xb-5,yb+40,xb,yb);
endShape();
      noFill();
      //línea de banano
      beginShape();
vertex(xb, yb);
bezierVertex(0,yb+40, xb+5, yb+70, xb+10,yb+70);
endShape();
      pop();
      //var que cambia
      
      if(misSeg%2==0)
      {
        si=1;
      }
      else{
        si=0;
      }
      if(si==0)
      {
        //depende del valor de la var se cambia el color del banano
        push();
      fill(255,255,255);
      beginShape();
        vertex(xb, yb);
        //cambio de color del banano
bezierVertex(0,yb+15, 0, yb+60, xb+10,yb+70);
bezierVertex(xb-10,yb+30,xb-5,yb+40,xb,yb);
endShape(CLOSE);
      noFill();
        stroke(0,0,0,100);
      beginShape();
vertex(xb, yb);
bezierVertex(0,yb+40, xb+5, yb+70, xb+10,yb+70);
endShape();
      pop();
      }
    }
          else if(misHor<11)  
    {
      //banano
push();
      fill(249,224,105);
      beginShape();
vertex(xb1, yb);
bezierVertex(xb1-30,yb+15, xb1-30, yb+60, xb1+10,yb+70);
bezierVertex(xb1-10,yb+30,xb1-5,yb+40,xb1,yb);
endShape();
      noFill();
      beginShape();
vertex(xb1, yb);
bezierVertex(xb1-30,yb+40, xb1+5, yb+70, xb1+10,yb+70);
endShape();
      pop();
      if(si==1)
      {
        //cambia de color de banano como segundero
        push();
        fill(0,0,0,100);
   beginShape();
vertex(xb1, yb);
bezierVertex(xb1-30,yb+15, xb1-30, yb+60, xb1+10,yb+70);
bezierVertex(xb1-10,yb+30,xb1-5,yb+40,xb1,yb);
endShape();
      noFill();
      beginShape();
vertex(xb1, yb);
bezierVertex(xb1-30,yb+40, xb1+5, yb+70, xb1+10,yb+70);
endShape();
      pop();
      }
    }
      
    else  
      //para las 11am
    {
push();
      //banano
      fill(249,224,105);
      beginShape();
vertex(xb2, yb);
bezierVertex(xb2-30,yb+15, xb2-30, yb+60, xb2+10,yb+70);
bezierVertex(xb2-10,yb+30,xb2-5,yb+40,xb2,yb);
endShape();
      noFill();
      beginShape();
vertex(xb2, yb);
bezierVertex(xb2-30,yb+40, xb2+5, yb+70, xb2+10,yb+70);
endShape();
      pop();

     
        if(si==0)
      {
        push();
        fill(255,0,255,100);
        //banano cambia de color como segundero
  beginShape();
vertex(xb2, yb);
bezierVertex(xb2-30,yb+15, xb2-30, yb+60, xb2+10,yb+70);
bezierVertex(xb2-10,yb+30,xb2-5,yb+40,xb2,yb);
endShape();
      noFill();
      beginShape();
vertex(xb2, yb);
bezierVertex(xb2-30,yb+40, xb2+5, yb+70, xb2+10,yb+70);
endShape();
      pop();
      }
    }
      
    }
  
  else if(misHor>=3 && miHor<6)
  {
    //cambia el fondo
    background(106,63,80);
      fill(0,0,0);
  rect(310,160,80,100);
  fill(10,173,210);
    rect(310,200,80,70);  
  fill(155,155,155);
  rect(320,165,60,30);
    
    if(misHor==3)
    {
      //"Z" como segundero
    if(misSeg%2==0)
    {
    push();
    textSize(40);
      text("Z",280,200);
    pop();
    }
    }
    if(misHor==4)
    {
      //más "Zs"
       push();
    textSize(40);
      text("Z",280,200);
    pop();
    if(misSeg%2==0)
    {
    push();
    textSize(40);
      text("Z",240,190);
    pop();
    }
    }
    //3Zs indican que en el lapso ya pasaron 3 horas
    if(misHor==5)
    {
       push();
    textSize(40);
    text("Z",280,200);
    text("Z",240,190);
    pop();
    if(misSeg%2==0)
    {
    push();
    textSize(40);
      text("Z",200,180);
    pop();
    }
    }
  }
  //la madrugada
  else if(misHor>=0 && misHor<3)
    {
      background(8,16,52);
      if(misHor==0)
      {
        misDías=day();
        misMes=month();
        textSize(40);
        fill(255,255,255);
        text("Nuevo Día:"+misDias+"/"+misMes,120,40);
        
      }
      else if(misHor==1)
      {
        text("Hora de dormir",120,40);
        if (si==0)
        {
          push();
          fill(0,255,2555);
        text("Hora de dormir",120,40);
          pop();
        }
      }
      else if(misHor==2)
      {
        text("Hora de dormir",120,40);  
        text("Hora de dormir", 120, 90);
        
        if(si==1)
        {
        push();
          fill(0,255,2555);
        text("Hora de dormir", 120, 90);
          pop();
        }
      } 
    }
  
  //horas de la tarde
  
  //entre 12 y 3 pm
   
  if(misHor>=12&&misHor<15)
  {
    //color cambia
    background(219,206,150);
           fill(211,121,35);
    //hamburguesa
  arc(180,40,60,40,-58*PI,PI);
 rect(150,70,60,15);
  fill(255,255,10);
  rect(150,40,60,10);
      fill(255,10,25);
  rect(150,50,60,10);
    fill(66,34,23);
  rect(150,60,60,10);
    if(misHor==12)
    {
      //salsas
      fill(255,0,0);
      quad(110,110,100,90,90,110,120)
      //mancha se salga que titila con sec
      rect(85,105,30,50);
      if(misSeg%2==0)
      {
        fill(255,0,0);
        ellipse(100,190,40,20)
      }
    } 
     if(misHor==13)
    {
      //hamburguesa
      fill(255,0,0);
      quad(110,110,100,90,90,110,120)
      rect(85,105,30,50);
            fill(255,255,0);
      quad(110+70,110,100+70,90,90+70,110,120)
      rect(85+70,105,30,50);
      if(misSeg%2==1)
      {
        fill(255,255,0);
        //mancha de salsa
        ellipse(100+70,190,40,20)
      }
    } 
    //a las 2pm
         if(misHor==14)
    {
      //hamburguesa
      fill(255,0,0);
      quad(110,110,100,90,90,110,120)
      rect(85,105,30,50);
       fill(255,255,0);
      quad(110+70,110,100+70,90,90+70,110,120)
      rect(85+70,105,30,50);
            fill(255,248,195);
      quad(110+130,110,100+130,90,90+130,110,120)
      rect(85+130,105,30,50);
      if(misSeg%2==0)
      {
        fill(255,248,195);
        //mancha de salsa
        ellipse(100+130,190,40,20)
      }
    }
  }
  
  else if(misHor>=15 && misHor<18)
    {
      background(188,184,211);
      //convierte escala de seg a una altura indicada
      misGal=map(misSeg,0,59,190,230);
         if(misHor==15)
      {
        //3pm
        fill(243,213,135);
         rect(350,misGal-30,15,15);
      }
      //4pm
          if(misHor==16)
      {
     //5pm
        rect(350,120,10,10);
         rect(350,misGal-30,15,15);
      }
      
          if(misHor==17)
      {
     
        rect(350,120,10,10);
        rect(320,120,10,10);
         rect(350,misGal-30,15,15);
      }
    //taza de té
        push();
        fill(190,190,190);
  
             beginShape();
        {
        curveVertex(xx1,yy1);
          curveVertex(330,190);
        curveVertex(340,250);
          curveVertex(380,250);
        curveVertex(390,190);
        curveVertex(390,190);
          endShape(CLOSE);
          pop();
        }
        noFill();
        arc(335,220,30,40,90,-100)
    }
  
  else if(misHor>=18 && misHor<21)
    {
      //cambia el color del fondo
 background(150,58,84);
      //cambia escala a una altura deseada
      var misC=map(misSeg,0,59,0,50);
                  
      if(misHor==18)
      {
        //cuchara
        push(); 
        noStroke();
        fill(200,200,200);
        rect(xt1,yt1-20+misC,10,40);
        ellipse(xt1+5,yt1+30+misC,30,30);
        pop();
      }
      else if(misHor==19)
      {
        //cucharas
          push(); 
        noStroke();
        fill(200,200,200);
        rect(xt1-70,yt1-20,10,40);
        ellipse(xt1-65,yt1+30,30,30);
                rect(xt1,yt1-20+misC,10,40);
        ellipse(xt1+5,yt1+30+misC,30,30);
        pop();
      }
          else if(misHor==20)
      {
        //3 cucharas
          push(); 
        noStroke();
        fill(200,200,200);
        rect(xt1-70,yt1-20,10,40);
        rect(xt1+70,yt1-20,10,40);
        ellipse(xt1-65,yt1+30,30,30);
         ellipse(xt1+75,yt1+30,30,30);
                rect(xt1,yt1-20+misC,10,40);
        ellipse(xt1+5,yt1+30+misC,30,30);
        pop();
      }
           
      //bowl      
      fill(255,255,255,190);
      beginShape();
      curveVertex(150,300);
      curveVertex(150,300);
      curveVertex(160,350);
      curveVertex(250,350);
      curveVertex(260,300);
      curveVertex(250,300);
      endShape(CLOSE);
    }
  
   //entre 9 y 11:59 pm
    else if(misHor>=21 && misHor<=23)
    {
      background(31,57,106);
      //conversión de escala
      altoAgua=map(misSeg,0,59,0,60);
      if(misHor==21)
      {
        //vaso vaciándose
        fill(50,50,255);
      quad(25,170,85,170,80,230,30,230);
        push();
        fill(255,255,255);
        noStroke();
        quad(28,170,83,170,85-(altoAgua/10),168+altoAgua,28+(altoAgua/10),168+altoAgua);
        pop();
        
      }
        else if(misHor==22)
        {
          //vaso lleno
        fill(50,50,255);
      quad(25,170,85,170,80,230,30,230);
         fill(50,50,255);
      quad(105,170,165,170,160,230,110,230);
        push();
        fill(255,255,255);
        noStroke();
          //vaciándose
        quad(28,170,83,170,85-(altoAgua/10),168+altoAgua,28+(altoAgua/10),168+altoAgua);
        pop();  
     }
      
       else if(misHor==23)
       {
         // 2 vasos llenos
        fill(50,50,255);
      quad(25,170,85,170,80,230,30,230);
         fill(50,50,255);
      quad(105,170,165,170,160,230,110,230);
         fill(50,50,255);
      quad(105+80,170,165+80,170,160+80,230,110+80,230);
        push();
        fill(255,255,255);
        noStroke();
         //vaso vaciándose
        quad(28,170,83,170,85-(altoAgua/10),168+altoAgua,28+(altoAgua/10),168+altoAgua);
        pop();
      }
     
    }
     
}
