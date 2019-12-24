/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var flag = 1;
  for (let i = digits.length - 1; i > -1; i--) {
    let arr = (digits[i] + flag).toString().split('');
    if (arr.length > 1) {
      flag = 1;
      digits[i] = Number(arr[1])
    } else {
      flag = 0;
      digits[i] = digits[i] + 1
      return digits
    }
  }
  if(flag) digits.unshift(1)
  return digits
};


var a = [9];
console.log(plusOne(a))