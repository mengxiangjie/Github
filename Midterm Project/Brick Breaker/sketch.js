var mouseX = 0;

var ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
};

var rectWidth = 100;
var rectHeight = 50;


function setup() {
    
    createCanvas(1000,600);
}

function draw() {

    background(0);
    display();
    ballmove();
    ballbounce();
    bricks();
    

}

function display(){
    
    //bar
    fill('red');
    rect(mouseX ,530 ,width/5 ,height/20);
    
    //ball
    fill(255);
    ellipse(ball.x, ball.y, 30, 30);
}



function ballmove(x,y){
    
    ball.x = ball.x + ball.xspeed;
    
    ball.y = ball.y + ball.yspeed;
       
}

function ballbounce(){
    
    if (ball.x > width || ball.x < 0){
        ball.xspeed = ball.xspeed * -1;
    }
    
    if (ball.y > height ||ball.y < 0){
        ball.yspeed = ball.yspeed * -1;
    }
    
}


function bricks(){
    
    rect(100,100,rectWidth,rectHeight);
    rect(200,100,rectWidth,rectHeight);
    rect(300,100,rectWidth,rectHeight);
    rect(400,100,rectWidth,rectHeight);
    rect(500,100,rectWidth,rectHeight);
    rect(600,100,rectWidth,rectHeight);
    rect(700,100,rectWidth,rectHeight);
    rect(800,100,rectWidth,rectHeight);
  

    
}















