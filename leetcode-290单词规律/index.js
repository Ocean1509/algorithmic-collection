/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let arr = str.split(' ');
  let map = {};
  let strA = [];
  if (pattern.length !== arr.length) return false
  for (let i = 0; i < arr.length; i++) {
    if (!map[pattern[i]]) {
      if (strA.indexOf(arr[i]) === -1) {
        map[pattern[i]] = arr[i];
        strA.push(arr[i])
      } else {
        return false
      }
    }
    if (map[pattern[i]] && arr[i] !== map[pattern[i]]) return false
  }
  return true
};

var pattern = "abba",
  str = "dog cat cat dog";
console.log(wordPattern(pattern, str))

// {
//   a: dog,
//   b: dog
// }