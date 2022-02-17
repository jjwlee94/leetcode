// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Source: https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  const previousValues = {};
  // Loop through all numbers
  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    const secondNum = target - firstNum;
    const j = previousValues[secondNum];
    if (j != null) {
      return [j, i];
    } else {
      previousValues[firstNum] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

module.exports = twoSum;
