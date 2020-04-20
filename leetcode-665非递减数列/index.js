/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let temp = nums[0]
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < temp) {
      count++
      temp = nums[i]
    }
    if (nums[i + 1] && nums[i + 1] < temp) {
      count++
      if (nums[i + 1] < temp) {
        nums[i + 1] = nums[i]
      } else {
        nums[i] = temp;
      }
    }
    temp = nums[i]
    if (count > 1) return false
  }
  return true
};

console.log(checkPossibility([3, 4, 2, 3]))
console.log(checkPossibility([4, 2, 3]))
console.log(checkPossibility([4, 2, 1]))
console.log(checkPossibility([-1, 4, 2, 3]))
console.log(checkPossibility([1, 5, 4, 6, 7, 10, 8, 9]))
console.log(checkPossibility([2, 3, 3, 2, 4]))
console.log(checkPossibility([1, 2, 4, 5, 3]))