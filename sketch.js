var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup,obstaclesGroup;
var score,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);

monkey =createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground =createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
FoodGroup=new Group();  
obstaclesGroup=new Group();

}


function draw() {
background(255);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("survival Time:"+survivalTime,100,50);
  
if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8 
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
if(obstaclesGroup.isTouching(monkey)){
  ground.velocityX = 0; 
  monkey.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0); 
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
}
  
monkey.collide(ground); 
spawnbananas();
spawnObstacles();
  
drawSprites();  
}


function spawnbananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,400,40,10);
    banana.y = Math.round(random(180,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 200;

    FoodGroup.add(banana);
  }
  
  }
 
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstaceImage); 
    obstacle.scale=0.15; 
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}