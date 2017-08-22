var mainMenuState = {
	create: function () {
		var gameTitle = game.add.text(game.world.width/2, game.world.height/2, "Click to launch", {font: '32px Courier', fill: '#ffffff'});
		gameTitle.anchor.x = 0.5;
		gameTitle.anchor.y = 0.5;
		game.input.activePointer.capture = true;
	},

	update: function (){
		if (game.input.activePointer.isDown) {
			game.state.start('play');
		}
	}
};