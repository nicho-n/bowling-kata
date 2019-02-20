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
			return score;
		}

		this.roll_n_times = function(pins, n){
			for (var i = 0; i < n; i++){
				this.roll(pins);
			}
		}
	}
	return {
		Game: Game
	};
})();	

module.exports = Bowling;
