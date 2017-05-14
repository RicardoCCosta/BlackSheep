"use strict";
class Animal{
	constructor(type,id,hp,x,y,w,h,speed){
		this.type = type;
		this.id = id;
		this.hp=hp;

		this.x=x;
		this.y=y;
		this.vx=0;
		this.vy=0;
		this.width = w;
		this.height = h;
		this.maxSpeed=speed;
		this.image1 = new Image();
		this.image2 = new Image();
		this.image3 = new Image();
		this.image4 = new Image();
	}


	draw(ctx){
		//console.log("doge");
		ctx.save();
			var posX = this.x - this.width/2;
			var posY = this.y - this.height/2;
			console.log("x y " +this.x+" " + this.y);
			
			if(this.vx>=0){
				ctx.drawImage(this.image1,0,0,this.image1.width,this.image1.height,posX,posY,this.width,this.height);
			}
			else{
				//usar imagem invertida
				ctx.drawImage(this.image3,0,0,this.image1.width,this.image1.height,posX,posY,this.width,this.height);	
			}
		ctx.restore();
	}
}