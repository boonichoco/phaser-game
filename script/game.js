var game = new Phaser.Game(1024, 768, Phaser.AUTO, null, 'gameDiv');

//Game States
game.state.add('boot', bootState);
game.state.add('preloader', preloaderState);
game.state.add('mainMenu', mainMenuState);
game.state.add('play', playState);

game.state.start('boot');