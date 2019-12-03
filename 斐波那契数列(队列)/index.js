function fibonacci(n) {
  var newArr = new Array(n + 1).fill(null)
  console.log(newArr)
  newArr[1] = 1;
  newArr[2] = 1
  for (var i = 2; i <= n; i++) {
    console.log(i)
    newArr[i] = newArr[i - 1] + newArr[i - 2]
  }
  return newArr[n]
}
console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(7))