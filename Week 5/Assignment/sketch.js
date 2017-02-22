var nums = [1,50,100,150,200,230,255]

var index = 0;


function setup() {
    createCanvas(500,500);

}

function draw() {
    
    background(255);
    
  //House body
    fill(nums[index]);
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
}

function mousePressed(){
    index = index + 1;
    
    if(index == 7){
        index = 0;
    }
}