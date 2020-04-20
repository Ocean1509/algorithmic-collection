/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1;
    if(nums[i] === nums[i-1] || nums[i] > 0) continue
    while (left < right) {
      let temp = nums[i] + nums[left] + nums[right];
      if (temp === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (temp > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return result
};

[-4, -1, -1, 0, 1, 2]
threeSum([-1, 0, 1, 2, -1, -4])