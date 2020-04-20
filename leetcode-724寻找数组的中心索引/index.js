/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0;
  let total = nums.reduce((c, p) => c = c + p, 0)
  let right = total;
  for (let i = 0; i < nums.length; i++) {
    left = left + (nums[i - 1] ? nums[i - 1] : 0);
    right = right - nums[i];
    if (left === right) {
      return i
    }
  }
  return -1
};


console.log(pivotIndex([1, 7, 3, 6, 5, 6]))