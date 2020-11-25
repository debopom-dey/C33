
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3,wall4,ground
var divisions=[]
var plinko=[]
var particles=[]
var divisionHeight=300;
var particle
var score=0
var gameState="play"
var turn=0
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //wall1= new Ground(100,800,800,20)
  //wall2= new Ground(100,0,800,20)
  //wall3= new Ground(0,400,20,800)
  //wall4= new Ground(480,400,20,800)
  ground= new Ground(width/2,height,width,20)

 
  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,175));
  }
  for(var j=60;j<=width;j=j+60){
    plinko.push(new Plinko(j,275));
  }
  for(var j=20;j<=width;j=j+65){
    plinko.push(new Plinko(j,375));
  }
  for(var k = 0; k <=width; k = k + 130){
    divisions.push(new Division(k,height-divisionHeight/2-10,10,divisionHeight))  
    }
  
  for(var k = 0; k <=width; k = k + 130){
    divisions.push(new Division(k,height-divisionHeight/2-10,10,divisionHeight))
  }
 
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  mousePressed()
 // fill(127,0,0)
  //wall1.display();
  //wall2.display();
  //wall3.display();
  //wall4.display();
 // fill(255,255,255)
 if (particle!== null){
  particle.display();
  if(particle.body.position.y>760){

    if(particle.body.position.x<300){
      score=score+500
      particle=null
      if(turn>=5) gameState="end"
    }
    
  }
}
 noStroke();
 textSize(35)
 fill("white")
 text("Score  " + score, 400, 350)

 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))

 }
  ground.display();
  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }
  for (var j=0;j<particles.length;j++){
    particles[j].display();
  }

  drawSprites();
  
}
function mousePressed(){
  if(gameState==="play"){
    turn++;
    particle=new Particle(mouseX,10,10)
   
  }
}

