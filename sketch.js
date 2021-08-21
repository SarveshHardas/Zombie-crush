const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones=[];

function preload()
{
  axeImg = loadImage("assets/axe.png");
  bgImg = loadImage("assets/background.png");
  stoneImg = loadImage("assets/stone.png");
  woodImg = loadImage("assets/wood.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  
  flyover = new Bridge(20,{x:0,y:300});
  leftBase = new Base(80,300,150,100);
  rightBase = new Base(1270,300,150,100);
  jointPoint = new Base(1270,300,150,100);
  Matter.Composite.add(flyover.body,jointPoint)
  fly_con = new Link(flyover,jointPoint)
  
}

function draw() 
{
  background(51);

  Engine.update(engine);
  flyover.show();
  leftBase.display();
  rightBase.display();
  for(var i=0;i<=8;i++)
  {
    var x = random(width/2-200,width/2+300)
    var y = random(-10,140)
    var stone = new Stone(x,y,80,80)
    stones.push(stone)
    stones[i].display();
  }
}
