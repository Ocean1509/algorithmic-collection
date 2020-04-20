/**
 * @param {number} N
 * @return {number}
 */
// var rotatedDigits = function (N) {
//   let digits = new Set([2,5,6,9])
//   let nums = 0;
//   for (let i = 1; i <= N; i++) {
//     let stringI = i.toString();
//     for (let j = 0; j < stringI.length; j++) {
//       if(digits.has(Number(stringI[j]))) {
//         nums++
//       }
//     }
//   }
//   return nums
// };

var rotatedDigits = function (N) {
  let ans = 0;
  let reg1 = new RegExp("3|4|7");
  let reg2 = new RegExp("2|5|6|9");
  let arr = []
  for (let i = 1; i <= N; i++) {
    if (!reg1.test(i) && reg2.test(i)) {
      ans++;
      arr.push(i)
    }
  }
  console.log(arr)
  return ans;
};

// console.log(rotatedDigits(857))
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// var a = /^([a-z]+(\.)[a-z]*)@([a-z.]+[a-z])$/g
var str = 'ddf.@dsf.com'

str.replace(a, function (b, c, d) {
  console.log(c, d)
  return d
})