/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  debugger
  nums = nums.sort((a, b) => a - b)
  let len = nums.length;
  let dif = +Infinity;
  let result = []
  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = len - 1;
    if(left >= right) break;
    let total = nums[i] + nums[left] + nums[right];
    
    if(total === target) return nums[i] + nums[left] + nums[right]
    let difv = Math.min(Math.abs(total - target), dif)
    if (difv !== dif) result = [nums[i], nums[left], nums[right]]
    dif = difv;
    while(left < right) {
      if(total > target) {
        right--
      }
      if(total < target){
        left++
      }
      if(left === right) break;
      total = nums[i] + nums[left] + nums[right];
      if (total === target) return nums[i] + nums[left] + nums[right]
      difv = Math.min(Math.abs(total - target), dif)
      if (difv !== dif) result = [nums[i], nums[left], nums[right]]
      dif = difv;
    }
  }
  return result[0] + result[1] + result[2]
};

// [-1,-1,1,1,3]
// [-5,-4,0,1]
console.log(threeSumClosest([0, -4, 1, -5], 0))

// 0
// [-5, -3, -2, 2, 5, 6, 10, 21] 12

// -5, -3, 21 = 13 12
// -5, -3, 10 = 2 12
// -5, -2, 10 = 3 12
// -5, 2, 10 = 7 12
// -5, 5, 10 = 10 12
// -5, 6, 10 = 11 12

// -5, 2, 6 = 3 5
// -5, 2, 5 = 4 5


// -3, -2, 6 = 1 5
