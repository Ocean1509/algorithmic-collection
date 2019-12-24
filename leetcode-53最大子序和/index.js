/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let arr = [];
  arr[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    arr[i] = Math.max(arr[i - 1] + nums[i], nums[i])
  }
  return Math.max.apply(null, arr)
};
console.log(maxSubArray([-2, 1]))