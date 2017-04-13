//var mic;
var song;

var button;

var amp;

var volhistory = [];



//function toggleSong(){
//    if (song.isPlaying()){
//        song.pause();
//    }else{
//        song.play();
//    }
//}




function preload(){
    song = loadSound('mingzhugang.mp3')
}





function setup() {
createCanvas(500,500);
    button = createButton("play");
    button.mousePressed(togglePlay);
    amp = new p5.Amplitude();
}

function togglePlay(){
    if(!song.isPlaying()){
    song.play();
    button.html("pause")
}else{
    song.pause();
    button.html("play")
}
}
function draw() {
  background(0);
    var vol = amp.getLevel();
    volhistory.push(vol);
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < volhistory.length; i++){
        var y = map(volhistory[i], 0, 1, height, 0);
        vertex(i,y);
    }
    endShape();
    
    if(volhistory.length > width){
        volhistory.splice(0,1);
    }
}