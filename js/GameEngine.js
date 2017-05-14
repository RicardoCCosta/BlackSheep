class GameEngine{
	constructor(){
		this.score = 0;
		
		this.numSheep = 0;
		this.level = 0;
		this.player = null;
		this.listSheep = [];
		this.listWolf = [];
		this.pause = false;
		this.menu = false;
		this.timeWhenGameStarted;
		this.ctx;
		//
		this.images = [];
		this.sheep1Image;
		this.sheep2Image;
		this.wolf1Image;
		this.wolf2Image;
		//
		this.mx = 400;
		this.my = 400;
	}

	start(level){
		this.ctx = document.getElementById("ctx").getContext("2d"); 
		this.width = 800;
		this.heigth = 800;
		
		this.level=level;
		this.timeWhenGameStarted = Date.now();
		this.dog = new Dog(this.images[1],this.images[2]);

		switch(level){
			case(1):
				//
			case(2):
				//
		}
		this.startTime = Date.now();

	}

	click(x,y){
		if(x>800){
			this.mx = 800;
		}
		else if(x<0){
			this.mx = 0;
		}
		else{
			this.mx=x;
		}
		if(x>800){
			this.my = 800;
		}
		else if(x<0){
			this.my = 0;
		}
		else{
			this.my = y;
		}
	}

	pause(){
		this.pause = !this.pause;
	}
	

	endGame(){

	}

	nextLevel(){
		
	}

	update(){
		//dog
		this.dog.update(this.mx,this.my);
		//sheep

		//wolf
	}

	draw(){
		if(this.pause){
			//mostrar menu...
		}
		//draw background
		this.ctx.clearRect(0,0,this.width,this.heigth);
		this.ctx.drawImage(this.images[0],0,0,this.images[0].width,this.images[0].height,0,0,800,800);
		//draw dog
		this.dog.draw(this.ctx);
		//draw sheep

		//draw wolf

	}
}