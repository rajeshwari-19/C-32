var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  camera=new Camera(width/2,height/2,0.5);
  camera.on();
  a=height;

  ground = new Ground(209,300,100,5);

  block1 = new Block(210,300,30,40);
  block2 = new Block(240,300,30,40);
  block3 = new Block(270,300,30,40);
  block4 = new Block(300,300,30,40);
  block5 = new Block(330,300,30,40);
  block6 = new Block(360,300,30,40);
  block7 = new Block(390,300,30,40);

  block8 = new Block(240,235,30,40);
  block9 = new Block(270,235,30,40);
  block8 = new Block(300,235,30,40);
  block9 = new Block(330,235,30,40);
  block10 = new Block(360,235,30,40);

  block11 = new Block(270,235,30,40);
  block12 = new Block(300,195,30,40);
  block13 = new Block(360,195,30,40);

  block14 = new Block(300,195,30,40);

  polygon = Bodies.circle(50,200,20);
       World.add(world,polygon);

    slingShot=new SlingShot(this.polygon,{x:100,y:200});
     
    text("SCORE:"+score,750,48);
  push(width/2)

 drawSprites();
}

function draw() {
  camera.zoom=camera.zoom+1
  if(backgroundImg)
        backgroundImg(backgroundImg);

        noStroke();
        textSize(35)
        Fill("white")
        text("Score "+score,-300 ,50)

   block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    
    polygon.display();
    ground.display();

    


  a=a-1;
  
  camera.zoom=camera.zoom+0.01
  camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  spolygon.fly();
}

function keyPressed(){
  if(keyCode === 32){
      ground.attach(polygon.body);
  }
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 