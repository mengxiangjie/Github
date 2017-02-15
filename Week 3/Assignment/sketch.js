var backgroundColor = 'black';
var col = "rgb(132,144,23)";
var value = 0;


function setup() {
    
    createCanvas(500,500);
    background(0,0,0);

}

function draw() {

    //background
    col = mouseX/2;
    background(col);
    
    
    
    //House body
    fill(195,188,181);
    rect(150,220,200,200);
    
    
    //Roof
    fill(62,114,186);
    triangle(250,110,375,220,125,220);
    
    
    //Chimney
    fill(84,29,25);
    rect(290,70,30,110);
    
    
    //Window
    fill(0,0,0);
    rect(260,280,50,50);
    
    //light
    fill(value);
    arc(285, 280, 30, 40, 0, PI, OPEN);

  
    
    
}

function mousePressed(){
    
value = 'lightyellow';
   
   
}

function mouseReleased(){
    value = 0;
    
}
