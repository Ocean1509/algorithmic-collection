/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   const len = s.length;
//   const dp = Array.from(new Array(len), () => new Array(len).fill(false))
//   console.log(dp)
//   let res = ''
//   // 第一层倒着循环，才能保证 dp[i+1][j-1] 已经存在
//   for (let i = len - 1; i >= 0; i--) {
//     for (let j = i; j < len; j++) {
//       // 判断i 和 j下标的字符串相等时
//       //如果间隔小于等于2，则代表length为 3以内的子字符串，则一定是回文子串
//       //如果间隔 大于2时，则需要判断 dp[i+1][j-1] 是否为回文子串
//       dp[i][j] = s.charAt(i) === s.charAt(j) && (j - i <= 2 || dp[i + 1][j - 1])
//       // 判断符合回文的最大子字符串
//       if (dp[i][j] && j - i >= res.length) {
//         res = s.slice(i, j + 1)
//       }
//     }
//   }
//   console.log(dp)
//   return res;
// };

// 暴力法
// var longestPalindrome = function (s) {
//   var result = "";
//   for (var i = 0; i < s.length; i++) {
//     for(var j = i; j < s.length;j++) {
//       var str = s.slice(i, j + 1);
//       console.log(i, j, str)
//       if(isPalindrome(str)) {
//         result = str.length > result.length ? str : result;
//       }
//     }
//   }
//   return result
// }

// var isPalindrome = function(s) {
//   return s.split('').reverse().join('') === s
// }
// console.log(longestPalindrome("baba"))


// 动态规划
var longestPalindrome = function (s) {
  let len = s.length;
  let dp = Array.from(new Array(len), () => new Array(len).fill(false))
  let result = ''
  for (let i = len - 1; i > -1; i--) {
    for (let j = i; j < s.length; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
      dp[i][j] && s.slice(i, j + 1).length > result.length ? result = s.slice(i, j+1) : result
    }
  }
  return result
}

longestPalindrome('baba')

// 4, 4
// 4, 3


// [3, 3] true
// [2, 2] true
// [2, 3] 