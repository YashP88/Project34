const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backGroundImage;
var ground;
var hero;
var fly;


function preload() {
//preload the images here
backGroundImage=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
	world = engine.world;
  
  ground=new Ground(1000,700,3000,20);
  hero=new Hero(150,200,80);
  fly=new Fly(hero.body,{x:220,y:200});
      
  Engine.run(engine);
}

function draw() {
  background(backGroundImage);

  ground.display();
  hero.display();
  fly.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  fly.flya();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(hero.body,{x:150,y:200})
    fly.attach(hero.body);
  }
}
	
  
