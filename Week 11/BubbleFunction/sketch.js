var bubbleX = 0;
var bubbleY = 200;
var bubbleSize = 100;


function setup() {
    createCanvas(500,500);
}

function draw() {
    background(255);
    
    
    
    
    display();
    move();
    
    var checking = checkPosition();
    
    if(checking == true){
        bubbleX = 0;
    }
    
    if(mouseIsPressed){
        moveFaster(10);
    }
  
}

function display(){
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);

}

function move(){
        bubbleX++;

}

function moveFaster(howFast){
    bubbleX = bubbleX + howFast
}

function checkPosition(){
    if(bubbleX > width){
        return true;
    }else{
        return false;
    }
}