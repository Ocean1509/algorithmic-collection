function insertSort(arr) {
  console.time('插入排序耗时：');
  for (var i = 1; i < arr.length; i++) {
    var tempNum = arr[i];
    var tempI = i
    for(var j = i - 1; j > -1; j--) {
      if(tempNum < arr[j]) {
        var temp = arr[j];
        arr[j] = tempNum;
        arr[tempI] = temp
        tempI = j
      }
    }
  }
  console.timeEnd('插入排序耗时：');
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertSort(arr))