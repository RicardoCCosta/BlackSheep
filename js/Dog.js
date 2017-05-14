class Dog extends Animal{
	constructor(image1,image2){
		super('dog',0,10,400,400,100,100,10);
		this.image1 = image1;
		this.image2 = image2;
	}

	update(x,y){
		var difx = this.x - x;
		var dify = this.y - y;
		var mod = Math.sqrt(Math.pow(difx,2),Math.pow(dify,2));
		difx *= mod;
		dify *= mod;

		this.x += difx*speed;
		this.y += dify*speed;
	}	
}