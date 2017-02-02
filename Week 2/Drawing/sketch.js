var mouthX = 500;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60;

function setup() {
    createCanvas(500,400);
    background (255,211,100);
    
    
    console.log("width:" + width + " " + "height:" + height);
    
}

function draw() {
    ellipse (100,100,50,50);
           //X,Y,width,height
    
    ellipse (width/2, height/2, 50, 50);
    
    rect(mouthX,mouthY+mouthH/2,mouthX+mouthW,mouthY+mouthH/2);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
  
}