/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var arr = [];
    var tempArr = [];
    let set = new Set();
    let len = s.length;
    let i = 0;
    while(i < len) {
        if(!set.has(s[i])) {
            tempArr.push(s[i]);
        } else {
            let idx = tempArr.indexOf(s[i]);
            for(let i = 0; i<=idx;i++) {
                let t = tempArr.shift();
                set.delete(t)
            }
            tempArr.push(s[i])
        }
        set.add(s[i]);
        if(tempArr.length > arr.length) arr = [...tempArr];
        i++
    }
    return arr.length
};


s = "pwgsgkew"
s2 = "dvdf"
console.log(lengthOfLongestSubstring(s2))