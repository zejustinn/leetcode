const assert = require('node:assert');

/** 
  Given an array of integers nums and an integer target, return indices of the two numbers such that
  they add up to target. You may assume that each input would have exactly one solution, and you may
  not use the same element twice. You can return the answer in any order.
*/
const twoSum = (nums, target) => {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        result.push(i, j)

        i = nums.length
        j = nums.length
      }
    }
  }

  return result
}

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
