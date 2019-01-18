function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

var overallSize = 500;
var diameterDifference = 100;
	
	//circle 01
	fill(51,51,51)
	strokeWeight(2);
	stroke(75)
	ellipse(400,200,overallSize, overallSize);
	
		//circle 02
	stroke(0);
	fill(255,53,139)
	ellipse(400,200,
					overallSize - diameterDifference,
					overallSize - diameterDifference);
	
		//circle 03
	fill(1,176,240)
	ellipse(400,200,overallSize - 2*diameterDifference,250);
	
			//circle 04
	fill(174,238,0)
	ellipse(400,200,150,150);
}
