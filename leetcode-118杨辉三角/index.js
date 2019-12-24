/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var arr = [];
  for (let i = 0; i < numRows; i++) {
    var rowA = []
    for(let j = 0; j < i + 1; j++) {
      if(i === 0 && j === 0) rowA.push(1);
      else {
        let left = (i - 1) > -1 && j - 1 > -1 ? arr[i - 1][j - 1] || 0 : 0
        let right = (i - 1) > -1 ? arr[i - 1][j] || 0 : 0
        rowA.push(left + right);
      }
    }
    arr.push(rowA)
  }
  return arr;
};

console.log(generate(5))
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]