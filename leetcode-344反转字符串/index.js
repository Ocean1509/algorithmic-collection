var reverseString = function (s) {
  let length = s.length; // 6
  let tL = Math.floor(length / 2);
  for (let i = 0; i < tL; i++) {
    [s[i], s[length - 1 - i]] = [s[length - 1 - i], s[i]]
  }
  return s
};
console.log(reverseString(
  ["h", "e", "l", "d", "o", 'f', "d"]))

  // 双指针写法
  var reverseString1 = function(s) {
    var left = 0;
    var right = s.length - 1;
    while(left < right) {
      [s[left], s[right]] = [s[right--], s[left++]]
    }
    return s
  }

