const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var b2;
var block3;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var ball_options = {
    restitution : 0.95 ,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var bloc3_options={
    restituition : 0.75 ,
    frictionAir: 0.03
  }
  
//b2= Bodies.rectangle(200,200,50,50);
b2= Bodies.rectangle(300,200,50,50);
World.add(world,b2)
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  block3 = Bodies.rectangle(100,200,100,50,bloc3_options);
  World.add(world,block3)
 console.log(block3)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
fill("red")
  
}


function draw() 
{
 background (51);
 Engine.update(engine);
push()
 fill("red")
 ellipse(ball.position.x,ball.position.y,20);
 pop()
 fill("white")
 rect(ground.position.x,ground.position.y,400,20);
 push()
 fill("red")
 rect(b2.position.x,b2.position.y,50,50)
pop()
push()
fill("red")
rect(block3.position.x,block3.position.y,100,50)
pop()

}

