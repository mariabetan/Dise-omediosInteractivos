var lineay=50;
var lineax1=10;
var lineax2=90;
function setup() { 
  createCanvas(260, 350);

  background(212,201,170);
  
  strokeWeight(0.3);
  noFill();
  rect(10,10,240,330);
  
  //líneas rojas
  for(cuadradoyx=50; cuadradoyx<=100; cuadradoyx=cuadradoyx+40)
  {
    for(yy=10;yy<=160;yy=yy+10)
    {
    fill(189,55,41);
    rect(cuadradoyx,yy,20,5);
    }
	}  
  
    //líneas rojas
  for(cuadradoyx=150; cuadradoyx<=210; cuadradoyx=cuadradoyx+60)
  {
    for(yy=10;yy<=160;yy=yy+10)
    {
    fill(189,55,41);
    rect(cuadradoyx,yy,20,5);
    }
	} 
  
  //negros
  fill(10,10,10);
  for(c1=10;c1<200;c1=c1+100)
  {
   rect(c1,10,40,80);
  } 
  
    
  fill(10,10,10);
  for(c1=70;c1<240;c1=c1+60)
  {
   rect(c1,10,20,80);
  }
  
    for(c1=110;c1<260;c1=c1+60)
  {
   rect(c1,10,20,80);
  }
  
  //líneas blancas
  for(y1=20;y1<90;y1=y1+10)
  {
    fill(255,255,255,100);
   rect(10,y1,20,5); 
  } 
  
    for(y1=20;y1<90;y1=y1+10)
  {
    fill(255,255,255,100);
   rect(70,y1,20,5); 
  } 
  
      for(y1=20;y1<90;y1=y1+10)
  {
    fill(255,255,255,100);
   rect(110,y1,20,5); 
  } 
  
        for(y1=20;y1<90;y1=y1+10)
  {
    fill(255,255,255,100);
   rect(190,y1,20,5); 
  } 
  
  //cruces
  strokeWeight(2);
  stroke(134,53,41);
  line(30,lineay,50,lineay);
  line(130,lineay,150,lineay);
  line(170,lineay,190,lineay);
  line(230, lineay, 250, lineay);
  
  line(10,lineay+70,30,lineay+70);
  line(70,lineay+70,90,lineay+70);
  line(110,lineay+70,130,lineay+70);
  line(190, lineay+70, 210, lineay+70);
  
  
  line(40,lineax1,40, lineax2);
  line(140,lineax1,140, lineax2)
  line(180,lineax1,180, lineax2)
  line(240,lineax1,240, lineax2)
  
  line(20,lineax1+80,20, lineax2+80);
  line(80,lineax1+80,80, lineax2+80)
  line(120,lineax1+80,120, lineax2+80)
  line(200,lineax1+80,200, lineax2+80)
  //negro con rayas
  fill(0,0,0);
  noStroke();
  rect(30,90,20,80);
  rect(130,90,20,80);
  rect(170,90,20,80);
  rect(230,90,20,80);
  
    for(yy1=90;yy1<170;yy1=yy1+10)
  {
    fill(255,255,255,100);
   rect(30,yy1,20,5); 
  } 
  
    for(yy1=90;yy1<170;yy1=yy1+10)
  {
    fill(255,255,255,100);
   rect(130,yy1,20,5); 
  } 
  
     for(yy1=90;yy1<170;yy1=yy1+10)
  {
    fill(255,255,255,100);
   rect(170,yy1,20,5); 
  } 
  
     for(yy1=90;yy1<170;yy1=yy1+10)
  {
    fill(255,255,255,100);
   rect(230,yy1,20,5); 
  } 
  
  //línea siguiente
  
  //negros
  
fill(10,10,10);

  
  for(cl1=10;cl1<=90;cl1=cl1+40)
  {
   rect(cl1,170,20,80); 
  }  
  
		for(cl1=70;cl1<=190;cl1=cl1+40)
  {
   rect(cl1,170,20,80); 
  }  
  
  rect(210,170,20,80);
  
  //líneas blancas
  for(y1=20;y1<90;y1=y1+10)
  {
    fill(255,255,255,100);
   rect(10,y1,20,5); 
  } 
  
    for(y1=20;y1<90;y1=y1+10)
  {
    fill(255,255,255,100);
   rect(70,y1,20,5); 
  } 
  
      for(y1=20;y1<90;y1=y1+10)
  {
    fill(255,255,255,100);
   rect(110,y1,20,5); 
  } 
  
        for(y1=20;y1<90;y1=y1+10)
  {
    fill(255,255,255,100);
   rect(190,y1,20,5); 
  } 
  
  //cruces
  strokeWeight(2);
  stroke(255,255,255);
  line(50,lineay+160,70,lineay+160);
  line(90,lineay+160,110,lineay+160);
  line(150,lineay+160,170,lineay+160);
  line(210, lineay+160, 230, lineay+160);
  
  
  
  line(60,lineax1+160,60, lineax2+160);
  line(100,lineax1+160,100, lineax2+160)
  line(160,lineax1+160,160, lineax2+160)
  line(220,lineax1+160,220, lineax2+160)
  
  //linea blanca
   for(yy1=170;yy1<250;yy1=yy1+10)
  {
    fill(255,255,255,100);
    noStroke();
   rect(10,yy1,20,5); 
  } 
  
    for(yy1=170;yy1<250;yy1=yy1+10)
  {
    fill(255,255,255,100);
   rect(70,yy1,20,5); 
  } 
  
     for(yy1=170;yy1<250;yy1=yy1+10)
  {
    fill(255,255,255,100);
   rect(110,yy1,20,5); 
  } 
  
     for(yy1=170;yy1<250;yy1=yy1+10)
  {
    fill(255,255,255,100);
   rect(190,yy1,20,5); 
  }
  
   //líneas rojas
  for(cuadradoyx=130; cuadradoyx<=200; cuadradoyx=cuadradoyx+40)
  {
    for(yy=175;yy<=245;yy=yy+10)
    {
    fill(189,55,41);
    rect(cuadradoyx,yy,20,5);
    }
	} 
  
    for(cuadradoyx=30; cuadradoyx<=250; cuadradoyx=cuadradoyx+200)
  {
    for(yy=175;yy<=245;yy=yy+10)
    {
    fill(189,55,41);
    rect(cuadradoyx,yy,20,5);
    }
  }
    //última linea
  
  //rayas rojas
  
   for(cuadradoyx=70; cuadradoyx<=200; cuadradoyx=cuadradoyx+40)
  {
    for(yy=250;yy<=325;yy=yy+10)
    {
    fill(189,55,41);
    rect(cuadradoyx,yy,20,5);
    }
	} 
  
    for(cuadradoyx=10; cuadradoyx<=250; cuadradoyx=cuadradoyx+200)
  {
    for(yy=250;yy<=325;yy=yy+10)
    {
    fill(189,55,41);
    rect(cuadradoyx,yy,20,5);
    }
  }
  
  
  //negros
  fill(10,10,10);
  for(c1=50;c1<100;c1=c1+40)
  {
   rect(c1,250,20,80);
  } 
    
 
    for(c1=150;c1<300;c1=c1+60)
  {
   rect(c1,250,20,80);
  }
  
  //cruces
  
  for(posx=130;posx<200;posx=posx+40)
  {
    
   stroke(0,0,0);
    line(posx+10, 250,posx+10, 330);
    line(posx, 290,posx+20, 290);
  } 
  
   for(posx=30;posx<300;posx=posx+200)
  {
    
   stroke(0,0,0);
    line(posx+10, 250,posx+10, 330);
    line(posx, 290,posx+20, 290);
  } 
  
  //linea blanca
   for(yy1=250;yy1<330;yy1=yy1+10)
  {
    for(xx1=50;xx1<100;xx1=xx1+40)
    {
    fill(255,255,255,100);
    noStroke();
   rect(xx1,yy1,20,5);
    }
  } 
  
     for(yy1=250;yy1<330;yy1=yy1+10)
  {
    for(xx1=150;xx1<220;xx1=xx1+60)
    {
    fill(255,255,255,100);
    noStroke();
   rect(xx1,yy1,20,5);
    }
  } 
  fill(0,0,0,235);
  rect(10,330,240,10);
  
  //hacer más tenue los colores
  fill(255,255,255,40);
  rect(0,0,260, 350);
  
    
} 
    
    
  
   
  
    
 
 
