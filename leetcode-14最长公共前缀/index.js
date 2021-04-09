/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ""
  let fll = strs[0].length;
  let idx = 0;
  while(idx < fll) {
    let temp = strs[0][idx]
    for (let index = 1; index < strs.length; index++) {
      if (temp !== strs[index][idx]) return strs[0].slice(0, idx);
    }
    idx++
  }
  return strs[0].slice(0, idx)
};



console.log(longestCommonPrefix(["flower", "flow", "flight"]))