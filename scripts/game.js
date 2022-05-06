let game = {
	score: 0,
	currentGame: [],
	playerMoves: [],
	choices: ["button1", "button2", "button3", "button4"],
};

let showScore = () => {
	document.getElementById("score").innerText = game.score;
};

let newGame = () => {
	game.score = 0;
	game.currentGame = [];
	game.playerMoves = [];
	showScore();
};

module.exports = { game, newGame, showScore };
