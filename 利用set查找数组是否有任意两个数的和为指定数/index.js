var arr1 = [3, 5, 6, 2, 62, 3, 4];
var arr2 = [2, 5, 23, 2, 66];
var num = 6


function findNum(arr, num) {
  let uniqueA = new Set();
  uniqueA.add(num - arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if(uniqueA.has(arr[i])) return true
    uniqueA.add(num - arr[i]);
  }
  return false
}

console.log(findNum(arr1, num))
console.log(findNum(arr2, num))


// 简洁版本
const findSum = (arr, sum) =>
  arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));