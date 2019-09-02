/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var climbStairs = function (n) {
  // if(n === 1) return 1
  // if(n === 2) return 2
  // return climbStairs(n-1) + climbStairs(n-2)
  if(n <= 2) return n;
  let l1 = 1;
  let l2 = 2;
  for (let i = 3; i <= n; i++) {
    temp = l1;
    l1 = l2;
    l2 = l2 + temp;
  }
  return l2
};
console.log(climbStairs(2))
console.log(climbStairs(3))