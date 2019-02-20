var Bowling = require("../Bowling");

function roll_n_times(pins, n){
	var g = new Bowling.Game;
	for (var i = 0; i < n; i++){
		g.roll(pins);
	}
	return g.score();
}

describe("Game instantiation", function() {
	it("game should be real", function() {
		expect(new Bowling.Game).not.toEqual(undefined);
	});

	it("Gutter game should be zero", function() {
		expect(roll_n_times(0, 20)).toEqual(0);
	});
	
	it("All ones should equal 20", function() {
		expect(roll_n_times(1, 20)).toEqual(20);
	});

});

