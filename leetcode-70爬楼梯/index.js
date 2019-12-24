/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var climbStairs = function (n) {
  let arr = []
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
};
console.log(climbStairs(2))
console.log(climbStairs(4))