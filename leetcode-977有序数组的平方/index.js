/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  return A.map(a => a*a).sort((a, b) => a - b)
};
