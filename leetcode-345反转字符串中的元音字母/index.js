/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var vowel = ['a', 'e', 'i', 'o', 'u']
  s = s.split('')
  let left = 0;
  let right = s.length - 1
  while(left < right) {
    if (vowel.indexOf(s[left]) == -1) left++;
    if (vowel.indexOf(s[right]) == -1) right--;
    if (vowel.indexOf(s[right]) !== -1 && vowel.indexOf(s[left]) !== -1) {
      let temp = s[right]
      s[right] = s[left]
      s[left] = temp;
      left++;
      right--
    }
  }
  return s.join('')
};
console.log(reverseVowels("leetcode"))