

function Avatar(){
	this.pos = createVector(300, 300);
	this.vel = createVector();



	this.display = function(){
		fill(250);
		ellipse(this.pos.x, this.pos.y, 50, 50);
	}
	this.update = function(){
			this.pos.add(this.vel);	
	} 

	this.attract = function(target){
		if(track != undefined){
		var force = p5.Vector.sub(target, this.pos);
		force.setMag(2);

		this.vel = force;
	}
	}
	
}


	





	