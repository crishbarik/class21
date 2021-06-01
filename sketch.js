var fixedRect, movingRect;

var rectangle ;
 
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect.velocityX = 3 ;
  movingRect.velocityX = -3 ;

  rectangle = createSprite(200,400,60,60) ;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if ( isTouching( movingRect , rectangle) ) {
  movingRect.shapeColor = "white";
  rectangle.shapeColor = "white";
 
  }
   else {
    
     movingRect.shapeColor = "yellow";
     rectangle.shapeColor = "yellow";
   }
  //bounceOff (movingRect , fixedRect) ;

  drawSprites();
}

