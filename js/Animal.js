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
		this.heigth = h;
		this.maxSpeed=speed;
		this.image1;
		this.image2;
		this.image3;
		this.image4;
	}


	draw(ctx){
		ctx.save();
			var posX = self.posX - self.width/2;
			var posY = self.posY - self.height/2;
			if(vx>0){
				ctx.drawImage(self.image1,0,0,self.image1.width,self.image1.height,posX,posY,self.width,self.height);
			}
			else{
				ctx.drawImage(self.image3,0,0,self.image3.width,self.image3.height,posX,posY,self.width,self.height);
			}
		ctx.restore();
	}
}