var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect2 = createSprite(600, 100, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  movingRect = createSprite(600, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect2 = createSprite(600, 800,80,30);
  movingRect2.shapeColor = "green";
  movingRect2.debug = true;
  movingRect.velocityY = -5;
  fixedRect2.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  movingRect2.x=mouseX
  movingRect2.y=mouseY 
BounceOff(movingRect,fixedRect2)
 if (isTouching(fixedRect2,movingRect2)){
  movingRect2.shapeColor="red";
  fixedRect2.shapeColor="yellow";
 }
 else{
  movingRect2.shapeColor="green";
  fixedRect2.shapeColor="green"
 }
  drawSprites();
}
