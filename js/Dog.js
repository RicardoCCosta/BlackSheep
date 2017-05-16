"use strict";
class Dog extends Animal{
	constructor(image1,image2,image3,image4,image5,image6){
		super('dog',0,10,400,400,60,60,2.5,image1,image2,image3,image4,image5,image6);
	}

	update(x,y){
		this.frameCounter++;
		var difx = x - this.x;
		var dify = y - this.y;
		var mod = Math.sqrt(Math.pow(difx,2)+Math.pow(dify,2));
		this.vx = difx / mod * this.maxSpeed;
		this.vy = dify / mod * this.maxSpeed;
		if(isNaN(this.vx)){
			this.vx=0;
		}
		if(isNaN(this.vy)){
			this.vy=0;
		}
		if(mod>this.maxSpeed){
			this.x += this.vx;
			this.y += this.vy;
		}else{
			this.x += difx;
			this.y += dify;
		}
	}	
}