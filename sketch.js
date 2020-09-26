const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var bruce;

var lightning;
var boltimg1, boltimg2, boltimg3;

function preload(){
    boltimg1 = loadImage("lightning1.png");
    boltimg2 = loadImage("lightning2.png");
    boltimg3 = loadImage("lightning3.png");
}

function setup(){
  createCanvas(700,700);
   
  engine = Engine.create();
  world = engine.world;	

  bruce = new Umbrella(350,570,300);

  Engine.run(engine);
    
}

function draw(){
  background("black");

  if(frameCount % 2 === 0 ){
    drops.push(new Drops(random(80,620),10,3));
  }

  for(var i = 0; i < drops.length; i++){
    drops[i].display();
  }

  bruce.display();

  makeLightning();

  drawSprites();
}   

function makeLightning(){
    if(frameCount % 50 === 0) {

      var rand = Math.round(random(1,3));
          switch(rand){
            case 1: lightning = createSprite(random(150,550),0,40,40);
            lightning.addImage(boltimg1);
            lightning.lifetime = 10;
            break;

            case 2: lightning2 = createSprite(random(150,550),0,40,40);
            lightning2.addImage(boltimg2);
            lightning2.lifetime = 10;
            break;

            case 3: lightning3 = createSprite(random(150,550),0,40,40);
            lightning3.addImage(boltimg3);
            lightning3.lifetime = 10;
            break;       
        } 
    }
}

