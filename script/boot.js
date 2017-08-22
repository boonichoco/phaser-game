var bootState = {
	create: function () {
		game.physics.startSystem(game.physics.Arcade);
		game.state.start('preloader');
	}
};