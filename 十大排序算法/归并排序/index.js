function mergeSortRec(arr){
  var length = arr.length
  if (length === 1) return arr
  var middle = Math.floor(length / 2);
  var left = arr.slice(0, middle)
  var right = arr.slice(middle, length)
  return merge(mergeSortRec(left), mergeSortRec(right))
}

function merge(left, right) {
  var result = [];
  var il = 0;
  var ir = 0;
  while(il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }
  while(il < left.length) {
    result.push(left[il++])
  }
  while (ir < right.length) {
    result.push(right[ir++])
  }
  return result;
}


console.log(mergeSortRec([4,3,2,1]))