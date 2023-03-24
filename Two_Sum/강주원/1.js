/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let newTarget = 0;

  for (let i = 0; i < nums.length; i++) {
      newTarget = target - nums[i];
      if (nums.includes(newTarget))

      if (nums.lastIndexOf(newTarget) > i)

      return [i, nums.lastIndexOf(newTarget)];
  };
};