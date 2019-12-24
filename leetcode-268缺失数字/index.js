/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   var sort = function (arr) {
//     if (arr.length <= 1) return arr
//     let middle = Math.floor(arr.length / 2);
//     let left = []
//     let right = [];
//     let middleNum = arr.splice(middle, 1)[0];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > middleNum) {
//         right.push(arr[i])
//       } else {
//         left.push(arr[i])
//       }
//     }
//     return sort(left).concat([middleNum], sort(right))
//   }
//   let sortArr = sort(nums);
//   for (let i = 0; i < sortArr.length; i++) {
//     if ((sortArr[i] + 1 !== sortArr[i + 1]) && sortArr[i + 1]) return sortArr[i] + 1
//   }
//   return sortArr[0] - 1 > -1 ? sortArr[0] - 1 : sortArr[sortArr.length - 1] + 1
// };

var missingNumber = function(nums) {
  let max = Math.max(...nums)
  let min = Math.min(...nums);
  let all = (max + min) * (max - min + 1) / 2;
  let actualA = 0;
  for(let i = 0; i < nums.length; i++) {
    actualA += nums[i]
  }
  return all - actualA ? all - actualA : min - 1 > -1 ? min - 1 : max + 1
}
console.log(missingNumber([1, 0]))