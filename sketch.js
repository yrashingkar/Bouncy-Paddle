var ball,ballImg,paddle,paddleImg;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg=loadImage("ball.png");
  paddleImg=loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */  
  /* give the ball an initial velocity of 9 in the X direction */
  ball=createSprite(100,200,20,20);
  paddle=createSprite(300,200,20,20);
  ball.velocityX=9;
 
  ball.addImage("ball.png",ballImg);
  paddle.addImage("paddle.png",paddleImg);
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  var edge=createEdgeSprites();
  ball.bounceOff(edge[0]);
  ball.bounceOff(edge[2]);
  ball.bounceOff(edge[3]);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  if(ball.bounceOff(paddle)){
   ball.velocityY=(random(2,8));
  }
 
  /* Prevent the paddle from going out of the edges */
  paddle.bounceOff(edge);
 
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
     paddle.velocityY=-7;
  }
 
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=7;
  }
  drawSprites();
 
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
