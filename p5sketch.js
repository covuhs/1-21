let helvetica
let txt1 = "A Covuhs\nPortfolio"

function preload() {
    font = loadFont('NeurealTrial-Mono.otf');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);  //letting the canvas be a variable
    cnv.style("position", "absolute");  //css styling, refer to 8:30 https://www.youtube.com/watch?v=dsBz80XWFvY
    cnv.style("inset", "0"); // for now, i don't really know what does this mean but it's css so it's probably in the docs
  }
  
function draw() {
    background(10);
    fill(240);
    textFont(font);
    textSize(60);
    textLeading(50);
    textAlign(LEFT, TOP);
    text(txt1,10,0);
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}