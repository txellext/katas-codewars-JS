const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Thinkful - Logic Drills: Traffic light", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(updateLight("green"), "yellow");
    assert.strictEqual(updateLight("yellow"), "red");
    assert.strictEqual(updateLight("red"), "green");
  });
    
  it("Random tests", () => {
    let colors = ["green", "yellow", "red"],
        color, expected;
    for (let i = 0; i < 10; i++) {
      color = colors[Math.floor(Math.random() * 3)];
      expected = {"green": "yellow", "yellow": "red", "red": "green"}[color]
      assert.strictEqual(updateLight(color), expected, "Testing: '" + color + "', expecting: '" + expected + "'");
    }  
  });
});