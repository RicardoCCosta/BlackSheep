class Sheep extends Animal{
	constructor(image1,image2,image3,image4){
		super('sheep',0,10,400,400,10,10,10);
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
		if(frame==0){
			this.goX = Math.random()*Width;
			this.goY = Math.random()*Width;
		}
	}
	run(){ 	//activado quando o ção ladra 
			//a ovelha é suposto correr X tempo numa direção
			//ter cuidado com os limites do mapa
	}

	update(){
			//verificar distancia ao lobos
			//	se estiver a ser comida não mexer
			//		verificar se morre
			//			onDeath(GameEngine);
			//verificar distancia ao cão
			//	se estiver perto o suficiente mover-se no sentido oposto
			//verificar limites
			//verificar a vedação
			//possiblidade de fugir do mapa
			//se não estiver a fazer nada rolar probablidade de se mover/animação
			//draw();
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