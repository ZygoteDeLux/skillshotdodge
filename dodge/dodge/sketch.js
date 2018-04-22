

var player;
//var x = points[points.length - 1];

function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Avatar();
}

function draw() {

	background(1);

	player.display();
	
	player.attract(track);	

	player.update();


}

