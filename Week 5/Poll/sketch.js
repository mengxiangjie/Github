var choices = {
    "Cake": 0,
    "Candy": 0,
    "Pie": 0,
    "Savory": 0
};

var cakeMessage = "Cake: 0"
var candyMessage = "Candy: 0"
var pieMessage = "Pie: 0"
var savoryMessage = "Savory: 0"


function setup() {
    createCanvas(400, 100);
    console.log(choices);
    console.log(choices["Cake"]);
    console.log(choices["Candy"]);
    console.log(choices["Pie"]);
    console.log(choices["Savory"]);
}

function draw() {
    background(255);
    
    //fill(r,g,b,transparency);
    fill(255,0,0,100);
    ellipse(10, height/2, choices["Cake"], choices["Cake"]);
    
    fill(0,255,0,100);
    ellipse(100, height/2, choices["Candy"], choices["Candy"]);
    
    fill(0,0,255,100);
    ellipse(180, height/2, choices["Pie"], choices["Pie"]);
        
    fill(0,0,0,100);
    ellipse(260, height/2, choices["Savory"], choices["Savory"]);

    text(cakeMessage, 10, height/2);
    text(candyMessage, 80, height/2);
    text(pieMessage, 160, height/2);
    text(savoryMessage, 240, height/2);

}

function keyPressed() {
    //49 == 1, 50 == 2, 51 == 3, 52 == 4
    if(keyCode == 49){
        choices["Cake"]++;
        cakeMessage ="Cake: " + choices["Cake"];
        //choices["Cake"] = choice["Cake"] + 1;
    }else if(keyCode == 50){
        choices["Candy"]++;
        candyMessage ="Candy: " + choices["Candy"];

    }else if(keyCode == 51){
        choices["Pie"]++;
        pieMessage ="Pie: " + choices["Pie"];

    }else if(keyCode == 52){
        choices["Savory"]++;
        savoryMessage ="Savory: " + choices["Savory"];

    }

    console.log(choices);

}