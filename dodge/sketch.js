

var player;

function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Avatar();
}

function draw() {

	background(1);

	player.display();	
	player.pressed();

	
	player.move();


}