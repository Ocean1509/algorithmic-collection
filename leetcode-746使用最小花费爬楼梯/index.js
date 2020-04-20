/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i <= n; i++) {
    if (i == n) {
      dp[i] = Math.min(dp[i - 2], dp[i - 1]);
    } else {
      dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
    }
  }
  return dp[n];
};
