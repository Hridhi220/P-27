
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var engine,world;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

   roof = new Roof (400,250,230,20);

 bobDiameter=40;

   bobObject1 = new Bob (320,575,40);
   bobObject2 = new Bob (360,575,40);
   bobObject3 = new Bob (400,575,40);
   bobObject4 = new Bob (440,575,40);
   bobObject5 = new Bob (480,575,40);

rope1 = new Rope (bobObject1.body,roof.body,-bobDiameter*2,0);
rope2 = new Rope (bobObject2.body,roof.body,-bobDiameter*1,0);
rope3 = new Rope (bobObject3.body,roof.body,0,0);
rope4 = new Rope (bobObject4.body,roof.body,bobDiameter*1,0)
rope5 = new Rope (bobObject5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
   roof.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();


   
}

function keyPressed(){
if(keyCode===UP_ARROW){


  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
}


}

