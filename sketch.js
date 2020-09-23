function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(25,50,110);

  //Hair
  noStroke()
  fill(47, 22, 19);
  ellipse(260, 230,280, 300)
  circle(180, 350, 130)
  circle(190, 430, 150)
  circle(340, 350, 130)
  circle(350, 430, 160)
  
  //Neck
  fill(250, 227, 218);
  rect(260, 380, 59, 59);
  
  //Face 
  noStroke()
  ellipse(260, 255, 190, 240);

  //Ears
  ellipse(155, 265,30, 60)
  ellipse(365, 265,30, 60)
  

  //Bang
  noStroke()
  fill(47, 22, 19);
  arc(300, 150, 160, 100, 0, PI + QUARTER_PI, CHORD);
  ellipse(195, 155,110, 60)
  

  //Eyebrows
  stroke(91, 29, 19);
  strokeWeight(4);
  noFill();
  arc(210, 235, 45, 10, PI, TWO_PI, OPEN);
  arc(310, 235, 45, 10, PI, TWO_PI, OPEN);
  
  //Eyelashes
  strokeWeight(3);
  line(190,250,200,255)
  line(195,245,205,254)
  line(315,264,323,245)
  line(320,258,327,248)

  //Eyes
  strokeWeight(1)
  fill(59, 19, 19);
  ellipse(210, 260, 32, 27);
  ellipse(310, 260, 32, 27);

  //Eyeballs
  noStroke()
  fill(255)
  ellipse(210, 255, 10, 10);
  ellipse(310, 255, 10, 10);

  //Nose
  fill(255, 191, 155, )
  triangle(260, 270, 270, 300, 250, 300);

  //Mouth
  fill(225, 102, 102);
  arc(260, 325, 49, 35, 0, PI);

  //Hoodie
  rectMode(CENTER)
  fill(225, 153, 242)
  rect(260, 470, 215, 150, 40);
  fill(255)
  ellipse(257, 422, 15, 15);
  ellipse(257, 442, 15, 15);
  ellipse(257, 462, 15, 15);
  














}