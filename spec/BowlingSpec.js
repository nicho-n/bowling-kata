var Bowling = require("../Bowling");

describe("Game instantiation", function() {
	it("should be real", function() {
		expect(new Bowling.Game).not.toEqual(undefined);
	});
});
