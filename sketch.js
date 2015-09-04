function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background
	background(0, 255, 10);

	// set a fill color
	fill(255, 255, 255);

	// set a stroke color
	stroke(255, 0, 0);
noStroke();
	// draw a circle
	ellipse(320, 180, 100, 100);
	ellipse(100, 300, 100, 100);
}
