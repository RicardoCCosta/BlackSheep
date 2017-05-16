"use strict";
class Wolf extends Animal{
	constructor(image1,image2,image3,image4,image5,image6,x,y){
		super('wolf',0,10,200,200,50,50,1,image1,image2,image3,image4,image5,image6);
		this.x=x;
		this.y=y;
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