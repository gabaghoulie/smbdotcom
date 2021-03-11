// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

// -------- SAUSAGEMCBUILT-IN VARIABLES --------

var num_stars;
var speed;
var stars;

var img;

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
  img = loadImage('../src/resources/1-hooters.png');
}


function setup() {
  // let sizeX = windowWidth;
  // let sizeY = windowHeight;
  createCanvas(windowWidth, windowHeight);

  num_stars = 444;
  speed = 5;
  stars = [];

  noStroke();

  for (let i = 0; i < num_stars; i++) {
    stars.push(new Star());
  }
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

  image(img, width * 0.1, height * 0.05);

}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
