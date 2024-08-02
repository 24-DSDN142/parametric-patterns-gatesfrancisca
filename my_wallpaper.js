//your parameter variables go here!
let marbleLayout = 1; // changes patten variations, 9 available

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {

  if(marbleLayout == 1){
    background(240, 255, 240);//light honeydew green 

  } else if(marbleLayout == 2){
    background(220, 255, 255);//light blue 

  } else if(marbleLayout == 3){
    background(240,240,240); //off white
  } else if(marbleLayout == 4){
    background(7,0,20); //slightly bluey black

  } else if(marbleLayout == 5){
    background(28,3,43); //dark
  } else if(marbleLayout == 6){
    background(3,0,80); //dark blue
  } else if(marbleLayout == 7){
    background(3,0,40); //darker blue
  } else if(marbleLayout == 8){
    background(200,255,255); //light blue
  } else {
    background(200,255,255); //light blue
}
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  let x = 100; // default x coord marble centre
  let y = 100; // default y coord marble centre 
  let d = 60; // default marble diameter
  let colourOuter = color("red"); // default marble outer colour
  let colourCentre = color("pink"); // default marble inner colour
  let swirl = color(250,0,0,50) //d default swirl colour

  //if statements to determine which variation to use
  if (marbleLayout == 1){
    
    marble(x,y,d,colourOuter,colourCentre,swirl);
    marble(40,40,40,color("purple"),color(232,110,255),color(153,0,153,50));
    marble(180,150,40,color("red"),color("yellow"),swirl);
    marble(130,10,45,color(0,130,20),color(0,255,25),color(255,250,0,100));
    marble(155,50,25,color("purple"),colourCentre,swirl);
    marble(20,100,25,color(0,255,230),color(0,0,0,0),swirl);
    marble(60,160,50,color("blue"),color(110,245,255),color(51,51,255,50)); 
    marble(150,190,20,color(0,255,230),color(0,0,0,0),swirl);

  } else if (marbleLayout == 2){
    marble(40,30,50,color(213,12,12),color(255,0,0,200),color(255,180,0,150));
    marble(150,60,35,color("red"),color("orange"),color(230,255,0,100));
    marble(95,80,60,color("orange"),color(255,255,0,200),color(0,255,35,60));
    marble(20,110,35,color("yellow"),color(0,255,35),color(0,110,255,100));
    marble(80,140,40,color("green"),color(0,230,255),color(188,0,255,100));
    marble(140,160,40,color("blue"),color(140,51,255),color(188,0,255,150));
    marble(30,170,55,color("purple"),color(220,102,255),color(255,0,0,70));

  } else if (marbleLayout == 3){
    marble(100,150,25,color(0,172,143,200),color(0,172,143,20),color(0,255,0,150));
    marble(20,100,20,color(0,172,143),color(0,172,143,50),color(0,230,255,150));
    marble(20,20,10,color(0,172,143),color(0,172,143,20),color(0,0,255,150));
    marble(150,160,50,color(0,172,143),color(0,172,143,50),color(255,255,0,150));
    marble(20,100,20,color(0,172,143),color(0,172,143,100),color(0,230,255,150));
    marble(170,20,20,color(0,172,143),color(0,172,143,20),color(0,230,255,150));
    marble(5,180,40,color(0,172,143),color(0,172,143,50),color(255,0,0,150));
    marble(100,60,35,color(0,172,143),color(0,172,143,60),color(0,0,255,150));
    marble(150,67,15,color(0,172,143),color(0,172,143,20),color(0,230,255,150));
    marble(70,180,20,color(0,172,143),color(0,172,143,100),color(0,230,255,150));
    marble(50,50,30,color(0,172,143),color(0,172,143,20),color(255,0,0,150));
    marble(140,100,25,color(0,172,143),color(0,172,143,50),color(255,0,0,150));
    marble(120,190,12,color(0,172,143),color(0,172,143,100),color(0,0,255,150));
    marble(40,150,20,color(0,172,143),color(0,172,143,20),color(255,255,0,150));
    marble(70,20,15,color(0,172,143),color(0,172,143,50),color(255,255,0,150));
    marble(180,90,30,color(0,172,143),color(0,172,143,60),color(255,255,0,150));
    marble(150,30,35,color(0,172,143),color(0,172,143,20),color(0,255,0,150));
    marble(180,140,15,color(0,172,143),color(0,172,143,50),color(0,255,0,150));
    marble(0,60,18,color(0,172,143),color(0,172,143,100),color(0,255,0,150));
    marble(50,110,40,color(0,172,143,200),color(0,172,143,70),color(0,255,0,150));
    marble(90,115,20,color(0,172,143),color(0,172,143,100),color(255,0,0,150));

  } else if (marbleLayout == 4){
    marble(50,170,40,color(0,0,0,0),color(255,200,0,200),color(0,0,255,100));
    marble(100,100,20,color(0,0,0,0),color(245,255,0,100),color(0,0,255,80));
    marble(50,60,30,color(0,0,0,0),color(0,255,230,80),color(255,200,0,100));
    marble(120,200,20,color(0,0,0,0),color(255,141,195,170),color(0,255,0,70));
    marble(170,30,50,color(0,0,0,0),color(0,255,51,150),color(255,0,0,100));
    marble(160,150,35,color(0,0,0,0),color(0,255,230,80),color(255,200,0,100));
    marble(30,110,35,color(0,0,0,0),color(255,141,195,170),color(0,255,0,80));
    marble(195,60,20,color(0,0,0,0),color(255,141,195,170),color(0,255,0,100));
    marble(95,145,25,color(0,0,0,0),color(0,255,51,150),color(255,0,0,100));
    marble(80,30,35,color(0,0,0,0),color(255,141,195,170),color(0,255,0,100));

  } else if (marbleLayout == 5){
    marble(100,100,80,color(0,100,0),color(0,255,0,100),color(173,255,47,200));
    marble(50,30,50,color(0,100,0),color(173,255,47,100),color(230,255,100,200));
    marble(130,5,40,color(0,100,0),color(0,255,0,100),color(173,255,47,200));
    marble(180,145,60,color(0,100,0),color(173,255,47,100),color(230,255,100,200));
    marble(180,60,30,color(0,100,0),color(0,255,0,100),color(173,255,47,200));
    marble(110,190,30,color(0,100,0),color(0,255,0,100),color(173,255,47,200));
    marble(0,83,20,color(0,100,0),color(173,255,47,100),color(230,255,100,200));

  } else if (marbleLayout == 6){
    marble(50,160,80,color(0,255,255,0),color(0,255,255,200),color(125,249,255));;
    marble(130,120,60,color(0,255,255,0),color(0,255,255,150),color(125,249,255,200));
    marble(40,95,40,color(0,255,255,0),color(0,255,255,100),color(125,249,255,150));
    marble(170,80,35,color(0,255,255,0),color(0,255,255,50),color(125,249,255,100));
    marble(80,70,25,color(0,255,255,0),color(0,255,255,50),color(125,249,255,100));
    marble(50,60,20,color(0,255,255,0),color(0,255,255,40),color(125,249,255,50));
    marble(130,55,20,color(0,255,255,0),color(0,255,255,40),color(125,249,255,50));
    marble(15,70,15,color(0,255,255,0),color(0,255,255,20),color(125,249,255,40));
    marble(90,40,15,color(0,255,255,0),color(0,255,255,20),color(125,249,255,40));
    marble(190,50,15,color(0,255,255,0),color(0,255,255,20),color(125,249,255,40));
    marble(30,40,10,color(0,255,255,0),color(0,255,255,10),color(125,249,255,20));
    marble(170,30,10,color(0,255,255,0),color(0,255,255,10),color(125,249,255,20));
    marble(100,20,10,color(0,255,255,0),color(0,255,255,10),color(125,249,255,20));

  } else if (marbleLayout == 7){
    marble(10,100,5,color(79,8,76),color(120,21,67),color(0,0,0,0));
    marble(25,100,10,color(120,21,67,0),color(197,72,54),color(0,0,0,0));
    marble(50,100,30,color(197,72,54,0),color(249,218,136),color(0,0,0,0));
    marble(100,100,50,color(226,148,84,0),color(241,250,183),color(0,0,0,0));
    marble(100,50,30,color(197,72,54,0),color(249,218,136),color(0,0,0,0));
    marble(150,100,30,color(197,72,54,0),color(249,218,136),color(0,0,0,0));
    marble(100,150,30,color(197,72,54,0),color(249,218,136),color(0,0,0,0));
    marble(100,25,10,color(120,21,67,0),color(197,72,54),color(0,0,0,0));
    marble(175,100,10,color(120,21,67,0),color(197,72,54),color(0,0,0,0));
    marble(100,175,10,color(120,21,67,0),color(197,72,54),color(0,0,0,0));
    marble(100,10,5,color(79,8,76),color(120,21,67),color(0,0,0,0));
    marble(100,190,5,color(79,8,76),color(120,21,67),color(0,0,0,0));
    marble(190,100,5,color(79,8,76),color(120,21,67),color(0,0,0,0));

    marble(0,150,10,color(226,148,84),color(241,250,183),color(0,0,0,0));
    marble(0,50,10,color(226,148,84),color(241,250,183),color(0,0,0,0));
  } else if (marbleLayout == 8){
    marble(x,y,20,color(255,0,0,50),color(255,192,203,100),swirl);
    marble(x,y,50,color(255,0,0,50),color(255,192,203,100),swirl);
    marble(x,y,90,color(255,0,0,50),color(255,192,203,100),swirl);
    marble(x,y,130,color(255,0,0,50),color(255,192,203,100),swirl);
    marble(x,y,180,color(255,0,0,50),color(255,192,203,100),swirl);

  } else {
    marble(55,140,30,color(255,0,0,0),color(255,154,196),color(202,35,123,0));
    marble(20,160,70,color(0,100,0,0),color(203,255,169),color(202,35,123,0));
    marble(95,95,50,color(255,0,0,0),color(255,155,155),color(202,35,123,0));
    marble(150,50,60,color(255,0,0,0),color(255,214,165),color(202,35,123,0));
    marble(0,10,40,color(255,0,0,0),color(255,154,196),color(202,35,123,0));
    marble(30,40,30,color(0,100,0,0),color(203,255,169),color(202,35,123,0));
    marble(150,160,35,color(255,0,0,0),color(255,214,165),color(202,35,123,0));
    marble(100,10,20,color(255,0,0,0),color(255,155,155),color(202,35,123,0));
    marble(10,90,20,color(255,0,0,0),color(255,155,155),color(202,35,123,0));

  }

  }

function marble(x,y,d,colour,colour1,swirl){
  shadow(x,y,d,colour1);
  ball(x,y,d,colour,colour1);
  swirls(x,y,d,swirl);
  lining(x,y,d);
  light(x,y,d);
  miniLight(x,y,d)
  sparkle(x,y,d);
  
}

function shadow(x,y,d,c1){
  noStroke();
  let shadow = drawingContext.createRadialGradient(x+4*d/5,y+d/2,3*d/2,x+2*d/5,y+d/2,d/7); //where gradient will be
  shadow.addColorStop(0,color(96,100,132,100)); //outer gradient colour
  shadow.addColorStop(1,c1); //inner gradient colour (same as inner marble colour)
  drawingContext.fillStyle = shadow; //fill ellipse
  ellipse(x+4*d/5,y+d/2,d*2,d*2/5); //draw ellipse
}

function lining(x,y,d){
  push();
  stroke(250,250,250,200); // translucent white
  noFill();
  strokeWeight(d/20); //proportional to marble size
  ellipse(x,y,d,d); 
  pop();
}

function ball(x,y,d,c,c1){
  push()
  noStroke();
  let marble = drawingContext.createRadialGradient(x,y,d,x,y,d/5); //where gradient will be
  marble.addColorStop(0,c); //outer gradient colour
  marble.addColorStop(1,c1); //inner gradient colour
  drawingContext.fillStyle = marble; //fill ellipse
  ellipse(x,y,d,d);
  pop();
} 

function light(x,y,d){
  noStroke();
  let highlight = drawingContext.createRadialGradient(x-d/6,y-d/6,d/6,x-d/6,y-d/6,d/15);  //where gradient will be
  highlight.addColorStop(0, color(250,250,250,0)); //outer gradient colour
  highlight.addColorStop(1, color(250,250,250,200)); //inner gradient colour
  drawingContext.fillStyle = highlight; //fill ellipse 
  ellipse(x-d/6,y-d/6,d/3,d/3);

}

function sparkle(x,y,d){
  noStroke();
  let light = drawingContext.createRadialGradient(x-d/15,y-d/3,d/6,x-d/15,y-d/3,d/100); //where gradient will be
  light.addColorStop(0, color(250,250,250,0));  //outer gradient colour
  light.addColorStop(1, color(250,250,250,200));  //inner gradient colour
  drawingContext.fillStyle = light;
  
  //drawing the sparkle
  beginShape();
  vertex(x+d/10,y-d/3)
  bezierVertex(x-d/15,y-d/3,x-d/15,y-d/3,x-d/15,y-d/2);
  bezierVertex(x-d/15,y-d/3,x-d/15,y-d/3,x-7*d/30,y-d/3);
  bezierVertex(x-d/15,y-d/3,x-d/15,y-d/3,x-d/15,y-d/6);
  bezierVertex(x-d/15,y-d/3,x-d/15,y-d/3,x+d/10,y-d/3);
  endShape();

}

function miniLight(x,y,d){
  noStroke();
  let highlight = drawingContext.createRadialGradient(x,y,d/20,x,y,d/60); //where gradient will be
  highlight.addColorStop(0, color(250,250,250,0)); //outer gradient colour
  highlight.addColorStop(1, color(250,250,250,100)); //inner gradient colour
  drawingContext.fillStyle = highlight;
  ellipse(x,y,d/10,d/10);
}

function swirls(x,y,d,s){
  
  //drawing swirl
  beginShape();
  noStroke();
  fill(s);
  vertex(x,y+d/2);
  bezierVertex(x-d,y,x+d,y+d/2,x,y-d/2);
  bezierVertex(x+5*d/4,y+d/2,x-d/2,y,x,y+d/2);
  endShape();

  //drawing second swirl
  beginShape();
  vertex(x,y+d/2);
  bezierVertex(x+d/2,y+d/4,x-d/2,y+d/2,x,y-d/4);
  bezierVertex(x-3*d/4,y+d/2,x+d/2,y+d/8,x,y+d/2);
  endShape();
  beginShape();
  vertex(x,y+d/2);
  bezierVertex(x+d/2,y+d/4,x-d/2,y+d/2,x,y-d/4);
  bezierVertex(x-3*d/4,y+d/2,x+d/2,y+d/8,x,y+d/2);
  endShape();

}