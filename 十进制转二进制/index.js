function dectobin(num) {
  var str = '';
  var arr = []
  while(num) {
    arr.push(num % 2)
    num = Math.floor(num / 2);
  }
  while(arr.length) {
    str += arr.pop()
  }
  return str
}


console.log(dectobin(10))
console.log(dectobin(100))

console.log(dectobin(1000))
console.log(dectobin(20))
console.log(dectobin(100000))
