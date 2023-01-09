const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function() {
  it("Testing for fixed tests", () => {
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);
  });
});

describe("Random Tests", function() {
  
  let ans = (x) => parseInt(x / 0.036);
  
  it("Testing for 500 random tests", () => {
    for (let i = 0; i < 500; ++i) {
      let s = Math.random() + parseInt(Math.random()*4);
      assert.strictEqual(cockroachSpeed(s), ans(s), `Testing for s = ${s}`);
    }
  });
});