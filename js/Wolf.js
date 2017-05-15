class Wolf extends Animal{
	constructor(image1,image2,image3,image4){
		super('wolf',0,10,200,200,100,100,10);
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.image4 = image4;
	}

	run(Dog){ 	//activado quando o ção ladra 
			//o lobo é suposto correr X tempo numa direção
			//ter cuidado com os limites do mapa e vedação
	}

	update(x,y){
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