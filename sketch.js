var mr,fr;

function setup() {
  createCanvas(800,400);
  fr = createSprite(50,100,50,20);
  fr.shapeColor="green"
  fr.debug=true;
  mr = createSprite(300,50,20,50);
  mr.shapeColor="blue";
  mr.debug=true;
}

function draw() {
  background(255,255,255);  
  
  mr.x=World.mouseX;
  mr.y=World.mouseY;

  if(mr.x-fr.x < fr.width/2 + mr.width/2 &&
    fr.x-mr.x < fr.width/2 + mr.width/2 &&
    mr.y-fr.y < fr.width/2 + mr.width/2 && 
    fr.y-mr.y < fr.width/2 + mr.width/2){
    
    fr.shapeColor="red"
    mr.shapeColor="red"


  } else{
    fr.shapeColor="green"
    mr.shapeColor="green"
  }


  drawSprites();
}