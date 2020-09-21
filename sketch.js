var divisionHeight=300
var particles = []
var plinkos = []
var division = []

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine
function setup() {
  createCanvas(480,800);
 ground= new Ground(10,780,480,20)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
}
for(var k = 0; k(width);k=k+50 ){
  divisions.push(new Divisions(k,height+divisionHeight/2,10,divisionHeight))
}