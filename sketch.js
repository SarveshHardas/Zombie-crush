const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  flyover = new Bridge(20,{x:120,y:400})
  leftBase = new Base(80,400,150,100)
  rightBase = new Base(1270,400,150,100)
  jointPoint = new Base(1270,400,150,100)
  for(var i=0;i<=8;i++)
  {
    var x = random(width/2-200,width/2+300)
    var y = random(-10,140)
    var stone = new Stone(x,y,80,80)
    stones.push(stone)
  }

}

function draw() {
  background(51);
  Engine.update(engine);
  flyover.show();
  leftBase.display();
  rightBase.display();
}
