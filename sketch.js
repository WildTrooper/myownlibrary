var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject1= createSprite(100,100,50,50)
  gameObject1.shapeColor = "blue"

  gameObject2= createSprite(200,100,50,50)
  gameObject2.shapeColor = "white"

  gameObject3= createSprite(300,100,50,50)
  gameObject3.shapeColor = "pink"

  gameObject4= createSprite(400,100,50,50)
  gameObject4.shapeColor = "purple"

  movingRect.debug = true;
  gameObject2.debug = true;
  gameObject1.debug = true;
  fixedRect.debug = false;

  
}

function draw() {
  background(0);  

 // collision Algorithm
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,movingRect)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
    console.log("its working");

  }else if(isTouching(gameObject2,movingRect)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }else {
    console.log("Here is the problem");
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "white";
    gameObject1.shapeColor = "blue"
  }
  console.log(gameObject1.y - movingRect.y);
 
  drawSprites();

}
