function selectionSort(arr) {
  console.time('选择排序耗时');
  for (var i = 0; i < arr.length; i++) {
    var minN = i;
    var minNum = arr[i]
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < minNum) {
        minN = j;
        minNum = arr[j];
      }
    }
    var temp = arr[i];
    arr[i] = arr[minN];
    arr[minN] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));
