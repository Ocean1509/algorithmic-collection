/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 解法一
var rotate = function (nums, k) {
  while (k) {
    nums.unshift(nums.pop());
    k--
  }
};
// 解法2
var rotate1 = function (nums, k) {
  let ret = nums.splice(nums.length - k)
  for (let i = ret.length - 1; i >= 0; i--) {
    nums.unshift(ret[i])
  }
  console.log(nums)
}
rotate1([1, 2, 3, 4, 5, 6, 7], 3)