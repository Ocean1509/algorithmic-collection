/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]) > 0) {
      if ((k > 0 && map.has(nums[i] + k)) || (k === 0 && map.get(nums[i]) > 1))
        count++;
      map.set(nums[i], -1);
    }
  }
  return count
};

console.log(findPairs([1, 3, 1, 5, 4], 0))
// console.log(findPairs([3, 1, 4, 1, 5], 2))
// console.log(findPairs([1, 1, 1, 1, 1], 0))[1, 1, 3, 4, 5] 2[1]
// // [1, 3, 4, 5] // 8
// // [1, 3, 5, 4, 6, 7] // 6 

// [1, 3, 4, 5] 1
//   [1, 1, 3, 3, 4, 4, 5, 5]

// {
//   3: 0,
//   1: 2,
//   4: 1,
//   5: 1
// }

// count++[1, 1, 3, 4, 5] // 2