/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let sum = 0;
  for (let k = i; k <= j; k++) {
    sum += this.nums[k];
  }
  return sum;

};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums)
console.log(obj.sumRange(0, 2))
console.log(obj.sumRange(2, 5))

console.log(obj.sumRange(0, 5))
