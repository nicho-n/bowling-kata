var Bowling = require("../Bowling");

var g = new Bowling.Game;


describe("Game instantiation", function() {
	it("game should be real", function() {
		expect(new Bowling.Game).not.toEqual(undefined);
	});

	it("Gutter game should be zero", function() {
		expect(g.roll_n_times(0, 20)).toEqual(0);
	});
	
	it("All ones should equal 20", function() {
		expect(g.roll_n_times(1, 20)).toEqual(20);
	});

	it("A spare + 3 pins, + all misses scores 24 ", function() {
		expect(g.roll_n_times(1, 20)).toEqual(20);
	});

});

