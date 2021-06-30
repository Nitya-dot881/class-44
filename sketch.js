var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  s=loadSound("applause4.mp3")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  fill("yellow")
  textSize(20);
  text("Score: "+ score, 500,30);

 if(score===3)
 {
   clear()
  background(bg2)
  fill("black")
  textSize(40);
  text("TREASURE UNLOCKED",250,200);
 }
 drawSprites()
}