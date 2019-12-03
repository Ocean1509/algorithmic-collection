function passNumber(arr, num) {
  while (arr.length > 1) {
    for (var i = 0; i < num - 1; i++) {
      arr.push(arr.shift())
    }
    arr.shift()
  }
  return arr[0]
}


console.log(passNumber([1,2,3,4,5,6,7,8,9,10], 5))