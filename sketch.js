
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,bob6;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(350,500,80);
  bob2=new Bob(420,500,80);
  bob3=new Bob(700,520,80);
  bob4=new Bob(850,500,80);
  bob5=new Bob(920,500,80);

	groundObject=new Ground(width/2,670,width,20);
  roof=new Roof(650,100,700,40);
  rope1=new Rope(bob1.body,roof.body,-160,0);
  rope2=new Rope(bob2.body,roof.body,-80,0);
  rope3=new Rope(bob3.body,roof.body,0,0);
  rope4=new Rope(bob4.body,roof.body,80,0);
  rope5=new Rope(bob5.body,roof.body,160,0);
  





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  text(mouseX + ',' + mouseY, 30, 45);
  bob1.display();
  groundObject.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();   
  rope4.display();
  rope5.display();
  drawSprites();
 
}



