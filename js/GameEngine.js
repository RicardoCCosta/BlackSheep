class GameEngine{
	constructor(){
		this.score = 0;
		this.startTime = Date.now();
		this.numSheep = 0;
		this.level = 0;
		this.player = null;
		this.listSheep = [];
		this.listWolf = [];
		this.pause = false;
	}

	startGame(level){
		this.level=level;
		this.player = Dog();

	}

	endGame(){

	}

	nextLevel(){
		
	}

	update(){
		
	}

	drawAll(){
		
	}
}