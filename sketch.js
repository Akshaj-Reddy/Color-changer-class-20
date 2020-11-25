var moving,still






function setup() {
    createCanvas(800,400);
 moving = createSprite(400, 200, 50, 70);
 still = createSprite(600,200,50,50)
 moving.shapeColor = "orange";
 still.shapeColor = "orange"
}

function draw() {
  background(255,255,255); 
  moving.x = World.mouseX
  moving.y = World.mouseY
  console.log(moving.x - still.x)
 if(moving.x-still.x<moving.width/2 + still.width/2 && still.x - moving.x<moving.width/2+still.width && moving.y - still.y<still.height/2 + moving.height/2&&still.y-moving.y<moving.height/2 + still.height/2) {
moving.shapeColor = "blue"
still.shapeColor = "blue"

 }

 else {
moving.shapeColor = "orange";
still.shapeColor = "orange";

 }
  drawSprites();

}