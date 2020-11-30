
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3,dustbin;

function preload(){

}
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,450,70);
	ground=new Ground(600,650,1200,20);
	dustbin1=new Dustbin(900,570,20,100);

	dustbin2=new Dustbin(1100,570,20,100);
	dustbin3=new Dustbin(1000,630,220,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  background(0);
  rectMode(CENTER);
  paper.display();
  ground.display();
  dustbin1.display();

  dustbin2.display();
  dustbin3.display();
  drawSprites();

}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:230,y:-300});
}
}



