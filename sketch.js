const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plain;
var stone;
var rubber;
var iron;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  hammer = new Hammer(100,100,100,50);
  plain = new Plain(400, 680, 800, 100);
  stone = new Stone(400, 350, 100, 100);
  rubber = new Rubber(200, 500);
  iron = new Iron(500, 500, 130, 70);

  sand1 = new Sand(500, 300);
  sand2 = new Sand(300, 300);
  sand3 = new Sand(700, 200);
  sand4 = new Sand(400, 500);
  sand5 = new Sand(450, 450);
  sand6 = new Sand(600, 600);
  sand7 = new Sand(370,550);
  sand8 = new Sand(690, 490);
  sand9 = new Sand(560, 560);
  sand10 = new Sand(340, 540);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0, 40, 255);

  Engine.update(engine);

  console.log(hammer.body.position.x);
  console.log(hammer.body.position.y);
  
  drawSprites();

  hammer.display();
  plain.display();
  stone.display();
  rubber.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
 
}



