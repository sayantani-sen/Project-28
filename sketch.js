const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImage;
var ground, mango1, mango2, mango3, mango4, mango5;
var boy, boyImage;
var stone;
var constrainedBody;

function preload(){
	boyImage = loadImage("sprites/boy.png");

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree();
	ground = new Ground();
	
	
	mango1 = new Mango(600,400);
	mango2 = new Mango(500,450);
	mango3 = new Mango(560,470);
	mango4 = new Mango(690,410);
	mango5 = new Mango(500,400);

	boy = createSprite(100,630,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	stone = new Stone();

	constrainedBody = new ConstrainedBody(stone.body,{x:200,y:200});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  

  tree.display();
  ground.display();
  
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  constrainedBody.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX,y:mouseY});
}
function mousePressed(){
	constrainedBody.fly();
}
function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=mango.r + stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:15,y:570})
		constrainedBody.attach(stone.body);
	}
}


