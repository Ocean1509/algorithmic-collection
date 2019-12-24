/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   var min = prices[0]; // 最小价格
//   var max = 0; // 收益差值
//   for (var i = 0; i < prices.length; i++) {
//     max = Math.max(max, prices[i] - min); // 收益差值
//     min = Math.min(prices[i], min) // 最小价格
//   }
//   return max
// };
var maxProfit = function (prices) {
  if(prices.length < 1) return 0
  var arr = [];
  arr[0] = 0;
  var min = Math.min(prices[1], prices[0])
  for (let i = 1; i < prices.length; i++) {
    arr[i] = Math.max(prices[i] - min, arr[i - 1], 0);
    min = Math.min(min, prices[i])
  }
  return arr.pop()
}

console.log(maxProfit([7, 6]))