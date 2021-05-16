var bgImg
function preload() {
  bgImg=loadImage("Maze map.png");
}
function setup() {
  createCanvas(600, 600);
  wall1=createSprite(5,250,25,550);
  wall1.shapeColor="red";
  wall2=createSprite(300,5,600,25);
  wall2.shapeColor="red";
  wall3=createSprite(595,300,25,600);
  wall3.shapeColor="red";
  wall4=createSprite(200,595,434,25);
  wall4.shapeColor="red";
  wall5=createSprite(550,595,133,29);
  wall5.shapeColor="red";
  wall6=createSprite(550,510,280,22);
  wall6.shapeColor="red";
  wall7=createSprite(354,511,15,171);
  wall7.shapeColor="red";
  wall8=createSprite(431,430,167,15);
  wall8.shapeColor="red";
  wall9=createSprite(508,262,)
}
function draw() {
  background(bgImg);
  stroke(220);
  for (var j=0; j<=600; j=j+50){
    line(0,j, 600,j);
  }
  for (var i=0; i<=600 ; i=i+50){
    line(i,0,i,600);
  }
  
  text(mouseX + "," + mouseY, mouseX, mouseY)
  drawSprites();
}
