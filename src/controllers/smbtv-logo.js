// -------- SAUSAGEMCBUILT-IN VARIABLES --------
let sizeX = 1920;
let sizeY = 1080;

// Title info
let name_txt = "SMBtv";
let x0 = 460; 
let y0 = 950; 
let xdir = 0;
let ydir = 0;
let char_sp = 53;
let font_size = 110;
let txtw = (char_sp * name_txt.length) - 12;
let txth = font_size - 50;
let change_P = 0.1;

let title;

// pixels per frame
let ppf = 3;


function moveTitle() {
  // change x0 and y0 based on ppf and dirs
  x0 = x0 + (xdir * ppf);
  y0 = y0 + (ydir * ppf);
  title.setXY(x0, y0);
  // then change dirs based on position if necessary
  //  also change color of text based on position
  if (x0 + txtw >= sizeX - ppf || x0 <= 0 + ppf) {
    xdir = xdir * -1;
    title.changeColor();
  }
  if (y0 - txth <= 0 + ppf || y0 >= sizeY - ppf) {
    ydir = ydir * -1;
    title.changeColor();
  }
  return;
}


function preload() {
  myFont = loadFont('./src/resources/cqmono.otf');
}


function setup() {
  createCanvas(sizeX, sizeY);
  textFont(myFont, font_size);
  noStroke();

  //x0 = Math.round(random(0, sizeX - txtw));
  //y0 = Math.round(random(0 + txth, sizeY));
  
  title = new Title(name_txt, char_sp, x0, y0, change_P);

  /*if (random(1) <= 0.5) {
    xdir = -1;
  }
  else {
    xdir = 1;
  }
  if (random(1) <= 0.5) {
    ydir = -1;
  }
  else {
    ydir = 1;
  }*/
}

function draw() {
  //background(0);
  title.drawSelf();
  //rect(x0, y0, txtw, 0 - txth);
  //moveTitle();
}
