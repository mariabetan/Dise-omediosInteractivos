var rectay=25;
function setup() { 
  createCanvas(700, 345);
  
//franja de rectángulos y triángulos
  fill(126,18,6);
  noStroke();
  rect(0,0,700,50);
  
//triangulo de la izquieda
  fill(71,28,67);
  
  for( var rectx=-10;rectx<=175; rectx=rectx+30)
  {
  
  	triangle(rectx,rectay,rectx+10, rectay-10, rectx+20,rectay);
 
  }
  
    
//rombos centrales  
 fill(53,25,83);
  for( var rombx=145;rombx<=525;rombx=rombx+90)
  {
 
  	quad(rombx,rectay,rombx+40, rectay-25, rombx+80,rectay,rombx+40, rectay+25 );
 //quad(145,25,175,0,215,25,175,50);
  }
  
  fill(126,18,6);
  rect(150,0,28,50);
  
  fill(71,28,67);
  
  //triángulos de la derecha
  
  for( var rectx=580;rectx<=700; rectx=rectx+30)
  {
  
  	triangle(rectx,rectay,rectx+10, rectay-10, rectx+20,rectay);
 
  }
  
    fill(126,18,6);
  rect(555,0,28,50);
  
    
//franja de triángulos y semicírculos
  fill(212,125,19);
  noStroke();
  rect(0,50,700,15);
  

//semicírculos lado izquierdo  

    fill(124,64,54);
  for(circx=0;circx<=700; circx=circx+30)
  {
  arc(circx+12,50,30,30, 0, PI);
  }
    fill(212,125,19);
  rect(178,50,390,15);
  
  
  //triángulos centro  
  fill(124,64,54);
  for(tx=170;tx<=517; tx=tx+63)
  {
  triangle(tx,50,tx+80,50,tx+40,65);
    
  }
  
//otro
    
//
  
  //franja de triángulos y semicírculos (gris y rojo)

  
  //triángulos lado izquierdo  
   //franja de triángulos y semicírculos (gris y rojo)
fill(193,163,129);
  noStroke();
  rect(0,65,700,20);
  
//semicírculos lado izquierdo  

  
    fill(164,2,2);
  rect(0,65,173,20);
  rect(555,65,173,20);
  
      fill(193,163,129);
  for(circx=0;circx<=150; circx=circx+30)
  {
  arc(circx+12,65,30,40, 0, PI);
  }
  
   for(circx=0;circx<=150; circx=circx+30)
  {
  arc(circx+570,65,30,40, 0, PI);
  }
  
  //triángulos lado izquierdo  
  fill(164,2,2);
  for(t2=180;t2<=517; t2=t2+63)
  {
  triangle(t2,80,t2+60,80,t2+30,65);
  }
  
  //franja semicírculos y círculos
  
  fill(12,113,79);
  rect(0,85,700,50);
  //semicírculo
      fill(159,10,3);
  for(circx=0;circx<=150; circx=circx+30)
  {
  arc(circx+12,85,30,40, 0, PI);
  }
  
        fill(159,10,3);
  for(circx=0;circx<=150; circx=circx+30)
  {
  arc(circx+570,85,30,40, 0, PI);
  }
  
  //bolitas
  for(cx=230;cx<=390;cx=cx+65)
  {
   
    ellipse(cx,100,10);
     
  }
  
    for(cx=375;cx<=570;cx=cx+65)
  {
   
    ellipse(cx,100,10);
     
  }
 
//semicírculo
      fill(193,14,9);
  for(circx=0;circx<=150; circx=circx+30)
  {
  arc(circx+12,105,30,40, 0, PI);
  }
  
  
  for(circx=0;circx<=150; circx=circx+30)
  {
  arc(circx+570,105,30,40, 0, PI);
  }
  
  //bolitas
  for(cx=230;cx<=390;cx=cx+65)
  {
   
    ellipse(cx,115,10);
     
  }
  
    for(cx=375;cx<=570;cx=cx+65)
  {
   
    ellipse(cx,115,10);
     
  }
  
  //franja semicírculos,cuadrados
  
  fill(247,211,161);
  rect(0,130,700,50);
  
  fill(214,183,67);
    //bolitas
  for(cx=50;cx<=200;cx=cx+65)
  {
   
    ellipse(cx,160,10);
     
  }
  
    for(cx=550;cx<=700;cx=cx+65)
  {
   
    ellipse(cx,160,10);
     
  }
  
  //semicírculos
  for(posxc=215;posxc<=545;posxc=posxc+30)
  {
     arc(posxc,150,27,40, 0, PI);
  }
  fill(43,33,93);
  for(posxc=215;posxc<=545;posxc=posxc+30)
  {
     arc(posxc,130,27,40, 0, PI);
  }
  
  for(linx=212;linx<=545;linx=linx+30)
  {
    fill(154,156,177);
    rect(linx,168,8,12);
  } 
  
  //recta con semicírculo y cuadrícula
  

  fill(51,48,29);
  rect(0,180,700,15);
  
  fill(187,132,93);
   rect(180,180,380,15);
  
  for(cx1=0;cx1<200;cx1=cx1+40)
  {
     arc(cx1,180,40,30, 0, PI);
  }
  
    for(cx1=380;cx1<700;cx1=cx1+40)
  {
     arc(cx1,180,40,30, 0, PI);
  }
  
  stroke(0,0,0);
  strokeWeight(0.5);
  for(lx=180;lx<550;lx=lx+25)
  {
    line(lx,180,lx+25,195);
    line(lx,195, lx+25,180);
  }
  
  //la otra línea
  noStroke();
  fill(51,48,29);
  rect(0,195,700,25);
  
  fill(241,233,233);
   rect(180,195,380,25);
  
  //
  
   fill(245,215,189);
  
  for(cx1=0;cx1<200;cx1=cx1+40)
  {
     arc(cx1,195,40,45, 0, PI);
  }
  
    for(cx1=580;cx1<700;cx1=cx1+40)
  {
     arc(cx1,195,40,45, 0, PI);
  }
  
  stroke(0,0,0);
  strokeWeight(0.5);
  for(lx=180;lx<530;lx=lx+25)
  {
  line(lx,195,lx+50,220);
    line(lx,220, lx+50,195);
  }
  noStroke();
   fill(187,132,93);
  rect(0,220,700,10);
  
  fill(162,32,18);
     for(cx1=30;cx1<700;cx1=cx1+60)
  {
     arc(cx1,230,10,10, PI, 0);
  }
  
  //franja con círculos pequeños
     fill(197,111,78);
  rect(179,220,381,10);
  
  fill(248,212,162);
  rect(0,230,700,40);
  
  fill(0,0,0,20);
  rect(0,230,700,20);
  
   fill(45,20,0);
     for(cx1=30;cx1<700;cx1=cx1+60)
  {
     arc(cx1,230,10,10, 0,PI);
  }
  fill(253,222,193);
   rect(180,230,380,20);
  stroke(0,0,0);
  strokeWeight(0.5);
  for(lx=180;lx<530;lx=lx+25)
  {
  line(lx,230,lx+45,250);
    line(lx,250, lx+45,230);
  }
  
  noStroke();
    fill(162,32,18);
     for(cx1=30;cx1<700;cx1=cx1+60)
  {
     ellipse(cx1,260,10,10);
  }
  
       fill(218,175,106);
  rect(179,250,381,20);
  
  fill(154,27,22);
  
  for(x=179;x<=560;x=x+30)
  {
  rect(x,250,10,10);
  }
  
    fill(203,13,13);
  
  for(x=189;x<=560;x=x+30)
  {
  rect(x,260,10,10);
  }
  
     fill(224,128,90);
  
  for(x=189;x<=560;x=x+30)
  {
  rect(x,250,10,10);
  }
  
      fill(255,203,164);
  
  for(x=179;x<=560;x=x+30)
  {
  rect(x,260,10,10);
  }
  
  //lineas con semicírculos azules
  fill(64,30,105);
  rect(0,270,700,25);
  
  fill(184,123,92);
       for(scx=210;scx<570;scx=scx+55)
  {
     arc(scx,270,55,50, 0,PI);
  }
  
  for(cua=0;cua<210;cua=cua+55)
  {
     rect(cua,270,25,25);
  }
  
    for(cua=560;cua<700;cua=cua+55)
  {
     rect(cua,270,25,25);
  }
  
   fill(247,140,12);
  rect(0,295,700,25);
  
   fill(238,208,172);
       for(scx=210;scx<570;scx=scx+55)
  {
     arc(scx,295,55,50, 0,PI);
  }
  
  for(cua=0;cua<210;cua=cua+55)
  {
     rect(cua,295,25,30);
  }
  
    for(cua=560;cua<700;cua=cua+55)
  {
     rect(cua,295,25,30);
  }
  
  fill(171,119,72);
  rect(0,320,700,15);
  
     fill(238,208,172);
  
    for(cua=0;cua<210;cua=cua+55)
  {
     rect(cua,320,25,5);
  }
  
 
      for(cua=560;cua<700;cua=cua+55)
  {
     rect(cua,320,25,5);
  }
  
       fill(250,203,113);
  
    
    for(cua=0;cua<210;cua=cua+55)
  {
     rect(cua,325,25,8);
  }
  
 
      for(cua=560;cua<700;cua=cua+55)
  {
     rect(cua,325,25,8);
  }
  
          for(scx=210;scx<570;scx=scx+55)
  {
     arc(scx,320,40,25, 0,PI);
  }
  
  //detalles y sombras de la tela
  
fill(0,0,0,10) 
  for(i=0;i<700;i=i+45)
  {
   rect(i,130,10,120);
  }

  
  

}