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
		this.musicVol = 441;
		this.soundVol = 441;
		this.listMusics=[];
	}

	setCtx(){
		this.ctx = document.getElementById("ctx").getContext("2d"); 
		this.ctx.font = '30px Arial';
	}
	start(level){
		//MUSIC
		this.listMusics[1].loop=true;
		this.listMusics[5].loop=true;
		this.listMusics[1].play();
		this.listMusics[5].play();

		this.level=level;
		this.timeWhenGameStarted = Date.now();
		this.dog = new Dog(this.images[1],this.images[2],this.images[3],this.images[4],this.images[5],this.images[6]);
		this.generateSheep(level);
		this.generateWolf(level);
				
		this.startTime = Date.now();
	}

	click(x,y){
		//SOM
		this.listMusics[4].play();	
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
		if(this.unlockedLevels<this.level+1){
			this.unlockedLevels = this.level+1;
		}
		if(this.safeSheeps<(totalSheeps/2)){
			//game over menu
			//this.stage="gameOver1";
		}else{
			//other game over menu
			//this.stage="gameOver2";
		}
		//SOM
		//guardar level score e time num ficheiro
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

	        //COLISÃO ENTRE OVELHAS

        	if(flagIdle && dist<200){
        		flagIdle=false;
        		this.listSheep[i].reset();
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
		this.ctx.fillText('Score: ' + (Date.now() - this.timeWhenGameStarted)/60,0,60);
	}

	isOut(x,y){
		//SOM
		if(x>800+25){
			return true;
		}
		else if(y<0-25 || y>800+25){
			return true;
		}else {
			return false;
		}
	}

	isSafe(x,y){
		   //a ovelha entrou na cerca 
		if(x<0-25 && y<=500 && y>=300){
			this.listMusics[8].play();
			return true;
		}
		else{
			return false;
		}
	}

	wall(sheep){
		if(sheep.x<0+sheep.width/2 && (sheep.y>=500 || sheep.y<=300)){
			sheep.x+=sheep.maxSpeed;
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

	generateSheep(level){
		switch(level){
			case(1):
				this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],400,400));
				this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],200,200));
				this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],300,300));
				this.totalSheeps = 3;
				break;
			case(2):
				for(let i=0; i<3; i++){
					var x = Math.random()*600;
					var y = Math.random()*600;
					this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],x,y));
				}
				this.totalSheeps = 3;
				break;
			case(3):
				for(let i=0; i<4; i++){
					var x = Math.random()*800;
					var y = Math.random()*800;
					this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],x,y));
				}
				this.totalSheeps = 4;
				break;
			case(4):
				for(let i=0; i<4; i++){
					var x = 200+Math.random()*500;
					var y = Math.random()*500;
					this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],x,y));
				}
				this.totalSheeps = 4;
				break;
			case(5):
				for(let i=0; i<5; i++){
					var x = 200+Math.random()*600;
					var y = Math.random()*600;
					this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],x,y));
				}
				this.totalSheeps = 5;
				break;
			case(6):
				for(let i=0; i<5; i++){
					var x = 300+Math.random()*500;
					var y = Math.random()*500;
					this.listSheep.push(new Sheep(this.images[7],this.images[8],this.images[9],this.images[10],this.images[11],this.images[12],x,y));
				}
				this.totalSheeps = 5;
				break;
		}
	}

	generateWolf(level){
		switch(level){
			case(1):
				this.listWolf.push(new Wolf(this.images[13],this.images[14],this.images[15],this.images[16],this.images[17],this.images[18],400,750));
			case(2):
				spwanField(2);
				spwanField(4);
				break;
			case(3):
				spwanField(3);
				spwanField(5);
				break;
			case(4):
				spwanField(2);
				spwanField(3);
				spwanField(4);
				break;
			case(5):
				spwanField(1);
				spwanField(3);
				spwanField(5);
				break;
			case(6):
				spwanField(1);
				spwanField(5);
				this.listWolf.push(new Wolf(this.images[13],this.images[14],this.images[15],this.images[16],this.images[17],this.images[18],400,750));
				break;
		}
	}

	spwanField(n){
		var x;
		var y;
		switch(n){
			case(1):
				//y 0 a -800   x 0  a 800
				x = Math.random()*800;
				y = Math.random()*800 * (-1);
				break;
			case(2):
				//y 0 a -800   x 800  a 1600
				x = Math.random()*800 + 800;
				y = Math.random()*800 * (-1);
				break; 
			case(3):
				//y 0 a 800   x 800  a 1600
				x = Math.random()*800 + 800;
				y = Math.random()*800
				break; 
			case(4):
				//y 800 a 1600   x 800  a 1600
				x = Math.random()*800 + 800;
				y = Math.random()*800 + 800;
				break; 
			case(5):
				//y 800 a 1600   x 0  a 800
				x = Math.random()*800;
				y = Math.random()*800 + 800;
				break; 
		}
		this.listWolf.push(new Wolf(this.images[13],this.images[14],this.images[15],this.images[16],this.images[17],this.images[18],x,y));
	}

	drawMenu(){
		switch(this.stage){
			case("intro"):
				this.listMusics[0].loop=true;
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
				this.ctx.drawImage(this.images[7],0,0,this.images[7].width,this.images[7].height,this.musicVol-20,369-20,40,40);
				this.ctx.drawImage(this.images[7],0,0,this.images[7].width,this.images[7].height,this.soundVol-20,543-20,40,40);
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
				if(x>=344 && x<=456 && y>=288 && y<=348){
					this.stage = "game";
					this.listMusics[0].pause();		
					this.listMusics[3].play();
					this.start(1);
				}
				if(x>=302 && x<=493 && y>=380 && y<=437){
					this.stage = "menuOptions";
					this.listMusics[3].play();
				}
				if(x>=304 && x<=456 && y>=470 && y<=527){
					this.listMusics[0].pause();		
					this.listMusics[3].play();
					this.stage = "menuCredits";
					this.listMusics[2].play();	
				}
				if(x>=315 && x<=485 && y>=560 && y<=618){
					this.stage = "menuScores";
					this.listMusics[3].play();
				}
				break;
			case("menuOptions"):
				if(x>=246 && x<=636 && y>=362 && y<=376){
					this.changeMusic(x);
					this.musicVol = x;
				}
				if(x>=246 && x<=636 && y>=536 && y<=550){
					this.changeSound(x);
					this.soundVol = x;
				}
		
				break;
			case("menuLevel"):
				//ve nivel a clicar e faz o start
				this.listMusics[3].play();
				break;
		}
	}
	changeSound(x){
		var sound = (x-246)/(636-246);
		for(let i=0; i<this.listMusics.length; i++){
			this.listMusics[i].volume = sound;
		}
	}
	changeMusic(x){
		var music = (x-246)/(636-246);
		for(let i=0; i<this.listMusics.length; i++){
			this.listMusics[i].volume = music;
		}
	}	
}