const assert = require("chai").assert;
const twoSum = require("../questions/twoSum.js");

describe("twoSum", () => {
  it("returns [0, 1] given [2, 7, 11, 15] with a target of 9", () => {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
  it("returns [1, 2] given [3, 2, 4] with a target of 6", () => {
    assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
  });
  it("returns [0, 1] given [3, 3] with a target of 6", () => {
    assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  });
});
