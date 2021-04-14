
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  dustbinImage = loadImage('dustbingreen.png');

}

function setup() {
    var canvas = createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;


	  paper1=new Paper(300,400,50,50);

   ground = new Ground(700,680,1400,30);

   box1 = new Box(1005,630,150,20);
	 box2 = new Box(920,570,20,150);
	 box3 = new Box(1080,570,20,150);
	 
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(225);
  paper1.display();
   ground.display();
   box2.display();
   box3.display();
   box1.display();
   image(dustbinImage,900,465,200,200);
  drawSprites();
 
}

function keyPressed()	{
  if(keyCode===UP_ARROW)	{
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100});

  }
}