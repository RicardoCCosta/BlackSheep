class Wolf extends Animal{
	constructor(){
		var x; //gerar random
		var y;
		var speed;
		var w;
		var h;
		constructor(5,x,y,speed);
		this.caught = false; 	// se já está dentro da 
		this.idle = 0;		//tempo da animação de comer // se 0 não está a fazer nada


	}

	move(listSheep){	//mover-se em direcção à ovelha mais proxima

	}
	run(Dog){ 	//activado quando o ção ladra 
			//o lobo é suposto correr X tempo numa direção
			//ter cuidado com os limites do mapa e vedação
	}

	update(Dog){
			//verificar distancia ao cão
			//	se estiver perto o suficiente mover-se no sentido oposto
			//verificar distancia à ovelha mais proxima 
			//	se estiver a comer não mexer
			//verificar limites
			//verificar a vedação
			//possiblidade de fugir do mapa
			//draw();
			//(devem faltar aqui muitas coisas)
	}

	onDeath(){	
		//retirar da lista
	}

}