function setup(){
    
    createCanvas(500,500);
}

function draw() {
  ellipse(50, 50, 50, 50);
    
    rect(50,40,30,30);
}

function mousePressed() {
  remove(); // remove whole sketch on mouse press
}