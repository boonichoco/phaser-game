var preloaderState = {
	preload: function () {
		var loadingLabel = game.add.text(game.world.width/2, game.world.height/2, 'loading...', {font: '30px Courier', fill: '#ffffff'});
		loadingLabel.anchor.x = 0.5;
		loadingLabel.anchor.y = 0.5;

		//Loading graphical assets here



		//Loading audio assets here



		
	},
	create: function () {
		game.state.start('mainMenu');
	}
};