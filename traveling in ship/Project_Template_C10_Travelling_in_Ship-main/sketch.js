var ship
var ship_image
var sea
var sea_image
function preload(){
ship_image=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_image=loadAnimation("sea.png")
}

function setup(){
  createCanvas(600,400);
  sea=createSprite(0,150,50,400)
sea.addAnimation("moving",sea_image)
sea.scale=0.3
ship=createSprite(200,200,20,20)
ship.addAnimation("rocking",ship_image)
ship.scale=0.08
sea.velocityX=-3

}

function draw() {
  background("blue");
 drawSprites()
 if(sea.x<0){
  sea.x=sea.width/8
}


}

