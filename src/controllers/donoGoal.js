// Dono goal p5.js sketch
//  -SausageMcBurn 6/26/2019

// GLOBO GYM PURPLE COBRAS
// General stuff
let title = 'camera mount for COOKING STREAMS';
let current = 15;
let goal = 90;
let proportion = current / goal;
let showPercentage = true;

// Sizing
let sizeX = 500;
let titleHeight = 24;
let barHeight = 38;
let sizeY = titleHeight + barHeight;

let border = 2;
let bar_width = (sizeX - (2 * border)) * proportion;
let bar_height = sizeY - (2 * border) - titleHeight;

let titleFontSize = 20;
let barFontSize = 28;

// Color train stuff
let ct = [];
let shade_width = 8;
let frame_rate = 9;
let num_shades = Math.floor(bar_width / shade_width);
let extra_pixels = Math.floor(bar_width % shade_width);



function drawTitle() {
	// draw the dono goal title in the top panel of img
	fill(255);
    text(title, width/2, titleFontSize);
    return;
}

function generateColorTrain(c0, c1) {
	// create color train, a train of colors 
    //  fading from c0 to c1 and back to c0

    // generate num_shades shades @ shade_with
    //  fading proportionally with each shade
    //   then 1 shade @ extra_pixels width
    let color_train = [];
    let amount = 0;
    for (let i = 0; i < num_shades; i++) {
        if ((i * shade_width) < (bar_width / 2)) {
            amount = (i * shade_width) / (bar_width / 2);
        }
        else {
            amount = 1 - (((i * shade_width) - (bar_width / 2)) / (bar_width / 2));
        }
        color_train.push(lerpColor(c0, c1, amount));
    }
        
    if (extra_pixels > 0) {
        amount = 1 - (((num_shades * shade_width) - (bar_width / 2)) / (bar_width / 2));
        color_train.push(lerpColor(c0, c1, amount));
    }

    return color_train;
}



function drawProgressBar(color_train) {
    // Draw border for bar
    fill(0);
    rect(0, titleHeight, width, height);
    
    // draw each shade in the order of color train
    for (let i = 0; i < num_shades; i++) {
        fill(color_train[i]);
        rect(border + (i * shade_width), titleHeight + border, shade_width, bar_height);
    }

    // num_shades will be color_train.length - 1 if there are extra pixels
    if (extra_pixels > 0) {
        fill(color_train[color_train.length-1]);
        rect(num_shades * shade_width, titleHeight + border, extra_pixels, bar_height);
    }
    
    return;
}

function drawMoneys() {
	fill(255);
    let money_string = '$' + current + '/$' + goal;

    // add percentage if requested
    if (showPercentage) {
        percentage = Math.round((current / goal) * 100);
        money_string += ' (' + str(percentage) + '%)';
    }

    text(money_string, width/2, barFontSize + titleHeight + ((barHeight - barFontSize)/2));
    return;
}


function preload() {
	// gotta preload font for some reason? idk
	myFont = loadFont('../resources/cqmono.otf');
}

function setup() {
	// general setup stuff, nothin goin on here
	createCanvas(sizeX, sizeY);
    background(88);
    frameRate(frame_rate);
    textAlign(CENTER);
    textFont(myFont);
    textSize(titleFontSize);
    noStroke();

    drawTitle();
    textSize(barFontSize);
    
    // grab two random colors to become the gradient
    c0 = generateRandomColor();
    c1 = generateRandomColor();

    ct = generateColorTrain(c0, c1);
}

function draw() {
  
    drawProgressBar(ct);
    drawMoneys();

    // Cycle color train for animated gradient effect
    let temp_c = ct.splice(0,1);
    ct.push(temp_c[0]);
     
}