/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let ret = target - nums[i];
    let idx = nums.indexOf(ret);
    if (idx !== -1 && idx !== i) {
      return Array.of(i, idx)
    }
  }
  return []
};

console.log(twoSum([2, 7, 11, 15], 18))