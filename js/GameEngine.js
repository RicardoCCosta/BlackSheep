class GameEngine{
	constructor(){
		this.score = 0;
		this.totalSheeps = 0;
		this.numSheep = 0;
		this.safeSheeps = 0;
		this.level = 0;
		this.dog = null;
		this.listSheep = [];
		this.wolf = [];
		this.pause = false;
		this.menu = false;
		this.timeWhenGameStarted;
		this.ctx;
		//
		this.images = [];
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
				this.totalSheeps = 3;
				//chamar um lobo
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
		if(this.listSheep.length==0)
			endGame();
		//dog
		this.dog.update(this.mx,this.my);
		//sheep
		//verificar distancia com lobos, cao, limites de fuga e limite de segurança
		for(let i = 0 ;i < this.listSheep.length; i++){
	        this.listSheep[i].update();
	        if(isOut(this.listSheep[i].x,this.listSheep[i].y)){
	        	//delete ovelha e numSheep --
        	}
        	else if(isSafe(this.listSheep[i].x,this.listSheep[i].y)){
        		//delete ovelha e numSheep --
	        	//score aumenta
	        	safeSheeps++;
        	}
        	else if(colision(this.dog.x,this.dog.y,this.listSheep[i].x,this.listSheep[i].y)){
	        	//foge -> ver limites de novo??
	        }
	        else{
	        	for(let j = 0 ;j < this.listWolf.length; j++){
		        	if(colision(this.listWolf[j].x,this.listWolf[j].y,this.listSheep[i].x,this.listSheep[i].y)){
		        		this.listSheep[i].hp--;
		        		if(this.listSheep[i].hp==0){
		        			//delete ovelha e numSheep --
		        		}
		        	}
	        	}
	        }  
    	}
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
		for(let i = 0 ;i < this.listSheep.length; i++){
	        this.listSheep[i].draw(this.ctx);
    	}
		//draw wolf
		for(let i = 0 ;i < this.listWolf.length; i++){
	        this.listWolf[i].draw(this.ctx);
    	}
		ctx.fillText('Score: ' + this.score,950,950);
		ctx.fillText(this.safeSheeps + '/' + this.totalSheeps,1050,1050);
	}

	isOut(x,y){
		if(x<0 && (y>500 || y<300)){
			return true;
		}
		else if(x>800 || y<0 || y>800){
			return true;
		}
		else{
			return false;
		}
	}

	isSafe(x,y){
		if(x<0 && y<=500 && y>=300){
			return true;
		}
		else{
			return false;
		}
	}
}