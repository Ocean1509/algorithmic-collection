/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    if (s.indexOf(t[i]) !== -1) s = s.substring(0, s.indexOf(t[i])) + s.substring(s.indexOf(t[i]) + 1);
    else return t[i]
  }
};

var s = "a",
  t = "aa";
console.log(findTheDifference(s, t))

// 'a'
// 'aa'