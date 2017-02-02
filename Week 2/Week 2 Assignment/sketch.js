var mouthX = 800;
var mouthY = 800;
var mouthW = 400;
var mouthH = 60;
var CanvasW = 800;
var CanvasH = 800;
var canvasColor = "yellow"
var circleX = 200;
var circleY = 200;
var fillColor = "black"
var rectwidth = 20;
var rectheight = 20;


function setup() {
    createCanvas(800,800);
    background (255,211,100);
    
   
    console.log("Canvas Width:" + CanvasW + "      " + "Canvas Height:" + CanvasH);
    console.log("Canvas Color:" + canvasColor);
    console.log("circle X:" + circleX + "      " + "circle Y:" + circleY);
    console.log("Fill Color:" + fillColor);
    console.log("Rectangle Area:" + rectwidth*rectheight);
    
}

function draw() {
    fill(0,0,0)
    ellipse(200,200,150,150);
    line(10,10,100,mouthY/2);
    rect(50,50,20,20);
    
  
}