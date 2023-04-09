/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      const firstNumber = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
          const secondNumber = nums[j];
          if ( target == firstNumber + secondNumber ) {
              return [i, j];
          }
      }
  }
};