var isPalindrome = function (x) {
  return x.toString().split('').reverse().join('') === x.toString();
}


isPalindrome(121)