var Bowling = (function () {
	var Game = function(){
		var obj = {};
		this.roll = function(pins){
			return;
		}

		this.score = function(){
			return 0;
		}
	}

	return {
		Game: Game
	};
})();	

module.exports = Bowling;
