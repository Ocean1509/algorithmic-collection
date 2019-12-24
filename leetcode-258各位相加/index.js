/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let arr = num.toString().split('');
  if(arr.length === 1) return arr[0];
  return addDigits(arr.reduce((a, b) => a = Number(a) + Number(b), 0))
};