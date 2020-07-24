
// Resolution
let sizeX = 1900;
let sizeY = 1060;

// new color value range
let ncvr = 5.0;

// rate of change (in frames)
roc = 7;

let perlin_offset = 0.0;
let perlin_increment = 0.03;

let og_color;
let color_vals;


function getNextRandomColor(offset) {
    let r_delta = map(noise(offset), 0, 1, (-1 * ncvr), ncvr);
    offset += perlin_increment;
    let g_delta = map(noise(offset), 0, 1, (-1 * ncvr), ncvr);
    offset += perlin_increment;
    let b_delta = map(noise(offset), 0, 1, (-1 * ncvr), ncvr);

    let new_r = color_vals.getR() + r_delta;
    let new_g = color_vals.getG() + g_delta;
    let new_b = color_vals.getB() + b_delta;

    // if (new_r < 0) {
    //     color_vals.setR(-1 * (new_r % 255));
    // }
    // else {
    //     color_vals.setR(new_r % 255);
    // }

    // if (new_g < 0) {
    //     color_vals.setG(-1 * (new_g % 255));
    // }
    // else {
    //     color_vals.setG(new_g % 255);
    // }

    // if (new_b < 0) {
    //     color_vals.setB(-1 * (new_b % 255));
    // }
    // else {
    //     color_vals.setB(new_b % 255);
    // }
    color_vals.setR(new_r % 255);
    color_vals.setG(new_g % 255);
    color_vals.setB(new_b % 255);

    let new_color = color(abs(color_vals.getR()), abs(color_vals.getG()), abs(color_vals.getB()));

    og_color = new_color;
    
    return new_color;
}


function preload() {
    //color_vals = new ColorValue(og_color);
}


function setup() {
    createCanvas(sizeX, sizeY);
    noStroke(); 
    og_color = generateRandomColor();
    color_vals = new ColorValue(og_color);
}

    
function draw() {
    // if (frameCount == 1) {
    //     color_vals = new ColorValue(og_color);
    // }

    if (frameCount % roc == 0) {
        perlin_offset += perlin_increment;
        getNextRandomColor(perlin_offset);
        console.log(color_vals.getAllVals());
        background(og_color);
    }
}
        

