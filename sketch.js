var sea,ship;
var seaImage,shipImage;

function preload(){
  seaImage = loadImage("sea.png");
  shipImage = loadAnimation("ship-1.png","ship-1.png", "ship-2.png", "ship-1.png");
}

function setup(){
  createCanvas(600,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.x = sea.width/8;
  
  // adding scale and velocity to the sea
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("sailingShip",shipImage);
  
  
  // adding scale to the ship
  ship.scale =0.25;
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //logging the y position of the trex
  console.log(ship.y)

  
  

  if(keyDown("LEFT_ARROW")){
    ship.velocityX=-1;
    }
    
    if(keyDown("RIGHT_ARROW")){
      ship.velocityX=1;
    }
  
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}