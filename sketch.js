
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render

var roof;
var bob,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var world; 

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

   roof = new Roof(width/2,height/4,width/7,20);
   bobdiameter = 40;
   startbobpositionX= width/2;
   startbobpositionY = height/4+500;

   bob  = new Bob(startbobpositionX-bobdiameter*2,startbobpositionY,bobdiameter);
	bob2 = new Bob(startbobpositionX-bobdiameter,startbobpositionY,bobdiameter);
	bob3 = new Bob(startbobpositionX,startbobpositionY,bobdiameter);
   bob4 = new Bob(startbobpositionX+bobdiameter,startbobpositionY,bobdiameter)
   bob5 = new Bob(startbobpositionX+bobdiameter*2,startbobpositionY,bobdiameter);

   var render = Render.create({
element:document.body,
engine:engine,
option:{
   width:1200,
   height:700,
   wireframes:false
}
   })

   rope1 = new Rope(bob.body,roof.body,-bobdiameter*2,0);
   rope2 = new Rope(bob2.body,roof.body,-bobdiameter*1,0);
   rope3 = new Rope(bob3.body,roof.body,0,0);
   rope4 = new Rope(bob4.body,roof.body,bobdiameter*1,0);
   
   rope5 = new Rope(bob4.body,roof.body,bobdiameter*2,0);
   
   
   //rope2= new Rope(roof.body,bob2.body);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  roof.display();
  
  rope1.display();
  rope2.display();
  
  rope3.display();
  rope4.display();
  rope5.display();

  bob.display();
  
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  

}
function keyPressed(){
   if(keyCode=== UP_ARROW){
      Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-45})
   }
}
function drawline(Constraint){
   bobBodyPosition = constraint.bodyA.position
   
   roofBodyposition = constraint.bodyB.position

   roofBodyOffset = constraint.pointB;
   roofBodyX = roofBodyPosition.x+roofBodyOffset.x
   
   roofBodyY = roofBodyPosition.y+roofBodyOffset.y

line(bobBbodyosition.x,bobBodyposition.y,roofBodyX,roofBody.y)
}