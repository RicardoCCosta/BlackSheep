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

	gameEngine.Images.push(backgroundImage);
	gameEngine.Images.push(dog1Image);
	//gameEngine.Images.push(dog2Image);
	gameEngine.Images.push(sheep1Image);
	//gameEngine.Images.push(sheep2Image);
	//gameEngine.Images.push(wold1Image);
	//gameEngine.Images.push(wold2Image);
	//gameEngine.Images.push(powerImage);

	var nImages = gameEngine.Images.length;
	var loadedImages = 0;
	for(let i = 0 ;i< nImages ; i++){
		gameEngine.Images[i].addEventListener("load", function () {
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

