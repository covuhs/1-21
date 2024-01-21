let helvetica
let font
let txt1 = "A Covuhs\nPortfolio"
let txt2 = "covuhs"

function preload() {
    font = loadFont('NeurealTrial-Mono.otf');
    helvetica = loadFont('NHaasGroteskTXPro-Rg.ttf');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);  //letting the canvas be a variable
    cnv.style("position", "absolute");  //css styling, refer to 8:30 https://www.youtube.com/watch?v=dsBz80XWFvY
    cnv.style("inset", "0"); // for now, i don't really know what does this mean but it's css so it's probably in the docs
  } // also for .style go to https://p5js.org/reference/#/p5.Element/style
  
function draw() {
    background(10);
    noStroke();
    fill(240);
    
    let num = int(map(mouseX,0,width,0,txt2.length)); //make an integer from mapping mouseX's value from 0 to width, to 0 to the length of the text
    let c = txt2.charAt(num);
    textFont(helvetica);
    textSize(500);
    textLeading(50);
    textAlign(CENTER, CENTER);
    push();
    translate(0,-windowHeight*0.1)
    text(c,width/2,height/2);
    pop();
    push();
    rect(mouseX,0,5,height);
    pop();
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);  //responsive canvas
}