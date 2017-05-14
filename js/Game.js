"use strict";
(function () {
    window.addEventListener("load", main);
}());

function main(){
	var gameEngine = new GameEngine();
	//carregar imagens
	var backgroundImage = new Image();
	var dog1Image = new Image();
	//var dog2Image = new Image();
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
	sheep1Image.src = "Images/sheep1.png";
	//sheep2Image.src = "Images/sheep2.png";
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
		gameEngine.pause();
	}
}
document.oncontextmenu = function(mouse){
	mouse.preventDefault();
}