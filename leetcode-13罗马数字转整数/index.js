var romanToInt = function (s) {
  var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  var arr = s.split('');
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    var curr = map[arr[i]]
    var next = map[arr[i + 1]];
    if(!next || curr >= next) {
      sum += curr;
    } else {
      sum -= curr
    }
  }
  return sum
};