const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;
var ball;
var ground;
var pen;
var ball2;
var pen2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }

  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  var pen_options = {
    pointA: {x: 200, y: 20}, 
    bodyB: ball, 
    legnth: 10, 
    stiffness: 0.01
  }
  
  pen = Constraint.create(pen_options);
  World.add(world, pen);

  var ball2_options = {
    restitution: 0.5
  }

  ball2 = Bodies.circle(200, 250, 10,  ball2_options);
  World.add(world, ball2);

  var pen2_options = {
    bodyA: ball, 
    bodyB: ball2, 
    legnth: 10, 
    stiffness: 0.01
  }

  pen2 = Constraint.create(pen2_options);
  World.add(world, pen2);

      ground = new Ground(200, 380, 400, 20);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x, ball2.position.y, 20);

  line(pen.pointA.x, pen.pointA.y, ball.position.x, ball.position.y);
  line(ball.position.x, ball.position.y, ball2.position.x, ball2.position.y);

  ground.show();
  
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
    { 
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}

