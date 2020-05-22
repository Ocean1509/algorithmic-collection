/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (true) {
    if(left >= right) return []
    let total = nums[left] + nums[right]
    if (total === target) {
      return [nums[left], nums[right]]
    }
    if (total < target) {
      left++
    }
    if(total > target) {
      right--
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))