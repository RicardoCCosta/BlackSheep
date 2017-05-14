"use strict";
class Dog extends Animal{
	constructor(image1,image2,image3,image4){
		//console.log("create dog");
		super('dog',0,10,400,400,100,100,10);
		this.image1 = image1;
		//this.image2 = image2;
		this.image3 = image3;
		//this.image4 = image4;
		//console.log("end create dog");
	}

	update(x,y){
		//console.log("update dog");
		//console.log("m "+x+" "+y);
		//console.log("this "+this.x+" "+this.y);
		
		var difx = x - this.x;
		var dify = y - this.y;
		//console.log("dif " + difx + " " + isNaN(difx) + " " + dify + " " + isNaN(dify));
		
		var mod = Math.sqrt(Math.pow(difx,2)+Math.pow(dify,2));
		//console.log("mod "+ mod + " " + isNaN(mod));
		var difx2 = difx / mod;
		var dify2 = dify / mod;
		//console.log("dif2 " + difx2  + " " + isNaN(difx2) + " " + dify2 + " " + isNaN(dify2));

		if(isNaN(difx2)){
			difx2=0;
		}
		if(isNaN(dify2)){
			dify2=0;
		}
		if(mod>this.maxSpeed){
			//console.log("move "+difx2*this.maxSpeed+" "+ dify2*this.maxSpeed);
			this.x += difx2*this.maxSpeed;
			this.y += dify2*this.maxSpeed;
		}else{
			//console.log("speed "+difx*this.maxSpeed+" "+ dify*this.maxSpeed);
			this.x += difx;
			this.y += dify;
		}
	}	
}