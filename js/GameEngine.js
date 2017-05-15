"use strict";
class GameEngine{
	constructor(){
		this.score = 0;
		this.wolfSheepDistance = 0;
		this.dogSheepDistance = 0;
		this.loaded=false;
		this.totalSheeps = 0;
		this.safeSheeps = 0;
		this.level = 0;
		this.dog = null;
		this.listSheep = [];
		this.listWolf = [];
		this.pause = false;
		this.menu = false;
		this.timeWhenGameStarted;
		this.ctx;
		this.framecounter=0;
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
				this.listSheep.push(new Sheep(this.images[5],this.images[6],this.images[7],this.images[8]))
				this.totalSheeps = 3;
				//chamar um lobo

			case(2):
				//
		}
		this.startTime = Date.now();
		this.loaded=true;
		//console.log("end start GameEngine");
	}

	click(x,y){
		console.log("start x y "+ x +" "+ y);
		console.log("start m "+ this.mx +" "+ this.my);
		if(this.framecounter<10){
			this.bark();
		}
		this.framecounter=0;
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

		this.nextLevel();
	}

	nextLevel(){
		
	}

	bark(){
		//animação

		//ver ovelhas perto
		for(let i = 0 ;i < this.listSheep.length; i++){

		}
		//ver lobos perto
		for(let i = 0 ;i < this.listWolf.length; i++){

		}
	}

	update(){
		this.framecounter++;
		if(this.listSheep.length==0)
			this.endGame();
		//dog
		this.dog.update(this.mx,this.my);
		//sheep
		//verificar distancia com lobos, cao, limites de fuga e limite de segurança
		for(let i = 0 ;i < this.listSheep.length; i++){
	        this.listSheep[i].update();
	        let dist = this.calcDist(this.dog.x,this.dog.y,this.listSheep[i].x,this.listSheep[i].y);
	        let flagIdle = false;
        	if(this.isSafe(this.listSheep[i].x,this.listSheep[i].y)){
        		//delete ovelha
	        	score+=100;
	        	safeSheeps++;
        	}else if(this.wall(this.listSheep[i].x)){

        	}
	        else if(this.isOut(this.listSheep[i].x,this.listSheep[i].y)){
	        	//delete ovelha

        	}
        	
	        let flag=0;
	        for(let j = 0 ;j < this.listWolf.length; j++){
	        	let wolfDist = calcDist(this.listWolf[j].x,this.listWolf[j].y,this.listSheep[i].x,this.listSheep[i].y);
		        if(wolfDist<=wolfSheepDistance){
		        	flag=1;
		        	this.listSheep[i].hp--;
		        	if(this.listSheep[i].hp==0){
		        		//delete ovelha e numSheep --
		        	}
		       	}
	        }
	         
        	if(flag==0 && dist<200){
        		this.listSheep[i].flee(this.dog.x,this.dog.y);
        	}
    	}
		//wolf
		for(let i = 0 ;i < this.listWolf.length; i++){
        	nextSheep(this.listWolf[i]);
        	//ignora distancia ao cao para ja, criar um metodo que continue a ir para a ovelha mas desviado???
    	}
	}

	draw(){
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

		//draw User Interface
			//Timer 
			//Sheep Captured
			//Sheep Missing
			//Sheep Lost

			//Bark metter

		//ctx.fillText('Score: ' + score,200,30);
		this.ctx.fillText('Score: ' + this.score,950,950);
		this.ctx.fillText(this.safeSheeps + '/' + this.totalSheeps,1050,1050);
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


	calcDist(x1,y1,x2,y2){
		var difx = x1 - x2;
		var dify = y1 - y2;
		return Math.sqrt(Math.pow(difx,2)+Math.pow(dify,2));
	}

	nextSheep(wolf){
		var first = calcDist(this.listSheep[0].x,this.listSheep[0].y,wolf.x,wolf.y);
		var nsheep = 0;
		
		for(let i=1; i<this.listSheep.length; i++){
			var dist = calcDist(this.listSheep[i].x,this.listSheep[i].y,wolf.x,wolf.y);
			if(dist<first){
				first=dist;
				nsheep = i;
			}
		}
		if(first>wolfSheepDistance){
			wolf.update(this.listSheep[next].x,this.listSheep[next].y);
		}
	}


	wall(x){
		if(x<0 && (y<=500 || y>=300)){
			return true;
		}
		return false;
	}
}