/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if(!s.replace(/\s/g, '')) return true
  let str = s.match(/\d|\w+/g).join('').toLowerCase()
  return str.split('').reverse().join('') === str
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))