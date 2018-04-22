var cord = [];
var a;
var go;


function Avatar(){
	this.pos = createVector(300, 300);
	this.velocity = createVector(0, 0);
	this.acceleration = createVector(0, 0);


	this.display = function(){
		fill(250);
		ellipse(this.pos.x, this.pos.y, 50, 50);
	}

	this.pressed = function(){
	if(mouseIsPressed){
			a = createVector(mouseX, mouseY);
			append(cord, a);
			console.log(cord[cord.length - 1]);
	}
	}

	this.move = function(){
	 		
	 	if(cord[0] != undefined){
	 		//cord[cord.length - 1] 
			go = cord[cord.length-1].sub(this.pos);
			go.setMag(5);
			this.acceleration = go;

			this.velocity.add(this.acceleration);
			this.pos.add(this.velocity);
			this.velocity.limit(5);		
		}
 	
	}
	
}