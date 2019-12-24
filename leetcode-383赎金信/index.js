/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    let idx = magazine.indexOf(ransomNote[i])
    if (idx === -1) return false
    console.log(magazine)
    console.log(idx)
    magazine = magazine.replace(ransomNote[i], '')
    console.log(magazine)
  }
  return true
};



// console.log(canConstruct("a", "b"))
// console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))