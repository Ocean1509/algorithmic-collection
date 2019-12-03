
function bubbleSort(arr) {
  // var flag = arr.length;
  console.time('改进前冒泡排序耗时');
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      var temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp
      }
    }
  }
  console.timeEnd('改进前冒泡排序耗时');
  return arr
}


function bubbleSort1(arr) {
  var flag = arr.length;
  console.time('改进后冒泡排序耗时');
  for (var i = flag; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      var temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp
        flag = j;
      }
    }
  }
  console.timeEnd('改进后冒泡排序耗时');
  return arr
}



var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort(arr))
console.log(bubbleSort1(arr))