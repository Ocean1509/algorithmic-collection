/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num1.length < num2.length)[num1, num2] = [num2, num1];
  let next = 0
  let arr = []
  num1 = num1.split('').reverse()
  num2 = num2.split('').reverse()
  console.log(num1, num2)
  for (let i = 0; i < num1.length; i++) {
    console.log(next, Number(num1[i]), Number(num2[i] || 0))
    let t = next + Number(num1[i]) + Number(num2[i] || 0);
    next = Math.floor(t / 10);
    arr.unshift(t % 10)
    console.log(arr, next)
  }
  if (next) arr.unshift(next)
  return arr.join('')
};

console.log(addStrings('123', '456'))