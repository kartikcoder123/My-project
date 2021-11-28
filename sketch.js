var maincharacter;
var zombies;
var bgImg
var bg;
var shooter1, shooter2, shooter3
var zombies, zombiesImg;
var shootingbullet;

function preload() {
  bgImg = loadImage("assets/bg.jpeg")
  shooter1 = loadImage("assets/shooter_1.png")
  shooter2 = loadImage("assets/shooter_2.png")
  shooter3 = loadImage("assets/shooter_3.png")
  zombiesImg = loadImage("assets/zombie.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg);
  bg.scale = 2

  maincharacter = createSprite(300, 200, 20, 10)
  maincharacter.addImage(shooter1)
  maincharacter.scale = 0.5;
  
  bulletGroup = new Group()
  zombiesGroup = new Group()
}





function draw() {

  if (keyDown(LEFT_ARROW)) {
    maincharacter.x -= 8
  }
  if (keyDown(RIGHT_ARROW)) {
    maincharacter.x += 8
  }
  if (keyDown(UP_ARROW)) {
    maincharacter.y -= 8
  }
  if (keyDown(DOWN_ARROW)) {
    maincharacter.y += 8
  }

  if(keyWentDown("space")){
    bullet = createSprite(displayWidth-1150,maincharacter.y-30,20,10)
    bullet.velocityX = 20
    
    bulletGroup.add(bullet)
    maincharacter.depth = bullet.depth
    maincharacter.depth = maincharacter.depth+2
    maincharacter.addImage(shooter3)
    bullet = bullet-1
  }
  else if(keyWentUp("space")){
    maincharacter.addImage(shooter1);
  }

  if(zombiesGroup.isTouching(bulletGroup)){
    for(var i=0; i<zombiesGroup.length; i++){
      if(zombiesGroup[1].isTouching(bulletGroup)){
        zombiesGroup[1].destroy();
        bulletGroup.destroyEach();
      }
    }
  }

  enemy();
  drawSprites();
}

function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    zombie = createSprite(random(500,1100),random(100,500),40,40)

    zombie.addImage(zombiesImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombie.debug= true
    zombie.setCollider("rectangle",0,0,400,400)
   
    zombie.lifetime = 400
    zombiesGroup.add(zombie)
  }

}
  