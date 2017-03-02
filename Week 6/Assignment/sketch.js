var JJArray = [];

var JJIndex = 0;

function setup() {
    createCanvas(1024,768);

    JJArray.push(loadImage("images/JJ0.jpg"));
    JJArray.push(loadImage("images/JJ1.jpg"));
    JJArray.push(loadImage("images/JJ2.jpg"));
    JJArray.push(loadImage("images/JJ3.jpg"));
    JJArray.push(loadImage("images/JJ4.jpg"));   
    JJArray.push(loadImage("images/JJ5.jpg"));

    JJIndex = JJChooser(0,6);

}

function draw() {

    image(JJArray[JJIndex], 0, 0);


}

function mousePressed(){
    JJIndex = JJChooser(0,6)
    
    }


function JJChooser(min, max) {

    var randomNum = int(random(min, max));

    return randomNum;
}