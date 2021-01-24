var groundObj,dustbinObj,paperObj
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  if(keyPresseD(UP_ARROW)){
	  paperObj.merge(dustbinObj);
  }	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper=ellipse(56,46,55,55)

	Matter.Bodies.circle(x,y,radius[options],[maxSides])
	
	dustbinObj=Dustbin
	paperObj=paper
}

function keyPresseD(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paerObject.body.position,{x:85,y:85});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 

  groundObj.display();
  dustbinObj.display();
  paperObj.display();
}



