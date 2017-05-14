"use strict";
(function () {
    window.addEventListener("load", main);
}());

var gameEngine = new GameEngine();
function main(){
	//carregar imagens
	var backgroundImage = new Image();
	var dog1Image = new Image();
	//var dog2Image = new Image();
	var dog3Image = new Image();
	//var dog4Image = new Image();
	var sheep1Image = new Image();
	//var sheep2Image = new Image();
	var sheep3Image = new Image();
	//var sheep4Image = new Image();
	var sheep1Image = new Image();
	//var sheep2Image = new Image();
	//var wolf1Image = new Image();
	//var wolf2Image = new Image();
	//var powerImage = new Image();

	gameEngine.images.push(backgroundImage);
	gameEngine.images.push(dog1Image);
	//gameEngine.images.push(dog2Image);
	gameEngine.images.push(sheep1Image);
	//gameEngine.images.push(sheep2Image);
	//gameEngine.images.push(wold1Image);
	//gameEngine.images.push(wold2Image);
	//gameEngine.images.push(powerImage);

	var nImages = gameEngine.images.length;
	var loadedImages = 0;
	for(let i = 0 ;i< nImages ; i++){
		gameEngine.images[i].addEventListener("load", function () {
			loadedImages++;
			if(loadedImages == nImages){
				//inicializar jogo
				gameEngine.start(1);
				//continues to game
				window.requestAnimationFrame(function () {
				    update(gameEngine);
				});
			}
		});
	}

	backgroundImage.src = "Images/background.png";
	dog1Image.src = "Images/dog1.png";
	//dog2Image.src = "Images/dog2.png";
	dog3Image.src = "Images/dog3.png";
	//dog4Image.src = "Images/dog4.png";
	sheep1Image.src = "Images/sheep1.png";
	//sheep2Image.src = "Images/sheep2.png";
	sheep3Image.src = "Images/sheep3.png";
	//sheep4Image.src = "Images/sheep4.png";
	//wolf1Image.src =  "Images/wolf1.png";
	//wolf2Image.src =  "Images/wolf2.png";
	
	//powerImage.src = "Image/power.png";
}

function update(gameEngine){
	gameEngine.update();
	gameEngine.draw();
	window.requestAnimationFrame(function () {
        update(gameEngine);
    });
}
document.onmousedown = function(mouse){
	if(mouse.which === 1){
			var x = mouse.clientX - document.getElementById('ctx').getBoundingClientRect().left;
			var y = mouse.clientY - document.getElementById('ctx').getBoundingClientRect().top;
			gameEngine.click(x,y);
	}else{
		gameEngine.callPause();
	}
}
document.oncontextmenu = function(mouse){
	mouse.preventDefault();
}


function test(){
		var x=0,y=0,mx=1,my=1,maxSpeed=1;
		console.log("m "+mx+" "+my);
		console.log("this "+x+" "+y);
		
		var difx = mx - x;
		var dify = my + y;
		console.log("dif " + difx + " " + isNaN(difx) + " " + dify + " " + isNaN(dify));
		
		var mod = Math.sqrt(Math.pow(difx,2) + Math.pow(dify,2));
		console.log("mod "+ mod + " " + isNaN(mod));
		var difx2 = difx / mod;
		var dify2 = dify / mod;
		console.log("dif2 " + difx2  + " " + isNaN(difx2) + " " + dify2 + " " + isNaN(dify2));

		if(isNaN(difx2)){
			difx2=0;
		}
		if(isNaN(dify2)){
			dify2=0;
		}
		if(mod>maxSpeed){
			console.log("mod "+difx2*maxSpeed+" "+ dify2*maxSpeed);
			x += difx2*maxSpeed;
			y += dify2*maxSpeed;
		}else{
			console.log("speed "+difx*maxSpeed+" "+ dify*maxSpeed);
			x += difx;
			y += dify;
		}
		
}