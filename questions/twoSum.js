// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Source: https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  // Set previous values hash
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    // Let the first number equal to an element in i
    const firstNum = nums[i];
    // Let the second number equal to the difference in the target and the first number
    const secondNum = target - firstNum;
    // Let j be the second index and see if the object has the key needed for the second number
    const j = previousValues[secondNum];
    if (j != null) {
      return [j, i];
    } else {
      previousValues[firstNum] = i;
    }
  }
};

module.exports = twoSum;
