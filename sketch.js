var ground,groundImage;
var monkey,monkey_running;
var bananaImage;
var obstacleImage,obstacleGroup;
var score=0;
var gamestate=1;
var restartImage,restart,gameoverImage,gameover;

function preload(){
  groundImage=loadImage("jungle.png",ground);
monkey_running=loadAnimation("Monkey_01.png","Monkey_02","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
 ground=createSprite("0,0,350,350");
ground.addImage("jungle.png",groundImage);
ground.velocityX=-9;
if(ground.x<0){
  ground.x=ground.width/2;
}
  var bananaGroup=new group();
  var fruitGroup=new group();         
  monkey.addAnimation("monkey",monkey_running);
  invisibleground=createSprite(300,175,600,5);
  invisibleground.visible=false;
  gameover=createSprite(300,10);
  gameover.addImage("gameOver",gameoverImage);
  gameover.scale=0.5;
  restart=createSprite(300,20);
  restart.addImage("restart",restartImage);              
}

function draw() {
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,300,50);
  background(220);
  if(gamestate1){
  if(fruitGroup.isTouching("monkey")){
    score=score+2;
    monkey.scale=monkey.scale+0.2;
    fruitGroup.destroyEach() ;
  }
    switch(score){
    case 1:monkey.scale = 0.12;
    break;
    case 2:monkey.scale=0.14;
    break;
    case 3:monkey.scale = 0.16;
    break;
    case 4:monkey.scale = 0.18;
    break;
    default:break;
  }  
  
}
    if(obstacleGroup.isTouching("monkey")){
    score=score-2;
    monkey.scale=monkey.scale-0.2;
  }
    
   else  if(obstacleGroup.isTouching(monkey)){
      gamestate=0;
} 

  if(gamestate==0){
    gameover.visible=true;
  restart.visible=true;
    ground.velocityX=0;
    monkey.velocityY=0;
    
    obstacleGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
    
    if (mousePressedOver(restart)){
      reset();
    }
}
}
function reset(){
  gamestate=1;
  monkey.changeAnimation("monkey.png",monkey_running);
  gameover.visible=false;
  restart.visible=false;
  obstacleGroup.destroyEach();
  fruitGroup.destroyEach();  
}