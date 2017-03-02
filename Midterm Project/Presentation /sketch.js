var PPTArray = [];

var PPTIndex = 0;

function setup() {
    createCanvas(2880,1800);

    PPTArray.push(loadImage("images/Brick1.png"));
    PPTArray.push(loadImage("images/Brick2.png"));
    PPTArray.push(loadImage("images/Brick3.png"));
    PPTArray.push(loadImage("images/Brick4.png"));
    PPTArray.push(loadImage("images/Brick5.png"));   


}

function draw() {

    image(PPTArray[PPTIndex], 2, 2,1152,720);


}

function mousePressed(){
    PPTIndex = PPTIndex + 1
    if(PPTIndex == 5){
        PPTIndex = 0;
        
    }
}

