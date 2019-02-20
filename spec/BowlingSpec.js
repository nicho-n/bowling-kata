var Bowling = require("../Bowling");

describe("Game instantiation", function() {
	it("should be real", function() {
		expect(new Bowling.Game).not.toEqual(undefined);
	});

	it("Gutter game should be zero", function() {
		var g = new Bowling.Game;
			g.roll(0);
			expect(g.score).toEqual(0);
	});
});

