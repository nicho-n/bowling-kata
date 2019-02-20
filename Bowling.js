var Bowling = (function () {
	var Game = function(){
		var rolls = [];
		var current_roll = 0;

		this.roll = function(pins){
			rolls[current_roll] = pins;
			current_roll += 1;
		}

		this.score = function(){
			var score = 0; 
			for (var i = 0; i < rolls.length; i++){
				score += rolls[i];
			}
			rolls.fill(0); //assume totalling score means game is finished 
			return score;
		}
	}
	return {
		Game: Game
	};
})();	

module.exports = Bowling;
