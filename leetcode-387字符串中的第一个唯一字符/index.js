/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let substr = s.substring(0, i) + s.substring(i + 1);
    if (substr.indexOf(s[i]) === -1) return i
  }
  return -1
};

// 效率更高
var firstUniqChar1 = function (s) {
  var map = new Map();
  for (let i = 0; i < s.length; i++) {
    if(map.has(s[i])) map.set(s[i], map.get(s[i]) + 1)
    else map.set(s[i], 0)
  }
  for(let item of map.entries()) {
    if(!item[1]) return s.indexOf(item[0])
  }
  return -1
}
console.log(firstUniqChar("cc"))