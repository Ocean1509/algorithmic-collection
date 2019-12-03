function quickSort(arr) {
  if(arr.length <= 1) return arr
  var pivotIndex = Math.floor(arr.length / 2);
  var left = [];
  var right = [];
  var pivot = arr.splice(pivotIndex, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(quickSort(arr))


function quickSort(arr) {
  if(arr.length <= 1) return arr;
  var middle = Math.floor(arr.length / 2);
  var left = [];
  var right = [];
  var pivot = arr.splice(pivotIndex, 1)[0];
  for(var i = 0; i<arr.length; i++) {
    if(arr[i] < arr[middle]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  } 
  return quickSort(left).concat([pivot], quickSort(right))
}