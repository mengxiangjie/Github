var mouseX;

var ball = {
    x: 500,
    y: 500,
    xspeed: 3,
    yspeed: -4
};

var bar = {
    x: 0,
    y: 520

}

//var brickWArray = [100, 100, 100, 100, 100];
//var brickHArray = [30,30,30,30,30];


var start = false;
var hit = false;

var bricks = [];
var brickWidth = 100;
var brickHeight = 30;
var brickMargin = 4;
var rows = 6;
var columns = 7;

var offsetX, offsetY;




function setup() {
    
    createCanvas(1000, 600);
    //    for (var i = 0; i < 5; i++){
    //        rect(i*100+200, 100, brickWArray[i], brickHArray[i]);
    //bricks = new Group();

    offsetX = width / 2 - (columns - 1) * (brickMargin + brickWidth) / 2;

    offsetY = 80;

    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < columns; c++) {
            // var brick = createSprite(offsetX + c * (brickWidth + brickMargin), offsetY + r * (brickHeight + brickMargin), brickWidth, brickHeight);

            //    brick.shapeColor = color(200);


            var brick = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                hit: false,
                color: '#CAF2F5'
            }

            brick.x = offsetX + c * (brickWidth + brickMargin);
            brick.y = offsetY + r * (brickHeight + brickMargin);
            brick.width = brickWidth;
            brick.height = brickHeight;

            bricks.push(brick);

        }
    }

    console.log(brick);
}

function draw() {

    background(0);
    ballbounce();
    ballmove(start);
    collision();
    bricksDraw();

    //bar
    fill(255);
    rect(bar.x, bar.y, width / 5, height / 20);
    bar.x = mouseX;
    
    //ball
    fill(255);
    ellipse(ball.x, ball.y, 30, 30);

    //    //brick
    //    rect(200,100,100,30);



    //drawSprites();
}




function ballmove(start) {

    if (start == true) {
        ball.x = ball.x + ball.xspeed;

        ball.y = ball.y + ball.yspeed;

    }

}

function bricksDraw() {

    //    rect(200,100,100,30);
    noStroke();
    for (var i = 0; i < bricks.length; i++) {
        fill(bricks[i].color);
        rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
    }
}



function mouseClicked() {
    //ball start moving once clicked
    start = true;
}


function ballbounce() {

    if (ball.x > width || ball.x < 0) {
        ball.xspeed = ball.xspeed * -1;
    }

    if (ball.y < 0) {
        ball.yspeed = ball.yspeed * -1;
    }
    
//    if (ball.y > height || ball.y < 0) {
//        ball.yspeed = ball.yspeed * -1;
//    }
    
    if (ball.y > height){
        fill('red');
        textSize (50);
        text("Game Over", 400, 400);
    }

}
    


function collision() {
    //collision between bar and ball
    hit = collideRectCircle(bar.x, bar.y, width / 5, height / 20, ball.x, ball.y, 30);

    if (hit == true) {

        ball.xspeed = ball.xspeed * 1;
        ball.yspeed = ball.yspeed * -1;

    }


    //    //collision between bricks and ball
    //    hit = collideRectCircle(200,100,100,30, ball.x, ball.y, 30);
    //    
    //    if(hit == true){
    //        
    //        brick.remove();
    //    }

    // collision between bricks and ball
    //    hit = collideRectCircle(offsetX + c * (brickWidth + brickMargin), offsetY + r * (brickHeight + brickMargin), brickWidth, brickHeight, ball.x, ball.y, 30);
    //
    //    if (hit == true) {
    //
    //        print("hit:" + hit);
    //    }


    //    for (var r = 0; r < rows; r++) {
    //        for (var c = 0; c < columns; c++) {
    //            var curObject = r + c;
    //            hit = collideRectCircle(offsetX + c * (brickWidth + brickMargin), offsetY + r * (brickHeight + brickMargin), brickWidth, brickHeight, ball.x, ball.y, 30);
    //
    //       if (hit == true) {
    //
    //           print("hit:" + hit);
    //           bricks[curObject].shapeColor = color(0);;
    //       }
    //        }
    //    }

    for (var i = 0; i < bricks.length; i++) {
        fill(bricks[i].color);

        hit = collideRectCircle(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height, ball.x, ball.y, 30);

        if (hit == true) {

            print("hit:" + hit);
            bricks.splice(i, 1);
            //bricks.splice(i);
            ball.xspeed = ball.xspeed * 1;
            ball.yspeed = ball.yspeed * -1;

        }
    }
}