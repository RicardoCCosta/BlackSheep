"use strict";
class GameEngine{
	constructor(){
		this.score = 0;
		
		this.numSheep = 0;
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
		//console.log("start GameEngine");
		this.ctx = document.getElementById("ctx").getContext("2d"); 
		this.width = 800;
		this.heigth = 800;
		
		this.level=level;
		this.timeWhenGameStarted = Date.now();
		this.dog = new Dog(this.images[1],this.images[2],this.images[3],this.images[4]);

		switch(level){
			case(1):
				//
			case(2):
				//
		}
		this.startTime = Date.now();
		//console.log("end start GameEngine");
	}

	click(x,y){
		console.log("start x y "+ x +" "+ y);
		console.log("start m "+ this.mx +" "+ this.my);
		
		if(x>800-this.dog.width/2){
			this.mx = 800-this.dog.width/2;
		}else if(x<0+this.dog.width/2){
			this.mx = 0+this.dog.width/2;
		}else{
			this.mx=x;
		}

		if(y>800-this.dog.height/2){
			this.my = 800-this.dog.height/2;
		}else if(y<0+this.dog.height/2){
			this.my = 0+this.dog.width/2;
		}else{
			this.my=y;
		}

		console.log("end m "+ this.mx +" "+ this.my);

	}

	callPause(){
		this.pause = !this.pause;
	}
	

	endGame(){

	}

	nextLevel(){
		
	}

	update(){
		if(this.listSheep.length==0)
			this.endGame();
		if(this.pause)
			return;
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
			return;
		}
		//draw background
		this.ctx.clearRect(0,0,this.width,this.heigth);
		this.ctx.drawImage(this.images[0],0,0,this.images[0].width,this.images[0].height,0,0,800,800);
		//draw dog
		this.dog.draw(this.ctx);
		//draw sheep
		for(let i = 0 ;i < this.listSheep.length; i++){
	        this.listSheep[i].update();
    	}
		//draw wolf
		//ctx.fillText('Score: ' + score,200,30);
	}
}