// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Source: https://leetcode.com/problems/add-digits/

const addDigits = (num) => {
  // If the number is less than 10, return the number
  if (num < 10) {
    return num;
  }
  // Change the number into an array
  const arr = num.toString().split("");
  let sum = 0;
  // Get the sum of the array
  for (let el of arr) {
    sum += parseInt(el);
  }
  // Call the function again if the number is not less than 10
  return addDigits(sum);
};

module.exports = addDigits;
