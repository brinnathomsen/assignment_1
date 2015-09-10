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
		// Tail
			var s = color(197, 210, 214);
			fill(s);
			arc(420, 170, 70, 50, PI+HALF_PI, TWO_PI);

		 rect( 440, 170, 15, 120);

		 arc(450, 290, 20, 20, 0, PI+QUARTER_PI, OPEN);
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
  	ellipse( 265, 145, 50, 70);


    // Back Leg

		var z = color(214, 230, 237);
  	fill(z);
  	triangle( 360, 190, 425, 200, 400, 225);

	 rect( 400, 205, 20, 90);

	 triangle( 400, 225, 420, 225, 435, 175);

   quad(400, 295, 420, 295, 408, 315, 395, 315);

	 var g = color(52, 55, 56);
	 fill(g);
	 triangle( 400, 295, 380, 315, 410, 315);

  // Front Leg
	 var z = color(214, 230, 237);
	 fill(z);
	 rect( 270, 205, 17, 90);

	 triangle( 270, 270, 270, 220, 320, 175);

	 quad(270, 295, 287, 295, 280, 315, 262, 315);

	 var g = color(52, 55, 56);
	 fill(g);
   triangle( 270, 295, 250, 315, 280, 315);


  // Head and neck
	var z = color(214, 230, 237);
	fill(z);
	ellipse( 220, 110, 45, 45);

	var z = color(214, 230, 237);
	fill(z);
	triangle( 245, 80, 245, 170, 310, 140);

	var z = color(214, 230, 237);
	fill(z);
	ellipse( 210, 150, 25, 25);

	var z = color(214, 230, 237);
	fill(z);
	triangle( 210, 80, 245, 150, 245, 80);

  var z = color(214, 230, 237);
	fill(z);
	triangle( 210, 80, 198, 105, 245, 80);

	var z = color(214, 230, 237);
	fill(z);
	triangle( 200, 150, 198, 115, 250, 120);

	var z = color(214, 230, 237);
	fill(z);
	triangle( 220, 150, 250, 115, 200, 120);

	// Bridle
	var g = color(52, 55, 56);
	stroke(g)
	line(198, 135, 225, 145);
	line(213, 140, 225, 100);
	line(205, 90, 225, 105);
	noStroke();

	// Mane
	var s = color(197, 210, 214);
 fill(s);
	ellipse(280, 150, 20, 80);
	ellipse(270, 140, 20, 80);
	ellipse(260, 130, 20, 80);
	ellipse(250, 120, 20, 80);
	ellipse(240, 115, 20, 80);
	ellipse(230, 100, 20, 60);

	// Reins
	noFill();
	stroke(g);
	curve(250, 10, 213, 140, 300, 140, 330, 30);
		noStroke();

	   // Ear
		 var z = color(214, 230, 237);
	 	fill(z);
		 ellipse(215, 75, 15, 25);

		 // HORSE ACCESORIES
		 // Saddle
		 var g = color(52, 55, 56);
		 fill(g);
		 rect(300, 135, 70, 55, 20);

		 // Eye
	 	fill(g);
		 ellipse(207, 110, 7, 7);

		 var s = color(244, 248, 249);
		 fill(s);
		 ellipse(208, 110, 1, 3);
		 // Nose
		 fill(g);
		 ellipse(202, 150, 2, 4);


		 // KNIGHT
		 // body
		 var e = color(161, 172, 175);
	 	 fill(e);
		 rect(310, 80, 40, 65, 20);

		 rect(325, 65, 15, 20);

		 ellipse(325, 55, 25, 40);

		 ellipse(332, 50, 30, 35);


     // Leg
		 quad(280, 160, 290, 180, 345, 135, 310, 135);

		 rect(280, 160, 15, 60);

  	triangle(290, 205, 300, 230, 260, 230);

	  var f = color(182, 191, 193);
		fill(f);
		ellipse(285, 165, 20, 20);

     // Arm
		 var f = color(182, 191, 193);
	 	 fill(f);
		 triangle(310, 50, 335, 55, 315, 75);

		 rect(334, 95, 13, 60);

		 ellipse(332, 55, 10, 10);

		 ellipse(340, 95, 20, 20);

		 var f = color(182, 191, 193);
		 fill(f);
		 ellipse(285, 165, 20, 20);

		 // Shield
		 quad(335, 110, 280, 130, 310, 165, 360, 145);

		 triangle(309, 165, 360, 144, 350, 170);




}
