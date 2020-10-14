
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1,log1,log2,log3;


function draw(){
    background("purple");
    
    
}
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  paper1 = new Paper(50,300);
    
    ground = new Ground(400,height,800,60);
    
    log1 = new Dustbin(610,470,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);
    
  paper1.display();
  log1.display();
  ground.display();
		 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:52,y:-90})
  }
}



