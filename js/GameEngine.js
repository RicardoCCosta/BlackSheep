"use strict";
class GameEngine{
	constructor(){
		this.unlockedLevels=1;
		this.stage = "load";
		this.score = 0;
		this.wolfSheepDistance = 0;
		this.dogSheepDistance = 0;
		this.totalSheeps = 0;
		this.safeSheeps = 0;
		this.level = 0;
		this.dog = null;
		this.listSheep = [];
		this.listWolf = [];
		this.pause = false;
		this.menu = false;
		this.timeWhenGameStarted;
		this.framecounter=0;
		//
		this.images = [];
		this.menuImages = [];
		//
		this.mx = 400;
		this.my = 400;
		this.width = 800;
		this.heigth = 800;
		this.musicVol = 390;
		this.soundVol = 390;
		this.listMusics=[];
	}

	setCtx(){
		this.ctx = document.getElementById("ctx").getContext("2d"); 
		this.ctx.font = '30px Arial';
	}
	start(level){
		//MUSIC
		this.listMusics[2].play();


		this.level=level;
		this.timeWhenGameStarted = Date.now();
		this.dog = new Dog(this.images[1],this.images[2],this.images[3],this.images[4],this.images[5],this.images[6]);

		switch(level){
			case(1):
				this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],200,200));
				this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],200,600));
				this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],600,400));
				this.totalSheeps = 3;
				//chamar um lobo
				break;
			case(2):
				//
		}
		this.startTime = Date.now();
	}

	click(x,y){
		//SOM
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
	}

	callPause(){
		//SOM
		this.pause = !this.pause;
	}
	

	endGame(){
		this.pause = true;
		this.unlockedLevels = this.level+1;
		//SOM
		//guardar level score e time num ficheiro
		this.nextLevel();
	}

	nextLevel(){
		//dar opção de voltar para o menu ou seguir 
	}

	bark(){
		//animação
		//SOM

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
	        
	        let dist = this.calcDist(this.dog.x,this.dog.y,this.listSheep[i].x,this.listSheep[i].y);
	        let flagIdle = true;
        	if(this.isSafe(this.listSheep[i].x,this.listSheep[i].y)){
        		//delete ovelha
        		gameEngine.listSheep.splice(i,1);
	        	this.score+=100;
	        	this.safeSheeps++;
	        	continue;
        	}else if(this.isOut(this.listSheep[i].x,this.listSheep[i].y)){
	        	//delete ovelha

	        	gameEngine.listSheep.splice(i,1);
	        	continue;
        	}
        	
	        this.wall(this.listSheep[i]);
	        for(let j = 0 ;j < this.listWolf.length; j++){
	        	let wolfDist = calcDist(this.listWolf[j].x,this.listWolf[j].y,this.listSheep[i].x,this.listSheep[i].y);
		        if(wolfDist<=wolfSheepDistance){
		        	flagIdle=false;
		        	this.listSheep[i].reset();
		        	this.listSheep[i].hp--;
		        	if(this.listSheep[i].hp<0){
		        		gameEngine.listSheep.splice(i,1);
		        	}
		       	}
	        }
	        
        	if(flagIdle && dist<300){
        		flagIdle=false;
        		this.listSheep[i].reset();
        		this.listSheep[i].goto();
        		this.listSheep[i].flee(this.dog.x,this.dog.y);
        	}

        	this.listSheep[i].update();
    	}
		//wolf
		for(let i = 0 ;i < this.listWolf.length; i++){
			if(calcDist(this.dog.x,this.dog.y,this.listWolf[i].x,this.listWolf[i].y)<200){
				this.listWolf[i].goto();
				this.listWolf[i].flee(this.dog.x,this.dog.y);
			}
        	nextSheep(this.listWolf[i]);
        	//ignora distancia ao cao para ja, criar um metodo que continue a ir para a ovelha mas desviado???
    	}
	}

	draw(){
		//draw background
		this.ctx.clearRect(0,0,this.width,this.heigth);
		this.ctx.drawImage(this.images[0],0,0,this.images[0].width,this.images[0].height,0,0,800,800);
		//draw sheep
		for(let i = 0 ;i < this.listSheep.length; i++){

	        this.listSheep[i].draw(this.ctx);
    	}
		//draw wolf
		for(let i = 0 ;i < this.listWolf.length; i++){
	        this.listWolf[i].draw(this.ctx);
    	}

		//draw dog
		this.dog.draw(this.ctx);
		//draw User Interface
			//Timer 
			this.ctx.fi
			//Sheep Captured
			//Sheep Missing
			//Sheep Lost

			//Bark metter

		//ctx.fillText('Score: ' + score,200,30);
		this.ctx.fillText('Score: ' + this.score,0,30);
		this.ctx.fillText('caugth ' +this.safeSheeps + ' / missing ' +this.listSheep.length+' / total '+ this.totalSheeps,400,30);
	}

	isOut(x,y){
		//SOM
		if(x>800+50){
			return true;
		}
		else if(y<0-50 || y>800+50){
			return true;
		}else {
			return false;
		}
	}

	isSafe(x,y){
		//SOM
		if(x<0-50 && y<=500 && y>=300){
			return true;
		}
		else{
			return false;
		}
	}

	wall(sheep){
		if(sheep.x<0+sheep.width/2 && (sheep.y>=500 || sheep.y<=300)){
			sheep.x+=10;
			sheep.reset();
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

	drawMenu(){
		switch(this.stage){
			case("intro"):
				this.listMusics[0].play();
				this.ctx.clearRect(0,0,this.width,this.heigth);
				this.ctx.drawImage(this.menuImages[0],0,0,this.menuImages[0].width,this.menuImages[0].height,0,0,800,800);
				break;
			case("menuMain"):
				this.ctx.clearRect(0,0,this.width,this.heigth);
				this.ctx.drawImage(this.menuImages[1],0,0,this.menuImages[1].width,this.menuImages[1].height,0,0,800,800);
				break;
			case("menuOptions"):
				this.ctx.clearRect(0,0,this.width,this.heigth);
				this.ctx.drawImage(this.menuImages[2],0,0,this.menuImages[2].width,this.menuImages[2].height,0,0,800,800);
				this.ctx.drawImage(this.menu[7],0,0,this.menu[7].width,this.menu[7].height,musicVol,496,40,40);
				this.ctx.drawImage(this.menu[7],0,0,this.menu[7].width,this.menu[7].height,soundVol,670,40,40);
				break;
			case("menuCredits"):
				this.ctx.clearRect(0,0,this.width,this.heigth);
				this.ctx.drawImage(this.menuImages[3],0,0,this.menuImages[3].width,this.menuImages[3].height,0,0,800,800);
				break;
			case("menuScores"):
				this.ctx.clearRect(0,0,this.width,this.heigth);
				this.ctx.drawImage(this.menuImages[4],0,0,this.menuImages[4].width,this.menuImages[4].height,0,0,800,800);
				break;
			case("menuLevel"):
				this.ctx.clearRect(0,0,this.width,this.heigth);
				this.ctx.drawImage(this.menuImages[5],0,0,this.menuImages[5].width,this.menuImages[5].height,0,0,800,800);
				break;		
		}	
	}

	clickMenu(x,y){
		switch(this.stage){
			case("menuMain"):
				this.listMusics[0].pause();
				this.listMusics[1].play();
				if(x>=344 && x<=456 && y>=288 && y<=348){
					this.stage = "game";
					this.start(1);
				}
				if(x>=302 && x<=493 && y>=380 && y<=437){
					this.stage = "menuOptions";
				}
				if(x>=304 && x<=456 && y>=470 && y<=527){
					this.stage = "menuCredits";
				}
				if(x>=315 && x<=485 && y>=560 && y<=618){
					this.stage = "menuScores";
				}
				break;
			case("menuOptions"):
				if(x>=244 && x<=634 && y>=481 && y<=496){
					changeMusic(x);
					this.musicVol = x;
				}
				if(x>=244 && x<=634 && y>=655 && y<=670){
					changeSound(x);
					this.soundVol = x;
				}
		
				break;
			case("menuLevel"):
				//ve nivel a clicar e faz o start
				break;
		}
	}
	changeSound(x){
		var sound = Math.abs(this.soundVol - x)/100;
		for(let i=0; i<this.listMusics.length; i++){
			this.listMusics[i].volume = sound;
		}
	}
	changeMusic(x){
		var music = Math.abs(this.musicVol - x)/100;
		for(let i=0; i<this.listMusics.length; i++){
			this.listMusics[i].volume = music;
		}
	}	
}