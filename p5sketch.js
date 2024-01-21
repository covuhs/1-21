let helvetica
let city = "Thing"

function preload() {
    font = loadFont('NeurealTrial-Mono.otf');
}

function setup() {
    createCanvas(windowWidth, 400);
  }
  
function draw() {
    background(50);
    fill(200);
    textFont(font);
    textAlign(CENTER,CENTER);
    textSize(60);
    text(city,width/2,30);
  }

function windowResized() {
    resizeCanvas(windowWidth, 400);
}