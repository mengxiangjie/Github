var mouthX = 800;
var mouthY = 800;
var mouthW = 400;
var mouthH = 60;
var CanvasW = 500;
var CanvasH = 500;
var canvasColor = "black";
var squarewidth = 200;
var squareheight = 200;
var fillColor = "none filled";
var trianglewidth = 250;
var triangleheight = 110;



function setup() {
    createCanvas(500,500);
    background(0,0,0);

    console.log("Canvas Width:" + CanvasW + "      " + "Canvas Height:" + CanvasH);
    console.log("Canvas Color:" + canvasColor);
    console.log("Fill Color:" + fillColor);
    console.log("Square Area:" + squarewidth*squareheight);
    console.log("Triangle Area:" + (trianglewidth*triangleheight)/2);
    

}

function draw() {
    
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
  
    
  
}

   
    