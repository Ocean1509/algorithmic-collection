/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  var newA = [];
  for(var i = 0; i<nums.length; i++) {
    for(var j = 0; j < nums[i].length; j++) {
      newA.push(nums[i][j])
    }
  }
  if(newA.length !== r * c) return nums
  var newAm = []
  var wrapAm = []
  for(var k = 0; k < newA.length; k++) {
    newAm.push(newA[k]);
    if(newAm.length === c) {
      wrapAm.push(newAm)
      newAm = []
    }
  }
  return wrapAm
};


console.log(matrixReshape([
  [1, 2],
  [3, 4]
], 1, 4))