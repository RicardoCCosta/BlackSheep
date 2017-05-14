class GameEngine{
	constructor(){
		this.score = 0;
		
		this.numSheep = 0;
		this.level = 0;
		this.dog = null;
		this.listSheep = [];
		this.listWolf = [];
		this.pause = false;
		this.menu = false;
		this.timeWhenGameStarted;
		this.ctx;
		//
		this.images = [];
		//

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
		}
		this.startTime = Date.now();

	}

	endGame(){

	}

	nextLevel(){
		
	}

	update(){
		this.dog.move(x,y);

		for(let i = 0 ;i < this.listSheep.length; i++){
	        this.Sheep.update();
    	}
    	//ctx.fillText('Score: ' + score,200,30);
	}

	draw(){
		if(pause){
			return;
		}
		this.ctx.clearRect(0,0,this.width,this.heigth);
		this.ctx.drawImage(this.images[0],0,0,this.width,this.height,0,0,800,800);
		this.dog.draw(ctx);
	}
}