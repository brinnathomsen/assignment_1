function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background
	background(color(155, 82, 199));

	// set a sky fill color
	fill(155, 82, 199);

	// set a stroke color
	stroke(255, 0, 0);
noStroke();


	// Draw a rectangle at the bottom of the screen to form the horizon
  var a = color(37, 64, 143);
	fill(a);
	rect(0, 160, 640, 200);

  // Backround trees
	var b = color(113, 96, 184);
	fill(b);
	ellipse( 150, 150, 20, 55);
	var b = color(113, 96, 184);
	fill(b);
	ellipse( 170, 170, 60, 55);




	  //Draw horse
		//Butt
		var z = color(214, 230, 237);
  	fill(z);
  	ellipse( 400, 175, 70, 80);
		//Midsection 1
		var z = color(214, 230, 237);
  	fill(z);
  	ellipse( 300, 175, 110, 80);
		// Midsection 2
		var z = color(214, 230, 237);
  	fill(z);
  	rect( 300, 140, 100, 50);
    // Midsection 3
		var z = color(214, 230, 237);
		fill(z);
		triangle( 300, 215, 400, 190, 400, 150)
		// Midsection 4
		var z = color(214, 230, 237);
  	fill(z);
  	ellipse( 265, 145, 65, 90);

    // Legs
    // Back Leg 1
		// Top
		var z = color(214, 230, 237);
  	fill(z);
  	triangle( 360, 190, 425, 200, 400, 225);
   // Middle
		var z = color(214, 230, 237);
  	fill(z);
  	triangle( 400, 225, 425, 225, 450, 250);
   // Bottom
	 var z = color(214, 230, 237);
	 fill(z);
	 triangle( 400, 225, 425, 225, 435, 175);



}
