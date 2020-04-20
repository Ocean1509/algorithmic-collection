/**
 * @param {number[]} seats
 * @return {number}
 */
// var maxDistToClosest = function (seats) {
//   let a = []
//   for (let i = 0; i < seats.length; i++) {
//     if (seats[i] > 0) a.push(i)
//   }
//   a.push(seats.length)
//   a.unshift(-1)
//   let max = 0;
//   console.log(a)
//   for (let i = 0; i < a.length; i++) {
//     max = Math.max(max, a[i + 1] ? Math.floor((a[i + 1] - a[i]) / 2): 0)
//     if ((i === a.length - 1 && Math.floor((a[i] - a[i - 1]) / 2) === max) || i === 0 && Math.floor((a[i+1] - a[i]) / 2) === max) {
//       max++
//     }
//   }
//   return max
// };

// 思路，从空位出发，向左向右走，遇到1时，为最小距离，用这个距离和保留的最大距离比较
var maxDistToClosest = function (seats) {
  let max = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] < 1) {
      let left = i - 1;
      let right = i + 1;
      while (seats[left] !== 1 && seats[right] !== 1) {
        left--;
        right++
      }
      max = Math.max(right - i, max)
    }
  }
  return max;
}
// [1,0,0,0,1]
console.log(maxDistToClosest([1, 0, 0, 1]))
// [1, 0, 0, 0]
// [1, 0, 0, 0, 1, 0, 1] // 2
