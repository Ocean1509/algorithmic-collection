// 解法1
// var lengthOfLastWord = function (s) {
//   s = s.replace(/\s+$/g, '');
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     arr.push(s[i])
//   }
//   let idx = 0;
//   while (arr.length && arr[arr.length - 1] !== ' ') {
//     idx++;
//     arr.pop();
//   }
//   return idx
// };

// 解法2
var lengthOfLastWord = function (s) {
  s = s.replace(/\s+$/g, '');
  return s.split(' ').pop().length
};
console.log(lengthOfLastWord(" "))