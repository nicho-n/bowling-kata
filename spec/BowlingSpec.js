var Bowling = require("../Bowling");

describe("The Five Test Cases", function() {
	it("game should be real", function() {
		expect(new Bowling.Game).not.toEqual(undefined);
	});

	it("Gutter game should be zero", function() {
		var g = new Bowling.Game;
		g.roll_n_times(0, 20)
		expect(g.score()).toEqual(0);
	});
	
	it("All ones should equal 20", function() {
		var g = new Bowling.Game;
		g.roll_n_times(1, 20);
		expect(g.score()).toEqual(20);
	});

	it("A spare + 3 pins, + all misses scores 16", function() {
		var g = new Bowling.Game;
		g.roll(5);
		g.roll(5);
		g.roll(3);
		g.roll_n_times(0, 17);
		expect(g.score()).toEqual(16);
	});

	it("strike + 3 pins + 4 pins + all misses scores 24", function() {
		var g = new Bowling.Game;
		g.roll(10);
		g.roll(3);
		g.roll(4);
		g.roll_n_times(0, 17);
		expect(g.score()).toEqual(24);
	});

	it("12 strikes scores 300", function() {
		var g = new Bowling.Game;
		g.roll_n_times(10, 12);
		expect(g.score()).toEqual(300);
	})

});

