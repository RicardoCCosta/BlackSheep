"use strict";
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
		if(this.pause){
			return;
		}
		console.log("update GameEngine");
		//dog
		this.dog.update(this.mx,this.my);
		//sheep
		for(let i = 0 ;i < this.listSheep.length; i++){
	        this.Sheep.update();
    	}
		//wolf
    	//ctx.fillText('Score: ' + score,200,30);
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

		//draw wolf

	}
}