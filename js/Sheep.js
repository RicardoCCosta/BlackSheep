"use strict";
class Sheep extends Animal{
	constructor(image1,image2,image3,image4,image5,image6,x,y){
		console.log(x+" "+y);
		super('sheep',0,10,400,400,100,100,2,image1,image2,image3,image4,image5,image6);
		this.x=x;
		this.y=y;
		this.caught = false; 	// se já está dentro da vedação
		this.idle = true;		
		this.frame = 0;
		
	}

	ilde(){ //fazer animação de comer erva

	}

	reset(){
		this.goX = this.x;
		this.goY = this.y;
	}

	move(){	//mover um bocado aleatoriamente
		//go to x y
		this.goto();
		if((this.frame>100)&&(this.getX==this.x && this.getY==this.y)){
			if(Math.random()*200+100<this.frame){
				this.goX = this.x+this.x+Math.random()*100;
				this.goY = this.y+this.y+Math.random()*100;
				this.frame=0;
			}
		}
		this.frame++;
		//mover de x to goX com speed

	}
	run(){ 	//activado quando o ção ladra 
			//a ovelha é suposto correr X tempo numa direção
			//ter cuidado com os limites do mapa
	}

	update(){
		this.move();
	}

	

	onDeath(){	
		//retirar da lista
		//reduzir
	}
}