var counter = 0;
var bgColor = "Grey";
var ballDirection = true;



function setup() {
    createCanvas(500,500);
    
}

function draw() {
    //background
    background(bgColor);
    
        if (mouseY > 250){
        background("black");
    }else{background("pink");}
    
    
    if(counter <= 0){
        ballDirection = true;
        console.log("hit top:" + counter);
    }
    
    
    if(counter >= width){
        ballDirection = false;
        console.log("hit bottom:" + counter);
    }
    
    if(ballDirection == true){
        counter = counter + 2;
    }
    
    if(ballDirection == false){
        counter = counter - 2;
    }
    
    
    
    
    
 
    //circle
  
    fill('yellow');
    ellipse(width/2,counter,100,100);
    
    
    if (mouseY > 250){
        ballDirection = true;
    }else{ballDirection = false;}
    
    
    
    
  
}