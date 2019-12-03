/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min = prices[0]; // 最小价格
  var max = 0; // 收益差值
  for (var i = 0; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min); // 收益差值
    min = Math.min(prices[i], min) // 最小价格
  }
  return max
};


maxProfit([7, 1, 5, 3, 6, 4])