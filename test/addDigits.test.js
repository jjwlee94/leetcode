const assert = require("chai").assert;
const addDigits = require("../questions/addDigits.js");

describe("addDigits", () => {
  it("returns 2 given num = 38", () => {
    assert.strictEqual(addDigits(38), 2);
  });
  it("returns 4 given num = 121", () => {
    assert.strictEqual(addDigits(121), 4);
  });
  it("returns 4 given num = 463", () => {
    assert.strictEqual(addDigits(463), 4);
  });
});
