var interfaceItems = [];

var currentType = "";

var bubble1;

function setup() {
    createCanvas(400, 400);


    interfaceItems.push(new interface(50, 300, 100, "start"));
    interfaceItems.push(new interface(150, 300, 100, "stop"));
    interfaceItems.push(new interface(250, 300, 100, "restart"));

    bubble1 = new bubble(10, 200, 100);


}

function draw() {

    background(255);
    fill(0);

    for (var i = 0; i < interfaceItems.length; i++) {
        var currentItemCheck = interfaceItems[i].check();
        console.log(currentItemCheck);
        var settingFill;
        if (currentItemCheck == true) {
            settingFill = 100;
        } else {
            settingFill = 255;
        }
        interfaceItems[i].display(settingFill);

    }

    if (currentType == "start") {
        bubble1.move();
    } else if (currentType == "stop") {
        bubble1.stop();

    } else if (currentType == "restart") {
        bubble1.reset();

    }


    bubble1.display();
    bubble1.checkWidth();

}




function interface(tempX, tempY, tempBoxSize, tempType) {

    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.type = tempType;


    this.display = function (setFill) {

        if (this.type == "start") {
            fill(0, 255, 0, setFill);
        } else if (this.type == "stop") {
            fill(255, 0, 0, setFill);
        } else if (this.type == "restart") {
            fill(0, 0, 255, setFill);
        }

        rect(this.x, this.y, this.boxSize, this.boxSize);
    }


    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
            return true;
        } else {
            return false;
        }
    }
}

function bubble(tempX, tempY, tempDiameter) {

    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;


    this.display = function () {
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    //start moving
    this.move = function () {
        this.x++;
    }
    
    //stop moving
    this.stop = function(){
        this.x;
    }
    
    //reset it to tempX 
    this.reset = function(){
        this.x = tempX;
    }

    this.checkWidth = function () {
        if (this.x > width) {
            this.x = 0;
            return true;
        }else{
            return false;
        }
    }


}


function mousePressed() {

    for (var i = 0; i < interfaceItems.length; i++) {
        var checkItem = interfaceItems[i].check();
        if (checkItem == true) {
            currentType = interfaceItems[i].type;
            console.log(currentType);
        }
    }

}