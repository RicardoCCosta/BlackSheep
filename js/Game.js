"use strict";
(function () {
    window.addEventListener("load", main);
}());

var gameEngine = new GameEngine();

function main(){
	//carregar imagens
	var backgroundImage = new Image();
	var dog1Image = new Image();
	var dog2Image = new Image();
	var dog3Image = new Image();
	var dog4Image = new Image();
	var sheep1Image = new Image();
	var sheep2Image = new Image();
	var sheep3Image = new Image();
	var sheep4Image = new Image();
	//var wolf1Image = new Image();
	//var wolf2Image = new Image();
	//var wolf3Image = new Image();
	//var wolf4Image = new Image();
	//var powerImage = new Image();
	var mainImage = new Image();
	var menu = new Image();
	var options = new Image();

	gameEngine.images.push(backgroundImage);
	gameEngine.images.push(dog1Image);
	gameEngine.images.push(dog2Image);
	gameEngine.images.push(dog3Image);
	gameEngine.images.push(dog4Image);
	gameEngine.images.push(sheep1Image);
	gameEngine.images.push(sheep2Image);
	gameEngine.images.push(sheep3Image);
	gameEngine.images.push(sheep4Image);
	//gameEngine.images.push(wolf1Image);
	//gameEngine.images.push(wolf2Image);
	//gameEngine.images.push(wolf3Image);
	//gameEngine.images.push(wolf4Image);
	//gameEngine.images.push(powerImage);
	gameEngine.menuImages.push(mainImage);
	gameEngine.menuImages.push(menu);
	gameEngine.menuImages.push(options);

	var nImages = gameEngine.images.length;
	var loadedImages = 0;
	for(let i = 0 ;i< nImages ; i++){
		gameEngine.images[i].addEventListener("load", function () {
			loadedImages++;
			if(loadedImages == nImages){
				//continues to game
				gameEngine.setCtx();
				//gameEngine.start(1);	
				gameEngine.stage="intro";
				window.requestAnimationFrame(function () {
				    update(gameEngine);
				});
			}
		});
	}

	backgroundImage.src = "Images/background.png";
	dog1Image.src = "Images/dog1.png";
	dog2Image.src = "Images/dog2.png";
	dog3Image.src = "Images/dog3.png";
	dog4Image.src = "Images/dog4.png";
	sheep1Image.src = "Images/sheep1.png";
	sheep2Image.src = "Images/sheep2.png";
	sheep3Image.src = "Images/sheep3.png";
	sheep4Image.src = "Images/sheep4.png";
	//wolf1Image.src =  "Images/wolf1.png";
	//wolf2Image.src =  "Images/wolf2.png";
	//wolf3Image.src =  "Images/wolf3.png";
	//wolf4Image.src =  "Images/wolf4.png";
	//powerImage.src = "Image/power.png";
	mainImage.src = "Images/main.png";
	menu.src = "Images/menu-01.png";
	options.src = "Images/options.png"
}

function update(gameEngine){
	console.log(gameEngine.stage);
	switch(gameEngine.stage){
		case("load"):
			break;
		case("intro"):
			gameEngine.drawMenu();
			break;
		case("menuMain"):
			gameEngine.drawMenu();
			break;
		case("menuOptions"):
			gameEngine.drawMenu();
			break;
		case("menuLevel"):
			//gameEngine.clickMenu();
			gameEngine.drawMenu();
			break;
		case("game"):
			if(!gameEngine.pause || !gameEngine.loaded){
				gameEngine.update();
				gameEngine.draw();
			}	
	}
	window.requestAnimationFrame(function () {

        update(gameEngine);
    });
}

document.onmousedown = function(mouse){
	var x = mouse.clientX - document.getElementById('ctx').getBoundingClientRect().left;
	var y = mouse.clientY - document.getElementById('ctx').getBoundingClientRect().top;
	switch(gameEngine.stage){
		case("load"):
			break;
		case("intro"):
			break;
		case("menuMain"):
			gameEngine.clickMenu(x,y);
			break;
		case("menuOptions"):
			gameEngine.clickMenu(x,y);
			break;
		case("menuLevel"):
			gameEngine.clickMenu(x,y);
			break;
		case("game"):
			if(mouse.which === 1){
				if(!gameEngine.pause || !gameEngine.loaded){
					gameEngine.click(x,y);
				}
			}else{
				gameEngine.callPause();
			}	
	}
}
document.oncontextmenu = function(mouse){
	mouse.preventDefault();
}