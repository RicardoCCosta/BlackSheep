class Sheep extends Animal{
	constructor(image1,image2,image3,image4,x,y){
		super('sheep',0,10,400,400,100,100,10);
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.image4 = image4;
		this.caught = false; 	// se já está dentro da vedação
		this.idle = true;		
		this.frame = 0;
		this.goX = x;
		this.goY = y;
	}

	ilde(){ //fazer animação de comer erva

	}

	move(){	//mover um bocado aleatoriamente
		if(this.frame>100||this.idle){
			if(Math.random()*200+100<this.frame){
				this.goX = this.x+this.x+Math.random()*100;
				this.goY = this.y+this.y+Math.random()*100;
				this.frame=0;
				this.idle=false;
			}
		}
		//mover de x to goX com speed

	}
	run(){ 	//activado quando o ção ladra 
			//a ovelha é suposto correr X tempo numa direção
			//ter cuidado com os limites do mapa
	}

	update(){
		this.move();
		this.frame++;
	}

	flee(x,y){	//quando ela foge do cão por estar demasiado perto

	}

	onDeath(){	
		//retirar da lista
		//reduzir
	}
}