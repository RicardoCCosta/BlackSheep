class Sheep extends Animal{
	constructor(){
		var x; //gerar random
		var y;
		var speed;
		var w;
		var h;
		constructor(20,x,y,speed);
		this.caught = false; 	// se já está dentro da 
		this.idle = 0;		//tempo da animação de comer // se 0 não está a fazer nada


	}

	ilde(){ //fazer animação de comer erva

	}

	move(){	//mover um bocado aleatoriamente

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
	}

	flee(){	//quando ela foge do mapa

	}

	onDeath(){	
		//retirar da lista
		//reduzir
	}
}