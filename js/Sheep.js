class Sheep extends Animal{
	constructor(image1,image2,image3,image4){
		super('sheep',0,10,400,400,100,100,10);
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.image4 = image4;
		this.caught = false; 	// se já está dentro da 
		this.idle = 0;		//tempo da animação de comer // se 0 não está a fazer nada
		this.frame = 0;
		this.goX = 0;
		this.goY = 0;
	}

	ilde(){ //fazer animação de comer erva

	}

	move(){	//mover um bocado aleatoriamente
		if(frame==100)
			frame=0;
		if(frame==0){
			this.goX = this.x+Math.random()*100;
			this.goY = this.y+Math.random()*100;
		}
		//mover de x to goX com speed
	}
	run(){ 	//activado quando o ção ladra 
			//a ovelha é suposto correr X tempo numa direção
			//ter cuidado com os limites do mapa
	}

	update(){
			move();
			frame++;
	}

	flee(){	//quando ela foge do mapa

	}

	onDeath(){	
		//retirar da lista
		//reduzir
	}
}