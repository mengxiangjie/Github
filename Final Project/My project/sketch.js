var song;

var button;

var fft;





function preload() {
    song = loadSound('Guaranteed.mp3');
    img = loadImage("assets/speaker3.png");

}



function setup() {
    createCanvas(512, 712);
    colorMode(HSB);
    button = createButton("play");
    button.mousePressed(togglePlay);
    song.play();
    fft = new p5.FFT(0,64);



}




function togglePlay() {
    if (!song.isPlaying()) {
        song.play();
        button.html("pause")
    } else {
        song.pause();
        button.html("play")
    }


}

function draw() {
    background(255);
    image(img,0,0);

   
    var spectrum = fft.analyze();
    for (var i = 0; i < spectrum.length; i++) {

        var amp = spectrum[i];
        var y = map(amp, 0, 75, height, 0);
        stroke('rgb(35,166,243)');
        strokeWeight(1);
        ellipse(width/1.97, height/1.52, y/7.5,y/7.5);
        
        var y = map(amp, 76, 150, height, 0);
        stroke('lightgreen');
        ellipse(width/1.97, height/2.68, y/9,y/9);
        
        var y = map(amp, 151, 256, height, 0);
        stroke('rgb(243,96,80)');
        ellipse(width/1.97, height/5.8, y/18, y/18);

        
    }
    noFill();

    





}