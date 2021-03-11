// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

// -------- SAUSAGEMCBUILT-IN VARIABLES --------

var num_stars;
var speed;
var stars;

var img;
var img_idx;

// Text overlay info + offsets
// let name_txt = "";
// let x_txt0 = (-sizeX / 4) - 33;
// let y_txt0 = 54;
// let saus_offset = 115;
// let intro_offset = 18;
// let char_sp = 77;
// let font_size = 160;
// let change_P = 0.09;

// Color train
// float[][] train = new float[name_txt.length()][3];


// I create an array named "stars",
// it will be filled with x elements made with the Star() class.





function preload() {
  // myFont = loadFont('./src/resources/cqmono.otf');
  img = loadImage('https://i.imgur.com/CZwuAoI.png');
}


function setup() {
  // let sizeX = windowWidth;
  // let sizeY = windowHeight;
  createCanvas(windowWidth, windowHeight);

  num_stars = 444;
  speed = 2;
  stars = [];

  noStroke();

  for (let i = 0; i < num_stars; i++) {
    stars.push(new Star());
  }

  img_idx = 0;
}

function draw() {
  background(0);
  // I shift the entire composition,
  // moving its center from the top left corner to the center of the canvas.
  translate(width/2, height/2);
  // I draw each star, running the "update" method to update its position and
  // the "show" method to show it on the canvas.
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

  // hooters
  if (img_idx == 0) {
    image(img, 0 - (width * 0.43) , 0 - (height * 0.45), width * 0.85, height * 0.85);
  }
  // matt 
  if (img_idx == 1) {
    image(img, 0 - (width * 0.43) , 0 - (height * 0.45), width * 0.85, height * 0.85);
  }
  // fam vegas
  if (img_idx == 2) {
    image(img, 0 - (width * 0.43) , 0 - (height * 0.45), width * 0.85, height * 0.85);
  }
  // fam cliffs
  if (img_idx == 3) {
    image(img, 0 - (width * 0.43) , 0 - (height * 0.45), width * 0.85, height * 0.85);
  }
  // bob
  if (img_idx == 4) {
    image(img, 0 - (width * 0.43) , 0 - (height * 0.45), width * 0.85, height * 0.85);
  }
  // xmas
  if (img_idx == 5) {
    image(img, 0 - (width * 0.43) , 0 - (height * 0.45), width * 0.85, height * 0.85);
  }
  // txt1
  if (img_idx >= 6) {
    image(img, 0 - (width * 0.43) , 0 - (height * 0.45), width * 0.85, height * 0.85);
  }
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  img_idx += 1;
  if (img_idx == 1) {
    img = loadImage('https://i.imgur.com/8szA5Ia.png');
  }
  else if (img_idx == 2) {
    img = loadImage('https://i.imgur.com/1Cl9e7F.jpg');
  }
  else if (img_idx == 3) {
    img = loadImage('https://i.imgur.com/uPTEk2E.jpg');
  }
  else if (img_idx == 4) {
    img = loadImage('https://i.imgur.com/t1aV8g4.png');
  }
  else if (img_idx == 5) {
    img = loadImage('https://i.imgur.com/eyKwxGS.jpg');
  }
  else if (img_idx == 6) {
    img = loadImage('https://i.imgur.com/sPzdssC.png');
  }
  else if (img_idx == 7) {
    img = loadImage('https://i.imgur.com/XutGI9y.png');
  }
  else if (img_idx == 8) {
    img = loadImage('https://i.imgur.com/z7GXi40.png');
  }
  else if (img_idx == 9) {
    img = loadImage('https://i.imgur.com/0ictp7l.png');
  }
  else if (img_idx > 9) {
    window.location.href = 'https://youtu.be/b8tPX7Km4P8';
  }
}