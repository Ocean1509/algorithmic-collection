/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if(!nums.length) return 0
  let arr = [];
  arr[0] = nums[0];
  arr[1] = Math.max(nums[1], nums[0])
  for (let i = 2; i < nums.length; i++) {
    arr[i] = Math.max(arr[i - 2] + nums[i], arr[i -1])
  }
  return arr[nums.length - 1]
};

console.log(rob([2, 7, 9, 3, 1]))